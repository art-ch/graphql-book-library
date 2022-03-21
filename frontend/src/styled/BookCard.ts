import { createTheme } from '@mui/material';

export const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: 'body1'
          },
          style: {
            fontSize: 11,
            margin: '6px'
          }
        },
        {
          props: {
            variant: 'body2'
          },
          style: {
            fontSize: 9
          }
        }
      ]
    },
    MuiButton: {
      variants: [
        {
          props: {
            variant: 'contained'
          },
          style: {
            margin: '12px 0'
          }
        }
      ]
    }
  }
});
