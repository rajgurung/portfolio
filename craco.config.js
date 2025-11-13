module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
  webpack: {
    configure: (webpackConfig) => {
      return webpackConfig;
    },
  },
  devServer: (devServerConfig, { env, paths, proxy, allowedHost }) => {
    // Create a new config object with only valid properties
    const validConfig = {
      ...devServerConfig,
    };

    // Remove all deprecated properties
    delete validConfig.onAfterSetupMiddleware;
    delete validConfig.onBeforeSetupMiddleware;
    delete validConfig.https;

    // Add setupMiddlewares if needed
    validConfig.setupMiddlewares = (middlewares) => {
      return middlewares;
    };

    return validConfig;
  },
}
