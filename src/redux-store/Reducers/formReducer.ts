import { LatLngExpression } from 'leaflet';
import {
  SET_ERROR,
  UNSET_ERROR,
  SET_FORM,
  SET_BULLET_POINT,
  SET_MAP_AREAS,
  DECREASE_LOADING,
  INCREASE_LOADING,
} from '../Actions/actionTypes';

export interface FormState {
  error: Error | null;
  form: IForm | null;
  bulletPoint: IAddress | null;
  mapAreas: IMapArea[];
  loading: boolean;
}

export interface IAddress {
  city: string | null;
  state: string | null;
  street: string | null;
  neighborhood: string | null;
  postalCode: string | null;
  coordinates: LatLngExpression | null;
}

export interface IForm {
  name: string | null;
  cpf: string | null;
  email: string | null;
  message_content: string | null;
}

export interface IMapArea {
  type: string;
  coords: LatLngExpression[] | LatLngExpression;
  radius: number;
}

export const initialState: FormState = {
  error: null,
  form: null,
  bulletPoint: null,
  mapAreas: [],
  loading: false,
};

const formReducer = (state = initialState, action: any) => {
  const { payload } = action;
  switch (action.type) {
    case SET_MAP_AREAS:
      return {
        ...state,
        mapAreas: payload,
      };
    case SET_BULLET_POINT:
      return {
        ...state,
        bulletPoint: payload,
      };
    case SET_FORM:
      return {
        ...state,
        form: payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: payload as Error,
      };
    case UNSET_ERROR:
      return {
        ...state,
        error: null,
      };
    case INCREASE_LOADING:
      return {
        ...state,
        loading: true,
      };
    case DECREASE_LOADING:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default formReducer;
