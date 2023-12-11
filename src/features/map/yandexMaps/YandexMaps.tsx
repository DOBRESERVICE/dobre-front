import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';
import { FC } from 'react';

interface YandexMapsProps {
  lan: number;
  lon: number;
}

export const YandexMaps: FC<YandexMapsProps> = ({ lon, lan }) => {
  return (
    <YMaps query={{ apikey: process.env.NEXT_PUBLIC_YANDEX_MAPS_API_KEY }}>
      <Map
        width='100%'
        height={240}
        style={{ borderRadius: '14px', overflow: 'hidden', width: '100%', height: '240px' }}
        defaultState={{ center: [53.902284, 27.561831], zoom: 9 }}
      >
        <Placemark geometry={[lan, lon]} />
      </Map>
    </YMaps>
  );
};
