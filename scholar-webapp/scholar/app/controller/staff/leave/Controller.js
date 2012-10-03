Ext.define('scholar.controller.staff.leave.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized staff.leave.Controller!');
	},

	views : [ 'administration.admission.Manager' ],

	stores : [ 'administration.admission.Store' ],
	
	models : [ 'administration.admission.Model' ]

});