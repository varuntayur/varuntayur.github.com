Ext.define('scholar.view.detail.administration.BatchManager', {
	extend : 'Ext.form.Panel',
	requires : [ 'Ext.form.*', 'Ext.data.*', 'Ext.grid.Panel',
			'Ext.layout.container.Column', 'Ext.window.Window',
			'Ext.ux.LiveSearchGridPanel' ],
			alias: 'widget.batchManager',
	frame : true,
	bodyPadding : 5,
	width : 550,
	// layout : 'column', // Specifies that the items will now be arranged in
	// columns
	fieldDefaults : {
		labelAlign : 'left',
		msgTarget : 'side'
	},

	items : [
			{
				xtype : 'livesearchgridpanel',
				width : 500,
				dockedItems : [ {
					xtype : 'toolbar',
					dock : 'top',
					items : [ {
						xtype : 'button',
						text : 'Add'
					}, {
						xtype : 'button',
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
				xtype : 'fieldset',
				title : 'Batch details',
				defaults : {
					width : 300,
					labelWidth : 90
				},
				defaultType : 'textfield',
				items : [ {
					fieldLabel : 'Batch Name',
					name : 'batchName'
				}, {
					fieldLabel : 'Course Name',
					name : 'courseName'
				}, {
					fieldLabel : 'Section',
					name : 'section'
				}, {
					xtype : 'datefield',
					fieldLabel : 'Start Date',
					name : 'lastChange'
				}, {
					xtype : 'datefield',
					fieldLabel : 'End Date',
					name : 'lastChange'
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
