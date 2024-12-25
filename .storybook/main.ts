import type { StorybookConfig } from "@storybook/angular";
import StatsWriterPlugin from 'webpack-stats-plugin';

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
    // plugins が未定義なら初期化
    config.plugins = config.plugins || [];

    config.plugins.push(
      new StatsWriterPlugin({
        filename: 'preview-stats.json', // Chromaticのデフォルト名称
        fields: null, // すべてのstatsフィールドを出力（必要に応じて絞り込み可能）
      })
    );

    return config;
  },
};
export default config;
