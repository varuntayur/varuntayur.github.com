Ext.define('scholar.view.menu.Administration', {
	extend : 'Ext.form.Panel',
	xtype : 'administrationMenu',
	
	requires : [ 'scholar.view.detail.administration.AdmissionManager',
	             'scholar.view.detail.administration.BatchManager',
	             'scholar.view.detail.administration.CourseManager',
	             'scholar.view.detail.administration.FeeCollectionManager',
	             'scholar.view.detail.administration.InventoryManager',
	             'scholar.view.detail.administration.PayrollManager'],

	title : 'Administration',
	collapsible : true,
	defaults : {
		labelWidth : 89,
		anchor : '100%',
		layout : {
			type : 'hbox',
			defaultMargins : {
				top : 0,
				right : 5,
				bottom : 0,
				left : 0
			}
		},
		margins : '10 10 10 10'
	},
	layout : {
		type : 'hbox',
		padding : '5',
		pack : 'center',
		align : 'stretchmax'
	},
	items : [
	 {
		xtype : 'button',
		scale : 'large',
		text : 'Course',
		listeners:{
			click: function()
			{
				new Ext.Window({
			        title: 'Course Manager',
			        closable: true,
			        plain: true,
			        layout: 'fit',
			        autoRender: true,
			        items: [ new scholar.view.detail.CourseManager() ]
			    }).show();
			}
		}
	},
	 {
		xtype : 'button',
		scale : 'large',
		text : 'Batch',
		listeners:{
			click: function()
			{
				new Ext.Window({
			        title: 'Batch Manager',
			        closable: true,
			        plain: true,
			        layout: 'fit',
			        autoRender: true,
			        items: [ new scholar.view.detail.BatchManager() ]
			    }).show();
			}
		}
	},
	 {
		xtype : 'button',
		text : 'Payroll'
	}, {
		xtype : 'button',
		scale : 'medium',
		text : 'Fee Collection'
	}, 
	{
		xtype : 'button',
		scale : 'large',
		text : 'Inventory'
	}, {
		xtype : 'button',
		scale : 'large',
		text : 'Admissions'
	} ]
});