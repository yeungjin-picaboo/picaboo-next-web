import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  clr: {
    base: '#000000',
    primary: '#373A40',
    secondary: '#686D76',
    tertiary: '#ffffff',
    quaternary: '#bababa',
    fifth: '#eeeeee',
    accent: '#DCA11D',
    enabled: '#ffffff',
    disabled: '#bababa',
    error: '#ff3333',
    danger: '#DF2E38',
  },
  bgclr: {
    base: '#373A40',
    primary: '#ffffff',
    secondary: '#EEEEEE',
    tertiary: '#686D76',
    enabled: '#686D76',
    disabled: '#EEEEEE',
    focused: '#373A40',
  },
  borderclr: {
    base: '#EEEEEE',
    error: '#ff3333',
    focus: '#000000',
  },
  boxShadow: {
    normal: '0 4px 8px 0  rgba(0, 0, 0, 0.1), 0 2px 4px 0  rgba(0, 0, 0, 0.25)',
    layout: '0 0 20px 0 rgba(0, 0, 0, 0.25), 0 0px 10px 0  rgba(0, 0, 0, 0.5)',
    image: '0 6px 12px 0 rgba(0, 0, 0, 0.1), 0 3px 6px 0  rgba(0, 0, 0, 0.25)',
  },
  mixins: {
    flexBox: (direction = 'row', align = 'center', justify = 'center') => `
    display: flex;
    flex-direction: ${direction};
    align-items: ${align};
    justify-content: ${justify};
    `,
  },
  media: {
    xl: '(min-width: 1200px)',
    lg: '(min-width: 769px)',
    md: '(min-width: 481px)',
  },
};
