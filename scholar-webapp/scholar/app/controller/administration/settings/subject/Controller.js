Ext.define('scholar.controller.administration.settings.subject.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized settings.subject.Controller!');
	},

	views : [ 'administration.settings.subject.Manager' ],

	stores : [ 'administration.settings.subject.SearchStore' ],

	models : [ 'administration.settings.subject.SearchModel' ]

});