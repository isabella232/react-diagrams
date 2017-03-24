var webpack = require("webpack");
/**
 * @author Dylan Vorster
 */
var path = require('path')
module.exports = [
	//for building the umd distribution
	{
		entry: './src/main.ts',
		output: {
			filename: 'main.js',
			path: __dirname + '/dist',
			libraryTarget: 'umd',
			library: 'admithub-react-diagrams'
		},
		resolve: {
			alias: {
				react: path.resolve('./node_modules/react'),
				'react-dom': path.resolve('./node_modules/react-dom')
			},
		},
		externals: {
			react: {
				root: 'React',
				commonjs2: 'react',
				commonjs: 'react',
				amd: 'react'
			},
			'react-dom': {
				root: 'ReactDOM',
				commonjs2: 'react-dom',
				commonjs: 'react-dom',
				amd: 'react-dom'
			},
			"lodash": {
				commonjs: 'lodash',
				commonjs2: 'lodash',
				amd: '_',
				root: '_'
			}
		},
		plugins:[
			new webpack.optimize.UglifyJsPlugin({
				mangle: {
					keep_fnames: true
				},
				compress: {
					warnings: false,
				}
			})
		],
		module: {
			rules: [
				{
					enforce: 'pre',
					test: /\.js$/,
					loader: "source-map-loader"
				},
				{
					test: /\.tsx?$/,
					loader: 'ts-loader?' + JSON.stringify({
						configFileName: 'tsconfig.json'
					})
				}
			]
		},
		resolve: {
			extensions: [".tsx", ".ts", ".js"]
		},
//		devtool: 'source-map'
	}
];