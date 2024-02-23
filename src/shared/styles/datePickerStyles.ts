import { MUIColors } from '@/shared/styles/MUIColors';

export const customDatePickerContainer = {
  paddingTop: '0px',
  overflow: 'unset',
};
export const customDatePicker = {
  width: '200px',
  '& input': {
    padding: '6.5px 14px',
    fontSize: '13px',
    paddingTop: '11px',
    fontWeight: 700,
  },
  '& label': {
    fontSize: '15px',
  },
  '& .MuiInputBase-root': {
    borderRadius: '8px',
    borderColor: MUIColors.lightGraphite,
    paddingTop: '0px',
  },
  '& .MuiInputLabel-root': {
    top: '-8px',
    color: MUIColors.graphite,
    fontWeight: '600',
  },
  '& .MuiInputLabel-root .Mui-focused': {
    top: '0px',
    fontWeight: '700',
    color: MUIColors.deepBlue,
  },
  '& fieldset': {
    borderColor: MUIColors.lightGraphite,
  },
};
