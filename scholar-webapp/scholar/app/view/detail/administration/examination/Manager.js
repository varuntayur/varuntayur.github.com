Ext.define('scholar.view.detail.administration.examination.Manager', {
	extend : 'Ext.tab.Panel',
	requires : [ 'scholar.view.detail.administration.examination.schedule.DetailsTab',
	             'scholar.view.detail.administration.examination.schedule.NewSchedule',
	             'scholar.view.detail.administration.examination.schedule.ScheduleTab',
	             'scholar.view.detail.administration.examination.schedule.Search'],
	alias : 'widget.examManager',
	title : 'Examination',
	frame : true,
	bodyPadding : 5,
	fieldDefaults : {
		labelAlign : 'left',
		msgTarget : 'side'
	},

	items : [{
				xtype:'scheduleTab'
			}
			, {
				title : 'Settings',
				iconCls:'x-icon-settings'
			}, {
				title : 'Reports',
				iconCls:'x-icon-report',
			} ]
	
});