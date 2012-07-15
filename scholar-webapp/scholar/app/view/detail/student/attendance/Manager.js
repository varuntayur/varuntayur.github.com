Ext.define('scholar.view.detail.student.attendance.Manager', {
	extend : 'Ext.tab.Panel',
	requires : [ 'Ext.window.Window','scholar.view.detail.student.attendance.Report' ],
	alias : 'widget.attendanceManager',
	title:'Attendance',
	items : [ {
		title : 'Attendance Register',
		layout:'fit',
		items : [ {
			xtype : 'studentSearch'
		} ]
	}, {
		title : 'Attendance Report',
		layout:'fit',
		items : [ {
			xtype : 'studentAttendanceReport'
		} ]
	} ]
});

