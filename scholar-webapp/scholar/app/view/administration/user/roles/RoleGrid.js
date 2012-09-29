Ext.define('scholar.view.administration.user.roles.RoleGrid', {
	extend : 'Ext.ux.LiveSearchGridPanel',
	alias: 'widget.roleGrid',
	title:'Roles',
	requires:['scholar.view.administration.user.roles.NewRole'],
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
						title : 'New Role',
						layout:'fit',
						minHeight: 200,
						minWidth: 400,
						autoScroll : true,
						autoRender: true,
						closeAction : 'hide',
						constrain : true,
						items : [ {
							xtype : 'newRole'
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
			name : 'roleName',
			type : 'string'
		},{
			name : 'lastChange',
			type : 'date',
			dateFormat : 'n/j h:ia'
		} ],
		data : [
				[ 'Admin', '1/5 12:00am' ],
				[ 'Staff', '9/1 12:00am' ],
				[ 'Student','9/1 12:00am' ],
				[ 'Librarian','9/1 12:00am' ],
				[ 'Parent','9/1 12:00am' ]
			   ]
	}),
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
	listeners : {
		selectionchange : function(model, records) {
		}
	}
});

