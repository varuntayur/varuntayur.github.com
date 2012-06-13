Ext.define('scholar.view.scholarmenu', {
    extend: 'Ext.form.Panel',
    xtype : 'scholarmenu',
    
    ui   : 'sencha',
    height: 53,
    
    autoHeight : true,
	bodyPadding : 10,
	defaults : {
		anchor : '100%',
		labelWidth : 100
	},
	
    items: [
            {
				xtype : 'fieldset',
				title : 'Student',
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
					}
				},
				layout : {
					type : 'hbox',
					padding : '5',
					pack : 'center',
					align : 'stretchmax'
				},
				defaults : {
					margins : '10 10 10 10'
				},
				items : [ {
					xtype : 'button',
					text : 'Attendance'
				}, {
					xtype : 'button',
					scale : 'medium',
					text : 'Lookup/Search'
				}, {
					xtype : 'button',
					scale : 'large',
					text : 'Course/Examination'
				}, {
					xtype : 'button',
					scale : 'large',
					text : 'Reporting'
				} ]
			},
			{
				xtype : 'fieldset',
				title : 'Staff',
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
					}
				},
				layout : {
					type : 'hbox',
					padding : '5',
					pack : 'center',
					align : 'stretchmax'
				},
				defaults : {
					margins : '10 10 10 10'
				},
				items : [ {
					xtype : 'button',
					text : 'Attendance'
				}, {
					xtype : 'button',
					scale : 'medium',
					text : 'Lookup/Search'
				}, {
					xtype : 'button',
					scale : 'large',
					text : 'Timetable'
				},
				 {
					xtype : 'button',
					scale : 'large',
					text : 'Reporting'
				}]
			},
			{
				xtype : 'fieldset',
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
					}
				},
				layout : {
					type : 'hbox',
					padding : '5',
					pack : 'center',
					align : 'stretchmax'
				},
				defaults : {
					margins : '10 10 10 10'
				},
				items : [ {
					xtype : 'button',
					text : 'Payroll'
				}, {
					xtype : 'button',
					scale : 'medium',
					text : 'Fee Collection'
				}, {
					xtype : 'button',
					scale : 'large',
					text : 'Inventory'
				},
				{
					xtype : 'button',
					scale : 'large',
					text : 'Admissions'
				}]
			},
			{
				xtype : 'fieldset',
				title : 'Library',
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
					}
				},
				layout : {
					type : 'hbox',
					padding : '5',
					pack : 'center',
					align : 'stretchmax'
				},
				defaults : {
					margins : '10 10 10 10'
				},
				items : [ {
					xtype : 'button',
					text : 'Inventory'
				}, {
					xtype : 'button',
					scale : 'medium',
					text : 'Library Search'
				}, {
					xtype : 'button',
					scale : 'large',
					text : 'OPAC'
				} ]
			},
			{
				xtype : 'fieldset',
				title : 'Other',
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
					}
				},
				layout : {
					type : 'hbox',
					padding : '5',
					pack : 'center',
					align : 'stretchmax'
				},
				defaults : {
					margins : '10 10 10 10'
				},
				items : [ {
					xtype : 'button',
					text : 'Inventory'
				}, {
					xtype : 'button',
					scale : 'medium',
					text : 'Manage Transport'
				}, {
					xtype : 'button',
					scale : 'large',
					text : 'Issue Memo'
				},
				 {
					xtype : 'button',
					scale : 'large',
					text : 'Publish Events'
				},
				{
					xtype : 'button',
					scale : 'large',
					text : 'User/Roles'
				}]
			} 
    ]
});