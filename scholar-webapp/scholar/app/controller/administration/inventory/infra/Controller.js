Ext.define('scholar.controller.administration.inventory.infra.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized inventory.infra.Controller!');
	},

	views : [ 'administration.admission.Manager' ],

	stores : [ 'administration.admission.SearchStore' ],
	
	models : [ 'administration.admission.SearchModel' ]

});