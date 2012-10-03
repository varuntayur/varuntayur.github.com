Ext.define('scholar.controller.staff.leave.settings.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized staff.leave.settings.Controller!');
	},

	views : [ 'administration.admission.Manager' ],

	stores : [ 'administration.admission.Store' ],
	
	models : [ 'administration.admission.Model' ]

});