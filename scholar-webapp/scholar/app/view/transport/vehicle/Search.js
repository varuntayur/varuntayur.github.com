Ext.define('scholar.view.transport.vehicle.Search', {
	extend : 'Ext.ux.LiveSearchGridPanel',
	alias: 'widget.vehicleSearch',
	store : new Ext.data.ArrayStore({
		fields : [ {
			name : 'vehicleNumber',
			type : 'string'
		}, {
			name : 'details',
			type : 'string'
		}, {
			name : 'lastUpdatedDate',
			type : 'date',
			dateFormat : 'n/j h:ia'
		} ],
		data : [
		        [ 'ka058145', 'Canter 48 seater',  '9/1 12:00am' ],
				[ 'ka051457', 'Swaraj Mazda 48 seater', '9/1 12:00am' ],
				[ 'ka056131', 'Force Motors 24 seater', '9/1 12:00am' ],
		        [ 'ka056130', 'Force Motors 24 seater', '9/1 12:00am' ],
		        [ 'ka056140', 'Force Motors 24 seater', '9/1 12:00am' ],
		        [ 'ka056141', 'Force Motors 24 seater', '9/1 12:00am' ]
		       ]
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

