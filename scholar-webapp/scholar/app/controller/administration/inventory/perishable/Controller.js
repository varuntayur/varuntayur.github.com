Ext.define('scholar.controller.administration.inventory.perishable.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized inventory.perishable.Controller!');
	},

	views : [ 'administration.admission.Manager' ],

	stores : [ 'administration.admission.Store' ],
	
	models : [ 'administration.admission.Model' ]

});