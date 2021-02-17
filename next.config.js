if (process.env.NODE_ENV == 'development') {
  require('dotenv').config();
}

module.exports = {
  basePath: process.env.NODE_ENV == 'production' ? '/admin' : '',
  poweredByHeader: false,
  env: {
    BLACKSMITH_ADMIN_URL: process.env.BLACKSMITH_ADMIN_URL,
  },

  webpack(config, { isServer }) {
    if (isServer) {
      config.externals = config.externals.map(fn => {
        return (context, request, callback) => {
          if (
            request.indexOf('@elastic/eui') > -1 ||
            request.indexOf('react-ace') > -1 ||
            request.indexOf('@nunchistudio/blacksmith') > -1) {
            return callback();
          }

          return fn(context, request, callback);
        };
      });

      config.module.rules.push({
        test: /react-ace/,
        use: 'null-loader',
      });

      const definePluginId = config.plugins.findIndex(
        p => p.constructor.name === 'DefinePlugin'
      );

      config.plugins[definePluginId].definitions = {
        ...config.plugins[definePluginId].definitions,
        HTMLElement: function () {},
      };
    }

    config.resolve.mainFields = ['module', 'main'];

    return config;
  },
};
