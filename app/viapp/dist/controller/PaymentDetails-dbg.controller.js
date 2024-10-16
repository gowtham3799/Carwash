sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function (Controller, Filter, FilterOperator) {
    "use strict";

    return Controller.extend("viapp.controller.PaymentDetails", {
        onInit: function () {
            // this.removeKeyParameter();
        },
        onPressNavtoPaymentapp: function () {

            sap.m.MessageToast.show("Navigating to payment app");
            var SO_Number = "39921047";
            var MyCartTotal = "100";

            var aParameters = {
                Saleorder: "",
                Invoice: "",
                MOPType: "",
                CardNo: "",
                Authcode: "",
                TransactionMessage: ""
            };

            // Convert the array to a string (typically JSON)
            var myaParameters = JSON.stringify(aParameters);

            // let currentUrl = 'com.sap.mobile.start://navigation?resolve-type=ibn#ZCarwash-create?sap-ui-app-id-hint=scf100dt_35A045CDF1638F1A638036BF48335FC3&/Services/' + myaParameters;

            let currentUrl =
                'com.sap.mobile.start://navigation?resolve-type=ibn#viapp-display?sap-ui-app-id-hint=saas_approuter_viapp';

            // URL encode it
            let encodedReturnUrl = encodeURIComponent(currentUrl);

            // JSON object with data
            var jsonData = {
                trxnType: "SALE",
                amount: MyCartTotal,
                mode: "card",
                trxnID: SO_Number
            };

            // Convert JSON object to string
            var jsonString = JSON.stringify(jsonData);

            // Encode the JSON string to be URL-safe
            var encodedJsonString = encodeURIComponent(jsonString);

            // Construct the custom URI with encoded JSON data
            //var uri = "adnoc://pay.com/card?data=" + encodedJsonString;
            // Construct the custom URI with encoded JSON data and returnUrl

            console.log(encodedReturnUrl);

            var uri = "adnoc://pay.com/card?data=" + encodedJsonString + "&returnUrl=" + encodedReturnUrl;
            window.location.href = uri;

            /*Setting Flag*/
            // this.getView().getModel("oGlobalModel").setProperty("/PaymentDetailFlag", "X");

        },
        ongetSOdetails: function () {
            var so = this.getView().getModel("oGlobalModel").getData().SR;
            var vAuthcode = this.getView().getModel("oGlobalModel").getData().Authcode;
            this.getView().getModel("CarwashService").read("/Payment", {
                filters: [
                    new Filter("ORDERNUM_ID", FilterOperator.EQ, so)
                ],
                urlParameters: {
                    $expand: "ITEMS"
                },
                success: function (oData, oResponse) {

                    var itemsarr = oData.results[0].ITEMS.results;
                    for (var i = 0; i < itemsarr.length; i++) {
                        if (itemsarr[i].MOP_TYPE === "CARD") {
                            itemsarr[i].AUTH_CODE === vAuthcode;
                        }
                        var payload = itemsarr[i];
                        this.saveDetails(payload);
                    }

                }.bind(this),
                error: function (oError) {
                    // BusyIndicator.hide();
                    MessageBox.error(oError.message);
                }.bind(this)
            });
        },
        saveDetails: function (payload) {
            var obj = {
                "ID": payload.ID,
                "PARENT_KEY": payload.PARENT_KEY,
                "MOP_COUNTER": payload.MOP_COUNTER,
                "AMOUNT": payload.AMOUNT,
                "CURRENCY": payload.CURRENCY,
                "MOP_TYPE": payload.MOP_TYPE,
                "AUTH_CODE": payload.AUTH_CODE
            };
            var oModel = this.getView().getModel("CarwashService");
            oModel.sDefaultUpdateMethod = sap.ui.model.odata.UpdateMethod.PUT;
            var oModel = this.getView().getModel("CarwashService");
            oModelupdate("/PaymentItem", obj, {

                success: function (oData, oResponse) {
                    if (oData.ID) {
                        sap.m.MessageToast.show("Payment Details Updated successfully");
                    }
                }.bind(this),
                error: function (oError) {
                    // BusyIndicator.hide();
                    MessageBox.error(oError.message);
                }.bind(this)
            });


        },
        removeKeyParameter: function () {
            // Get the current URL
            var currentUrl = new URL(window.location.href);

            // Remove the "key" parameter
            currentUrl.searchParams.delete("key");

            // Update the URL in the address bar without reloading the page
            window.history.pushState({}, document.title, currentUrl.toString());

            var oRouter = UIComponent.getRouterFor(this);
            oRouter.navTo("Home", {}, true); // true: replace history, false: create new history entry

        }
    });

});