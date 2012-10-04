Ext.define('scholar.controller.finance.payroll.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized finance.payroll.Controller!');
	},

	views : [ 'finance.payroll.Manager' ],

	stores : [ 'finance.payroll.SearchStore' ],
	
	models : [ 'finance.payroll.SearchModel' ]

});