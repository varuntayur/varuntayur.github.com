Ext.define('scholar.controller.student.lookup.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized student.lookup.Controller!');
	},

	views : [ 'administration.admission.Manager' ],

	stores : [ 'administration.admission.Store' ],
	
	models : [ 'administration.admission.Model' ]

});