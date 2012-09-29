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
	}, Ext.create('Ext.form.ComboBox', {
		fieldLabel : 'Course Name',
		store : Ext.create('Ext.data.Store', {
			fields : [ 'abbr', 'courseName' ],
			data : [ {
				"abbr" : "AL",
				"courseName" : "Standard 1"
			},
			{
				"abbr" : "AL",
				"courseName" : "Standard 2"
			},
			{
				"abbr" : "AL",
				"courseName" : "Standard 3"
			},
			{
				"abbr" : "AL",
				"courseName" : "Standard 4"
			},
			{
				"abbr" : "AL",
				"courseName" : "Standard 5"
			},
			{
				"abbr" : "AL",
				"courseName" : "Standard 6"
			},
			{
				"abbr" : "AL",
				"courseName" : "Standard 7"
			},
			{
				"abbr" : "AL",
				"courseName" : "Standard 8"
			},
			{
				"abbr" : "AL",
				"courseName" : "Standard 9"
			},
			{
				"abbr" : "AL",
				"courseName" : "Standard 10"
			}
			]
		}),
		queryMode : 'local',
		displayField : 'courseName',
		valueField : 'abbr'
	}), {
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
