import { colors } from '@/constants/colors';

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
    fontSize: '13px',
  },
  '& .MuiInputBase-root': {
    borderRadius: '8px',
    borderColor: colors.lightGraphite,
    paddingTop: '0px',
  },
  '& .MuiInputLabel-root': {
    top: '-6px',
    color: colors.graphite,
    fontWeight: '600',
  },
  '& .MuiInputLabel-root .Mui-focused': {
    top: '0px',
    fontWeight: '700',
    color: colors.deepBlue,
  },
  '& fieldset': {
    borderColor: colors.lightGraphite,
  },
};
