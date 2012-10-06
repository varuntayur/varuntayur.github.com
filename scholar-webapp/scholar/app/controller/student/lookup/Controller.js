Ext.define('scholar.controller.student.lookup.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized student.lookup.Controller!');
	},

	views : [ 'student.lookup.Lookup' ],

	stores : [ 'student.lookup.SearchStore' ],
	
	models : [ 'student.lookup.SearchModel' ]

});