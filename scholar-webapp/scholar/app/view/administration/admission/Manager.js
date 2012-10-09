Ext.define('scholar.view.administration.admission.Manager', {
	extend : 'Ext.form.Panel',
	requires : ['scholar.view.administration.admission.NewAdmissionForm','scholar.store.administration.admission.Store' ],
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
		id: 'admissionsGrid',
		region : 'center',
		store : 'administration.admission.Store',
		columnLines : true,
		columns : [ {
			text : 'Admission Number',
			width : 125,
			sortable : true,
			dataIndex : 'admissionNumber'
		}, {
			text : 'Student Name',
			width : 125,
			sortable : true,
			dataIndex : 'studentName'
		}, {
			text : 'Course Name',
			width : 125,
			sortable : true,
			dataIndex : 'courseName'
		}, {
			text : 'Batch Name',
			width : 125,
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
		listeners: {
//	        itemdblclick: {
//	            fn: function(View,  record, item, index, evt, eOpts ){
//	            	
////	            	var admForm = new scholar.view.detail.administration.admission.NewAdmissionForm();
////	            	admForm.load(record);
//	            	
//	            	Ext.create('Ext.Window', {
//						xtype : 'window',
//						closable : true,
//						minimizable : false,
//						title : 'New Admission: Student Details',
//						layout:'fit',
//						minHeight: 400,
//						minWidth: 400,
//						autoScroll : true,
//						autoRender: true,
//						closeAction : 'hide',
//						constrain : true,
//						items : [  {
//							xtype : 'newAdmissionForm'
//						} ]
//					}).show();
//	            }
//	        }
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
							layout:'fit',
							minHeight: 400,
							minWidth: 400,
							autoScroll : true,
							autoRender: true,
							closeAction : 'hide',
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
