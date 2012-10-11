Ext.define('scholar.view.administration.examination.schedule.Search', {
	extend : 'Ext.ux.LiveSearchGridPanel',
	alias: 'widget.scheduleSearch',
	id: 'examScheduleSearchGrid',
	requires : [ 'scholar.view.administration.examination.schedule.NewSchedule'],
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
	store : 'administration.examination.schedule.SearchStore',
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
//	listeners : {
//		selectionchange : function(model, records) {
//			if (records[0]) {
//				Ext.ComponentQuery.query('#scheduleDetailsTab')[0].loadRecord(records[0]);
//			}
//		}
//	}
});

