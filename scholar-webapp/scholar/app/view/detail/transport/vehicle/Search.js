Ext.define('scholar.view.detail.transport.vehicle.Search', {
	extend : 'Ext.ux.LiveSearchGridPanel',
	alias: 'widget.vehicleSearch',
	store : new Ext.data.ArrayStore({
		fields : [ {
			name : 'vehicleNumber',
			type : 'string'
		}, {
			name : 'Details',
			type : 'string'
		}, {
			name : 'lastUpdatedDate',
			type : 'date',
			dateFormat : 'n/j h:ia'
		} ],
		data : [ [ '001-005', 'Test', 'Pub 1', 'A 1', '9/1 12:00am' ],
				[ '001-006', 'Test 1', 'Pub 2', 'A 2', '9/1 12:00am' ],
				[ '001-007', 'Test 2', 'Pub 3', 'A 3', '9/1 12:00am' ] ]
	}),
	columnLines : true,
	columns : [  {
		text : 'Vehicle Number',
		width : 100,
		sortable : true,
		dataIndex : 'vehicleNumber'
	}, {
		text : 'Details',
		width : 75,
		flex:1,
		sortable : true,
		dataIndex : 'details'
	}, {
		xtype : 'datecolumn',
		text : 'Last Updated Date',
		width : 100,
		sortable : true,
		dataIndex : 'lastUpdatedDate'
	} ],
	viewConfig : {
		stripeRows : true
	}
});

