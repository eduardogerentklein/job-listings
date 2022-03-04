import { styled } from 'theme';
import { Colors } from './utils/colors';

const textOptions = {
  variants: {
    appearance: Colors,
    font: {
      spartan: {
        fontFamily: '$spartan'
      },
      untitled: {
        fontFamily: '$untitled'
      }
    },
    size: {
      medium: {
        fontSize: '$1'
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
    align: {
      left: {
        textAlign: 'left'
      },
      center: {
        textAlign: 'center'
      },
      right: {
        textAlign: 'right'
      }
    }
  },
  defaultVariants: {
    appearance: 'black',
    size: 'medium',
    weight: 'medium',
    font: 'spartan',
    align: 'left'
  }
};

export const Text = styled('p', textOptions);
