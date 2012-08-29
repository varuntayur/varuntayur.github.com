Ext.define('scholar.view.detail.administration.examination.schedule.NewSchedule', {
	extend : 'Ext.form.Panel',
	alias : 'widget.newExamSchedule',
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
	items : [
	{ 
		xtype:'combo',
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
	},
	{ 
		xtype:'combo',
		fieldLabel : 'Batch Name',
		store : Ext.create('Ext.data.Store', {
			fields : [ 'abbr', 'batchName' ],
			data : [ {
				"abbr" : "AL",
				"batchName" : "A"
			}, {
				"abbr" : "AL",
				"batchName" : "B"
			}, {
				"abbr" : "AL",
				"batchName" : "C"
			}, {
				"abbr" : "AL",
				"batchName" : "D"
			}]
		}),
		queryMode : 'local',
		displayField : 'batchName',
		valueField : 'abbr'
	},
	{ 
		xtype:'combo',
		fieldLabel : 'Subject Name',
		store : Ext.create('Ext.data.Store', {
			fields : [ 'abbr', 'subjectName' ],
			data : [ {
				"abbr" : "AL",
				"subjectName" : "Mathematics"
			}, {
				"abbr" : "AL",
				"subjectName" : "Science"
			}, {
				"abbr" : "AL",
				"subjectName" : "Social Science"
			}, {
				"abbr" : "AL",
				"subjectName" : "Civics"
			}]
		}),
		queryMode : 'local',
		displayField : 'subjectName',
		valueField : 'abbr'
	},
	{
		xtype : 'datefield',
		fieldLabel : 'Examination Date',
		name : 'examDate'
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
