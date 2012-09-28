Ext.define('scholar.view.detail.administration.examination.schedule.ScheduleTab', {
	extend : 'Ext.form.Panel',
	alias : 'widget.scheduleTab',
	title : 'Schedule',
	requires : [ 'scholar.view.detail.administration.examination.schedule.DetailsTab',
	             'scholar.view.detail.administration.examination.schedule.NewSchedule',	             
	             'scholar.view.detail.administration.examination.schedule.Search'],
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

	items : [
	         {		
	        	 	xtype:'scheduleSearch',
	        	 	region:'center'
			 },
			 {
				    xtype:'tabpanel',
					region:'south',
					items:[{
					    	   xtype:'scheduleDetailsTab',
					    	   itemId:'scheduleDetailsTab',
					    	   iconCls:'x-icon-info-details'
					}]
			 }]
});
