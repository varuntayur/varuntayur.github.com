Ext.define('scholar.controller.staff.event.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized staff.event.Controller!');
	},

	views : [ 'staff.event.Manager' ],

	stores : [ 'staff.event.SearchStore','administration.settings.course.Store','administration.settings.batch.Store' ],
	
	models : [ 'staff.event.SearchModel' ]

});