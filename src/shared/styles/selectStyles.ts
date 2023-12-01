import { MUIColors } from '@/shared/styles/MUIColors';

export const customSelect = {
  minWidth: '240px',
  color: MUIColors.graphite,
  fontSize: '15px',
  fontWeight: '600',
  borderRadius: '8px',
  '& > div': {
    padding: '8px 14px',
  },
  '& fieldset': {
    borderColor: MUIColors.lightGraphite,
  },
  '& ul': {
    display: 'none',
  },
  '& fieldset:hover': {
    borderColor: MUIColors.lightGraphite,
  },
};
export const customMenuItem = {
  color: MUIColors.graphite,
  fontSize: '15px',
  fontWeight: '600',
  textAlign: 'center',
  display: 'flex',
  opacity: '1',
  justifyContent: 'center',
  borderRadius: '8px',
  marginInline: '10px',
  '&:hover': {
    backgroundColor: MUIColors.lightGraphite,
  },
  '&.Mui-selected': {
    backgroundColor: MUIColors.deepBlue,
    color: MUIColors.white,
  },
  '&.Mui-selected.Mui-focusVisible': {
    backgroundColor: MUIColors.deepBlue,
    color: MUIColors.white,
  },
  '&.Mui-selected:hover': {
    backgroundColor: MUIColors.deepBlue,
    color: MUIColors.white,
  },
  '& img': {
    display: 'none',
  },
  '&.Mui-selected img': {
    display: 'block',
  },
};
export const customDateSelect = {
  color: MUIColors.graphite,
  fontSize: '15px',
  fontWeight: '600',
  borderRadius: '8px',
  '& > div': {
    padding: '12px 14px',
  },
  '& fieldset': {
    borderColor: MUIColors.lightGraphite,
  },
};

export const customProductQuantitySelect = {
  color: MUIColors.graphite,
  fontSize: '15px',
  fontWeight: '600',
  borderRadius: '8px',
  '& > div': {
    padding: '12px 14px',
  },
  '& fieldset': {
    borderColor: MUIColors.lightGraphite,
  },
};

export const customDateFormSelect = {
  width: '100%',
  minWidth: '242px',
};
export const customFormSelect = {
  minWidth: '242px',
};
export const customProductQuantityFormSelect = {
  minWidth: '113px',
};

export const customDateLabel = {
  color: MUIColors.graphite,
  fontSize: '15px',
  fontWeight: '600',
  top: '-4px',
};

export const customLabel = {
  color: MUIColors.graphite,
  fontSize: '15px',
  fontWeight: '600',
  top: '-8px',
};
