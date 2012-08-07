Ext.define('scholar.view.detail.finance.payroll.Manager', {
	extend : 'Ext.panel.Panel',
	alias: 'widget.payrollManager',
	requires:['scholar.view.detail.finance.payroll.Search'],
    autoScroll:true,
    layout:'fit',
    items: [
            	{
            		xtype:'payrollUserSearch',
            		layout:'fit'
            	}
		   ]	
});
