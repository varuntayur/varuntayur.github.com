Ext.define('scholar.view.detail.administration.examination.schedule.DetailsTab', {
	extend : 'Ext.form.Panel',
	alias : 'widget.scheduleDetailsTab',
	title : 'Schedule Details',
	columnWidth : 0.4,
	margin : '10 10 10 10',
	defaults : {
		width : 300,
		labelWidth : 90
	},
	defaultType : 'textfield',
	items : [ {
		fieldLabel : 'Course Code',
		name : 'courseCode'
	}, {
		fieldLabel : 'Course Name',
		name : 'courseName'
	}, {
		xtype : 'datefield',
		fieldLabel : 'Last Updated',
		name : 'lastChange'
	} ]
});
