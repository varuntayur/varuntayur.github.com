Ext.define('scholar.controller.student.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized student.Controller!');
	},

	views : [ 'administration.admission.Manager' ],

	stores : [ 'administration.admission.Store' ],
	
	models : [ 'administration.admission.Model' ]

});