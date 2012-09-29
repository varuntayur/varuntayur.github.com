Ext.define('scholar.view.staff.leave.Manager', {
	extend : 'Ext.tab.Panel',
	requires : [ 'Ext.window.Window',
	             'scholar.view.staff.leave.Search',
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
            		title:'Apply Leave/Balance'
            	},
            	{
            		title:'Approve Leaves'
            	}           
            ]
});

