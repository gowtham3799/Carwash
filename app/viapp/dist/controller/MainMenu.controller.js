sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/core/UIComponent","sap/m/MessageToast","sap/m/MessageBox"],function(e,t,i,o){"use strict";return e.extend("viapp.controller.MainMenu",{onInit:function(){this._oRouter=sap.ui.core.UIComponent.getRouterFor(this);this._oRouter.attachRouteMatched(this.handleRouteMatched,this);this.onPressBanner()},handleRouteMatched:function(e){},onAfterRendering:function(){this.oBundle=this.getView().getModel("i18n").getResourceBundle();this._ModelInitialLoad();this.onPressPlant();this.getPlantf4()},_ModelInitialLoad:function(){var e={SearchList:[]};var t=new sap.ui.model.json.JSONModel(e);this.getView().setModel(t,"SearchViewModel")},onPressmainHome:function(){var e=sap.ushell.Container.getService("CrossApplicationNavigation");e.toExternal({target:{shellHash:"#Shell-home"}});var t=sap.ushell.Container.getRenderer("fiori2");t.setHeaderVisibility(true,false)},onPressBanner:function(e){var i=t.getRouterFor(this);i.navTo("Home",false);if(sap.ui.Device.system.phone===true){var o=this.byId("id_CarwashtoolPage");var a=o.getSideExpanded();o.setSideExpanded(!o.getSideExpanded())}},onPressService:function(e){var o=this.getView().getModel("oGlobalModel").getProperty("/MainPlant");if(o){var a=t.getRouterFor(this);a.navTo("Services",false);if(sap.ui.Device.system.phone===true){var r=this.byId("id_CarwashtoolPage");var s=r.getSideExpanded();r.setSideExpanded(!r.getSideExpanded())}}else{i.show("Please Select plant")}},onPressReport:function(e){var o=this.getView().getModel("oGlobalModel").getProperty("/MainPlant");if(o){var a=t.getRouterFor(this);a.navTo("Report",false);if(sap.ui.Device.system.phone===true){var r=this.byId("id_CarwashtoolPage");var s=r.getSideExpanded();r.setSideExpanded(!r.getSideExpanded())}}else{i.show("Please Select plant")}},onSearchPlantF4:function(e){var t=e.getSource()._sSearchFieldValue;var i=new Array;var o=new sap.ui.model.Filter([new sap.ui.model.Filter("Plant",sap.ui.model.FilterOperator.Contains,t),new sap.ui.model.Filter("PlantName",sap.ui.model.FilterOperator.Contains,t)],false);i=o;var a=sap.ui.getCore().byId("id_PlantF4");var r=a.getBinding("items");r.filter(i)},onPressPlant:function(){if(!this.PlantF4){this.PlantF4=sap.ui.xmlfragment("viapp.fragment.PlantF4",this);this.getView().addDependent(this.PlantF4)}this.PlantF4.open()},onPlantConfirm:function(e){var t=e.getParameter("selectedItem").getBindingContext("oGlobalModel").getObject();this.getView().getModel("oGlobalModel").setProperty("/MainPlant",t.WERKS);e.getSource().getBinding("items").filter([]);var i=sap.ui.getCore().byId("id_PlantF4");var o=i.getBinding("items");o.filter([]);this.getView().getModel("oGlobalModel").setProperty("/CW_ProcessVisible",true);this.getView().getModel("oGlobalModel").setProperty("/LPG_ProcessVisible",false);this.onPressSearchCustomer()},onClosePlant:function(){var e=sap.ui.getCore().byId("id_PlantF4");var t=e.getBinding("items");t.filter([])},onSideNavButtonPress:function(){var e=this.byId("id_CarwashtoolPage");var t=e.getSideExpanded();e.setSideExpanded(!e.getSideExpanded())},_setToggleButtonTooltip:function(e){var t=this.byId("sideNavigationToggleButton");if(e){t.setTooltip("Large Size Navigation")}else{t.setTooltip("Small Size Navigation")}},onGopress:function(){var e=[{BP:"6000000175",BPType:"",Name:"Mohamed Hafiz",Mobile:"+919843647118",Email:"mohamed123@gmail.com",PlateNo:"20621",PlateCode:"A",PlateCat:"Private",Emirates:"Dubai",Manufacturer:"Range Rover",Model:"Land Rover Defender",CarType:"SEDAN",VinNo:"5871427853458734",Highlight:"None",Type:"Active"}];this.getView().getModel("SearchViewModel").getData().SearchList=e;this.getView().getModel("SearchViewModel").refresh()},onSelectCustomer:function(e){var t=e.getSource().getBindingContext("SearchViewModel").getObject();var o=this.getView().getModel("SearchViewModel").getData().SearchList;var a=this.getView().getModel("oGlobalModel");if(t.Highlight==="None"){setTimeout(function(){i.show("Seleted")},100);e.getSource().getBindingContext("SearchViewModel").getObject().Highlight="Information";a.getData().Profile_BPNo=t.BP;a.getData().Profile_BPType=t.BPType;a.getData().Profile_Name=t.Name;a.getData().Profile_Mobile=t.Mobile;a.getData().Profile_Email=t.Email;a.getData().Profile_PlateNo=t.PlateNo;a.getData().Profile_PlateCode=t.PlateCode;a.getData().Profile_Emirates=t.Emirates;a.getData().Profile_Model=t.Model;a.getData().Profile_CarType=t.CarType;a.getData().Profile_VINNo=t.VinNo;this.getView().getModel("SearchViewModel").refresh();a.refresh();for(var r=0;r<o.length;r++){if(o[r].Highlight==="None"){o[r].Type="Inactive";e.getSource().removeStyleClass("Cl_SearchCustomerBox");e.getSource().addStyleClass("Cl_SearchCustomerBoxNotSeleted")}}this.onPressCloseSearch();this._oRouter=sap.ui.core.UIComponent.getRouterFor(this);this._oRouter.navTo("Services",true);this.onPressCloseSearch()}else{setTimeout(function(){i.show("Un-Seleted")},100);e.getSource().getBindingContext("SearchViewModel").getObject().Highlight="None";for(var r=0;r<o.length;r++){if(o[r].Highlight==="None"){o[r].Type="Active";e.getSource().removeStyleClass("Cl_SearchCustomerBoxNotSeleted");e.getSource().removeStyleClass("Cl_SearchCustomerBox");e.getSource().addStyleClass("Cl_SearchCustomerBoxSeleted")}}}this.getView().getModel("SearchViewModel").refresh()},onPressSearchCustomer:function(e){var t=this.getView().getModel("oGlobalModel");if(!this.SearchVehicle){this.SearchVehicle=sap.ui.xmlfragment("viapp.fragment.SearchVehicle",this);this.getView().addDependent(this.SearchVehicle)}this.SearchVehicle.open()},onPressCreateCustomer:function(){this.SearchVehicle.close();if(!this.Create){this.Create=sap.ui.xmlfragment("viapp.fragment.CreateCustomer",this);this.getView().addDependent(this.Create)}this.Create.open()},onCancelCreateCustomer:function(){this.Create.close()},onPressCloseSearch:function(){this.SearchVehicle.close()},getPlantf4:function(){this.getView().getModel("CarwashService").read("/Plant",{success:function(e,t){this.getView().getModel("oGlobalModel").setProperty("/PlantF4Nav",e.results)}.bind(this),error:function(e){o.error(e.message)}})}})});
//# sourceMappingURL=MainMenu.controller.js.map