Ext.define('scholar.controller.administration.inventory.elec.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized inventory.elec.Controller!');
	},

	views : [ 'administration.admission.Manager' ],

	stores : [ 'administration.admission.SearchStore' ],
	
	models : [ 'administration.admission.SearchModel' ]

});