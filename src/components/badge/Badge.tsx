import { styled } from 'theme';

import { Colors, BackgroundColors } from '../typography/utils/colors';

export const Badge = styled('span', {
  p: '$2',
  pb: '$1',
  mx: '$1',
  variants: {
    color: Colors,
    bgColor: BackgroundColors,
    textTransform: {
      none: {
        textTransform: 'none'
      },
      upper: {
        textTransform: 'uppercase'
      },
      lower: {
        textTransform: 'lowercase'
      },
      capitalize: {
        textTransform: 'capitalize'
      }
    },
    font: {
      spartan: {
        fontFamily: '$spartan'
      },
      untitled: {
        fontFamily: '$untitled'
      }
    },
    size: {
      small: {
        fontSize: '11px'
      },
      medium: {
        fontSize: '$1'
      },
      large: {
        fontSize: '$2',
        '@small': {
          fontSize: '$1'
        }
      }
    },
    weight: {
      medium: {
        fontWeight: '$1'
      },
      bold: {
        fontWeight: '$2'
      }
    },
    radius: {
      sm: {
        borderRadius: '$1'
      },
      md: {
        borderRadius: '$2'
      },
      lg: {
        borderRadius: '$3'
      },
      xl: {
        borderRadius: '$4'
      }
    }
  },
  defaultVariants: {
    font: 'spartan',
    weight: 'bold',
    size: 'small',
    textTransform: 'none',
    color: 'primary',
    radius: 'sm',
    bgColor: 'white'
  }
});
