export interface ITheme {
    colors: {
      bgPrimary: string;
      bgSecondary: string;
      bgTerciary: string;

      headPrimary:string;
      headSecondary: string;
      headTerciary: string;

      textPrimary: string;
      textSecondary: string;
      textTerciary: string;

      error?: string;
      success?: string;
      warning?:string;
      gradient?:string;
    };
    fonts: {
      body: string;
      heading: string;
      monospace?: string;
    };
    spacing: {
      small: string;
      medium: string;
      large: string;
    };
    borders?: {
      radius: string;
      width: string;
      color: string;
    };
    shadows?: {
      small: string;
      medium: string;
      large: string;
    };
    breakpoints?: {
      mobile: string;
      tablet: string;
      desktop: string;
      largeDesktop?: string;
    };
    typography?: {
      h1: {
        fontSize: string;
        fontWeight: string;
      };
      h2: {
        fontSize: string;
        fontWeight: string;
      };
      p: {
        fontSize: string;
        lineHeight: string;
      };
    };
  }
  