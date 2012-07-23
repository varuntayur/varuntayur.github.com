Ext.define('scholar.view.detail.administration.examination.schedule.Search', {
	extend : 'Ext.ux.LiveSearchGridPanel',
	alias: 'widget.scheduleSearch',
	requires : [ 'scholar.view.detail.administration.examination.schedule.NewSchedule'],
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
							xtype : 'newExamSchedule'
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
			name : 'courseName',
			type : 'string'
		}, {
			name : 'batchName',
			type : 'string'
		},
		{
			name : 'subjectName',
			type : 'string'
		},
		{
			name : 'examDate',
			type : 'date',
			dateFormat : 'n/j h:ia'
		} ],
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
		text : 'Course Name',
		sortable : false,
		dataIndex : 'courseName'
	}, {
		text : 'Batch Name',
		width : 75,
		sortable : true,
		dataIndex : 'batchName'
	},
	{
		text : 'Subject Name',
		width : 75,
		sortable : true,
		dataIndex : 'subjectName'
	},
	{
		xtype : 'datecolumn',
		text : 'Exam Date',
		flex : 1,
		width : 85,
		sortable : true,
		dataIndex : 'examDate'
	} ],
	listeners : {
		selectionchange : function(model, records) {
			if (records[0]) {
				this.up('form').getForm().loadRecord(
						records[0]);
			}
		}
	}
});

