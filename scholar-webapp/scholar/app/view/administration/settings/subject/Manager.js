Ext.define('scholar.view.administration.settings.subject.Manager', {
	extend : 'Ext.ux.LiveSearchGridPanel',
	requires : ['scholar.view.administration.settings.subject.NewSubject' ],
	alias: 'widget.subjectManager',
	frame : true,
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
						title : 'New Subject',
						width : 400,
						autoScroll : true,
						autoRender: true,
						closeAction : 'destroy',
						constrain : true,
						items : [ {
							xtype : 'newSubjectForm'
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
	store : //'administration.settings.subject.Store',
		new Ext.data.ArrayStore({
		fields : [  {
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
				[ 'Mathematics', '1/5 12:00am','1/4 12:00am', '9/1 12:00am' ],
				[ 'Science', '1/5 12:00am','1/4 12:00am', '9/1 12:00am' ],
				[ 'Social', '1/9 12:00am','1/8 12:00am', '9/1 12:00am' ] ]
	}),
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
	viewConfig : {
		stripeRows : true
	},
	listeners: {
        itemdblclick: {
            fn: function(View,  record, item, index, evt, eOpts ){
            	
            	var admForm = new scholar.view.administration.subject.NewSubject();
            	admForm.load(record);
            	
            	Ext.create('Ext.Window', {
					xtype : 'window',
					closable : true,
					minimizable : false,
					title : 'Edit Subject',
					layout:'fit',
					minHeight: 400,
					minWidth: 400,
					autoScroll : true,
					autoRender: true,
					closeAction : 'hide',
					constrain : true,
					items : [ admForm ]
				}).show();
            }
        }
    },
	
});
