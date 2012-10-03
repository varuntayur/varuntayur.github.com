Ext.define('scholar.view.administration.settings.batch.NewBatch', {
	extend : 'Ext.form.Panel',
	alias : 'widget.newBatch',
	fieldDefaults : {
		labelAlign : 'left',
		msgTarget : 'side'
	},
	header : false,
	border : false,
	bodyPadding : 10,
	defaults : {
		width : 300,
		labelWidth : 90
	},
	defaultType : 'textfield',
	items : [ {
		fieldLabel : 'Batch Name',
		name : 'batchName'
	}, 
	{
		xtype:'combo',
		fieldLabel : 'Course Name',
		store : 'administration.settings.course.Store',
		queryMode : 'local',
		displayField : 'courseName',
		valueField : 'abbr'
	},
	{
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
	}],
	buttons : [
			{
				text : 'Cancel',
				handler : function() {
					this.up('form').getForm().reset();
					this.up('window').hide();
				}
			},
			{
				text : 'Save',
				handler : function() {
					if (this.up('form').getForm().isValid()) {
						this.up('window').hide();
						Ext.MessageBox.alert('Success!',
								'Your request has been saved.');
					}
				}
			} ]
});
