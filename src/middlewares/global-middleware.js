'use strict';

/**
 * `global-middleware` middleware
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In global-middleware middleware.');

    await next();
  };
};
