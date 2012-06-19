Ext.define('scholar.view.menu.Other', {
	extend : 'Ext.form.FieldSet',
	xtype : 'otherMenu',

	title : 'Other',
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
		text : 'Manage Transport'
	}, {
		xtype : 'button',
		scale : 'large',
		text : 'Issue Memo'
	}, {
		xtype : 'button',
		scale : 'large',
		text : 'Publish Events'
	}, {
		xtype : 'button',
		scale : 'large',
		text : 'User/Roles'
	} ]
});