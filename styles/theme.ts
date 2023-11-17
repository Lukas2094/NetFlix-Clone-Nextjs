import { extendTheme } from '@chakra-ui/react';

//@ts-ignore
export const theme = extendTheme(
  //@ts-ignore
  {

    styles: {
      global: {
        '*': {
          transition: '0.4s',
        },

        html: {
          scrollBehavior: 'auto',
        },

        body: {
          bg: '#111',
        },
      },
    },
  },
);
