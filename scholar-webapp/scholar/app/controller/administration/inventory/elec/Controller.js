Ext.define('scholar.controller.administration.inventory.elec.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized inventory.elec.Controller!');
		
		this.control({
			'#inventoryElecSearch':{
				itemdblclick: this.editInventory
			},
			'#inventoryElecSearch button[action=addElec]':{
				itemdblclick: this.addElecInventory
			},
			'#inventoryElecSearch button[action=deleteElec]':{
				itemdblclick: this.deleteElecInventory
			}
		});
	},
	
	editElecInventory: function(grid,record)
	{
		var admForm = Ext.widget('newElectricInv');
        admForm.loadRecord(record);
	
		Ext.create('Ext.Window', {
			xtype : 'window',
			closable : true,
			minimizable : false,
			title : 'New Electronic Item',
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
	
	addElecInventory: function(grid,record)
	{
		 var admForm = Ext.widget('newElectricInv');
		
		Ext.create('Ext.Window', {
			xtype : 'window',
			closable : true,
			minimizable : false,
			title : 'New Electronic Item',
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
	
	deleteElecInventory: function(grid,record)
	{
		
	},

	views : [ 'administration.inventory.elec.Search' ],

	stores : [ 'administration.inventory.elec.SearchStore' ],
	
	models : [ 'administration.inventory.elec.SearchModel' ]

});