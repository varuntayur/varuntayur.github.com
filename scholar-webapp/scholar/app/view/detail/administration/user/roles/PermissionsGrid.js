Ext.define('scholar.view.detail.administration.user.roles.PermissionsGrid', {
	extend : 'Ext.ux.LiveSearchGridPanel',
	alias: 'widget.permissionsGrid',
	title:'Roles',
	store : new Ext.data.ArrayStore({
		fields : [
		          {
					name : 'formName',
					type : 'string'
		          },
//		          {
//		        	  type: 'bool',
//		              name: 'read',
//		          },
//		          {
//		        	  type: 'bool',
//		              name: 'write',
//		          },
//		          {
//		        	  type: 'bool',
//		              name: 'delete',
//		          },
		          {	
					name : 'lastChange',
					type : 'date',
					dateFormat : 'n/j h:ia'
		          }
		         ],
		data : [
				[ 'Admin',false,true,false, '1/5 12:00am' ],
				[ 'Staff',false,true,false, '9/1 12:00am' ],
				[ 'Student',false,true,false,'9/1 12:00am' ],
				[ 'Librarian',false,true,false,'9/1 12:00am' ],
				[ 'Parent',false,true,false,'9/1 12:00am' ]
			   ]
	}),
	columnLines : true,
	columns : [ {
					text : 'Role Name',
					width : 75,
					sortable : true,
					dataIndex : 'roleName'
				},
//				{
//		              xtype: 'checkcolumn',
//		              header: 'Read?',
//		              dataIndex: 'read',
//		              width: 55,
//		              stopSelection: false
//		          },
//		          {
//		              xtype: 'checkcolumn',
//		              header: 'Write?',
//		              dataIndex: 'write',
//		              width: 55,
//		              stopSelection: false
//		          },
//		          {
//		              xtype: 'checkcolumn',
//		              header: 'Delete?',
//		              dataIndex: 'delete',
//		              width: 55,
//		              stopSelection: false
//		          },
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

