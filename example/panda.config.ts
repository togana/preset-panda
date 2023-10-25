import { defineConfig } from '@pandacss/dev';
import preset from '@togana/preset-panda';

export default defineConfig({
  presets: ['@pandacss/preset-base', preset],
  preflight: true,
  jsxFramework: 'react',
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],
  outdir: 'styled-system',
});
