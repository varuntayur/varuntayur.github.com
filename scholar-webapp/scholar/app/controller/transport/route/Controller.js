Ext.define('scholar.controller.transport.route.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized transport.route.Controller!');
	},

	views : [ 'administration.admission.Manager' ],

	stores : [ 'administration.admission.Store' ],
	
	models : [ 'administration.admission.Model' ]

});