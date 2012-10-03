Ext.define('scholar.controller.library.lookup.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized library.lookup.Controller!');
	},

	views : [ 'administration.admission.Manager' ],

	stores : [ 'administration.admission.Store' ],
	
	models : [ 'administration.admission.Model' ]

});