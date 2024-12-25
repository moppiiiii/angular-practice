import type { StorybookConfig } from "@storybook/angular";
import { StatsWriterPlugin } from 'webpack-stats-plugin';

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/angular",
    options: {},
  },
  webpackFinal: async (config) => {
    config.plugins = config.plugins || [];

    config.plugins.push(
      new StatsWriterPlugin({
        filename: 'preview-stats.json',
        fields: null,
        stats: {
          all: true,
          assets: true,
          chunks: true,
          modules: true,
        }
      })
    );

    return config;
  },
};
export default config;
