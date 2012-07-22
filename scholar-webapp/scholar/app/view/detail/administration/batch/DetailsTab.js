Ext.define('scholar.view.detail.administration.batch.DetailsTab', {
	extend : 'Ext.form.Panel',
	alias : 'widget.batchDetailsTab',
	title : 'Batch details',
	columnWidth : 0.4,
	margin : '10 10 10 10',
	xtype : 'fieldset',
	defaults : {
		width : 300,
		labelWidth : 90
	},
	defaultType : 'textfield',
	items : [ {
		fieldLabel : 'Batch Name',
		name : 'batchName'
	}, {
		fieldLabel : 'Course Name',
		name : 'courseName'
	}, {
		fieldLabel : 'Section',
		name : 'section'
	}, {
		xtype : 'datefield',
		fieldLabel : 'Start Date',
		name : 'lastChange'
	}, {
		xtype : 'datefield',
		fieldLabel : 'End Date',
		name : 'lastChange'
	}, {
		xtype : 'datefield',
		fieldLabel : 'Last Updated',
		name : 'lastChange'
	}]
});
