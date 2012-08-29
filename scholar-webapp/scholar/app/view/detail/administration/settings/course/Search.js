Ext.define('scholar.view.detail.administration.settings.course.Search', {
	extend : 'Ext.ux.LiveSearchGridPanel',
	alias: 'widget.courseSearch',
	requires : [ 'scholar.view.detail.administration.settings.course.NewCourse'],
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
		data : [
		        [ '001/001', 'Standard 1', '9/1 12:00am' ],
				[ '002/002', 'Standard 2',  '9/1 12:00am' ],
				[ '003/003', 'Standard 3',  '9/1 12:00am' ],
				[ '004/004', 'Standard 4',  '9/1 12:00am' ],
				[ '005/005', 'Standard 5',  '9/1 12:00am' ],
				[ '006/006', 'Standard 6',  '9/1 12:00am' ],
				[ '007/007', 'Standard 7',  '9/1 12:00am' ],
				[ '008/008', 'Standard 8',  '9/1 12:00am' ],
				[ '009/009', 'Standard 9',  '9/1 12:00am' ],
				[ '010/010', 'Standard 10', '9/1 12:00am' ]
			]
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

