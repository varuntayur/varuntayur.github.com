Ext.define('scholar.view.administration.examination.Manager', {
	extend : 'Ext.tab.Panel',
	requires : [ 'scholar.view.administration.examination.schedule.ScheduleTab',
	             'scholar.view.administration.examination.settings.SettingsTab'],
	alias : 'widget.examManager',
	title : 'Examination',
	frame : true,
	bodyPadding : 5,
	fieldDefaults : {
		labelAlign : 'left',
		msgTarget : 'side'
	},

	items : [
	         {
				xtype:'scheduleTab'
			 },
			 {
				xtype:'examSettingsTab'
			},
			{
				title : 'Reports',
				iconCls:'x-icon-report',
			} ]
	
});
