Ext.define('scholar.view.detail.administration.examination.ExamManager', {
	extend : 'Ext.tab.Panel',
	requires : [ 'Ext.form.*', 'Ext.data.*', 'Ext.grid.Panel',
			'Ext.layout.container.Column', 'Ext.window.Window',
			'Ext.ux.LiveSearchGridPanel','scholar.view.detail.administration.examination.ExamManagementTab' ],
	alias : 'widget.examManager',
	title : 'Examination Management',
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
