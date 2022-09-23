/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define(
    [
        'ko',
        'uiComponent',
        'underscore',
        'Magento_Customer/js/customer-data',
    ],
    function (
        ko,
        Component,
        _,
        customerData
    ) {
        'use strict';

        return Component.extend({
            defaults: {
                item: ko.observable('abcd')
            },
            cart: customerData.get("cart"),
            productItem: ko.observable(),

            /**
             *
             * @returns {*}
             */
            initialize: function () {
                this._super();
                let self = this;

                this.item.subscribe(function (item) {
                    if (item !== false) {
                        self.cart().items.forEach(function (value) {
                            if (value.product_sku === item) {
                                self.productItem(value)
                            }
                        })
                    }
                })
                return this;
            },
        });
    }
);
