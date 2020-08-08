import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string[];

    fontFamily: {
      normal: string;
    };

    colors: {
      display: {
        0: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
      };
    };
  }
}
