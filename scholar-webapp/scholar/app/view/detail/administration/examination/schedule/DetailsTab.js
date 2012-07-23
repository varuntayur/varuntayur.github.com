Ext.define('scholar.view.detail.administration.examination.schedule.DetailsTab', {
	extend : 'Ext.form.Panel',
	alias : 'widget.scheduleDetailsTab',
	title : 'Schedule Details',
	columnWidth : 0.4,
	margin : '10 10 10 10',
	defaults : {
		width : 300,
		labelWidth : 90
	},
	defaultType : 'textfield',
	items : [ { 
		xtype:'combo',
		fieldLabel : 'Course Name',
		store : Ext.create('Ext.data.Store', {
			fields : [ 'abbr', 'name' ],
			data : [ {
				"abbr" : "AL",
				"name" : "Standard 1"
			}, {
				"abbr" : "AL",
				"name" : "Standard 2"
			}, {
				"abbr" : "AL",
				"name" : "B.E"
			}]
		}),
		queryMode : 'local',
		displayField : 'name',
		valueField : 'abbr'
	},
	{ 
		xtype:'combo',
		fieldLabel : 'Batch Name',
		store : Ext.create('Ext.data.Store', {
			fields : [ 'abbr', 'name' ],
			data : [ {
				"abbr" : "AL",
				"name" : "Batch 1"
			}, {
				"abbr" : "AL",
				"name" : "Batch 2"
			}]
		}),
		queryMode : 'local',
		displayField : 'name',
		valueField : 'abbr'
	},
	{ 
		xtype:'combo',
		fieldLabel : 'Subject Name',
		store : Ext.create('Ext.data.Store', {
			fields : [ 'abbr', 'name' ],
			data : [ {
				"abbr" : "AL",
				"name" : "Subject 1"
			}, {
				"abbr" : "AL",
				"name" : "Subject 2"
			}]
		}),
		queryMode : 'local',
		displayField : 'name',
		valueField : 'abbr'
	},
	{
		xtype : 'datefield',
		fieldLabel : 'Examination Date'
	} ]
});
