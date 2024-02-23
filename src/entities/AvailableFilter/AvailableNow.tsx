'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useId, useState } from 'react';

import styles from './AvailableNow.module.scss';

import { useAuthData } from '@/shared/context/authContext';

import { Checkbox } from '../../shared/ui/Checkbox/Checkbox';

export const AvailableFilter = () => {
  const { isPending, startTransition } = useAuthData();
  const [isChecked, setIsChecked] = useState(false);
  const id = useId();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    const param = Number(params.get('availability'));
    setIsChecked(Boolean(param));
  }, [searchParams, setIsChecked]);
  const toggleCheckbox = (value: boolean) => {
    const params = new URLSearchParams(searchParams);
    setIsChecked((prev) => !prev);
    const newValue = value ? '1' : '0';
    startTransition(() => {
      params.set('availability', newValue);
      const search = params.toString();
      const query = search ? `?${search}` : '';
      router.push(`${pathname}${query}`, { scroll: false });
    });
  };
  return (
    <div className={styles.avalableNowWrapper}>
      <Checkbox disabled={isPending} checked={isChecked} id={id} onChange={() => toggleCheckbox(!isChecked)} />
      <label htmlFor={id}>Доступен сейчас</label>
    </div>
  );
};
