Ext.define('scholar.view.scholarmenu', {
	extend : 'Ext.form.Panel',
	xtype : 'scholarMenu',

	requires : [ 'scholar.view.menu.Administration',
			'scholar.view.menu.Library', 'scholar.view.menu.Other',
			'scholar.view.menu.Student', 'scholar.view.menu.Staff' ],

	ui : 'sencha',
	height : 53,

	autoHeight : true,
	bodyPadding : 10,
	defaults : {
		anchor : '100%',
		labelWidth : 100
	},

	items : [ {
		xtype : 'studentMenu'
	}, {
		xtype : 'staffMenu'
	}, {
		xtype : 'administrationMenu'
	}, {
		xtype : 'libraryMenu'
	}, {
		xtype : 'otherMenu'
	} ]
});