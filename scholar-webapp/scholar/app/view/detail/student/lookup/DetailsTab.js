Ext.define('scholar.view.detail.student.lookup.DetailsTab', {
	extend : 'Ext.form.Panel',
	alias : 'widget.studentDetailsTab',
	title : 'Student Details',
	columnWidth : 0.4,
	margin : '10 10 10 10',
	xtype : 'fieldset',
	defaults : {
		width : 300,
		labelWidth : 90
	},
	defaultType : 'textfield',
	items : [ {
		fieldLabel : 'Admission Number',
		name : 'admissionNumber'
	}, {
		fieldLabel : 'Student Name',
		name : 'studentName'
	}, {
		fieldLabel : 'Standard',
		name : 'standard'
	}, {
		xtype : 'textarea',
		fieldLabel : 'Address',
		name : 'address'
	}, {
		xtype : 'datefield',
		fieldLabel : 'End Date',
		name : 'lastChange'
	}]
});
