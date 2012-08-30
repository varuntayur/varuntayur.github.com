Ext.define('scholar.view.detail.finance.payroll.Manager', {
	extend : 'Ext.form.Panel',
	alias: 'widget.payrollManager',
	requires:['scholar.view.detail.finance.payroll.Search'],
    autoScroll:true,
    layout: {
        type: 'border',
        padding: 5
    },
    defaults: {
        split: true
    },
    items: [
            	{
            		region:'center',
            		xtype:'payrollUserSearch',
            		layout:'fit'
            	}
		   ]	
});
