Ext.define('scholar.controller.administration.inventory.perishable.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized inventory.perishable.Controller!');
	},

	views : [ 'administration.admission.Manager' ],

	stores : [ 'administration.admission.SearchStore' ],
	
	models : [ 'administration.admission.SearchModel' ]

});