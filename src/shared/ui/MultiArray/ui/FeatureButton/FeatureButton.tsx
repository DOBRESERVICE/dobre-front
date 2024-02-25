'use client';
import classNames from 'classnames';
import { usePathname, useSearchParams } from 'next/navigation';
import { FC, useEffect, useState } from 'react';

import styles from './FeatureButton.module.scss';

import { useAuthData } from '@/shared/context/authContext';

interface FeatureButtonProps {
  value: string;
  search_tr_name: string;
}
export const FeatureButton: FC<FeatureButtonProps> = ({ value, search_tr_name }) => {
  const { isPending, startTransition } = useAuthData();
  const [isActive, setIsActive] = useState(false);
  const searchParams = useSearchParams();
  // const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    const allValues = params.getAll(search_tr_name);
    setIsActive(allValues.includes(value));
  }, [search_tr_name, searchParams, value]);
  const toggleFeature = () => {
    setIsActive(!isActive);
    const params = new URLSearchParams(searchParams);
    const allValues = params.getAll(search_tr_name);
    startTransition(() => {
      if (allValues.includes(value)) {
        params.delete(search_tr_name, value);
      } else {
        params.append(search_tr_name, value);
      }
      history.replaceState(null, '', `${pathname}?${params.toString()}`);
    });
  };
  return (
    <button
      className={classNames(styles.featureButton, {
        [styles.active]: isActive,
      })}
      onClick={toggleFeature}
      disabled={isPending}
    >
      {value}
    </button>
  );
};
