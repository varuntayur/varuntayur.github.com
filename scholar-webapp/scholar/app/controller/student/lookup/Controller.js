Ext.define('scholar.controller.student.lookup.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized student.lookup.Controller!');
		 this.control({
	            '#studentLookup': {
	            	itemdblclick: this.editStudentInfo
	            }
	        });
	},
	
	editStudentInfo: function(grid, record) {
        console.log('Double clicked on ' + record.get('studentName'));
                    
        var admForm = Ext.widget('studentDetail');
        admForm.loadRecord(record);
        
        Ext.create('Ext.Window', {
			xtype : 'window',
			closable : true,
			minimizable : false,
			title : 'Student Details',
			layout:'fit',			
			autoScroll : true,
			autoRender: true,
			closeAction : 'hide',
			constrain : true,
			items : [  admForm ]
		}).show();
    },

	views : [ 'student.lookup.Lookup' ],

	stores : [ 'student.lookup.SearchStore' ],
	
	models : [ 'student.lookup.SearchModel' ]

});