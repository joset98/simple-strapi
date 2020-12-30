'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/services.html#core-services)
 * to customize this service
 */

module.exports = {    

    generate: ( data ) => {
        const result = strapi.query('order').create(
            data
        );

        return result; 
    }
};
