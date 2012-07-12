Ext.define('scholar.view.detail.administration.batch.SubjectManager', {
	extend : 'Ext.ux.LiveSearchGridPanel',
	requires : [ 'Ext.form.*', 'Ext.data.*', 'Ext.grid.Panel',
			'Ext.layout.container.Column', 'Ext.window.Window',
			'Ext.ux.LiveSearchGridPanel' ],
	alias: 'widget.subjectManager',
	frame : true,
	bodyPadding : 5,
	fieldDefaults : {
		labelAlign : 'left',
		msgTarget : 'side'
	},
	dockedItems : [ {
		xtype : 'toolbar',
		dock : 'top',
		items : [ {
			xtype : 'button',
			iconCls:'x-icon-new',
			text : 'Add'
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
			name : 'subjectName',
			type : 'string'
		},
		{
			name : 'subjectCode',
			type : 'string'
		},
		{
			name : 'examinationRequired',
			type : 'boolean'
		},
		{
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
		text : 'Subject Name',
		width : 75,
		sortable : true,
		dataIndex : 'subjectName'
	},
	{
		text : 'Subject Code',
		width : 75,
		sortable : true,
		dataIndex : 'subjectCode'
	},
	{
		text : 'Examination Required',
		width : 75,
		sortable : true,
		dataIndex : 'examinationRequired'
	},
	{
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
	}  ],
	height : 350,
//	width : 600,
	viewConfig : {
		stripeRows : true
	}
	
});
