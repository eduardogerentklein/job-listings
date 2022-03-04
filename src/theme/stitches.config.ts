import { createStitches, VariantProps, ScaleValue } from '@stitches/react';

import { Media } from './media';
import { Theme } from './theming';
import { Utils } from './utils';

export const { styled, css, globalCss, keyframes, theme, getCssText } =
  createStitches({
    theme: Theme,
    media: Media,
    utils: Utils
  });

export type { VariantProps, ScaleValue };
