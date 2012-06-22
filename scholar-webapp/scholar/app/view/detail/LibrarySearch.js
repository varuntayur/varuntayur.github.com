Ext.define('scholar.view.detail.LibrarySearch', {
	extend : 'scholar.view.detail.LiveSearchPanel',
	requires : [ 'Ext.window.Window', 'scholar.view.detail.LiveSearchPanel' ],
	store : new Ext.data.ArrayStore({
		fields : [ {
			name : 'isbnNumber',
			type : 'string'
		}, {
			name : 'bookName',
			type : 'string'
		}, {
			name : 'publisher',
			type : 'string'
		}, {
			name : 'author',
			type : 'string'
		}, {
			name : 'addedDate',
			type : 'date',
			dateFormat : 'n/j h:ia'
		} ],
		data : [ [ '001-005', 'Test', 'Pub 1', 'A 1', '9/1 12:00am' ],
				[ '001-006', 'Test 1', 'Pub 2', 'A 2', '9/1 12:00am' ],
				[ '001-007', 'Test 2', 'Pub 3', 'A 3', '9/1 12:00am' ] ]
	}),
	columnLines : true,
	columns : [ {
		text : 'ISBN',
		flex : 1,
		sortable : false,
		dataIndex : 'isbnNumber'
	}, {
		text : 'Name',
		width : 75,
		sortable : true,
		dataIndex : 'bookName'
	}, {
		text : 'Publisher',
		width : 75,
		sortable : true,
		dataIndex : 'publisher'
	}, {
		text : 'Author',
		width : 75,
		sortable : true,
		dataIndex : 'author'
	}, {
		xtype : 'datecolumn',
		text : 'Date Added',
		width : 85,
		sortable : true,
		dataIndex : 'addedDate'
	} ],
	height : 350,
	width : 600,
	viewConfig : {
		stripeRows : true
	}
});

