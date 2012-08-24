Ext.define('scholar.view.detail.staff.leave.Manager', {
	extend : 'Ext.tab.Panel',
	requires : [ 'Ext.window.Window',
	             'scholar.view.detail.staff.leave.Search',
	             'scholar.view.detail.staff.leave.settings.Leave'],
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

