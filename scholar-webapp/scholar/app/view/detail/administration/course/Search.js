Ext.define('scholar.view.detail.administration.course.Search', {
	extend : 'Ext.ux.LiveSearchGridPanel',
	alias: 'widget.courseSearch',
	requires : [ 'scholar.view.detail.administration.course.NewCourse'],
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
						title : 'New Course',
						layout:'fit',
						minHeight: 200,
						minWidth: 400,
						autoScroll : true,
						autoRender: true,
						closeAction : 'hide',
						constrain : true,
						items : [ {
							xtype : 'newCourse'
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
			name : 'courseCode',
			type : 'string'
		}, {
			name : 'courseName',
			type : 'string'
		}, {
			name : 'lastChange',
			type : 'date',
			dateFormat : 'n/j h:ia'
		} ],
		data : [ [ '001/005', 'Standard 1', 'A', '9/1 12:00am' ],
				[ '001/006', 'Standard 2', 'C', '9/1 12:00am' ],
				[ '001/007', 'B.E', 'CS 1', '9/1 12:00am' ] ]
	}),
	columnLines : true,
	columns : [ {
		text : 'Course Code',
		sortable : false,
		dataIndex : 'courseCode'
	}, {
		text : 'Course Name',
		width : 75,
		sortable : true,
		dataIndex : 'courseName'
	}, {
		xtype : 'datecolumn',
		text : 'Last Updated',
		flex : 1,
		width : 85,
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

