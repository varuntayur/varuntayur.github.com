Ext.define('scholar.view.transport.route.Search', {
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
					name : 'routeDetails',
					type : 'string'
		          },
		          {
					name : 'driverName',
					type : 'string'
		          },
		          {
					name : 'lastUpdatedDate',
					type : 'date',
					dateFormat : 'n/j h:ia'
		          } 
		         ],
		data : [
		        [ '001', 'ka058145', 'South Blore', 'Raju', '9/1 12:00am' ],
				[ '002', 'ka051457', 'North Blore', 'Rama', '9/1 12:00am' ],
				[ '003', 'ka056131 ', 'East blore', 'Krishna', '9/1 12:00am' ], 
				[ '004', 'ka056141 ', 'West blore', 'Nagesh', '9/1 12:00am' ] ,
		        [ '005', 'ka056140 ', 'South East blore', 'Ramesh', '9/1 12:00am' ], 
		        [ '005', 'ka056140 ', 'South West blore', 'Suresha', '9/1 12:00am' ] 
			]
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
					flex:1,
					sortable : true,
					dataIndex : 'lastUpdatedDate'
				}
			],
	viewConfig : {
		stripeRows : true
	}
});

