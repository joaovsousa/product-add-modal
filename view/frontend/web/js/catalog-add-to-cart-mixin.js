/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define([
    'jquery',
    'mage/translate',
    'underscore',
    'Magento_Catalog/js/product/view/product-ids-resolver',
    'Magento_Catalog/js/product/view/product-info-resolver',
    'Joao_ModalProductCart/js/product-modal',
    'jquery-ui-modules/widget',
], function ($, $t, _, idsResolver, productInfoResolver, modalProduct) {
    'use strict';

    return function (widget) {
        $.widget('mage.catalogAddToCart', widget, {

            /** @inheritdoc */
            _create: function () {
                let self = this;
                if (this.options.bindSubmit) {
                    this._bindSubmit();
                }
                $(this.options.addToCartButtonSelector).prop('disabled', false);

                $(document).on('ajax:addToCart', function () {
                    modalProduct(self.options)
                })
            },
        })
        return $.mage.catalogAddToCart;
    }
})
