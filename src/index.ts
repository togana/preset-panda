import type { Config } from '@pandacss/types';
import { tokens } from './tokens';
import { semanticTokens } from './semantic-tokens';

const defineConfig = <T extends Config>(config: T) => config;

export const preset = defineConfig({
  theme: {
    tokens,
    semanticTokens,
  },
});

export default preset;
