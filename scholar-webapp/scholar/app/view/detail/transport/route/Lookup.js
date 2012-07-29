Ext.define('scholar.view.detail.transport.route.Lookup', {
	extend : 'Ext.form.Panel',
	requires : [ 'scholar.view.detail.transport.route.Search'],
	alias: 'widget.routeLookup',
	layout: {
        type: 'border',
        padding: 5
    },
    defaults: {
        split: true
    },
    title:'Route',
    items: [
            {
		        region: 'center',	        
		        minHeight: 80,
		        layout:'fit',
       			xtype: 'routeSearch',
       			listeners:{
		        				selectionchange : function(model, records) {
		    						if (records[0]) {
		    							this.up('form').getForm().loadRecord(records[0]);
		    						}
		    					}
      			}
    		}
    	    ]	
});

