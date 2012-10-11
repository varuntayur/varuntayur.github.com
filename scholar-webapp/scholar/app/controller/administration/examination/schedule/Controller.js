Ext.define('scholar.controller.administration.examination.schedule.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized examination.schedule.Controller!');
		
		this.control({
            '#examScheduleSearchGrid': {
            	itemdblclick: this.editExaminationSchedule
            },
            'scheduleSearch button[action=add]' : {
            	click: this.addSchedule
            },
            'scheduleSearch button[action=delete]' : {
            	click: this.deleteSchedule
            }
            
        });
	},
	
	deleteSchedule: function()
	{
		
	},
	
	addSchedule: function()
	{
		Ext.create('Ext.Window', {
			xtype : 'window',
			closable : true,
			minimizable : false,
			title : 'Exam Schedule Details',
			layout:'fit',
			autoScroll : true,
			autoRender: true,
			closeAction : 'hide',
			constrain : true,
			items : [ {
				xtype : 'scheduleDetailsTab'
			} ]
		}).show();
	},
	
	editExaminationSchedule: function(grid, record) {
        console.log('Double clicked on ' + record.get('courseName'));
                    
        var admForm = Ext.widget('scheduleDetailsTab');
        admForm.loadRecord(record);
        
        Ext.create('Ext.Window', {
			xtype : 'window',
			closable : true,
			minimizable : false,
			title : 'Exam Schedule Details',
			layout:'fit',			
			autoScroll : true,
			autoRender: true,
			closeAction : 'hide',
			constrain : true,
			items : [  admForm ]
		}).show();
    },

	views : [ 'administration.examination.schedule.Search',
	          'administration.examination.schedule.DetailsTab' ],

	stores : [ 'administration.examination.schedule.SearchStore' ],
	
	models : [ 'administration.examination.schedule.SearchModel' ]

});