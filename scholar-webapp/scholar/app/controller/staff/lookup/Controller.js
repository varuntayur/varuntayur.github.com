Ext.define('scholar.controller.staff.lookup.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized staff.lookup.Controller!');
	},

	views : [ 'staff.lookup.Lookup' ],

	stores : [ 'staff.lookup.SearchStore' ],
	
	models : [ 'staff.lookup.SearchModel' ]

});