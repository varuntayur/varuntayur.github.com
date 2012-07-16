Ext.define('scholar.view.detail.staff.event.Manager', {
	extend : 'Ext.tab.Panel',
	requires : [ 'Ext.window.Window','scholar.view.detail.staff.event.Report' ],
	alias : 'widget.eventManager',
	title:'Event/Memo',
	items : [ {
		title : 'Event Register',
		layout:'fit',
		items : [ {
			xtype : 'memos'
		} ]
	}, {
		title : 'Memos',
		layout:'fit',
		items : [ {
			xtype : 'memos'
		} ]
	} ]
});

