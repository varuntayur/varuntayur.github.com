Ext.define('scholar.controller.library.lookup.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized library.lookup.Controller!');
	},

	views : [ 'library.lookup.Lookup' ],

	stores : [ 'library.lookup.SearchStore' ],
	
	models : [ 'library.lookup.SearchModel' ]

});