Ext.define('scholar.view.detail.library.lookup.Lookup', {
	extend : 'Ext.form.Panel',
	requires : [ 'scholar.view.detail.library.lookup.Search','scholar.view.detail.library.lookup.DetailsTab'],
	alias: 'widget.libraryLookup',
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
       			xtype: 'librarySearch',
       			listeners:{
		        				selectionchange : function(model, records) {
		    						if (records[0]) {
		    							this.up('form').getForm().loadRecord(records[0]);
		    						}
		    					}
      			}
    		},
    		{
    			xtype:'tabpanel',
				region:'south',
				items:[{
				       xtype:'bookDetailsTab',
				       iconCls:'x-icon-info-details'
				}]
    	    }]	
});

