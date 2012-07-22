Ext.define('scholar.view.detail.administration.examination.Manager', {
	extend : 'Ext.tab.Panel',
	requires : [ 'scholar.view.detail.administration.examination.ExamManagementTab' ],
	alias : 'widget.examManager',
	title : 'Examination',
	frame : true,
	bodyPadding : 5,
	fieldDefaults : {
		labelAlign : 'left',
		msgTarget : 'side'
	},

	items : [{
				xtype:'examManagementTab'
			}
			, {
				title : 'Settings'
			}, {
				title : 'Reports'
			} ]
	
});
