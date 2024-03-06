import { MUIColors } from '@/shared/styles/MUIColors';

export const customSelect = {
  minWidth: '240px',
  color: MUIColors.graphite,
  fontSize: '15px',
  fontWeight: '600',
  borderRadius: '8px',
  '.MuiInputBase-root': {
    borderRadius: '8px',
  },
  '& fieldset': {
    borderColor: MUIColors.lightGraphite,
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
  paddingBlock: '7px',
  marginBottom: '2px',
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
    paddingBlock: '12.5px',
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
  '& .MuiPaper-root': {
    top: '5px',
  },
};

export const customDateLabel = {
  color: MUIColors.graphite,
  fontSize: '15px',
  fontWeight: '600',
  top: '-2px',
};

export const customSortLabel = {
  color: MUIColors.graphite,
  fontSize: '15px',
  fontWeight: '600',
  left: '24px',
  '&.MuiInputLabel-shrink': { left: 0 },
};
export const customLabel = {
  color: MUIColors.graphite,
  fontSize: '15px',
  fontWeight: '600',
};

export const customSelectMenuStyles = {
  boxShadow: '0 0 12px 0 rgba(0, 0, 0, 0.14) !important',
  borderRadius: '8px',
  padding: '12px',
};
