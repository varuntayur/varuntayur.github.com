Ext.define('scholar.controller.finance.payroll.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized finance.payroll.Controller!');
	},

	views : [ 'administration.admission.Manager' ],

	stores : [ 'administration.admission.Store' ],
	
	models : [ 'administration.admission.Model' ]

});