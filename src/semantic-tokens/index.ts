import type { SemanticTokens } from '@pandacss/types';
import { colors } from './colors';

const defineTokens = <T extends SemanticTokens>(v: T) => v;

export const semanticTokens = defineTokens({
  colors,
});
