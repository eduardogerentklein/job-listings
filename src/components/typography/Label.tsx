import * as LabelRadix from '@radix-ui/react-label';

import { styled } from 'theme';
import { Colors } from './utils/colors';

export const Label = styled(LabelRadix.Root, {
  fontFamily: '$spartan',
  fontSize: '$3',
  fontWeight: '$1',
  variants: {
    appearance: Colors
  },
  defaultVariants: {
    appearance: 'black'
  }
});
