Ext.define('scholar.view.administration.user.roles.Role', {
	extend : 'Ext.ux.LiveSearchGridPanel',
	alias: 'widget.roleGrid',
	id:'userRoles',
	title:'Roles',
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
	store : 'administration.user.roles.SearchStore',
//		new Ext.data.ArrayStore({
//		fields : [ {
//			name : 'roleName',
//			type : 'string'
//		},{
//			name : 'lastChange',
//			type : 'date',
//			dateFormat : 'n/j h:ia'
//		} ],
//		data : [
//				[ 'Admin', '1/5 12:00am' ],
//				[ 'Staff', '9/1 12:00am' ],
//				[ 'Student','9/1 12:00am' ],
//				[ 'Librarian','9/1 12:00am' ],
//				[ 'Parent','9/1 12:00am' ]
//			   ]
//	}),
	columnLines : true,
	columns : [ {
		text : 'Role Name',
		width : 75,
		sortable : true,
		dataIndex : 'roleName'
	}, {
		xtype : 'datecolumn',
		text : 'Last Updated',
		width : 85,
		flex : 1,
		sortable : true,
		dataIndex : 'lastChange'
	} ],
//	listeners : {
//		selectionchange : function(model, records) {
//		}
//	}
});

