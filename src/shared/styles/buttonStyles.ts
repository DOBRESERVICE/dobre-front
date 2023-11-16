import { MUIColors } from '@/shared/styles/MUIColors';
export const customCategoriesButton = {
  height: '45px',
  backgroundColor: MUIColors.lightBlue,
  boxShadow: 'none',
  gap: '10px',
  color: MUIColors.deepBlue,
  fontWeight: 700,
  fontSize: '15px',
  textTransform: 'none',
  borderRadius: '8px',
  '&:hover': {
    backgroundColor: MUIColors.hoverLightBlue,
    boxShadow: 'none',
  },
  '&:active': {
    backgroundColor: MUIColors.activeLightBlue,
    boxShadow: 'none',
  },
};

export const customRentButton = {
  height: '45px',
  backgroundColor: MUIColors.deepBlue,
  gap: '10px',
  boxShadow: 'none',
  color: MUIColors.white,
  fontWeight: 700,
  fontSize: '15px',
  textTransform: 'none',
  borderRadius: '8px',
  '&:hover': {
    backgroundColor: MUIColors.hoverDeepBlue,
    boxShadow: 'none',
  },
  '&:active': {
    backgroundColor: MUIColors.activeDeepBlue,
    boxShadow: 'none',
  },
};
export const customLoginButton = {
  height: '45px',
  backgroundColor: MUIColors.white,
  border: `2px solid ${MUIColors.mainText}`,
  gap: '10px',
  boxShadow: 'none',
  color: MUIColors.mainText,
  fontWeight: 700,
  fontSize: '15px',
  textTransform: 'none',
  borderRadius: '8px',
  '&:hover': {
    backgroundColor: MUIColors.lightGray,
    border: `2px solid ${MUIColors.lightGray}`,
    boxShadow: 'none',
  },
  '&:active': {
    backgroundColor: MUIColors.gray,
    border: `2px solid ${MUIColors.gray}`,
    boxShadow: 'none',
  },
};

export const customSearchInput = {
  color: MUIColors.inputText,
  width: '80%',
  fontWeight: 500,
  fontSize: '18px',
};
export const customHeaderSearchInput = {
  color: MUIColors.inputText,
  width: '80%',
  fontWeight: 500,
  fontSize: '15px',
};
export const customSearchButton = {
  borderRadius: '8px',
  padding: '10px 22px',
  fontSize: '15px',
  color: MUIColors.white,
  fontWeight: 700,
  background: MUIColors.orangeGradient,
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
  color: MUIColors.white,
  fontWeight: 700,
  background: MUIColors.orangeGradient,
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
  color: MUIColors.graphite,
  width: '50%',
  fontWeight: 700,
  background: MUIColors.white,
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
    height: '50px',
    borderRadius: '8px',
    border: `1px solid ${MUIColors.grayBorder}`,
    '& input': {
      color: MUIColors.deepBlue,
    },
    '& input[type="password"]': {
      color: MUIColors.mainText,
    },
  },
  '& label.Mui-error + div input': {
    color: MUIColors.inputError,
  },
  '& > label': {
    fontSize: ' 15px',
    fontWeight: '600',
    color: MUIColors.graphite,
    top: '5px',
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
  color: MUIColors.lightGraphite,
  padding: '0px',
  '& .MuiSvgIcon-root': {
    borderRadius: '20',
  },
};

