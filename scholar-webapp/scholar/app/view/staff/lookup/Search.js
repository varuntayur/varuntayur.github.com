Ext.define('scholar.view.staff.lookup.Search', {
	extend : 'Ext.ux.LiveSearchGridPanel',
	requires : [ 'Ext.window.Window' ],
	alias: 'widget.staffSearch',
	store :'staff.lookup.SearchStore',
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

