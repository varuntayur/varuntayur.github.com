Ext.define('scholar.view.menu.Library', {
	extend : 'Ext.form.FieldSet',
	xtype : 'libraryMenu',
	
	requires : [ 'scholar.view.detail.LibrarySearch' ],

	title : 'Library',
	collapsible : true,
	defaults : {
		labelWidth : 89,
		anchor : '100%',
		layout : {
			type : 'hbox',
			defaultMargins : {
				top : 0,
				right : 5,
				bottom : 0,
				left : 0
			}
		},
		margins : '10 10 10 10'
	},
	layout : {
		type : 'hbox',
		padding : '5',
		pack : 'center',
		align : 'stretchmax'
	},
	items : [ 
	          {
		xtype : 'button',
		scale : 'medium',
		text : 'Library Search',
		listeners:{
			click: function()
			{
				new Ext.Window({
			        title: 'Lookup/Search Book(s)',
			        closable: true,
			        plain: true,
			        layout: 'fit',
			        autoRender: true,
			        items: [ new scholar.view.detail.LibrarySearch() ]
			    }).show();
			}
		}
	},{
		xtype : 'button',
		text : 'Inventory'
	},  {
		xtype : 'button',
		scale : 'large',
		text : 'OPAC'
	} ]
});