/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    config: {
        map: {
            productModal: 'Joao_ModalProductCart/js/product-modal'
        },
        mixins: {
            'Magento_Catalog/js/catalog-add-to-cart': {
                'Joao_ModalProductCart/js/catalog-add-to-cart-mixin': true
            }
        }
    }
};
