Ext.define('scholar.view.detail.administration.settings.course.Manager', {
	extend : 'Ext.form.Panel',
	requires : [ 'scholar.view.detail.administration.settings.course.DetailsTab',
	 			'scholar.view.detail.administration.settings.course.Search',
	 			'scholar.view.detail.administration.settings.course.NewCourse'],
	alias : 'widget.courseManager',
	title:'Course',
	frame : true,
	bodyPadding : 5,
	layout: {
        type: 'border',
        padding: 5
    },
    defaults: {
        split: true
    },
	fieldDefaults : {
		labelAlign : 'left',
		msgTarget : 'side'
	},

	items : [{
				xtype : 'courseSearch',
				region:'center'			
			
			},
			{
				xtype:'tabpanel',
				region:'south',
				items:[{
				       xtype:'courseDetailsTab',
				       iconCls:'x-icon-info-details'
				}]
			} ]
});
