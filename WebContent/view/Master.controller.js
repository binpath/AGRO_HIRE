sap.ui.controller("view.Master", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.Master
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.Master
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.Master
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.Master
*/
//	onExit: function() {
//
//	}
	
	/**
	* Called Search Help Positions
	* @memberOf view.Master
	*/	
	
	handleValueHelpPositions : function (oController) {
	    this.inputId = oController.oSource.sId;
	    // create value help dialog
	    if (!this._valueHelpDialogPositions) {
	      this._valueHelpDialogPositions = sap.ui.xmlfragment("DialogPositions","view.DialogPositions",this);
	      this.getView().addDependent(this._valueHelpDialogPositions);
	    }

	    // open value help dialog
	    this._valueHelpDialogPositions.open();
	  },
	  
	  _handleValueHelpSearchPositions : function (evt) {
		    var sValue = evt.getParameter("value");
		    var oFilter = new sap.ui.model.Filter(
		      "Plstx",
		      sap.ui.model.FilterOperator.Contains, sValue
		    );
		    evt.getSource().getBinding("items").filter([oFilter]);
		  },

		  _handleValueHelpClosePositions : function (evt) {
		    var oSelectedItem = evt.getParameter("selectedItem");
		    if (oSelectedItem) {
		      var productInput = this.getView().byId(this.inputId);
		      productInput.setValue(oSelectedItem.getTitle());
		    }
		    evt.getSource().getBinding("items").filter([]);
		  },

		/**
		* Called Search Help PersonnelArea
		* @memberOf view.Master
		*/	
			
		handleValueHelpPersonnelArea : function (oController) {
			    this.inputId = oController.oSource.sId;
			    // create value help dialog
			    if (!this._valueHelpDialogPersonnelArea) {
			      this._valueHelpDialogPersonnelArea = sap.ui.xmlfragment("DialogPersonnelArea","view.DialogPersonnelArea",this);
			      this.getView().addDependent(this._valueHelpDialogPersonnelArea);
			    }

			    // open value help dialog
			    this._valueHelpDialogPersonnelArea.open();
			  },
			  
			  _handleValueHelpSearchPersonnelArea : function (evt) {
				    var sValue = evt.getParameter("value");
				    var oFilter = new sap.ui.model.Filter(
				      "Name1",
				      sap.ui.model.FilterOperator.Contains, sValue
				    );
				    evt.getSource().getBinding("items").filter([oFilter]);
				  },

				  _handleValueHelpClosePersonnelArea : function (evt) {
				    var oSelectedItem = evt.getParameter("selectedItem");
				    if (oSelectedItem) {
				      var productInput = this.getView().byId(this.inputId);
				      productInput.setValue(oSelectedItem.getTitle());
				    }
				    evt.getSource().getBinding("items").filter([]);
				  },
				  
		/**
		* Called Search Help PersonnelGroup
		* @memberOf view.Master
		* 
		* */	
		handleValueHelpPersonnelGroup : function (oController) {
			this.inputId = oController.oSource.sId;
			// create value help dialog
			if (!this._valueHelpDialogPersonnelGroup) {
				this._valueHelpDialogPersonnelGroup = sap.ui.xmlfragment("DialogPersonnelGroup","view.DialogPersonnelGroup",this);
				this.getView().addDependent(this._valueHelpDialogPersonnelGroup);
			}

			// open value help dialog
			this._valueHelpDialogPersonnelGroup.open();
			},
					  
		_handleValueHelpSearchPersonnelGroup : function (evt) {
			var sValue = evt.getParameter("value");
			var oFilter = new sap.ui.model.Filter(
					"Ptext",
					sap.ui.model.FilterOperator.Contains, sValue
			);
			evt.getSource().getBinding("items").filter([oFilter]);
		},

		_handleValueHelpClosePersonnelGroup : function (evt) {
			var oSelectedItem = evt.getParameter("selectedItem");
			if (oSelectedItem) {
				var productInput = this.getView().byId(this.inputId);
				productInput.setValue(oSelectedItem.getTitle());
			}
			evt.getSource().getBinding("items").filter([]);
		}		  

});