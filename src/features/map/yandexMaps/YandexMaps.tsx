import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';
import { FC, useEffect, useState } from 'react';
import styles from './Yandexmaps.module.scss';
import Image from 'next/image';
import geolocationIcon from '../../../shared/image/geolocation.svg';
import { Button } from '@mui/material';
import { customCategoriesButton } from '@/shared/styles/buttonStyles';
import { rightBlueArrow, sendMessageIcon } from '@/shared/image';
import axios from 'axios';
interface YandexMapsProps {
  lan: number;
  lon: number;
}

export const YandexMaps: FC<YandexMapsProps> = ({ lon, lan }) => {
  const [address, setAddress] = useState('');

  useEffect(() => {
    const fetchAddress = async () => {
      try {
        const { data } = await axios.get(
          `https://geocode-maps.yandex.ru/1.x/?apikey=${process.env.NEXT_PUBLIC_YANDEX_MAPS_API_KEY}&format=json&geocode=${lon},${lan}&lang=ru_RU`
        );

        const featureMember = data.response.GeoObjectCollection.featureMember[0];
        const fullAddress =
          featureMember.GeoObject.metaDataProperty.GeocoderMetaData.AddressDetails.Country.AddressLine;
        setAddress(fullAddress);
      } catch (error) {
        console.error('Error fetching address:', error);
      }
    };

    fetchAddress();
  }, [lon, lan]);
  return (
    <div className={styles.mapWrapper}>
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
      <div className={styles.mapContent}>
        <div className={styles.addressContent}>
          <Image src={geolocationIcon} alt='geolocation' />
          <p>
            Адрес: <span>{address}</span>
          </p>
        </div>
        <Button disableRipple variant='contained' size='medium' sx={customCategoriesButton}>
          <Image src={rightBlueArrow} alt='message' />
          Маршрут
        </Button>
      </div>
    </div>
  );
};
