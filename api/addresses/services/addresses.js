'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/services.html#core-services)
 * to customize this service
 */

module.exports = {
    findOne: (addressId, userId) => {
        const results = strapi.query('addresses').findOne({ id: addressId, user_id: userId });        
        return results; 
    }
};
