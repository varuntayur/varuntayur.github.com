Ext.define('scholar.view.menu.Administration', {
	extend : 'Ext.form.FieldSet',
	xtype : 'administrationMenu',

	title : 'Administration',
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
		text : 'Payroll'
	}, {
		xtype : 'button',
		scale : 'medium',
		text : 'Fee Collection'
	}, {
		xtype : 'button',
		scale : 'large',
		text : 'Inventory'
	}, {
		xtype : 'button',
		scale : 'large',
		text : 'Admissions'
	} ]
});