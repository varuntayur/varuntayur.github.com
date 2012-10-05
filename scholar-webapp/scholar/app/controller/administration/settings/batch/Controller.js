Ext.define('scholar.controller.administration.settings.batch.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized batch.Controller!');
	},

	views : [ 'administration.settings.batch.Manager' ],

	stores : [ 'administration.settings.batch.Store',
	           'administration.settings.batch.SearchStore'
	         ],
	
	models : [ 'administration.settings.batch.Model',
	           'administration.settings.batch.SearchModel'
	         ]

});