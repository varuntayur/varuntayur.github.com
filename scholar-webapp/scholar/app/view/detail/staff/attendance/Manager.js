Ext.define('scholar.view.detail.staff.attendance.Manager', {
	extend : 'Ext.tab.Panel',
	requires : [ 'Ext.window.Window','scholar.view.detail.staff.attendance.Report' ],
	alias : 'widget.staffAttendanceManager',
	title:'Attendance',
	items : [ {
		title : 'Attendance Register',
		layout:'fit',
		items : [ {
			xtype : 'staffLookup'
		} ]
	}, {
		title : 'Attendance Report',
		layout:'fit',
		items : [ {
			xtype : 'staffAttendanceReport'
		} ]
	} ]
});

