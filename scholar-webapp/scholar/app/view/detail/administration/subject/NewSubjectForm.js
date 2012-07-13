Ext.define('scholar.view.detail.administration.subject.NewSubjectForm', {
	extend : 'Ext.form.Panel',
	requires : [ 'Ext.form.*', 'Ext.data.*', 'Ext.grid.Panel',
			'Ext.layout.container.Column', 'Ext.window.Window'],
	alias : 'widget.newSubjectForm',
	fieldDefaults : {
		labelAlign : 'left',
		msgTarget : 'side'
	},
	header : false,
	border : false,
	bodyPadding : 10,
	items : [ {
		xtype : 'textfield',
		fieldLabel : 'Subject Name'
	}, {
		xtype : 'textfield',
		fieldLabel : 'Subject Code',
		afterLabelTextTpl : false,
	},
	Ext.create('Ext.form.ComboBox', {
		fieldLabel : 'Examination Required',
		store : Ext.create('Ext.data.Store', {
			fields : [ 'abbr', 'name' ],
			data : [ {
				"abbr" : "AL",
				"name" : "Yes"
			}, {
				"abbr" : "AL",
				"name" : "No"
			} ]
		}),
		queryMode : 'local',
		displayField : 'name',
		valueField : 'abbr'
	}),
	{
		xtype : 'datefield',
		fieldLabel : 'Start Date'
	},
	{
		xtype : 'datefield',
		fieldLabel : 'End Date'
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
//						this.up('form').getForm().reset();
						this.up('window').hide();
						Ext.MessageBox.alert('Thank you!',
								'Your request has been saved.');
					}
				}
			} ]
});