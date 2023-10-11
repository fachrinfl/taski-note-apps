const theme = {
  colors: {
    primary: '#7EBB4F',
    secondary: '#B7B7B7',
    background: '#F2F2F2',
    text: '#0B0A11',
    white: '#FFFFFF',
    error: '#BA1735',
  },
  typography: {
    fontFamily: {
      heading: 'Inter-Bold',
      title: 'Inter-Bold',
      text: 'Inter-Regular',
    },
    fontSize: {
      extraSmall: 12,
      small: 14,
      medium: 16,
      large: 18,
      bold: 24,
    },
  },
  spacing: {
    small: 8,
    medium: 16,
    large: 24,
  },
  borderRadius: {
    small: 4,
    medium: 8,
    large: 12,
  },
  boxShadow: {
    small: {
      elevation: 2,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.25,
      shadowRadius: 4,
    },
    medium: {
      elevation: 4,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 4},
      shadowOpacity: 0.5,
      shadowRadius: 6,
    },
  },
};

export default theme;
