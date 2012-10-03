Ext.define('scholar.controller.library.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized library.Controller!');
	},

	views : [ 'administration.admission.Manager' ],

	stores : [ 'administration.admission.Store' ],
	
	models : [ 'administration.admission.Model' ]

});