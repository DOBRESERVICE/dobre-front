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
export const customHeaderSearchInput = {
  color: colors.inputText,
  width: '80%',
  fontWeight: 500,
  fontSize: '15px',
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
export const customSearchHeaderButton = {
  borderRadius: '8px',
  padding: '0px',
  height: '30px',
  fontSize: '13px',
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
  '& label.Mui-error + div input': {
    color: colors.inputError,
  },
  '& > label': {
    fontSize: ' 15px',
    fontWeight: '600',
    color: colors.graphite,
  },
};

export const authButton = {
  height: '50px',
  borderRadius: '8px',
  textTransform: 'none',
  boxShadow: 'none',
  '&:hover': {
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
  },
};
export const authCheckBox = {
  borderRadius: '4px',
  color: colors.lightGraphite,
  padding: '0px',
  '& .MuiSvgIcon-root': {
    borderRadius: '20',
  },
};

export const customSelect = {
  color: colors.graphite,
  fontSize: '15px',
  fontWeight: '600',
  borderRadius: '8px',
  '& > div': {
    padding: '6.5px 14px',
  },
};
export const customLabel = {
  color: colors.graphite,
  fontSize: '15px',
  fontWeight: '600',
  top: '-8px',
};
export const customRentPriceInput = {
  '& > div': {
    height: '36px',
    borderRadius: '8px',
    color: colors.graphite,
    fontSize: '15px',
    fontWeight: '600',
  },
  '& > div input::placeholder': {
    opacity: 1,
  },
};

export const customSellerTypeButton = {
  height: '36px',
  width: '100%',
  backgroundColor: colors.lightBlue,
  boxShadow: 'none',
  paddingInline: '20px',
  color: colors.deepBlue,
  fontWeight: 700,
  fontSize: '12px',
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
export const rentInfoCustomButton = {
  borderRadius: '8px',
  height: '36px',
  gap: '10px',
  fontSize: '15px',
  color: colors.white,
  width: '100%',
  fontWeight: 700,
  background: colors.deepBlue,
  boxShadow: 'none',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: colors.hoverDeepBlue,
    boxShadow: 'none',
  },
  '&:active': {
    backgroundColor: colors.activeDeepBlue,
    boxShadow: 'none',
  },
};

export const customModalButton = {
  height: '50px',
  backgroundColor: colors.deepBlue,
  paddingInline: '20px',
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
export const customRecoveryLightButton = {
  height: '50px',
  backgroundColor: colors.lightBlue,
  boxShadow: 'none',
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

export const customDatePicker = {
  position: 'absolute',
  bottom: '0px',
  zIndex: '1',
};

export const customPagination = {
  marginTop: '70px',
  '& > ul': {
    gap: '10px',
  },
  '& button': {
    margin: 0,
  },
  '& li': {
    backgroundColor: colors.white,
    borderRadius: '8px',
    color: colors.deepBlue,
    borderColor: colors.white,
  },
  '&  li > button': {
    borderColor: 'transparent',
    color: colors.deepBlue,
    backgroundColor: colors.white,
    fontWeight: '600',
  },
  '&  li:first-child > button': {
    backgroundColor: colors.lightBlue,
  },
  '&  li:last-child > button': {
    backgroundColor: colors.lightBlue,
  },
  '&  li > button.Mui-selected': {
    borderColor: 'transparent',
    color: colors.white,
    backgroundColor: colors.deepBlue,
  },
  '&  li > button.Mui-selected:hover': {
    borderColor: 'transparent',
    color: colors.white,
    backgroundColor: colors.deepBlue,
    fontWeight: '600',
  },
};

export const customArrow = {
  color: colors.graphite,
};
