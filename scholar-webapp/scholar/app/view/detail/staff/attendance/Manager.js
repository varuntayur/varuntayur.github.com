Ext.define('scholar.view.detail.staff.attendance.Manager', {
	extend : 'Ext.tab.Panel',
	requires : [ 'scholar.view.detail.staff.attendance.Report',
	             'scholar.view.detail.staff.attendance.Register'],
	alias : 'widget.staffAttendanceManager',
	title:'Attendance',
	items : [
	         {
				title : 'Attendance Register',
				layout:'fit',
				iconCls:'x-icon-register',
				xtype : 'staffAttendanceRegister'
	         },
	         {
				title : 'Attendance Report',
				iconCls:'x-icon-report',
				layout:'fit',
				xtype : 'staffAttendanceReport'
	         }
	        ]
});

