Ext.define('scholar.view.library.lookup.Lookup', {
	extend : 'Ext.form.Panel',
	requires : [ 'scholar.view.library.lookup.Search',
	             'scholar.view.library.lookup.Detail'],
	alias: 'widget.libraryLookup',
	title:'Lookup',
	frame : true,
	bodyPadding : 5,
	fieldDefaults : {
		labelAlign : 'left',
		msgTarget : 'side'
	},
	layout : {
		 type : 'border',
		 padding : 5
	 },
	 defaults : {
		 split : true
	 },
    items: [{
       			xtype: 'librarySearch',
       			region:'center'
    		}]
});

