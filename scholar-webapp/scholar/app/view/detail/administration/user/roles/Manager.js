Ext.define('scholar.view.detail.administration.user.roles.Manager', {
	extend : 'Ext.panel.Panel',
	alias: 'widget.roleManager',
	requires:['scholar.view.detail.administration.user.roles.RoleGrid',
	          'scholar.view.detail.administration.user.roles.PermissionsGrid'],
	layout:'column',
    autoScroll:true,
    items: [
            {
		        columnWidth: 1/3,
		        baseCls:'x-plain',
		        bodyStyle:'padding:5px 0 5px 5px',
		        items:[{xtype:'roleGrid'}]
		    },
		    {
		        columnWidth: 2/3,
		        baseCls:'x-plain',
		        bodyStyle:'padding:5px 0 5px 5px',
		        items:[{
		        	xtype:'permissionsGrid'
		        }]
		    }
		   ]	
});
