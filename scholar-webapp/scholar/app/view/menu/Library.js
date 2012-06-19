Ext.define('scholar.view.menu.Library', {
	extend : 'Ext.form.FieldSet',
	xtype : 'libraryMenu',

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
	items : [ {
		xtype : 'button',
		text : 'Inventory'
	}, {
		xtype : 'button',
		scale : 'medium',
		text : 'Library Search'
	}, {
		xtype : 'button',
		scale : 'large',
		text : 'OPAC'
	} ]
});