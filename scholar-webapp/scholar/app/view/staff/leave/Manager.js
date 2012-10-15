Ext.define('scholar.view.staff.leave.Manager', {
	extend : 'Ext.tab.Panel',
	requires : [ 
	             'scholar.view.staff.leave.report.Search',
	             'scholar.view.staff.leave.settings.Leave'],
	alias: 'widget.leaveManager',
    title:'Leave Absence Manager',
    items: [
            	{
            		title:'Settings',
            		iconCls:'x-icon-settings',
            		xtype:'leaveSettings'
            	},
            	{
            		title:'Apply Leave/Check Balance'
            	},
            	{
            		title:'Approve Leaves'
            	},
            	{
            		title:'Leave Report',
            		iconCls:'x-icon-report',
            		xtype:'leaveSearch'
            	}
            ]
});

