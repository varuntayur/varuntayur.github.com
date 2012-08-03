Ext.define('scholar.view.detail.administration.user.Search', {
	extend : 'Ext.ux.LiveSearchGridPanel',
	alias: 'widget.userSearch',
	
	getTbar :function()
    {
    	return ['Search',{
            xtype: 'textfield',
            name: 'searchField',
            hideLabel: true,
            width: 200,
            listeners: {
                change: {
                    fn: this.onTextFieldChange,
                    scope: this,
                    buffer: 100
                }
            }
       }];
    },
	
	store : new Ext.data.ArrayStore({
		fields : [  {
			name : 'userName',
			type : 'string'
		}, {
			name : 'userRole',
			type : 'string'
		}, {
			name : 'lastChange',
			type : 'date',
			dateFormat : 'n/j h:ia'
		} ],
		data : [ [ 'Rama', 'Admin',  '9/1 12:00am' ],
				[  'Krishna', 'Student',  '9/1 12:00am' ],
				[  'Govinda', 'Staff', '9/1 12:00am' ] ]
	}),
	columnLines : true,
	columns : [  {
		text : 'User Name',
		width : 75,
		sortable : true,
		dataIndex : 'userName'
	}, {
		text : 'User Role',
		width : 75,
		sortable : true,
		dataIndex : 'userRole'
	}, {
		xtype : 'datecolumn',
		text : 'Last Updated',
		width : 85,
		sortable : true,
		dataIndex : 'lastChange'
	} ],
	height : 350,
	width : 600,
	viewConfig : {
		stripeRows : true
	}
});
