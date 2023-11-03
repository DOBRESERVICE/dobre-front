import { Map, YMaps } from '@pbe/react-yandex-maps';

export const YandexMaps = () => {
  return (
    <YMaps query={{ apikey: 'ae2768f5-53c2-42c8-85c8-72bf0933808b' }}>
      <Map
        width={'100%'}
        height={240}
        style={{ borderRadius: '14px', overflow: 'hidden', width: '100%', height: '240px' }}
        defaultState={{ center: [53.902284, 27.561831], zoom: 9 }}
      />
    </YMaps>
  );
};
