Ext.define('scholar.controller.staff.attendance.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized staff.attendance.Controller!');
	},

	views : [ 'administration.admission.Manager' ],

	stores : [ 'administration.admission.Store' ],
	
	models : [ 'administration.admission.Model' ]

});