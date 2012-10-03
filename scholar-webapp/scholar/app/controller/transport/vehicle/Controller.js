Ext.define('scholar.controller.transport.vehicle.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized transport.vehicle.Controller!');
	},

	views : [ 'administration.admission.Manager' ],

	stores : [ 'administration.admission.Store' ],
	
	models : [ 'administration.admission.Model' ]

});