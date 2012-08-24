Ext.define('scholar.view.detail.administration.inventory.Manager', {
	extend : 'Ext.tab.Panel',
	alias: 'widget.inventoryManager',
	title:'Inventory Management',
	
	requires:[
	          'scholar.view.detail.administration.inventory.elec.Search',
	          'scholar.view.detail.administration.inventory.infra.Search',
	          'scholar.view.detail.administration.inventory.perishable.Search'
	         ],
	frame : true,
	bodyPadding : 5,
	fieldDefaults : {
		labelAlign : 'left',
		msgTarget : 'side'
	},	
    defaults: {
        split: true
    },
	items : [
	         {
				title:'Infrastructure',
				iconCls:'x-icon-infrastructure',
				xtype:'infraSearch'
			},
			{
				title:'Electronics/Laboratories',
				iconCls:'x-icon-electronics',
				xtype:'elecSearch'
			},
			{
				title:'Perishables/Canteen',
				iconCls:'x-icon-food',
				xtype:'perishableSearch'	
			}
		]
});

