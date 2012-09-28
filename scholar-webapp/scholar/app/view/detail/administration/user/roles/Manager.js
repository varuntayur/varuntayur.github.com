Ext.define('scholar.view.detail.administration.user.roles.Manager', {
	extend : 'Ext.form.Panel',
	alias: 'widget.roleManager',
	requires:['scholar.view.detail.administration.user.roles.RoleGrid',
	          'scholar.view.detail.administration.user.roles.PermissionsGrid'],
	//layout:'column',
	layout: {
	      type: 'border'
	},
    autoScroll:true,
    defaults: {
        split: true
    },
    items: [
            {
		        flex: 2,
            	xtype:'roleGrid',
           		region:'center'
		    },
		    {
		    	xtype:'permissionsGrid',
		    	region: 'south'
		    }
		   ]	
});
