Ext.define('scholar.controller.staff.event.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized staff.event.Controller!');
	},

	views : [ 'staff.event.Manager' ],

	stores : [ 'staff.event.MemoStore',
	           'staff.event.EventStore',
	           'administration.settings.course.Store',
	           'administration.settings.batch.Store' ],
	
	models : [ 'staff.event.MemoModel',
	           'staff.event.EventModel'
	         ]

});