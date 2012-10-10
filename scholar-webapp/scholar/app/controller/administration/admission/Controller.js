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
        admForm.loadRecord(record);
        
        Ext.create('Ext.Window', {
			xtype : 'window',
			closable : true,
			minimizable : false,
			title : 'New Admission: Student Details',
			layout:'fit',			
			autoScroll : true,
			autoRender: true,
			closeAction : 'hide',
			constrain : true,
			items : [  admForm ]
		}).show();
    },

	views : [ 'administration.admission.Manager',
	          'administration.admission.NewAdmissionForm'
	          ],

	stores : [ 
	           'administration.admission.SearchStore',
	           'administration.admission.BloodGroupStore',
	           'administration.admission.NationalityStore',
	           'administration.admission.CategoryStore'
	         ],
	
	models : [ 
	           'administration.admission.SearchModel',
	           'administration.admission.BloodGroupModel',
	           'administration.admission.NationalityModel',
	           'administration.admission.CategoryModel'
	         ]

});