import { colors } from '@/constants/colors';
export const customCategoriesButton = {
  height: '45px',
  backgroundColor: colors.lightBlue,
  boxShadow: 'none',
  gap: '10px',
  color: colors.deepBlue,
  fontWeight: 700,
  fontSize: '15px',
  textTransform: 'none',
  borderRadius: '8px',
  '&:hover': {
    backgroundColor: colors.hoverLightBlue,
    boxShadow: 'none',
  },
  '&:active': {
    backgroundColor: colors.activeLightBlue,
    boxShadow: 'none',
  },
};

export const customPremiumButton = {
  height: '45px',
  backgroundColor: colors.mainText,
  gap: '10px',
  boxShadow: 'none',
  color: colors.white,
  fontWeight: 700,
  fontSize: '15px',
  textTransform: 'none',
  borderRadius: '8px',
  '&:hover': {
    backgroundColor: colors.hoverBlack,
    boxShadow: 'none',
  },
  '&:active': {
    backgroundColor: colors.activeBlack,
    boxShadow: 'none',
  },
};
export const customRentButton = {
  height: '45px',
  backgroundColor: colors.deepBlue,
  gap: '10px',
  boxShadow: 'none',
  color: colors.white,
  fontWeight: 700,
  fontSize: '15px',
  textTransform: 'none',
  borderRadius: '8px',
  '&:hover': {
    backgroundColor: colors.hoverDeepBlue,
    boxShadow: 'none',
  },
  '&:active': {
    backgroundColor: colors.activeDeepBlue,
    boxShadow: 'none',
  },
};
export const customLoginButton = {
  height: '45px',
  backgroundColor: colors.white,
  border: `2px solid ${colors.mainText}`,
  gap: '10px',
  boxShadow: 'none',
  color: colors.mainText,
  fontWeight: 700,
  fontSize: '15px',
  textTransform: 'none',
  borderRadius: '8px',
  '&:hover': {
    backgroundColor: colors.lightGray,
    border: `2px solid ${colors.lightGray}`,
    boxShadow: 'none',
  },
  '&:active': {
    backgroundColor: colors.gray,
    border: `2px solid ${colors.gray}`,
    boxShadow: 'none',
  },
};
