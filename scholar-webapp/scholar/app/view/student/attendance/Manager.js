Ext.define('scholar.view.student.attendance.Manager', {
	extend : 'Ext.tab.Panel',
	requires : ['scholar.view.student.attendance.Report',
	            'scholar.view.student.attendance.Register'],
	alias : 'widget.attendanceManager',
	title:'Attendance',
	items : [
	         {
				title : 'Attendance Report',
				layout:'fit',
				iconCls:'x-icon-report',
				items : [ {
					xtype : 'studentAttendanceReport'
				} ]
	         },
	         {
				title : 'Attendance Register',
				layout:'fit',
				iconCls:'x-icon-register',
				items : [ {
					xtype : 'studentAttendanceRegister'
				} ]
		      }
	        ]
});

