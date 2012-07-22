Ext.define('scholar.view.detail.administration.course.DetailsTab', {
	extend : 'Ext.form.Panel',
	alias : 'widget.courseDetailsTab',
	title : 'Course Details',
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
