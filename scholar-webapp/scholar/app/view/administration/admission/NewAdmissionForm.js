Ext.define('scholar.view.administration.admission.NewAdmissionForm', {
	extend : 'Ext.form.Panel',
	requires : [ 'scholar.view.administration.admission.NewAdmissionFormSecond'],
	alias : 'widget.newAdmissionForm',
	fieldDefaults : {
		labelAlign : 'left',
		msgTarget : 'side'
	},
	header : false,
	border : false,
	bodyPadding : 10,
	autoScroll: true,
	items : [ {
		xtype : 'datefield',
		fieldLabel : 'Admission Date',
		name: 'admissionDate'
	},
	{
		xtype : 'textfield',
		fieldLabel : 'Admission Number',
		name: 'admissionNumber'
	},
	{
		xtype : 'textfield',
		name:'studentName',
		fieldLabel : 'Name',
		allowBlank : true
	},
	{
		xtype : 'radiogroup',
		fieldLabel : 'Sex',
		columns : 2,
		items : [ {
			boxLabel : 'Male',
			name : 'sex',
			inputValue : 'Male',
			checked : true
		}, {
			boxLabel : 'Female',
			name : 'sex',
			inputValue : 'Female'
		} ]
	}, {
		xtype:'combo',
		fieldLabel : 'Blood Group	',
		store :'administration.settings.batch.Store', 
//			Ext.create('Ext.data.Store', {
//			fields : [ 'abbr', 'name' ],
//			data : [ {
//				"abbr" : "AL",
//				"name" : "Unknown"
//			}, {
//				"abbr" : "AL",
//				"name" : "A+"
//			}, {
//				"abbr" : "AL",
//				"name" : "A-"
//			}, {
//				"abbr" : "AL",
//				"name" : "B+"
//			}, {
//				"abbr" : "AL",
//				"name" : "B-"
//			}, {
//				"abbr" : "AL",
//				"name" : "O+"
//			}, {
//				"abbr" : "AL",
//				"name" : "O-"
//			}, {
//				"abbr" : "AK",
//				"name" : "AB+"
//			}, {
//				"abbr" : "AZ",
//				"name" : "AB-"
//			} ]
//		}),
		queryMode : 'local',
		displayField : 'name',
		valueField : 'abbr'
	},
	Ext.create('Ext.form.ComboBox', {
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
	}), Ext.create('Ext.form.ComboBox', {
		fieldLabel : 'Course',
		store : Ext.create('Ext.data.Store', {
			fields : [ 'abbr', 'name' ],
			data : [ {
				"abbr" : "AL",
				"name" : "Standard 1"
			}, {
				"abbr" : "AK",
				"name" : "Standard 2"
			}, {
				"abbr" : "AZ",
				"name" : "B.E"
			} ]
		}),
		queryMode : 'local',
		displayField : 'name',
		valueField : 'abbr'
	}), Ext.create('Ext.form.ComboBox', {
		fieldLabel : 'Batch',
		store : Ext.create('Ext.data.Store', {
			fields : [ 'abbr', 'name' ],
			data : [ {
				"abbr" : "AL",
				"name" : "A"
			}, {
				"abbr" : "AK",
				"name" : "C"
			}, {
				"abbr" : "AZ",
				"name" : "CS 1"
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
		margins : '0',
		allowBlank : true
	}, {
		xtype : 'datefield',
		fieldLabel : 'Date of Birth'
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
				text : 'Next >',
				handler : function() {
					if (this.up('form').getForm().isValid()) {
						this.up('window').hide();
						Ext.create('Ext.Window', {
							xtype : 'window',
							closable : true,
							minimizable : false,
							title : 'New Admission: Parent Details',
							layout:'fit',
							minHeight: 400,
							minWidth: 400,
							autoScroll : true,
							autoRender: true,
							closeAction : 'hide',
							constrain : true,
							items : [ {
								xtype : 'newAdmissionFormSecond'
							} ]
						}).show();
					}
				}
			} ]
});
