Ext.define('scholar.controller.administration.examination.schedule.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized examination.schedule.Controller!');
	},

	views : [ 'administration.admission.Manager' ],

	stores : [ 'administration.admission.Store' ],
	
	models : [ 'administration.admission.Model' ]

});