Ext.define('scholar.controller.administration.examination.settings.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized examination.settings.Controller!');
	},

	views : [ 'administration.admission.Manager' ],

	stores : [ 'administration.admission.Store' ],
	
	models : [ 'administration.admission.Model' ]

});