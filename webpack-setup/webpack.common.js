const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const commonConfig = {
  entry: {
    main:       ['AliasSrc/script'],
    // js
    // critical css
    // critical js
  },

  output: {
    path: path.resolve(__dirname, '../web'),
    filename: 'js/[name].[chunkhash:8].js',
    publicPath: '', // set assets path dynamically in runtime with __webpack_public_path__ variable which is passed from PHP
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/, /polyfills/],
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                debug: false,
                modules: false,
                useBuiltIns: 'usage',
                targets: {
                  browsers: ['last 1 Chrome versions'],
                },
                corejs: '3',
              },
            ],
          ],
          plugins: [
            // transform to es5
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-proposal-nullish-coalescing-operator',
            '@babel/plugin-proposal-optional-chaining',
            '@babel/plugin-proposal-json-strings',
            '@babel/plugin-proposal-optional-catch-binding',
            '@babel/plugin-transform-parameters',
            '@babel/plugin-proposal-async-generator-functions',
            '@babel/plugin-proposal-object-rest-spread',
            '@babel/plugin-transform-dotall-regex',
            '@babel/plugin-proposal-unicode-property-regex',
            '@babel/plugin-transform-named-capturing-groups-regex',
            '@babel/plugin-transform-async-to-generator',
            '@babel/plugin-transform-exponentiation-operator',
            '@babel/plugin-transform-template-literals',
            '@babel/plugin-transform-literals',
            '@babel/plugin-transform-function-name',
            '@babel/plugin-transform-arrow-functions',
            '@babel/plugin-transform-classes',
            '@babel/plugin-transform-object-super',
            '@babel/plugin-transform-shorthand-properties',
            '@babel/plugin-transform-duplicate-keys',
            '@babel/plugin-transform-computed-properties',
            '@babel/plugin-transform-for-of',
            '@babel/plugin-transform-sticky-regex',
            '@babel/plugin-transform-unicode-regex',
            '@babel/plugin-transform-spread',
            '@babel/plugin-transform-destructuring',
            '@babel/plugin-transform-block-scoping',
            '@babel/plugin-transform-typeof-symbol',
            '@babel/plugin-transform-new-target',
            '@babel/plugin-transform-regenerator',
            '@babel/plugin-syntax-dynamic-import',
            '@babel/plugin-syntax-top-level-await',
          ],
        },
      },
      {
        test: /\.js$/,
        include: /polyfills/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                debug: false,
                modules: false,
                useBuiltIns: 'entry',
                targets: {
                  browsers: [
                    'last 1 Chrome versions',
                    'last 1 Firefox versions',
                    'last 1 Edge versions',
                    'last 1 Safari versions',
                    'IE 11',
                  ],
                },
                corejs: '3',
              },
            ],
          ],

          plugins: ['@babel/plugin-proposal-class-properties'],
        },
      },
      {
        test: /\.(scss|css)$/,
        exclude: /node_modules/,
        loaders: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            // options: {
            //   prependData: '@import "AliasSrc/styles/globalVariables.scss";', // share variables with ann scss files
            // },
          },
        ],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
    }),
    new ManifestPlugin({
      fileName: 'manifest.json',
      seed: { version_number: Date.now() },
    }),
    new CleanWebpackPlugin({
      dry: false,
      cleanOnceBeforeBuildPatterns: ['js/*.*', 'css/*.*', 'manifest.json'],
    }),
  ],

  resolve: {
    alias: {
      AliasSrc: path.resolve(__dirname, 'src'),
    },
  },
};

module.exports = commonConfig;
