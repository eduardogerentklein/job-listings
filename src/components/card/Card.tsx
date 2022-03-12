import { styled } from 'theme';

export const Card = styled('div', {
  backgroundColor: '$lightGrayCyan20',
  borderRadius: '$2',
  p: '$4',
  my: '$3',
  width: '80vw',
  '@small': {
    width: '90vw',
    my: '$6'
  },
  variants: {
    appearance: {
      border: {
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: '$primary',
        overflow: 'auto'
      },
      featured: {
        boxShadow: '$3',
        borderWidth: '0px 0px 0px 5px',
        borderStyle: 'solid',
        borderColor: '$primary'
      },
      shadow: {
        boxShadow: '$3'
      }
    }
  },
  defaultVariants: {
    appearance: 'border'
  }
});
