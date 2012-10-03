Ext.define('scholar.controller.transport.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized transport.Controller!');
	},

	views : [ 'administration.admission.Manager' ],

	stores : [ 'administration.admission.Store' ],
	
	models : [ 'administration.admission.Model' ]

});