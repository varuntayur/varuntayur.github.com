Ext.define('scholar.view.staff.lookup.Detail', {
	extend : 'Ext.form.Panel',
	alias : 'widget.staffDetail',
	title : 'Staff Details',
	fieldDefaults : {
		labelAlign : 'left',
		msgTarget : 'side'
	},
	header : false,
	border : false,
	bodyPadding : 10,
	autoScroll: true,
	defaultType : 'textfield',
	items : [ {
		fieldLabel : 'Employee ID',
		name : 'employeeId'
	}, {
		fieldLabel : 'Employee Name',
		name : 'staffName'
	}, {
		fieldLabel : 'Department',
		name : 'department'
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
