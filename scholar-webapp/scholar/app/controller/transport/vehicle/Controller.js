Ext.define('scholar.controller.transport.vehicle.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized transport.vehicle.Controller!');
	},

	views : [ 'transport.vehicle.Lookup' ],

	stores : [ 'transport.vehicle.SearchStore' ],
	
	models : [ 'transport.vehicle.SearchModel' ]

});