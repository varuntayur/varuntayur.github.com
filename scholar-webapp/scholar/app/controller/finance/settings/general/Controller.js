Ext.define('scholar.controller.finance.settings.general.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized finance.settings.general.Controller!');
	},

	views : [ 'administration.admission.Manager' ],

	stores : [ 'administration.admission.Store' ],
	
	models : [ 'administration.admission.Model' ]

});