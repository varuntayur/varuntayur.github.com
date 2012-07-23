Ext.define('scholar.view.detail.student.attendance.Manager', {
	extend : 'Ext.tab.Panel',
	requires : ['scholar.view.detail.student.attendance.Report',
	            'scholar.view.detail.student.attendance.Register'],
	alias : 'widget.attendanceManager',
	title:'Attendance',
	items : [
	         {
				title : 'Attendance Report',
				layout:'fit',
				items : [ {
					xtype : 'studentAttendanceReport'
				} ]
	         },
	         {
				title : 'Attendance Register',
				layout:'fit',
				items : [ {
					xtype : 'studentAttendanceRegister'
				} ]
		      }
	        ]
});

