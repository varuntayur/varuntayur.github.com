Ext.define('scholar.view.staff.leave.settings.Leave', {
	extend : 'Ext.ux.LiveSearchGridPanel',
	alias: 'widget.leaveSettings',
	title:'Leave Settings',
	store : new Ext.data.ArrayStore({
		fields : [ {
			name : 'roleName',
			type : 'string'
		},
		{
			name : 'numOfSickCasualLeaves',
			type : 'string'
		},
		{
			name : 'numOfEarnedLeaves',
			type : 'string'
		},		
		{
			name : 'lastChange',
			type : 'date',
			dateFormat : 'n/j h:ia'
		} ],
		data : [
				[ 'Admin','10','1.5','1/5 12:00am' ],
				[ 'Staff','12','1.5','9/1 12:00am' ],
				[ 'Student','NA','NA','9/1 12:00am' ],
				[ 'Librarian','12','1.5','9/1 12:00am' ],
				[ 'Parent','NA','NA','9/1 12:00am' ]
			   ]
	}),
	columnLines : true,
	columns : [ {
		text : 'Role Name',
		width : 75,
		sortable : true,
		dataIndex : 'roleName'
	},
	{
		text : 'Number of Sick/Casual Leaves',
		width : 125,
		sortable : true,
		dataIndex : 'numOfSickCasualLeaves'
	},
	{
		text : 'Number of Earned Leaves',
		width : 125,
		sortable : true,
		dataIndex : 'numOfEarnedLeaves'
	},
	{
		xtype : 'datecolumn',
		text : 'Last Updated',
		width : 85,
		flex : 1,
		sortable : true,
		dataIndex : 'lastChange'
	} ],
	listeners : {
		selectionchange : function(model, records) {
		}
	}
});

