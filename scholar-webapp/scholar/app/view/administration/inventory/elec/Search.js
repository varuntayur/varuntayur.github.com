Ext.define('scholar.view.administration.inventory.elec.Search', {
	extend : 'Ext.ux.LiveSearchGridPanel',
	alias: 'widget.elecSearch',
	id:'inventoryElecSearch',
	requires : [ 'scholar.view.administration.inventory.elec.NewElectricInv'],
	dockedItems : [ {
		xtype : 'toolbar',
		dock : 'top',
		items : [ {
			xtype : 'button',
			iconCls:'x-icon-new',
			text : 'Add',
			listeners : {
				click : function() {
					Ext.create('Ext.Window', {
						xtype : 'window',
						closable : true,
						minimizable : false,
						title : 'New Schedule',
						layout:'fit',
						minHeight: 250,
						minWidth: 400,
						autoScroll : true,
						autoRender: true,
						closeAction : 'hide',
						constrain : true,
						items : [ {
							xtype : 'newElectricInv'
						} ]
					}).show();
				}
			}
		}, {
			xtype : 'button',
			iconCls:'x-icon-delete',
			text : 'Delete'
		} ]
	} ],
	store : 'administration.inventory.elec.SearchStore',
//		new Ext.data.ArrayStore({
//		fields : [ {
//			name : 'itemId',
//			type : 'string'
//		}, {
//			name : 'itemName',
//			type : 'string'
//		},
//		{
//			name : 'itemDescription',
//			type : 'string'
//		},
//		{
//			name : 'quantity',
//			type : 'string'
//		},
//		{
//			name : 'itemAcquisitionDate',
//			type : 'date',
//			dateFormat : 'n/j h:ia'
//		}  ],
//		data : [
//				[ 'Monitors', 'Samsung','15" LCD','100'	,'9/1 12:00am' ],
//				[ 'Monitors', 'Samsung','15" CRT','150'	,'9/1 12:00am' ],
//				[ 'Monitors', 'LG','17" CRT','100'	,'9/1 12:00am' ],
//				[ 'CPU', 'IBM','z122',	'250','9/1 12:00am' ],
//				[ 'Server', 'IBM Blade','x1','2'	,'9/1 12:00am' ] ]
//	}),
	columnLines : true,
	columns : [ {
		text : 'Item ID',
		sortable : false,
		dataIndex : 'itemId'
	}, {
		text : 'Item Name',
		width : 75,
		sortable : true,
		dataIndex : 'itemName'
	},
	{
		text : 'Item Description',
		width : 75,
		sortable : true,
		dataIndex : 'itemDescription'
	},
	{
		text : 'Quantity',
		width : 75,
		sortable : true,
		dataIndex : 'quantity'
	},
	{
		xtype : 'datecolumn',
		text : 'Acquisition Date',
		flex : 1,
		width : 85,
		sortable : true,
		dataIndex : 'itemAcquisitionDate'
	}  ],
//	listeners : {
//		selectionchange : function(model, records) {
//			if (records[0]) {
//				this.up('form').getForm().loadRecord(
//						records[0]);
//			}
//		}
//	}
});

