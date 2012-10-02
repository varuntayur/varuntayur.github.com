Ext.define('scholar.controller.administration.admission.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized admission.Controller!');
	},

	views : [ 'administration.admission.Manager' ],

	stores : [ 'administration.admission.Store' ],
	
	models : [ 'administration.admission.Model' ]

});