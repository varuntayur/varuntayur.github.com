Ext.define('scholar.view.detail.CourseManager', {
	extend : 'Ext.form.Panel',
	requires : [ 'Ext.form.*', 'Ext.data.*', 'Ext.grid.Panel',
			'Ext.layout.container.Column', 'Ext.window.Window',
			'Ext.ux.LiveSearchGridPanel' ],
	frame : true,
	bodyPadding : 5,
	width : 550,
//	layout : 'column', // Specifies that the items will now be arranged in
						// columns
	fieldDefaults : {
		labelAlign : 'left',
		msgTarget : 'side'
	},

	items : [
			{
				xtype : 'livesearchgridpanel',
				width: 500,
				dockedItems: [{
				    xtype: 'toolbar',
				    dock: 'top',
				    items: [
				        { xtype: 'button', text: 'Add' },
				        { xtype: 'button', text: 'Delete' }
				    ]
				}],
				store : new Ext.data.ArrayStore({
					fields : [ {
						name : 'courseCode',
						type : 'string'
					}, {
						name : 'courseName',
						type : 'string'
					},  {
						name : 'lastChange',
						type : 'date',
						dateFormat : 'n/j h:ia'
					} ],
					data : [
							[ '001/005', 'Standard 1', 'A', '9/1 12:00am' ],
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
					width : 85,
					sortable : true,
					dataIndex : 'lastChange'
				} ],
				listeners: {
	                selectionchange: function(model, records) {
	                    if (records[0]) {
	                        this.up('form').getForm().loadRecord(records[0]);
	                    }
	                }
	            }

			}, {
				columnWidth : 0.4,
				margin : '0 0 0 10',
				xtype : 'fieldset',
				title : 'Course details',
				defaults : {
					width: 300,
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
			buttons: [{
	            text: 'Save'
	        },{
	            text: 'Cancel'
	        }]
});
