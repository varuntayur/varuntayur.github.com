Ext.define('scholar.view.detail.staff.lookup.Search', {
	extend : 'Ext.ux.LiveSearchGridPanel',
	requires : [ 'Ext.window.Window' ],
	alias: 'widget.staffSearch',
	store : new Ext.data.ArrayStore({
		fields : [ {
			name : 'employeeId',
			type : 'string'
		}, {
			name : 'staffName',
			type : 'string'
		}, {
			name : 'department',
			type : 'string'
		}, {
			name : 'address',
			type : 'string'
		}, {
			name : 'lastChange',
			type : 'date',
			dateFormat : 'n/j h:ia'
		} ],
		data : [
		        [ '001005', 'Ram', 'CS', 'Blore', '9/1 12:00am' ],
				[ '001006', 'Murali', 'Science', 'Blore', '9/1 12:00am' ],
				[ '001007', 'Deepak', 'Mathematics', 'Blore', '9/1 12:00am' ],
		        [ '001007', 'Krishna', 'Mathematics', 'Blore', '9/1 12:00am' ],
		        [ '001007', 'Guru', 'Science', 'Blore', '9/1 12:00am' ],
		        [ '001007', 'Uday', 'Civics', 'Blore', '9/1 12:00am' ]
		      ]
	}),
	columnLines : true,
	columns : [ {
		text : 'Employee ID',		
		sortable : false,
		dataIndex : 'employeeId'
	}, {
		text : 'Name',
		width : 75,
		sortable : true,
		dataIndex : 'staffName'
	}, {
		text : 'Department',
		width : 75,
		sortable : true,
		dataIndex : 'department'
	}, {
		text : 'Address',
		width : 75,
		flex : 1,
		sortable : true,
		dataIndex : 'address'
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

