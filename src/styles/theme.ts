import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  clr: {
    base: '#000000',
    primary: '#ffffff',
    secondary: '#686D76',
    accent: '#DCA11D',
  },
  bgclr: {
    base: '#373A40',
    primary: '#ffffff',
    secondary: '#EEEEEE',
    enabled: '#686D76',
    disabled: '#EEEEEE',
  },
  boxShadow: {
    normal: '0 0 20px 0 rgb(0 0 0 / 25%)',
    image: '0 4px 4px 0 rgb(0 0 0 / 25%)',
  },
  mixins: {
    flexBox: (direction = 'row', align = 'center', justify = 'center') => `
    display: flex;
    flex-direction: ${direction};
    align-items: ${align};
    justify-content: ${justify};
    `,
  },
};

const customMediaQuery = (maxWidth: number): string =>
  `@media (max-width: ${maxWidth}px)`;

export const media = {
  custom: customMediaQuery,
  pc: customMediaQuery(1440),
  tablet: customMediaQuery(768),
  mobile: customMediaQuery(576),
};
