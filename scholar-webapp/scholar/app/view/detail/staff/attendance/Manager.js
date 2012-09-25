Ext.define('scholar.view.detail.staff.attendance.Manager', {
	extend : 'Ext.form.Panel',
	requires : [ 
	             'scholar.view.detail.staff.attendance.Register',
	             'scholar.view.detail.staff.attendance.ReportGrid'],
	alias : 'widget.staffAttendanceManager',
	title:'Attendance',
	items : [
	         {
	        	 xtype:'tabpanel',
	        	 items:[
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
							xtype : 'reportGrid'
						 }
	        	       ]
	         }	         
	        ]
});

