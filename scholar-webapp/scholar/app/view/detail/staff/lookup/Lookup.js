Ext.define('scholar.view.detail.staff.lookup.Lookup', {
	extend : 'Ext.form.Panel',
	requires : [ 'scholar.view.detail.staff.lookup.Search','scholar.view.detail.staff.lookup.DetailsTab'],
	alias: 'widget.staffLookup',
	layout: {
        type: 'border',
        padding: 5
    },
    defaults: {
        split: true
    },
    title:'Lookup',
    items: [{
		        region: 'center',	        
		        minHeight: 80,
		        layout:'fit',
       			xtype: 'staffSearch',
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
        		xtype: 'tabpanel',
		        items:[
		               {
		        			xtype: 'staffDetailsTab',
		        			iconCls:'x-icon-info-details'
		        	   },		        	  
		        	   {title:'Attendance'}		        		       
		        	]
    	    }]	
});

