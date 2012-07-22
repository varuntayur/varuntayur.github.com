Ext.define('scholar.view.detail.administration.admission.NewAdmissionFormSecond', {
	extend : 'Ext.form.Panel',
	requires : [ 'scholar.view.detail.administration.admission.NewAdmissionFormThird' ],
	alias : 'widget.newAdmissionFormSecond',
	fieldDefaults : {
		labelAlign : 'left',
		msgTarget : 'side'
	},
	header : false,
	border : false,
	bodyPadding : 10,
	autoScroll: true,
	items : [ {
		xtype : 'fieldcontainer',
		fieldLabel : 'Parent Name',
		labelStyle : 'font-weight:bold;padding:0',
		layout : 'hbox',
		defaultType : 'textfield',

		fieldDefaults : {
			labelAlign : 'top'
		},

		items : [ {
			width: 75,
			name : 'firstName',
			fieldLabel : 'First',
			allowBlank : false
		}, {
			width : 30,
			name : 'middleInitial',
			fieldLabel : 'MI',
			margins : '0 0 0 5'
		}, {
			width: 75,
			name : 'lastName',
			fieldLabel : 'Last',
			allowBlank : false,
			margins : '0 0 0 5'
		} ]
	}, {
		xtype : 'radiogroup',
		fieldLabel : 'Relation',
		columns : 1,
		items : [ {
			boxLabel : 'Father',
			name : 'rb',
			inputValue : '1',
			checked : true
		}, {
			boxLabel : 'Mother',
			name : 'rb',
			inputValue : '2'
		},
		{
			boxLabel : 'Guardian',
			name : 'rb',
			inputValue : '3'
		}]
	}, Ext.create('Ext.form.ComboBox', {
		fieldLabel : 'Blood Group	',
		store : Ext.create('Ext.data.Store', {
			fields : [ 'abbr', 'name' ],
			data : [ {
				"abbr" : "AL",
				"name" : "Unknown"
			}, {
				"abbr" : "AL",
				"name" : "A+"
			}, {
				"abbr" : "AL",
				"name" : "A-"
			}, {
				"abbr" : "AL",
				"name" : "B+"
			}, {
				"abbr" : "AL",
				"name" : "B-"
			}, {
				"abbr" : "AL",
				"name" : "O+"
			}, {
				"abbr" : "AL",
				"name" : "O-"
			}, {
				"abbr" : "AK",
				"name" : "AB+"
			}, {
				"abbr" : "AZ",
				"name" : "AB-"
			} ]
		}),
		queryMode : 'local',
		displayField : 'name',
		valueField : 'abbr'
	}), Ext.create('Ext.form.ComboBox', {
		fieldLabel : 'Nationality',
		store : Ext.create('Ext.data.Store', {
			fields : [ 'abbr', 'name' ],
			data : [ {
				"abbr" : "AL",
				"name" : "Indian"
			}, {
				"abbr" : "AK",
				"name" : "Other"
			} ]
		}),
		queryMode : 'local',
		displayField : 'name',
		valueField : 'abbr'
	}), Ext.create('Ext.form.ComboBox', {
		fieldLabel : 'Category',
		store : Ext.create('Ext.data.Store', {
			fields : [ 'abbr', 'name' ],
			data : [ {
				"abbr" : "AL",
				"name" : "General"
			}, {
				"abbr" : "AL",
				"name" : "OBC"
			}, {
				"abbr" : "AL",
				"name" : "SC"
			}, {
				"abbr" : "AL",
				"name" : "ST"
			} ]
		}),
		queryMode : 'local',
		displayField : 'name',
		valueField : 'abbr'
	}), {
		xtype : 'textfield',
		fieldLabel : 'Email Address',
		vtype : 'email',
		allowBlank : true
	}, {
		xtype : 'textareafield',
		fieldLabel : 'Address',
		allowBlank : true
	},{
		xtype : 'numberfield',
		hideTrigger:true,
		fieldLabel : 'Mobile Number',
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
							xtype : 'newAdmissionForm'
						} ]
					}).show();
				}
			},
			{
				text : 'Next >',
				handler : function() {
					if (this.up('form').getForm().isValid()) {
						this.up('window').hide();
						Ext.create('Ext.Window', {
							xtype : 'window',
							closable : true,
							minimizable : false,
							title : 'New Admission: Previous Education Details',
							layout:'fit',
							minHeight: 400,
							minWidth: 400,
							autoScroll : true,
							autoRender: true,
							closeAction : 'hide',
							constrain : true,
							items : [ {
								xtype : 'newAdmissionFormThird'
							} ]
						}).show();
					}
				}
			} ]
});
