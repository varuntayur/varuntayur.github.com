Ext.define('scholar.view.detail.administration.course.Manager', {
	extend : 'Ext.form.Panel',
	alias : 'widget.courseManager',
	title:'Course',
	frame : true,
	bodyPadding : 5,
	layout: {
        type: 'border',
        padding: 5
    },
    defaults: {
        split: true
    },
	fieldDefaults : {
		labelAlign : 'left',
		msgTarget : 'side'
	},

	items : [
			{
				xtype : 'livesearchgridpanel',
				region:'center',
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

			}, {
				columnWidth : 0.4,
				margin : '0 0 0 10',
				region:'south',
				xtype : 'fieldset',
				title : 'Course details',
				defaults : {
					width : 300,
					labelWidth : 90
				},
				defaultType : 'textfield',
				items : [ {
					fieldLabel : 'Course Code',
					name : 'courseCode'
				}, {
					fieldLabel : 'Course Name',
					name : 'courseName'
				}, {
					xtype : 'datefield',
					fieldLabel : 'Last Updated',
					name : 'lastChange'
				} ]
			} ],
	buttons : [ {
		text : 'Save'
	}, {
		text : 'Cancel'
	} ]
});
