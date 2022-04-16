import styled from 'styled-components';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  FeatureGroup,
} from 'react-leaflet';

export const Container = styled.div`
  position: relative;

  height: 342px;
  border-radius: 4px;
  margin: 24px 0;

  > div {
    height: 100%;
    border-radius: 4px;
  }

  .leaflet-draw:not(:first-child) {
    display: none !important;
  }
`;

export const Controls = styled.aside`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1000;
  border-radius: 4px;
  border: 2px solid rgba(0, 0, 0, 0.2);

  > button {
    width: 30px;
    height: 30px;
    border: 0;
    border-radius: 4px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    background-color: ${props => props.theme.g5};
    border-bottom: 1px solid #ccc;
    font: bold 18px 'Lucida Console', Monaco, monospace;
    font-size: 22px;
    text-indent: 1px;

    &:hover {
      background-color: #f4f4f4;
    }

    &:first-child {
      border-radius: 4px;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
`;

export { MapContainer, TileLayer, Marker, Popup, FeatureGroup };
