Ext.define('scholar.view.administration.settings.subject.Manager', {
	extend : 'Ext.ux.LiveSearchGridPanel',
	alias: 'widget.subjectManager',
	frame : true,
	id:'settingsSubjectSearch',
	dockedItems : [ {
		xtype : 'toolbar',
		dock : 'top',
		items : [ {
			xtype : 'button',
			iconCls:'x-icon-new',
			text : 'Add',
			action:'add',
		}, {
			xtype : 'button',
			iconCls:'x-icon-delete',
			text : 'Delete',
			action:'delete',
		} ]
	} ],
	store : 'administration.settings.subject.SearchStore',
	columnLines : true,
	columns : [  {
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
	height : 250,
	width: 500,
	viewConfig : {
		stripeRows : true
	},
//	listeners: {
//        itemdblclick: {
//            fn: function(View,  record, item, index, evt, eOpts ){
//            	
//            	var admForm = new scholar.view.administration.subject.NewSubject();
//            	admForm.load(record);
//            	
//            	Ext.create('Ext.Window', {
//					xtype : 'window',
//					closable : true,
//					minimizable : false,
//					title : 'Edit Subject',
//					layout:'fit',
//					minHeight: 400,
//					minWidth: 400,
//					autoScroll : true,
//					autoRender: true,
//					closeAction : 'hide',
//					constrain : true,
//					items : [ admForm ]
//				}).show();
//            }
//        }
//    },
	
});
