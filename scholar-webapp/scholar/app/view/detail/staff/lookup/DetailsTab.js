Ext.define('scholar.view.detail.staff.lookup.DetailsTab', {
	extend : 'Ext.form.Panel',
	alias : 'widget.staffDetailsTab',
	title : 'Staff Details',
	columnWidth : 0.4,
	margin : '10 10 10 10',
	xtype : 'fieldset',
	defaults : {
		width : 300,
		labelWidth : 90
	},
	defaultType : 'textfield',
	items : [ {
		fieldLabel : 'Employee ID',
		name : 'employeeId'
	}, {
		fieldLabel : 'Employee Name',
		name : 'employeeName'
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
