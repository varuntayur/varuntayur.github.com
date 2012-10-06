Ext.define('scholar.view.staff.attendance.Manager', {
	extend : 'Ext.tab.Panel',
	requires : [ 
	             'scholar.view.staff.attendance.Register',
	             'scholar.view.staff.attendance.ReportGrid'],
	alias : 'widget.staffAttendanceManager',
	title:'Attendance',
	items : [			{
							title : 'Attendance Register',
							layout:'fit',
							iconCls:'x-icon-register',
							xtype : 'staffAttendanceRegister'
						 },
						 {
							title : 'Attendance Report',
							iconCls:'x-icon-report',
							layout:'fit',
							xtype : 'reportGrid'
						 }
	        ]
});

