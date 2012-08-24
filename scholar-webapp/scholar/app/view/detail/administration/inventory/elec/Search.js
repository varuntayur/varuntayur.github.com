Ext.define('scholar.view.detail.administration.inventory.elec.Search', {
	extend : 'Ext.ux.LiveSearchGridPanel',
	alias: 'widget.elecSearch',
	requires : [ 'scholar.view.detail.administration.inventory.elec.NewElectricInv'],
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
	store : new Ext.data.ArrayStore({
		fields : [ {
			name : 'itemId',
			type : 'string'
		}, {
			name : 'itemName',
			type : 'string'
		},
		{
			name : 'itemDescription',
			type : 'string'
		},
		{
			name : 'Quantity',
			type : 'string'
		},
		{
			name : 'itemAcquisitionDate',
			type : 'date',
			dateFormat : 'n/j h:ia'
		}  ],
		data : [
				[ 'Standard 1', 'A',
					'Subject 1'	,'9/1 12:00am' ],
				[ 'Standard 2', 'C',
					'Subject 2',	'9/1 12:00am' ],
				[ 'B.E', 'CS 1',
					'Subject 12'	,'9/1 12:00am' ] ]
	}),
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
	listeners : {
		selectionchange : function(model, records) {
			if (records[0]) {
				this.up('form').getForm().loadRecord(
						records[0]);
			}
		}
	}
});

