Ext.define('scholar.view.detail.transport.route.Search', {
	extend : 'Ext.ux.LiveSearchGridPanel',
	alias: 'widget.routeSearch',
	store : new Ext.data.ArrayStore({
		fields : [
		          {
					name : 'routeNumber',
					type : 'string'
				  },
		          {
					name : 'vehicleNumber',
					type : 'string'
		          },
		          {
					name : 'Route Details',
					type : 'string'
		          },
		          {
					name : 'Driver Name',
					type : 'string'
		          },
		          {
					name : 'lastUpdatedDate',
					type : 'date',
					dateFormat : 'n/j h:ia'
		          } 
		         ],
		data : [ [ '001-005', 'Test', 'Pub 1', 'A 1', '9/1 12:00am' ],
				[ '001-006', 'Test 1', 'Pub 2', 'A 2', '9/1 12:00am' ],
				[ '001-007', 'Test 2', 'Pub 3', 'A 3', '9/1 12:00am' ] ]
	}),
	columnLines : true,
	columns : [
	           {
					text : 'Route Number',
					width : 95,
					sortable : true,
					dataIndex : 'routeNumber'
			   }, 
	           {
					text : 'Vehicle Number',
					width : 105,
					sortable : true,
					dataIndex : 'vehicleNumber'
				},
				{
					text : 'Route Details',
					width : 75,
					sortable : true,
					flex:1,
					dataIndex : 'routeDetails'
				},
				{
					text : 'Driver Name',
					width : 75,
					sortable : true,
					dataIndex : 'driverName'
				},
				{
					xtype : 'datecolumn',
					text : 'Last Updated Date',
					width : 85,
					sortable : true,
					dataIndex : 'lastUpdatedDate'
				}
			],
	viewConfig : {
		stripeRows : true
	}
});

