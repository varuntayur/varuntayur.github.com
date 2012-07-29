Ext.define('scholar.view.detail.administration.settings.batch.Manager', {
	extend : 'Ext.form.Panel',
	requires : [ 'scholar.view.detail.administration.settings.subject.Manager',
			'scholar.view.detail.administration.settings.batch.DetailsTab',
			'scholar.view.detail.administration.settings.batch.Search',
			'scholar.view.detail.administration.settings.batch.NewBatch'],
	alias: 'widget.batchManager',
	title:'Batch',			
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
    defaults: {
        split: true
    },
	items : [{
				xtype : 'batchSearch',
				region:'center'			

			},
			{
				xtype:'tabpanel',
				region:'south',
				items:[{
				       xtype:'batchDetailsTab',
				       iconCls:'x-icon-info-details'
				},
				{
					title: 'Subject Setting',
					layout:'fit',
					iconCls:'x-icon-subject',
					items:[{xtype : 'subjectManager'}]

				}]
			}]			
});
