Ext.define('scholar.controller.finance.fees.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized finance.fees.Controller!');
		this.control({
			'#feeDetailSearch' : {
				itemdblclick: this.viewReceipt
			},
			'#feeDetailSearch button[action=setFeeStructure]' : {
				click: this.viewReceipt
			},
			'#feeDetailSearch button[action=newFeeCollection]' : {
				click: this.viewReceipt
			},
			'#feeDetailSearch button[action=viewReceipt]' : {
				click: this.viewReceipt
			}
		});
	},
	
	viewReceipt:function(grid,rec)
	{
		console.log('Button clicked.To be implemented.');
	},

	views : [ 'finance.fees.Manager' ],

	stores : [ 'finance.fees.SearchStore' ],
	
	models : [ 'finance.fees.SearchModel' ]

});