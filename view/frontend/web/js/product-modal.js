/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define(
    [
        'jquery',
        'Magento_Ui/js/modal/modal',
        'Joao_ModalProductCart/js/product-modal',
        'Joao_ModalProductCart/js/product-added',
        'mage/translate',
        'Magento_Customer/js/customer-data'
    ],
    function ($, modal, productModal, productAdded, $t, customerData) {
        return function (config) {
            let cart = customerData.get("cart")
            const modalId = $("#modal-product-info")
            let options = {
                type: 'popup',
                responsive: false,
                modalClass: 'product-modal',
                innerScroll: true,
                title: $t('Item added'),
                clickableOverlay: false,
                buttons: [
                    {
                        text: $t('Ok'),
                        class: 'action primary modal-close',
                        click: function () {
                            this.closeModal();
                            productAdded().item(false)
                        },
                    },
                ],
            };

            cart.subscribe(function () {
                changeProduct(config)
            })
            function changeProduct(product) {
                productAdded().item(product.product_sku)
            }
            modal(options, modalId)
            modalId.modal("openModal")
        }
    })
