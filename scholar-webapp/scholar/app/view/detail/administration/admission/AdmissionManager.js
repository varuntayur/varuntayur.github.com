Ext.define('scholar.view.detail.administration.admission.AdmissionManager', {
	extend : 'Ext.form.Panel',
	requires : [ 'Ext.form.*', 'Ext.data.*', 'Ext.grid.Panel',
			'Ext.layout.container.Column', 'Ext.window.Window',
			'Ext.ux.LiveSearchGridPanel',
			'scholar.view.detail.administration.admission.NewAdmissionForm' ],
	alias : 'widget.admissionManager',
	frame : true,
	bodyPadding : 5,
	layout : {
		type : 'border',
		padding : 5
	},
	defaults : {
		split : true
	},
	fieldDefaults : {
		labelAlign : 'left',
		msgTarget : 'side'
	},
	title : 'Admissions',
	items : [ {
		xtype : 'livesearchgridpanel',
		region : 'center',
		store : new Ext.data.ArrayStore({
			fields : [ {
				name : 'admissionNumber',
				type : 'string'
			}, {
				name : 'studentName',
				type : 'string'
			}, {
				name : 'courseName',
				type : 'string'
			}, {
				name : 'batchName',
				type : 'string'
			}, {
				name : 'admissionDate',
				type : 'date',
				dateFormat : 'n/j h:ia'
			}, {
				name : 'lastChange',
				type : 'date',
				dateFormat : 'n/j h:ia'
			} ],
			data : [
					[ '001/001', 'Test 1 2', 'Standard 1', '2012',
							'1/5 12:00am', '1/4 12:00am' ],
					[ '001/002', 'Alpha Beta Gamma', 'Standard 2', '2012',
							'1/5 12:00am', '1/4 12:00am' ],
					[ '007/007', 'Do Re Me', 'B.E', 'CS 1', '2012',
							'1/9 12:00am', '1/8 12:00am' ] ]
		}),
		columnLines : true,
		columns : [ {
			text : 'Admission Number',
			width : 75,
			sortable : true,
			dataIndex : 'admissionNumber'
		}, {
			text : 'Student Name',
			width : 75,
			sortable : true,
			dataIndex : 'studentName'
		}, {
			text : 'Course Name',
			width : 75,
			sortable : true,
			dataIndex : 'courseName'
		}, {
			text : 'Batch Name',
			width : 75,
			sortable : true,
			dataIndex : 'batchName'
		}, {
			xtype : 'datecolumn',
			text : 'Admission Date',
			width : 85,
			sortable : true,
			dataIndex : 'admissionDate'
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
					Ext.create('Ext.window.Window', {
						title : 'New Admission',
						width : 400,
						autoScroll : true,
						constrain : true,
						items : [ {
							xtype : 'newAdmissionForm'
						} ]
					}).show();
					// cw.('form').getForm().loadRecord(records[0]);
				}
			}
		},
		dockedItems : [ {
			xtype : 'toolbar',
			dock : 'top',
			items : [ {
				xtype : 'button',
				text : 'New',
				iconCls:'x-icon-new',
				listeners : {
					click : function() {
						Ext.create('Ext.Window', {
							xtype : 'window',
							closable : true,
							minimizable : false,
							title : 'New Admission: Student Details',
							width : 400,
							autoScroll : true,
							autoRender: true,
							closeAction : 'destroy',
							constrain : true,
							items : [ {
								xtype : 'newAdmissionForm'
							} ]
						}).show();
					}
				}
			}, {
				xtype : 'button',
				text : 'Delete',
				iconCls:'x-icon-delete',
			} ]
		} ]
	} ]
});