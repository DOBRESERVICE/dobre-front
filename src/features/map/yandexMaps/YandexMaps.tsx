import { Map, YMaps } from '@pbe/react-yandex-maps';

export const YandexMaps = () => {
  return (
    <YMaps query={{ apikey: process.env.NEXT_PUBLIC_YANDEX_MAPS_API_KEY }}>
      <Map
        width={'100%'}
        height={240}
        style={{ borderRadius: '14px', overflow: 'hidden', width: '100%', height: '240px' }}
        defaultState={{ center: [53.902284, 27.561831], zoom: 9 }}
      />
    </YMaps>
  );
};
