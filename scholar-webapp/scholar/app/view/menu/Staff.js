Ext.define('scholar.view.menu.Staff', {
	extend : 'Ext.form.FieldSet',
	xtype : 'staffMenu',

	title : 'Staff',
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
		text : 'Attendance'
	}, {
		xtype : 'button',
		scale : 'medium',
		text : 'Lookup/Search'
	}, {
		xtype : 'button',
		scale : 'large',
		text : 'Timetable'
	}, {
		xtype : 'button',
		scale : 'large',
		text : 'Reporting'
	} ]
});