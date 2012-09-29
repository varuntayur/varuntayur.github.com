Ext.define('scholar.view.administration.settings.batch.Search', {
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
				[ '2011', 'Standard 1', 'A', '1/5 12:00am','1/4 12:00am', '9/1 12:00am' ],
				[ '2012', 'Standard 1', 'A', '1/5 12:00am','1/4 12:00am', '9/1 12:00am' ],
				[ '2010', 'Standard 2', 'B', '1/5 12:00am','1/4 12:00am', '9/1 12:00am' ],
				[ '2010', 'Standard 3', 'A', '1/5 12:00am','1/4 12:00am', '9/1 12:00am' ],
				[ '2012', 'Standard 4', 'C', '1/5 12:00am','1/4 12:00am', '9/1 12:00am' ],
				[ '2010', 'Standard 5', 'B', '1/5 12:00am','1/4 12:00am', '9/1 12:00am' ],
				[ '2011', 'Standard 6', 'A', '1/5 12:00am','1/4 12:00am', '9/1 12:00am' ]
			   ]
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

