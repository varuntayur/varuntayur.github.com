Ext.define('scholar.view.administration.examination.schedule.DetailsTab', {
	extend : 'Ext.form.Panel',
	alias : 'widget.scheduleDetailsTab',
	title : 'Schedule Details',
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
		xtype:'combo',
		fieldLabel : 'Course Name',
		store : 'administration.settings.course.Store',
		queryMode : 'local',
		displayField : 'courseName',
		valueField : 'abbr'
	},
	{ 
		xtype:'combo',
		fieldLabel : 'Batch Name',
		store :'administration.settings.batch.Store',
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
	} ]
});
