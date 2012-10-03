Ext.define('scholar.controller.student.attendance.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized student.attendance.Controller!');
	},

	views : [ 'administration.admission.Manager' ],

	stores : [ 'administration.admission.Store' ],
	
	models : [ 'administration.admission.Model' ]

});