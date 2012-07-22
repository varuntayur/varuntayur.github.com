Ext.define('scholar.view.detail.administration.batch.Manager', {
	extend : 'Ext.form.Panel',
	requires : [ 'scholar.view.detail.administration.subject.Manager',
			'scholar.view.detail.administration.batch.DetailsTab',
			'scholar.view.detail.administration.batch.Search',
			'scholar.view.detail.administration.batch.NewBatch'],
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
				       xtype:'batchDetailsTab'
				},
				{
					title: 'Subject Setting',
					layout:'fit',
					items:[{xtype : 'subjectManager'}]

				}]
			}]			
});
