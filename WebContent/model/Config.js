jQuery.sap.declare("model.Config");

model.Config = {};

/**
 * Supply here the service url of the service to fetch data from
 */
model.Config.getServiceUrl = function () {
	
	var sServiceUrl = "/sap/opu/odata/sap/ZHCM_HIRE_SRV/";
	if (window.location.hostname == "localhost") {
	      return "proxy" + sServiceUrl;
	  } else {
	      return sServiceUrl;
	  }
	
	
	return null;
};

/**
 * 
 */
(function () {
	
	// The "reponder" URL parameter defines if the app shall run with mock data
	var responderOn = jQuery.sap.getUriParameters().get("responderOn");
	
	// set the flag for later usage
	model.Config.isMock = ("true" === responderOn) || !model.Config.getServiceUrl();
}
)();