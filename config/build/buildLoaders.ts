import type webpack from 'webpack';

import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { type BuildOptions } from './types/config';
import { buildScssLoader } from './loaders/ScssLoader';

export default function buildLoader({
	isDev,
}: BuildOptions): webpack.RuleSetRule[] {
	const tsLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	};
	const scssLoader = buildScssLoader(isDev);

	const svgLoader = {
		test: /\.svg$/,
		use: [
			{
				loader: '@svgr/webpack',
			},
		],
	};

	const fileLoader = {
		test: /\.(png|jpe?g|gif|woff2|woff)$/i,
		use: [
			{
				loader: 'file-loader',
			},
		],
	};

	return [fileLoader, svgLoader, tsLoader, scssLoader];
}
