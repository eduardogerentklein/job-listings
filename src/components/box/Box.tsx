import { styled } from 'theme';

export const Box = styled('div', {
  variants: {
    appearance: {
      normal: {
        overflow: 'auto'
      },
      inline: {
        display: 'flex'
      }
    },
    justify: {
      start: {
        justifyContent: 'start'
      },
      center: {
        justifyContent: 'center'
      },
      end: {
        justifyContent: 'end'
      },
      between: {
        justifyContent: 'space-between'
      },
      around: {
        justifyContent: 'space-around'
      },
      evenly: {
        justifyContent: 'space-evenly'
      }
    },
    align: {
      start: {
        alignItems: 'start'
      },
      center: {
        alignItems: 'center'
      },
      end: {
        alignItems: 'end'
      }
    },
    direction: {
      column: {
        flexDirection: 'column'
      },
      row: {
        flexDirection: 'row'
      }
    }
  },
  defaultVariants: {
    appearance: 'normal',
    direction: 'row'
  }
});
