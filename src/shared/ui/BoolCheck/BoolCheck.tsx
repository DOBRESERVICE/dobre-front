import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { FC, useEffect, useId, useState } from 'react';

import styles from './BoolCheck.module.scss';

import { useAuthData } from '@/shared/context/authContext';
import { Checkbox } from '@/shared/ui/Checkbox/Checkbox';
interface BoolCheckProps {
  search_tr_name: string;
  headerName: string;
}
export const BoolCheck: FC<BoolCheckProps> = ({ search_tr_name, headerName }) => {
  const { isPending, startTransition } = useAuthData();
  const [isChecked, setIsChecked] = useState(false);
  const id = useId();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    const param = Number(params.get(search_tr_name));
    setIsChecked(Boolean(param));
  }, [search_tr_name, searchParams, setIsChecked]);
  const toggleCheckbox = (value: boolean) => {
    const params = new URLSearchParams(searchParams);
    setIsChecked((prev) => !prev);
    startTransition(() => {
      value ? params.set(search_tr_name, '1') : params.delete(search_tr_name);
      const search = params.toString();
      const query = search ? `?${search}` : '';
      router.push(`${pathname}${query}`, { scroll: false });
    });
  };
  return (
    <div className={styles.boolCheckWrapper}>
      <Checkbox disabled={isPending} checked={isChecked} id={id} onChange={() => toggleCheckbox(!isChecked)} />
      <label className={styles.boolLabel} htmlFor={id}>
        {headerName}
      </label>
    </div>
  );
};
