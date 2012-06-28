Ext.define('scholar.view.detail.student.AttendanceManager', {
	extend : 'Ext.tab.Panel',
	requires : [ 'Ext.window.Window' ],
	alias : 'widget.attendanceManager',
	items : [ {
		title : 'Attendance Register',
		items : [ {
			xtype : 'studentSearch'
		} ]
	}, {
		title : 'Attendance Report',
		items : [ {
			xtype : 'studentSearch'
		} ]
	} ]
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
