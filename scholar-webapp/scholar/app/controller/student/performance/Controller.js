Ext.define('scholar.controller.student.performance.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized student.performance.Controller!');
	},

	views : [ 'administration.admission.Manager' ],

	stores : [ 'administration.admission.Store' ],
	
	models : [ 'administration.admission.Model' ]

});