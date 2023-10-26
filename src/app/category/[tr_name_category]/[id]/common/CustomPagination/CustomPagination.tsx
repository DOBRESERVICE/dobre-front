'use client';
import { Pagination } from '@mui/material';
import { customPagination } from '@/styles/buttonStyles';
import { useState } from 'react';

export const CustomPagination = () => {
  const [page, setPage] = useState<unknown>(0);

  return (
    <Pagination
      siblingCount={4}
      onChange={(_, page) => {
        if (page !== null) {
          setPage(page);
        }
      }}
      sx={customPagination}
      count={64}
      variant='outlined'
      shape='rounded'
    />
  );
};
