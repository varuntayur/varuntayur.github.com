Ext.define('scholar.view.library.lookup.Search', {
	extend : 'Ext.ux.LiveSearchGridPanel',
	alias: 'widget.librarySearch',
	store : 'library.lookup.SearchStore',
//		new Ext.data.ArrayStore({
//		fields : [ {
//			name : 'isbn',
//			type : 'string'
//		}, {
//			name : 'bookName',
//			type : 'string'
//		}, {
//			name : 'publisher',
//			type : 'string'
//		}, {
//			name : 'author',
//			type : 'string'
//		}, {
//			name : 'addedDate',
//			type : 'date',
//			dateFormat : 'n/j h:ia'
//		} ],
//		data : [
//		        [ '001-005X-3413', 'Fun with Mathematics 1', 'Oxford', 'Agarwal', '9/1 12:00am' ],
//				[ '001-006Y-321X', 'Fun with Mathematics 2', 'Oxford', 'Agarwal', '9/1 12:00am' ],
//				[ '001-22-X345', 'Fun with Mathematics 3', 'Oxford', 'Agarwal', '9/1 12:00am' ],
//		        [ '001-22-X345', 'Fun with Mathematics 4', 'Oxford', 'Agarwal', '9/1 12:00am' ],
//		        [ '001-22-X345', 'Fun with Mathematics 5', 'Oxford', 'Agarwal', '9/1 12:00am' ],
//		        [ '001-22-X345', 'Fun with Mathematics 6', 'Oxford', 'Agarwal', '9/1 12:00am' ],
//		        [ '001-22-X345', 'Fun with Mathematics 7', 'Oxford', 'Agarwal', '9/1 12:00am' ],
//		        [ '001-22-X345', 'Fun with Science 1' , 'McGraw', 'Gupta', '9/1 12:00am' ],
//		        [ '001-22-X345', 'Fun with Science 2', 'McGraw', 'Gupta', '9/1 12:00am' ],
//		        [ '001-22-X345', 'Fun with Science 3', 'McGraw', 'Gupta', '9/1 12:00am' ],
//		        [ '001-22-X345', 'Fun with Science 4', 'McGraw', 'Gupta', '9/1 12:00am' ],
//		        [ '001-22-X345', 'Fun with Science 5', 'McGraw', 'Gupta', '9/1 12:00am' ]
//		       ]
//	}),
	columnLines : true,
	columns : [ {
		text : 'ISBN',
		flex : 1,
		sortable : false,
		dataIndex : 'isbn'
	}, {
		text : 'Name',
		width : 75,
		flex : 1,
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

