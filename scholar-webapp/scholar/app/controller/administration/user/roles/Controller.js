Ext.define('scholar.controller.administration.user.roles.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized user.roles.Controller!');
	},

	views : [ 'administration.admission.Manager' ],

	stores : [ 'administration.admission.SearchStore' ],
	
	models : [ 'administration.admission.SearchModel' ]

});