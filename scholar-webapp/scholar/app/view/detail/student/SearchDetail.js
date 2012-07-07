Ext.define('scholar.view.detail.student.SearchDetail', {
	extend : 'Ext.form.Panel',
	requires : [ 'Ext.window.Window'],
	alias: 'widget.studentSearchDetail',
	layout: {
        type: 'border',
        padding: 5
    },
    defaults: {
        split: true
    },
    items: [{
		        region: 'center',	        
		        title: 'Student Search',
		        minHeight: 80,
		        layout:'fit',
		        items: [ { 
		        			xtype: 'studentSearch',
		        			listeners:{
		        				selectionchange : function(model, records) {
		    						if (records[0]) {
		    							this.up('form').getForm().loadRecord(records[0]);
		    						}
		    					}
		        			}
		        		 } ]
    		},
    		{
		        region: 'south',
		        collapsible: true,
		        split: true,
		        height: 200,
		        minHeight: 120,
		        header:false,
		        title: 'Student Detail',
		        items:[{
		        		 xtype: 'tabpanel',
		        		 items:[{
		        		        	title:'Student Information',
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
		        							fieldLabel : 'Admission Number',
		        							name : 'admissionNumber'
		        						}, {
		        							fieldLabel : 'Student Name',
		        							name : 'studentName'
		        						}, {
		        							fieldLabel : 'Standard',
		        							name : 'standard'
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
