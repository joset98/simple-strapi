'use strict';

const { sanitizeEntity } = require('strapi-utils');
/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {

    async index(ctx) {
        console.log(ctx.query)
        console.log(ctx.params)
        ctx.send('Hello World!');
    },

    async generate(ctx) {
        // console.log(ctx.request.body)
        const user = ctx.state.user;
        
        const { address_id, reference, method } = ctx.request.body;
        const addressConfirm = await strapi.services.addresses.findOne(address_id, user.id);
        if (!addressConfirm) {
            return ctx.badRequest(
              null,
              formatError({
                id: 'Auth.form.error.invalid',
                message: 'Identifier or password invalid.',
              })
            );
        }
        const data = {
            status:'ESPERA',
            reference,
            method,
            user_id: user.id, 
            address_id
        }
        const newOrder = await strapi.services.order.generate(data);
        return sanitizeEntity(newOrder, { model: strapi.models.order });
    },
};
