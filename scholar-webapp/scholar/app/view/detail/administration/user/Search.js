Ext.define('scholar.view.detail.administration.user.Search', {
	extend : 'Ext.ux.LiveSearchGridPanel',
	alias: 'widget.userSearch',
	
	store : new Ext.data.ArrayStore({
		fields : [ {
			name : 'admissionNumber',
			type : 'string'
		}, {
			name : 'studentName',
			type : 'string'
		}, {
			name : 'standard',
			type : 'string'
		}, {
			name : 'address',
			type : 'string'
		}, {
			name : 'lastChange',
			type : 'date',
			dateFormat : 'n/j h:ia'
		} ],
		data : [ [ '001/005', 'Rama', 'I', 'Blore', '9/1 12:00am' ],
				[ '001/006', 'Krishna', 'II', 'Blore', '9/1 12:00am' ],
				[ '001/007', 'Govinda', 'IV', 'Blore', '9/1 12:00am' ] ]
	}),
	columnLines : true,
	columns : [ {
		text : 'Admission Number',
		flex : 1,
		sortable : false,
		dataIndex : 'admissionNumber'
	}, {
		text : 'Name',
		width : 75,
		sortable : true,
		dataIndex : 'studentName'
	}, {
		text : 'Class',
		width : 75,
		sortable : true,
		dataIndex : 'standard'
	}, {
		text : 'Address',
		width : 75,
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

// Ext.define('scholar.view.detail.StudentSearch', {
// extend: 'scholar.view.detail.LiveSearchPanel',
// xtype : 'studentSearch',
// requires: [ 'scholar.view.detail.LiveSearchPanel' ],
//    
// store: new Ext.data.ArrayStore({
// fields: [
// {name: 'company'},
// {name: 'price', type: 'float'},
// {name: 'change', type: 'float'},
// {name: 'pctChange', type: 'float'},
// {name: 'lastChange', type: 'date', dateFormat: 'n/j h:ia'}
// ]
// }),
// columnLines: true,
// columns: [
// {
// text : 'Company',
// flex : 1,
// sortable : false,
// dataIndex: 'company'
// },
// {
// text : 'Price',
// width : 75,
// sortable : true,
// renderer : 'usMoney',
// dataIndex: 'price'
// },
// {
// text : 'Change',
// width : 75,
// sortable : true,
// dataIndex: 'change'
// },
// {
// text : '% Change',
// width : 75,
// sortable : true,
// dataIndex: 'pctChange'
// },
// {
// xtype : 'datecolumn',
// text : 'Last Updated',
// width : 85,
// sortable : true,
// dataIndex: 'lastChange'
// }
// ],
// height: 350,
// width: 600,
// title: 'Live Search Grid',
// renderTo: 'grid-example',
// viewConfig: {
// stripeRows: true
// }
// });
