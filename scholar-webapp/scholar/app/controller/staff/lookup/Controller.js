Ext.define('scholar.controller.staff.lookup.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized staff.lookup.Controller!');
	},

	views : [ 'administration.admission.Manager' ],

	stores : [ 'administration.admission.Store' ],
	
	models : [ 'administration.admission.Model' ]

});