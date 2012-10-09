Ext.define('scholar.controller.administration.admission.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized admission.Controller!');
		 this.control({
	            '#admissionsGrid': {
	            	itemdblclick: this.editAdmissions
	            }
	        });
	},
	
	editAdmissions: function(grid, record) {
        console.log('Double clicked on ' + record.get('studentName'));
        
        var admForm = Ext.widget('newAdmissionForm');
//        admForm.load(record);
        
        Ext.create('Ext.Window', {
			xtype : 'window',
			closable : true,
			minimizable : false,
			title : 'New Admission: Student Details',
			layout:'fit',
			minHeight: 400,
			minWidth: 400,
			autoScroll : true,
			autoRender: true,
			closeAction : 'hide',
			constrain : true,
			items : [  admForm ]
		}).show();
    },

	views : [ 'administration.admission.Manager' ],

	stores : [ 'administration.admission.Store' ],
	
	models : [ 'administration.admission.Model' ]

});