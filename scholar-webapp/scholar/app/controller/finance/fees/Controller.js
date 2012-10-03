Ext.define('scholar.controller.finance.fees.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized finance.fees.Controller!');
	},

	views : [ 'administration.admission.Manager' ],

	stores : [ 'administration.admission.Store' ],
	
	models : [ 'administration.admission.Model' ]

});