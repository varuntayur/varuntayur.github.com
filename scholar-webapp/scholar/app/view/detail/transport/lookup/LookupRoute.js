Ext.define('scholar.view.detail.transport.lookup.LookupRoute', {
	extend : 'Ext.form.Panel',
	requires : [ 'Ext.window.Window','scholar.view.detail.transport.lookup.Search'],
	alias: 'widget.routeLookup',
	layout: {
        type: 'border',
        padding: 5
    },
    defaults: {
        split: true
    },
    title:'Route',
    items: [{
		        region: 'center',	        
		        minHeight: 80,
		        layout:'fit',
       			xtype: 'vehicleSearch',
       			listeners:{
		        				selectionchange : function(model, records) {
		    						if (records[0]) {
		    							this.up('form').getForm().loadRecord(records[0]);
		    						}
		    					}
      			}
    		},
    		{
		        region: 'south',
		        collapsible: true,
		        split: true,
		        height: 200,
		        minHeight: 120,
		        header:false,
		        items:[{
		        		 xtype: 'tabpanel',
		        		 items:[{
		        		        	title:'Route Information',
		        		        	layout:'fit',
		        		        	items:[{
		        						columnWidth : 0.4,
		        						margin : '0 0 0 10',
		        						xtype : 'form',
		        						header: false,
		        						borders: false,
		        						frame:false,
		        						title : 'Batch details',
		        						defaults : {
		        							width : 300,
		        							labelWidth : 90
		        						},
		        						defaultType : 'textfield',
		        						items : [ {
		        							fieldLabel : 'Employee ID',
		        							name : 'employeeId'
		        						}, {
		        							fieldLabel : 'Employee Name',
		        							name : 'employeeName'
		        						}, {
		        							fieldLabel : 'Department',
		        							name : 'department'
		        						}, {
		        							xtype : 'textarea',
		        							fieldLabel : 'Address',
		        							name : 'address'
		        						}, {
		        							xtype : 'datefield',
		        							fieldLabel : 'End Date',
		        							name : 'lastChange'
		        						}]
		        					}]
		        		        }, 
		        		        {title:'Grades'}, 
		        		        {title:'Attendance'}
		        		       ]
		        	}]
    	    }]	
});

// Ext.define('scholar.view.detail.StudentSearch', {
// extend: 'scholar.view.detail.LiveSearchPanel',
// xtype : 'studentSearch',
// requires: [ 'scholar.view.detail.LiveSearchPanel' ],
//    
// store: new Ext.data.ArrayStore({
// fields: [
// {name: 'company'},
// {name: 'price', type: 'float'},
// {name: 'change', type: 'float'},
// {name: 'pctChange', type: 'float'},
// {name: 'lastChange', type: 'date', dateFormat: 'n/j h:ia'}
// ]
// }),
// columnLines: true,
// columns: [
// {
// text : 'Company',
// flex : 1,
// sortable : false,
// dataIndex: 'company'
// },
// {
// text : 'Price',
// width : 75,
// sortable : true,
// renderer : 'usMoney',
// dataIndex: 'price'
// },
// {
// text : 'Change',
// width : 75,
// sortable : true,
// dataIndex: 'change'
// },
// {
// text : '% Change',
// width : 75,
// sortable : true,
// dataIndex: 'pctChange'
// },
// {
// xtype : 'datecolumn',
// text : 'Last Updated',
// width : 85,
// sortable : true,
// dataIndex: 'lastChange'
// }
// ],
// height: 350,
// width: 600,
// title: 'Live Search Grid',
// renderTo: 'grid-example',
// viewConfig: {
// stripeRows: true
// }
// });
