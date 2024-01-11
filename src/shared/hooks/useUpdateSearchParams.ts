import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

export const useUpdateSearchParams = (search_tr_name: string, multiple: boolean, value: string) => {
  const params = useSearchParams();
  const searchParams = new URLSearchParams(params);
  const router = useRouter();
  const pathname = usePathname();
  const allParams = searchParams.getAll(search_tr_name);
  const isInSearchParams = allParams.includes(value);
  const [isSelected, setIsSelected] = useState(isInSearchParams);

  const addNewParamValue = (value: string) => {
    if (isSelected && allParams.includes(value)) {
      searchParams.delete(search_tr_name, value);
    } else if (multiple) {
      searchParams.append(search_tr_name, value);
    } else {
      searchParams.set(search_tr_name, value);
    }
    const search = searchParams.toString();
    const query = search ? `?${search}` : '';
    router.push(`${pathname}${query}`, { scroll: false });
  };

  return {
    setUpdatedSearchParams: addNewParamValue,
    setIsSelected: setIsSelected,
    isSelected: isSelected,
    allParams: allParams,
  };
};
