Ext.define('scholar.view.detail.library.lookup.DetailsTab', {
	extend : 'Ext.form.Panel',
	alias : 'widget.bookDetailsTab',
	title : 'Book details',
	columnWidth : 0.4,
	margin : '10 10 10 10',
	xtype : 'fieldset',
	defaults : {
		width : 300,
		labelWidth : 90
	},
	defaultType : 'textfield',
	items : [ {
		name : 'isbn',
		fieldLabel : 'ISBN'
	}, {
		name : 'bookName',
		fieldLabel : 'Book Name'
	}, {
		name : 'publisher',
		fieldLabel : 'Publisher'
	}, {
		name : 'author',
		fieldLabel : 'Author'
	}, {
		name : 'addedDate',
		fieldLabel : 'Added Date',
		dateFormat : 'n/j h:ia'
	}]
});
