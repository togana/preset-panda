import type { SemanticTokens } from '@pandacss/types';

export const colors: SemanticTokens['colors'] = {
  text: {
    DEFAULT: {
      value: { base: '{colors.gray.800}', _dark: '{colors.whiteAlpha.900}' },
      inverse: {
        value: { base: '{colors.white}', _dark: '{colors.gray.800}' },
      },
      subtle: {
        value: { base: '{colors.gray.600}', _dark: '{colors.gray.400}' },
      },
    },
  },
  bg: {
    DEFAULT: {
      value: { base: '{colors.white}', _dark: '{colors.gray.800}' },
      subtle: {
        value: { base: '{colors.gray.100}', _dark: '{colors.gray.700}' },
      },
    },
  },
  border: {
    DEFAULT: {
      value: { base: '{colors.gray.200}', _dark: '{colors.whiteAlpha.300}' },
    },
  },
  placeholder: {
    DEFAULT: {
      value: { base: '{colors.gray.500}', _dark: '{colors.whiteAlpha.400}' },
    },
  },
};
