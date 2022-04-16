import React, { useEffect, useMemo, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import parse from 'autosuggest-highlight/parse';
import throttle from 'lodash/throttle';
import * as S from '@/styles/components/AutoCompleteInput';
import * as ActionTypes from '../redux-store/Actions/actionTypes';
import { useDispatch } from 'react-redux';
import { IAddress } from '@/redux-store/Reducers/formReducer';

const autocompleteService = { current: null };
const GOOGLE_MAPS_API_KEY = 'AIzaSyCI-I0WAZ1nWMsM2oqP8tucNBC94zlTURY';

function loadScript(src: string, position: HTMLElement | null, id: string) {
  if (!position) {
    return;
  }

  const script = document.createElement('script');
  script.setAttribute('async', '');
  script.setAttribute('id', id);
  script.src = src;
  position.appendChild(script);
}

interface MainTextMatchedSubstrings {
  offset: number;
  length: number;
}
interface StructuredFormatting {
  main_text: string;
  secondary_text: string;
  main_text_matched_substrings: readonly MainTextMatchedSubstrings[];
}
interface PlaceType {
  description: string;
  structured_formatting: StructuredFormatting;
  address: IAddress;
}

interface AutoCompleteInputProps {
  title: string;
  placeholder?: string;
}

const AutoCompleteInput: React.FC<AutoCompleteInputProps> = ({
  title,
  placeholder,
}) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState<PlaceType | null>(null);
  const [inputValue, setInputValue] = useState('');
  const loaded = useRef(false);
  const [options, setOptions] = useState<readonly PlaceType[]>([]);
  const mockedOptions = [
    {
      description: 'São Paulo',
      structured_formatting: {
        main_text: 'São Paulo',
        secondary_text: 'São Paulo, BR',
        main_text_matched_substrings: [
          { offset: 0, length: 4 },
          { offset: 5, length: 2 },
        ],
      },
      address: {
        coordinates: [-23.5507263, -46.6388781],
        street: 'Rua São Paulo',
        number: '100',
        city: 'São Paulo',
        state: 'São Paulo',
        country: 'Brasil',
        postal_code: '01310-000',
      },
    },
    {
      description: 'Rio de Janeiro',
      structured_formatting: {
        main_text: 'Rio de Janeiro',
        secondary_text: 'Rio de Janeiro, BR',
        main_text_matched_substrings: [
          { offset: 0, length: 4 },
          { offset: 5, length: 2 },
        ],
      },
      address: {
        coordinates: [-22.9084, -43.1729],
        street: 'Rua Rio de Janeiro',
        number: '100',
        city: 'Rio de Janeiro',
        state: 'Rio de Janeiro',
        country: 'Brasil',
        postal_code: '20010-000',
      },
    },
    {
      description: 'Paris',
      structured_formatting: {
        main_text: 'Paris',
        secondary_text: 'Paris, FR',
        main_text_matched_substrings: [
          { offset: 0, length: 5 },
          { offset: 6, length: 2 },
        ],
      },
      address: {
        coordinates: [48.856614, 2.3522219],
        street: 'Rue de Paris',
        number: '100',
        city: 'Paris',
        state: 'Paris',
        country: 'France',
        postal_code: '75000',
      },
    },
    {
      description: 'Roma',
      structured_formatting: {
        main_text: 'Roma',
        secondary_text: 'Roma, IT',
        main_text_matched_substrings: [
          { offset: 0, length: 4 },
          { offset: 5, length: 2 },
        ],
      },
      address: {
        coordinates: [41.9027835, 12.4963655],
        street: 'Via Roma',
        number: '100',
        city: 'Roma',
        state: 'Roma',
        country: 'Italia',
        postal_code: '00100',
      },
    },
  ];

  if (typeof window !== 'undefined' && !loaded.current) {
    if (!document.querySelector('#google-maps')) {
      loadScript(
        `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`,
        document.querySelector('head'),
        'google-maps',
      );
    }

    loaded.current = true;
  }

  const fetch = useMemo(
    () =>
      throttle(
        (
          request: { input: string },
          callback: (results?: readonly PlaceType[]) => void,
        ) => {
          (autocompleteService.current as any).getPlacePredictions(
            request,
            callback,
          );
        },
        200,
      ),
    [],
  );

  useEffect(() => {
    let active = true;

    if (!autocompleteService.current && (window as any).google) {
      autocompleteService.current = new (
        window as any
      ).google.maps.places.AutocompleteService();
    }
    if (!autocompleteService.current) {
      return undefined;
    }

    if (inputValue === '') {
      setOptions(value ? [value] : []);
      return undefined;
    }

    fetch({ input: inputValue }, (results?: readonly PlaceType[]) => {
      if (active) {
        let newOptions: readonly PlaceType[] = [];

        if (value) {
          newOptions = [value];
        }

        if (results) {
          newOptions = [...newOptions, ...results];
        }

        setOptions(newOptions);
      }
    });

    return () => {
      active = false;
    };
  }, [value, inputValue, fetch]);

  return (
    <S.Container>
      <label>{title}</label>
      <Autocomplete
        getOptionLabel={option =>
          typeof option === 'string' ? option : option.description
        }
        options={mockedOptions}
        autoComplete
        includeInputInList
        filterSelectedOptions
        value={value}
        onChange={(event: any, newValue: PlaceType | null) => {
          setOptions(newValue ? [newValue, ...options] : options);
          setValue(newValue);
          dispatch({
            type: ActionTypes.SET_BULLET_POINT,
            payload: newValue?.address,
          });
        }}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        renderInput={params => (
          <TextField {...params} fullWidth placeholder={placeholder} />
        )}
        renderOption={(props, option) => {
          const matches =
            option.structured_formatting.main_text_matched_substrings;
          const parts = parse(
            option.structured_formatting.main_text,
            matches.map((match: any) => [
              match.offset,
              match.offset + match.length,
            ]),
          );

          return (
            <li {...props}>
              <Grid container alignItems="center">
                <Grid item>
                  <Box
                    component={LocationOnIcon}
                    sx={{ color: 'text.secondary', mr: 2 }}
                  />
                </Grid>
                <Grid item xs>
                  {parts.map((part, index) => (
                    <span
                      key={index}
                      style={{
                        fontWeight: part.highlight ? 700 : 400,
                      }}
                    >
                      {part.text}
                    </span>
                  ))}
                  <Typography variant="body2" color="text.secondary">
                    {option.structured_formatting.secondary_text}
                  </Typography>
                </Grid>
              </Grid>
            </li>
          );
        }}
      />
    </S.Container>
  );
};

export default AutoCompleteInput;
