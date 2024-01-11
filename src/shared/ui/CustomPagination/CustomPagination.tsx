'use client';

import { Pagination } from '@mui/material';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { FC, useEffect, useState } from 'react';

import { customPagination } from '@/shared/styles/buttonStyles';

import { Pagination as IPagination } from '../../../interfaces/index';

interface CustomPaginationProps {
  pagination: IPagination;
  pageCount: number;
}

export const CustomPagination: FC<CustomPaginationProps> = ({ pagination, pageCount }) => {
  const params = useSearchParams();
  const searchParams = new URLSearchParams(params);
  const param = searchParams.get('page');
  const currentPage = Number(param) || 1;
  const router = useRouter();
  const pathname = usePathname();
  const [page, setPage] = useState(currentPage);
  useEffect(() => {
    searchParams.set('page', page.toString());
    searchParams.set('limit', pagination.limit.toString());
    const search = searchParams.toString();
    const query = search ? `?${search}` : '';
    router.push(`${pathname}${query}`, { scroll: false });
  }, [page, pagination.limit, pathname, router, searchParams]);
  return (
    <Pagination
      siblingCount={4}
      onChange={(_, page) => {
        setPage(page);
      }}
      page={page}
      sx={customPagination}
      count={pageCount}
      variant='outlined'
      shape='rounded'
    />
  );
};
