Ext.define('scholar.controller.administration.admission.NewAdmissionController', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized new.admission.Controller!');		
	},

	views : [ 'administration.admission.NewAdmissionForm'
	          ],

	stores : [ 
	           'administration.admission.SearchStore'	          
	         ],
	
	models : [ 
	           'administration.admission.SearchModel'	           
	         ]

});