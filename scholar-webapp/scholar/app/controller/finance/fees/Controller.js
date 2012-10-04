Ext.define('scholar.controller.finance.fees.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized finance.fees.Controller!');
	},

	views : [ 'finance.fees.Manager' ],

	stores : [ 'finance.fees.SearchStore' ],
	
	models : [ 'finance.fees.SearchModel' ]

});