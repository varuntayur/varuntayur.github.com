Ext.define('scholar.controller.staff.timetable.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized staff.timetable.Controller!');
	},

	views : [ 'administration.admission.Manager' ],

	stores : [ 'administration.admission.Store' ],
	
	models : [ 'administration.admission.Model' ]

});