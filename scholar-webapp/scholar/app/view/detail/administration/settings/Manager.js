Ext.define('scholar.view.detail.administration.settings.Manager', {
	extend : 'Ext.tab.Panel',
	requires : [ 
	             'scholar.view.detail.administration.settings.batch.Manager',		
	             'scholar.view.detail.administration.settings.course.Manager',
	             'scholar.view.detail.administration.settings.general.Manager'
	           ],
	alias : 'widget.settingsManager',
	title : 'Settings',
	frame : true,
	bodyPadding : 5,
	fieldDefaults : {
		labelAlign : 'left',
		msgTarget : 'side'
	},

	items : [
	         {
	        	 xtype : 'generalSettingsManager',
	        	 iconCls:'x-icon-settings'
	         },	        
			 {
				 xtype:'courseManager',
				 iconCls: 'x-icon-course',
			 },
			 {
					xtype:'batchManager',
					iconCls: 'x-icon-batch',
			 }
//			{
//				title : 'Reports',
//				iconCls:'x-icon-report',
//			}
		 ]
	
});
