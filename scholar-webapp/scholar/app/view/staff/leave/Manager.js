Ext.define('scholar.view.staff.leave.Manager', {
	extend : 'Ext.tab.Panel',
	requires : [ 
	             'scholar.view.staff.leave.report.Search',
	             'scholar.view.staff.leave.settings.Leave'],
	alias: 'widget.leaveManager',
    title:'Leave Absence Manager',
    items: [
				{
					title:'Leave Report',
					iconCls:'x-icon-report',
					xtype:'leaveSearch'
				},
            	{
            		title:'Apply Leave/Check Balance'
            	},
            	{
            		title:'Approve Leaves'
            	},
            	{
            		title:'Settings',
            		iconCls:'x-icon-settings',
            		xtype:'leaveSettings'
            	}
            	
            ]
});

