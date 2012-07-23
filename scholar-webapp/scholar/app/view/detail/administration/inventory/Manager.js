Ext.define('scholar.view.detail.administration.inventory.Manager', {
	extend : 'Ext.tab.Panel',
	alias: 'widget.inventoryManager',
	title:'Inventory Management',
	frame : true,
	bodyPadding : 5,
	fieldDefaults : {
		labelAlign : 'left',
		msgTarget : 'side'
	},
	layout: {
        type: 'border',
        padding: 5
    },
    defaults: {
        split: true
    },
	items : [
	         {
				title:'Infrastructure'
			},
			{
				title:'Electronics/Laboratories'
			},
			{
				title:'Perishables/Canteen'
			}
		]
});

