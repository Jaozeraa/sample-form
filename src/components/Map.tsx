import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet-draw';
import { useMap } from 'react-leaflet';

import * as S from '@/styles/components/Map';
import useReduxState from '@/hooks/useReduxState';
import { useDispatch } from 'react-redux';
import * as ActionTypes from '../redux-store/Actions/actionTypes';

const Map: React.FC = () => {
  const { bulletPoint } = useReduxState().form;
  const mapRef = useRef<any>(false);

  useEffect(() => {
    if (bulletPoint?.coordinates && mapRef.current) {
      mapRef.current.setView(bulletPoint.coordinates, 14);
    }
  }, [bulletPoint?.coordinates, mapRef]);

  return (
    <S.Container>
      <S.MapContainer ref={mapRef} center={[-23.549318, -46.6344052]} zoom={14}>
        <S.TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {bulletPoint?.coordinates && (
          <S.Marker position={bulletPoint?.coordinates}></S.Marker>
        )}
        <MapControls />
      </S.MapContainer>
    </S.Container>
  );
};

const MapControls: React.FC = () => {
  const map = useMap();
  const dispatch = useDispatch();
  const { mapAreas } = useReduxState().form;

  useEffect(() => {
    const editableLayers = new L.FeatureGroup();

    map.addLayer(editableLayers);

    const drawControl = new L.Control.Draw({
      position: 'topright',
      draw: {
        circle: false,
        polyline: false,
        marker: false,
      },
    });

    map.addControl(drawControl);
  }, []);

  useEffect(() => {
    function getLayerType(layer: any) {
      if (layer.getLatLngs) {
        return 'polygon';
      } else {
        return 'circle';
      }
    }

    map.on(L.Draw.Event.CREATED, event => {
      const { layer } = event;

      const type = getLayerType(layer);
      const layerObj: any = {
        type,
      };

      if (type === 'circle') {
        layerObj.coords = layer.getLatLng();
        layerObj.radius = layer.getRadius();
      } else {
        layerObj.coords = layer.getLatLngs();
      }

      dispatch({
        type: ActionTypes.SET_MAP_AREAS,
        payload: [...mapAreas, layerObj],
      });

      map.addLayer(layer);
    });

    return () => {
      map.off();
    };
  }, [mapAreas]);

  return null;
};

export default Map;
