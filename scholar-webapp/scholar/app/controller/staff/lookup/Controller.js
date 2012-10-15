Ext.define('scholar.controller.staff.lookup.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized staff.lookup.Controller!');
		 this.control({
	            '#staffLookup': {
	            	itemdblclick: this.editStaffInfo
	            },
	            '#staffLookup button[action=viewStudentDetails]':{
	            	click: this.editStaffInfo
	            },
	            '#staffLookup button[action=viewAttendance]':{
	            	click: this.viewAttendance
	            },
	            '#staffLookup button[action=viewTimeTable]':{
	            	click: this.viewTimeTable
	            }
	        });
	},
	
	viewTimeTable: function(grid, record) {
                 
	     var admForm = Ext.widget('timeTableSearch');
//	     admForm.loadRecord(record);
	     
	     Ext.create('Ext.Window', {
				xtype : 'window',
				closable : true,
				minimizable : false,
				title : 'Staff Time Allotment',
				layout:'fit',			
				autoScroll : true,
				autoRender: true,
				closeAction : 'hide',
				constrain : true,
				items : [  admForm ]
			}).show();
	},
 
 	viewAttendance: function(grid, record) {
                 
	     var admForm = Ext.widget('staffAttendanceReport');
	//     admForm.loadRecord(record);
	     
	     Ext.create('Ext.Window', {
				xtype : 'window',
				closable : true,
				minimizable : false,
				title : 'Staff Attendance',
				layout:'fit',			
				autoScroll : true,
				autoRender: true,
				closeAction : 'hide',
				constrain : true,
				items : [  admForm ]
			}).show();
 	},
	
 	editStaffInfo: function(grid, record) {
                 
	     var admForm = Ext.widget('staffDetail');
	     admForm.loadRecord(record);
	     
	     Ext.create('Ext.Window', {
				xtype : 'window',
				closable : true,
				minimizable : false,
				title : 'Staff Details',
				layout:'fit',			
				autoScroll : true,
				autoRender: true,
				closeAction : 'hide',
				constrain : true,
				items : [  admForm ]
			}).show();
	},

	views : [ 'staff.lookup.Lookup','scholar.view.staff.timetable.Manager' ],

	stores : [ 'staff.lookup.SearchStore' ],
	
	models : [ 'staff.lookup.SearchModel' ]

});