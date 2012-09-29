Ext.define('scholar.view.administration.user.roles.PermissionsGrid', {
	extend : 'Ext.ux.LiveSearchGridPanel',
	alias: 'widget.permissionsGrid',
	requires:['Ext.ux.CheckColumn'],
	title:'Permissions',
	store : new Ext.data.ArrayStore({
		fields : [
		          {
					name : 'formName',
					type : 'string'
		          },
		          {
		        	  type: 'bool',
		              name: 'read',
		          },
		          {
		        	  type: 'bool',
		              name: 'write',
		          },
		          {
		        	  type: 'bool',
		              name: 'delete',
		          },
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
					text : 'Form Name',
					width : 75,
					dataIndex : 'formName'
				},
				{
		              xtype: 'checkcolumn',
		              header: 'Read',
		              dataIndex: 'read',
		              width: 55,
		          },
		          {
		              xtype: 'checkcolumn',
		              header: 'Write',
		              dataIndex: 'write',
		              width: 55
		          },
		          {
		              xtype: 'checkcolumn',
		              header: 'Delete',
		              dataIndex: 'delete',
		              width: 55
		          },
				{
					xtype : 'datecolumn',
					text : 'Last Updated',
					width : 85,
					flex : 1,
					dataIndex : 'lastChange'
				} ],
	listeners : {
		selectionchange : function(model, records) {
		}
	},
	plugins:Ext.create('Ext.grid.plugin.CellEditing', {
        clicksToEdit: 1
    })
});

