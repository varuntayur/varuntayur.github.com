Ext.define('scholar.controller.administration.inventory.infra.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized inventory.infra.Controller!');
		this.control({
			'#inventoryInfraSearch':{
				itemdblclick: this.editInventory
			},
			'#inventoryInfraSearch button[action=addInfra]':{
				itemdblclick: this.addInfraInventory
			},
			'#inventoryInfraSearch button[action=deleteInfra]':{
				itemdblclick: this.deleteInfraInventory
			}
		});
	},
	
	editInfraInventory: function(grid,record)
	{
		var admForm = Ext.widget('newInfratricInv');
        admForm.loadRecord(record);
	
		Ext.create('Ext.Window', {
			xtype : 'window',
			closable : true,
			minimizable : false,
			title : 'New Infrastructure Item',
			layout:'fit',
			minHeight: 250,
			minWidth: 400,
			autoScroll : true,
			autoRender: true,
			closeAction : 'hide',
			constrain : true,
			items : [ admForm ]
		}).show();
	},
	
	addInfraInventory: function(grid,record)
	{
		 var admForm = Ext.widget('newInfratricInv');
		
		Ext.create('Ext.Window', {
			xtype : 'window',
			closable : true,
			minimizable : false,
			title : 'New Infrastructure Item',
			layout:'fit',
			minHeight: 250,
			minWidth: 400,
			autoScroll : true,
			autoRender: true,
			closeAction : 'hide',
			constrain : true,
			items : [ admForm ]
		}).show();
	},
	
	deleteInfraInventory: function(grid,record)
	{
		
	},

	views : [ 'administration.admission.Manager' ],

	stores : [ 'administration.admission.SearchStore' ],
	
	models : [ 'administration.admission.SearchModel' ]

});