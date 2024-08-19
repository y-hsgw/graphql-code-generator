/* eslint-disable import/no-extraneous-dependencies */
import sveltePrettier from 'prettier-plugin-svelte';
import * as prettierTailwind from 'prettier-plugin-tailwindcss';
import guildPrettierConfig from '@theguild/prettier-config';

const { plugins, ...prettierConfig } = guildPrettierConfig;

export default {
  ...prettierConfig,
  plugins: [
    ...plugins,
    // `prettier-plugin-svelte` and `svelte` packages used for formatting ```svelte code blocks in md/mdx files
    sveltePrettier,
    // Sort classes in website
    prettierTailwind,
  ],
  tailwindConfig: './website/tailwind.config.ts',
};
