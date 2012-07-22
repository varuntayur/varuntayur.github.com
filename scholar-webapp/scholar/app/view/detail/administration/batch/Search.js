Ext.define('scholar.view.detail.administration.batch.Search', {
	extend : 'Ext.ux.LiveSearchGridPanel',
	alias: 'widget.batchSearch',
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
						title : 'New Batch',
						layout:'fit',
						minHeight: 400,
						minWidth: 400,
						autoScroll : true,
						autoRender: true,
						closeAction : 'hide',
						constrain : true,
						items : [ {
							xtype : 'newBatch'
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
			name : 'batchName',
			type : 'string'
		}, {
			name : 'courseName',
			type : 'string'
		}, {
			name : 'section',
			type : 'string'
		}, {
			name : 'startDate',
			type : 'date',
			dateFormat : 'n/j h:ia'
		}, {
			name : 'endDate',
			type : 'date',
			dateFormat : 'n/j h:ia'
		}, {
			name : 'lastChange',
			type : 'date',
			dateFormat : 'n/j h:ia'
		} ],
		data : [
				[ 'Batch 1', 'Standard 1', 'A', '1/5 12:00am',
						'1/4 12:00am', '9/1 12:00am' ],
				[ 'Batch 2', 'Standard 2', 'C', '1/5 12:00am',
						'1/4 12:00am', '9/1 12:00am' ],
				[ 'Batch 1', 'B.E', 'CS 1', '1/9 12:00am',
						'1/8 12:00am', '9/1 12:00am' ] ]
	}),
	columnLines : true,
	columns : [ {
		text : 'Batch Name',
		width : 75,
		sortable : true,
		dataIndex : 'batchName'
	}, {
		text : 'Course Name',
		width : 75,
		sortable : true,
		dataIndex : 'courseName'
	}, {
		text : 'Section',
		width : 75,
		sortable : true,
		dataIndex : 'section'
	}, {
		xtype : 'datecolumn',
		text : 'Start Date',
		width : 85,
		sortable : true,
		dataIndex : 'startDate'
	}, {
		xtype : 'datecolumn',
		text : 'End Date',
		width : 85,
		sortable : true,
		dataIndex : 'endDate'
	}, {
		xtype : 'datecolumn',
		text : 'Last Updated',
		width : 85,
		flex : 1,
		sortable : true,
		dataIndex : 'lastChange'
	} ],
	listeners : {
		selectionchange : function(model, records) {
			if (records[0]) {
				this.up('form').getForm().loadRecord(records[0]);
			}
		}
	}
});