export const customRentPriceInput = {
  '& > div': {
    height: '36px',
    borderRadius: '8px',
    color: MUIColors.graphite,
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
  backgroundColor: MUIColors.lightBlue,
  boxShadow: 'none',
  paddingInline: '20px',
  color: MUIColors.deepBlue,
  fontWeight: 700,
  fontSize: '12px',
  textTransform: 'none',
  borderRadius: '8px',
  '&:hover': {
    backgroundColor: MUIColors.hoverLightBlue,
    boxShadow: 'none',
  },
  '&:active': {
    backgroundColor: MUIColors.activeLightBlue,
    boxShadow: 'none',
  },
};
export const rentInfoCustomButton = {
  borderRadius: '8px',
  height: '36px',
  gap: '10px',
  fontSize: '15px',
  color: MUIColors.white,
  width: '100%',
  fontWeight: 700,
  background: MUIColors.deepBlue,
  boxShadow: 'none',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: MUIColors.hoverDeepBlue,
    boxShadow: 'none',
  },
  '&:active': {
    backgroundColor: MUIColors.activeDeepBlue,
    boxShadow: 'none',
  },
};
export const FAQCustomButton = {
  borderRadius: '8px',
  height: '45px',
  gap: '10px',
  fontSize: '15px',
  paddingInline: '15px',
  color: MUIColors.white,
  fontWeight: 700,
  background: MUIColors.deepBlue,
  boxShadow: 'none',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: MUIColors.hoverDeepBlue,
    boxShadow: 'none',
  },
  '&:active': {
    backgroundColor: MUIColors.activeDeepBlue,
    boxShadow: 'none',
  },
};
export const rentInfoCustomBigButton = {
  borderRadius: '8px',
  height: '45px',
  gap: '10px',
  fontSize: '15px',
  color: MUIColors.white,
  width: 'auto',
  fontWeight: 700,
  background: MUIColors.deepBlue,
  boxShadow: 'none',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: MUIColors.hoverDeepBlue,
    boxShadow: 'none',
  },
  '&:active': {
    backgroundColor: MUIColors.activeDeepBlue,
    boxShadow: 'none',
  },
};
export const SeeAllCustomBigButton = {
  borderRadius: '8px',
  height: '45px',
  gap: '10px',
  fontSize: '15px',
  color: MUIColors.white,
  width: 'fit-content',
  paddingInline: '22px',
  fontWeight: 700,
  background: MUIColors.deepBlue,
  boxShadow: 'none',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: MUIColors.hoverDeepBlue,
    boxShadow: 'none',
  },
  '&:active': {
    backgroundColor: MUIColors.activeDeepBlue,
    boxShadow: 'none',
  },
};

export const customModalButton = {
  height: '50px',
  backgroundColor: MUIColors.deepBlue,
  paddingInline: '20px',
  gap: '10px',
  boxShadow: 'none',
  color: MUIColors.white,
  fontWeight: 700,
  fontSize: '15px',
  textTransform: 'none',
  borderRadius: '8px',
  '&:hover': {
    backgroundColor: MUIColors.hoverDeepBlue,
    boxShadow: 'none',
  },
  '&:active': {
    backgroundColor: MUIColors.activeDeepBlue,
    boxShadow: 'none',
  },
};
export const customRecoveryLightButton = {
  height: '50px',
  backgroundColor: MUIColors.lightBlue,
  boxShadow: 'none',
  color: MUIColors.deepBlue,
  fontWeight: 700,
  fontSize: '15px',
  textTransform: 'none',
  borderRadius: '8px',
  '&:hover': {
    backgroundColor: MUIColors.hoverLightBlue,
    boxShadow: 'none',
  },
  '&:active': {
    backgroundColor: MUIColors.activeLightBlue,
    boxShadow: 'none',
  },
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
    backgroundColor: MUIColors.white,
    borderRadius: '8px',
    color: MUIColors.deepBlue,
    borderColor: MUIColors.white,
  },
  '&  li > button': {
    borderColor: 'transparent',
    color: MUIColors.deepBlue,
    backgroundColor: MUIColors.white,
    fontWeight: '600',
  },
  '&  li:first-child > button': {
    backgroundColor: MUIColors.lightBlue,
  },
  '&  li:last-child > button': {
    backgroundColor: MUIColors.lightBlue,
  },
  '&  li > button.Mui-selected': {
    borderColor: 'transparent',
    color: MUIColors.white,
    backgroundColor: MUIColors.deepBlue,
  },
  '&  li > button.Mui-selected:hover': {
    borderColor: 'transparent',
    color: MUIColors.white,
    backgroundColor: MUIColors.deepBlue,
    fontWeight: '600',
  },
};

export const customArrow = {
  color: MUIColors.graphite,
};
export const customSmallRentButton = {
  height: '24px',
  backgroundColor: MUIColors.deepBlue,
  gap: '6px',
  boxShadow: 'none',
  color: MUIColors.white,
  fontWeight: 700,
  fontSize: '12px',
  textTransform: 'none',
  borderRadius: '5px',
  '&:hover': {
    backgroundColor: MUIColors.hoverDeepBlue,
    boxShadow: 'none',
  },
  '&:active': {
    backgroundColor: MUIColors.activeDeepBlue,
    boxShadow: 'none',
  },
};
