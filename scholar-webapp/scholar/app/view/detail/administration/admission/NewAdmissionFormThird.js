Ext.define('scholar.view.detail.administration.admission.NewAdmissionFormThird', {
	extend : 'Ext.form.Panel',
	requires : [ 'Ext.form.*', 'Ext.data.*', 'Ext.grid.Panel',
			'Ext.layout.container.Column', 'Ext.window.Window',
			'Ext.ux.LiveSearchGridPanel' ],
	alias : 'widget.newAdmissionFormThird',
	fieldDefaults : {
		labelAlign : 'left',
		msgTarget : 'side'
	},
	header : false,
	border : false,
	bodyPadding : 10,
	items : [ {
			flex : 1,
			name : 'previousInstitution',
			afterLabelTextTpl : false,
			fieldLabel : 'Previous Institution',
			allowBlank : false
		}, {
			width : 80,
			name : 'courseName',
			fieldLabel : 'Course Name',
			margins : '0 0 0 5'
		}, {
			flex : 2,
			name : 'Marks',
			afterLabelTextTpl : false,
			fieldLabel : 'Marks',
			allowBlank : false,
			margins : '0 0 0 5'
		}, {
		xtype : 'textareafield',
		fieldLabel : 'Other Details',
		labelAlign : 'top',
		flex : 1,
		margins : '0',
		afterLabelTextTpl : false,
		allowBlank : false
	} ],

	buttons : [
			{
				text : 'Cancel',
				handler : function() {
					this.up('form').getForm().reset();
					this.up('window').hide();
				}
			},
			,
			{
				text : ' < Back',
				handler : function() {
					this.up('window').hide();
					Ext.create('Ext.Window', {
						xtype : 'window',
						closable : true,
						minimizable : false,
						title : 'New Admission',
						width : 400,
						autoScroll : true,
						autoRender: true,
						closeAction : 'destroy',
						constrain : true,
						items : [ {
							xtype : 'newAdmissionFormSecond'
						} ]
					}).show();
				}
			},
			{
				text : 'Save',
				handler : function() {
					if (this.up('form').getForm().isValid()) {
						// this.up('form').getForm().submit();
//						this.up('form').getForm().reset();
						this.up('window').hide();
						Ext.MessageBox.alert('Thank you!',
								'Your request has been saved.');
					}
				}
			} ]
});
