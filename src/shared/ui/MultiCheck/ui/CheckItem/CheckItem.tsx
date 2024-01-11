import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { FC, useEffect, useId, useState } from 'react';

import styles from './CheckItem.module.scss';

import { useAuthData } from '@/shared/context/authContext';

import { Checkbox } from '../../ui/../../Checkbox/Checkbox';
interface CheckItemProps {
  search_tr_name: string;
  value: string;
}
export const CheckItem: FC<CheckItemProps> = ({ search_tr_name, value }) => {
  const { isPending, startTransition } = useAuthData();
  const uid = useId();
  const [isActive, setIsActive] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    const allValues = params.getAll(search_tr_name);
    setIsActive(allValues.includes(value));
  }, [search_tr_name, searchParams, value]);
  const toggleCheckbox = () => {
    setIsActive(!isActive);
    const params = new URLSearchParams(searchParams);
    const allValues = params.getAll(search_tr_name);
    startTransition(() => {
      if (allValues.includes(value)) {
        params.delete(search_tr_name, value);
      } else {
        params.append(search_tr_name, value);
      }
      const search = params.toString();
      const query = search ? `?${search}` : '';
      router.push(`${pathname}${query}`, { scroll: false });
    });
  };
  return (
    <div className={styles.checkItemWrapper}>
      <Checkbox disabled={isPending} checked={isActive} onChange={toggleCheckbox} id={uid} />
      <label htmlFor={uid}>{value}</label>
    </div>
  );
};
