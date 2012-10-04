Ext.define('scholar.controller.transport.route.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized transport.route.Controller!');
	},

	views : [ 'transport.route.Lookup' ],

	stores : [ 'transport.route.SearchStore' ],
	
	models : [ 'transport.route.SearchModel' ]

});