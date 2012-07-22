Ext.define('scholar.view.detail.administration.examination.schedule.ScheduleTab', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.scheduleTab',
	title : 'Schedule',
	frame : true,
	bodyPadding : 5,
	fieldDefaults : {
		labelAlign : 'left',
		msgTarget : 'side'
	},
	layout : {
		 type : 'border',
		 padding : 5
	 },
	 defaults : {
		 split : true
	 },

	items : [{		
	        	 	xtype:'scheduleSearch',
	        	 	region:'center'
			 },
			 {
				    xtype:'tabpanel',
					region:'south',
					items:[{
					    	   xtype:'scheduleDetailsTab'
					}]
			 }]
});
