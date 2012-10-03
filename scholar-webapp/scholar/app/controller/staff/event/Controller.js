Ext.define('scholar.controller.staff.event.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized staff.event.Controller!');
	},

	views : [ 'administration.admission.Manager' ],

	stores : [ 'administration.admission.Store' ],
	
	models : [ 'administration.admission.Model' ]

});