	Ext.define('scholar.view.detail.administration.user.Manager', {
	extend : 'Ext.tab.Panel',
	requires:['scholar.view.detail.administration.user.Search'],
	alias: 'widget.userRoleManager',
	title:'User/Roles',
	frame : true,
	bodyPadding : 5,
	fieldDefaults : {
		labelAlign : 'left',
		msgTarget : 'side'
	},
	layout: {
        type: 'border',
        padding: 5
    },
   
	items : [
			{
				title:'User',
				layout:'border',
				defaults: {
				        split: true
				},
				items:[
				    {
				    	region:'center',
				    	xtype:'userSearch'
	   		        }, 
					{
						region:'south',
						xtype:'tabpanel',
						items:[
						       {
						    	   title: 'User Information'					
						       },
						       {
						    	   title: 'Roles'
						       },
						       {
						    	   title: 'Permissions'
						       }
						      ]
					}
				]
			},
			{
				title:'Roles/Permissions'
			}
	]
});
