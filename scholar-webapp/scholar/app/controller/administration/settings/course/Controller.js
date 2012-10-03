Ext.define('scholar.controller.administration.settings.course.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized course.Controller!');
	},

	views : [ 'administration.settings.course.Manager' ],

	stores : [ 'administration.settings.batch.SearchStore',
	           'administration.settings.course.SearchStore'
	         ],
	
	models : [ 'administration.settings.course.Model',
	           'administration.settings.course.SearchModel'
	         ]

});