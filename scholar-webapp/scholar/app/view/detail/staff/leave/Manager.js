Ext.define('scholar.view.detail.staff.leave.Manager', {
	extend : 'Ext.tab.Panel',
	requires : [ 'Ext.window.Window','scholar.view.detail.staff.leave.Search'],
	alias: 'widget.leaveManager',
//	layout: {
//        type: 'border',
//        padding: 5
//    },
//    defaults: {
//        split: true
//    },
    title:'Leave Absence Manager',
    items: [{title:'Apply Leave/Balance'},
            {title:'Approve Leaves'},
            {title:'Settings',iconCls:'x-icon-settings'}]
//            {
//		        region: 'center',	        
//		        minHeight: 80,
//		        layout:'fit',
//       			xtype: 'leaveSearch',
//       			listeners:{
//		        				selectionchange : function(model, records) {
//		    						if (records[0]) {
//		    							this.up('form').getForm().loadRecord(records[0]);
//		    						}
//		    					}
//      			}
//    		},
//    		{
//		        region: 'south',
//		        collapsible: true,
//		        split: true,
//		        height: 200,
//		        minHeight: 120,
//		        header:false,
//		        items:[{
//		        		 xtype: 'tabpanel',
//		        		 items:[{
//		        		        	title:'Leave Information',
//		        		        	layout:'fit',
//		        		        	items:[{
//		        						columnWidth : 0.4,
//		        						margin : '0 0 0 10',
//		        						xtype : 'form',
//		        						header: false,
//		        						borders: false,
//		        						frame:false,
//		        						title : 'Batch details',
//		        						defaults : {
//		        							width : 300,
//		        							labelWidth : 90
//		        						},
//		        						defaultType : 'textfield',
//		        						items : [ {
//		        							fieldLabel : 'Employee ID',
//		        							name : 'employeeId'
//		        						}, {
//		        							fieldLabel : 'Employee Name',
//		        							name : 'employeeName'
//		        						}, {
//		        							fieldLabel : 'Department',
//		        							name : 'department'
//		        						}, {
//		        							xtype : 'textarea',
//		        							fieldLabel : 'Address',
//		        							name : 'address'
//		        						}, {
//		        							xtype : 'datefield',
//		        							fieldLabel : 'End Date',
//		        							name : 'lastChange'
//		        						}]
//		        					}]
//		        		        }
//		        		       ]
//		        	}]
//    	    }]	
});

