Ext.define('scholar.view.detail.finance.fees.Manager', {
	extend : 'Ext.panel.Panel',
	alias: 'widget.feesManager',
	requires:['scholar.view.detail.finance.fees.Search'],
    autoScroll:true,
    layout:'fit',
    items: [
            	{
            		xtype:'feeDetailSearch',
            		layout:'fit'
            	}
		   ]	
});
