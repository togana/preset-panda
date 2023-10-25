import type { Config } from '@pandacss/types';

const defineConfig = <T extends Config>(config: T) => config;

export const preset = defineConfig({
});

export default preset;
