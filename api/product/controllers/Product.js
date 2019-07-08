'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/guides/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    /**
   * Retrieve product records.
   *
   * @return {Object|Array}
   */

    find: async (ctx) => {
        console.log("find:" + ctx.query._q);
        if (ctx.query._q) {
            return strapi.services.product.search(ctx.query);
        } else {
            return strapi.services.product.fetchAll(ctx.query);
        }
    },

    /**
     * Retrieve a product record.
     *
     * @return {Object}
     */

    findOne: async (ctx) => {
        return strapi.services.product.fetch(ctx.params);
    },

    /**
     * Count product records.
     *
     * @return {Number}
     */

    count: async (ctx) => {
        return strapi.services.product.count(ctx.query);
    },

    /**
     * Create a/an product record.
     *
     * @return {Object}
     */

    create: async (ctx) => {
        return strapi.services.product.add(ctx.request.body);
    },

    /**
     * Update a/an product record.
     *
     * @return {Object}
     */

    update: async (ctx, next) => {
        console.log("11111111111111111111111111111111");
        return strapi.services.product.edit(ctx.params, ctx.request.body);
    },

    /**
     * Destroy a/an product record.
     *
     * @return {Object}
     */

    destroy: async (ctx, next) => {
        return strapi.services.product.remove(ctx.params);
    }
};
