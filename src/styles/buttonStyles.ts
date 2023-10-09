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

export const customSearchInput = {
  color: colors.inputText,
  width: '80%',
  fontWeight: 500,
  fontSize: '18px',
};
export const customSearchButton = {
  borderRadius: '8px',
  padding: '10px 22px',
  fontSize: '15px',
  color: colors.white,
  fontWeight: 700,
  background: colors.orangeGradient,
  boxShadow: 'none',
  textTransform: 'none',
  '&:hover': {
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
  },
};

export const howWeWorkButton = {
  borderRadius: '8px',
  height: '45px',
  fontSize: '15px',
  color: colors.graphite,
  width: '50%',
  fontWeight: 700,
  background: colors.white,
  boxShadow: 'none',
  textTransform: 'none',
  '&:hover': {
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
  },
};

export const authCustomInput = {
  width: '385px',
  '& .MuiOutlinedInput-root': {
    borderRadius: '8px',
    border: `1px solid ${colors.grayBorder}`,
    '& input': {
      color: colors.deepBlue,
    },
    '& input[type="password"]': {
      color: colors.mainText,
    },
  },
};

export const authButton = {
  height: '50px',
  borderRadius: '8px',
  textTransform: 'none',
};
export const authCheckBox = {
  padding: '0px',
  '& input': {
    height: '50px',
    borderRadius: '4px',
    textTransform: 'none',
    border: `1px solid ${colors.lightGraphite}`,
  },
};
