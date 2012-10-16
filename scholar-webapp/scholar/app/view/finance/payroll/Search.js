Ext.define('scholar.view.finance.payroll.Search', {
	extend : 'Ext.ux.LiveSearchGridPanel',
	alias: 'widget.payrollUserSearch',
	title:'Payroll Management',
	dockedItems : [ {
		xtype : 'toolbar',
		dock : 'top',
		items : [ {
			xtype : 'button',
			iconCls:'x-icon-new',
			text : 'Set Salary Components',
			action:'setSalaryComponents',
		}, {
			xtype : 'button',
			iconCls:'x-icon-delete',
			text : 'View Payslip',
			action:'viewPayslip',
		} ]
	} ],
	getTbar :function()
    {
    	return ['Search',{
	            xtype: 'textfield',
	            name: 'searchField',
	            hideLabel: true,
	            width: 200,
	            listeners: {
	                change: {
	                    fn: this.onTextFieldChange,
	                    scope: this,
	                    buffer: 100
	                }
	            }
    		},
            {
                xtype: 'button',
                name: 'setSalary',
                text: 'Set Salary Components'
                	
            },
            {
                xtype:'button',
                name: 'viewPayslip',
                text: 'View Payslip',
                listeners : {
					click : function() {
						new Ext.Window({
							  title: 'Payslip for month of October 2012',
							  width: 640,
							  height: 400,
							  preventBodyReset: true,
							  html: '<div> <table align="center" width="100%" cellpadding="0"> <tr valign="middle" align="center"> <td bgcolor="silver"> <table width="100%" valign="middle" cellpadding="3"> <tr><td bgcolor="#cccccc" align="center"> <font><b>Your School</b></font> </td></tr> </table> </td> </tr> <tr valign="middle" align="center"><td><font><b>721,1st Main,Mahalaxmi Layout,Bangalore - 560 085</b></font></td></tr> <tr valign="middle" align="center"><td><font><b>Pay Slip for the month of October 2012</b></font></td></tr> </table><br><br><table border="0" width="100%" cellpadding="3" cellspacing="0"> <tr> <td width="20%"><b>Emp No</b></td> <td><b>: 1010</b></td> <td width="20%"><b>Name</b></td> <td width=""><b>: Krishna </b></td> </tr> <tr> <td><b>Bank Acc No</b></td> <td><b>: 194010100172</b></td> <td><b>Bank Name</b></td> <td><b>: UTI</b></td> </tr> <tr> <td><b>Location</b></td> <td><b>: BANGALORE</b></td> <td><b>Designation</b></td> <td><b>: Assistant Teacher</b></td> </tr> <tr> <td><b>Department</b></td> <td><b>: Global</b></td> <td><b>PF No</b></td> <td><b>: KN/BN/19966/1014</b></td> </tr> </table><br><table width="100%" cellspacing="0" cellpadding="0" bgcolor="linen"> <tr height="26"> <td colspan="2"> <table width="100%" cellpadding="5" cellspacing="0" border="1"><tr> <th width="75%">Earnings</th> <th width="25%">Rs.</th> </tr></table> </td> <td colspan="2"> <table width="100%" cellpadding="5" cellspacing="0" border="1"><tr> <th width="75%">Deduction</th> <th width="25%">Rs.</th> </tr></table> </td> </tr> <tr> <td valign="top" colspan="2"> <table width="100%" border="1" cellspacing="0" cellpadding="5" bgcolor="linen"> <tr> <td width="75%"><b>BASIC</b></td> <td width="25%" align="right"><b>7500.00</b></td> </tr> <tr> <td width="75%"><b>HRA</b></td> <td width="25%" align="right"><b>3750.00</b></td> </tr> <tr> <td width="75%"><b>CONVEYANCE</b></td> <td width="25%" align="right"><b>800.00</b></td> </tr> <tr> <td width="75%"><b>SPECIAL ALLOWANCE</b></td> <td width="25%" align="right"><b>5592.00</b></td> </tr> <tr> <td width="75%"><b>TAXABLE FBP</b></td> <td width="25%" align="right"><b>5000.00</b></td> </tr> </table> </td> <td valign="top" colspan="2"> <table width="100%" cellspacing="0" cellpadding="5" border="1" bgcolor="linen"> <tr> <td width="75%"><b>PF</b></td> <td width="25%" align="right"><b>900.00</b></td> </tr> <tr> <td width="75%"><b>PROF TAX</b></td> <td width="25%" align="right"><b>200.00</b></td> </tr> <tr> <td width="75%"><b>MEDICAL INSURANCE PREMUIM</b></td> <td width="25%" align="right"><b>283.00</b></td> </tr> <tr> <td width="75%"><b>OTHER DEDUCTION 2</b></td> <td width="25%" align="right"><b>213.00</b></td> </tr> </table> </td> </tr> <tr height="26"> <td colspan="2"> <table width="100%" cellpadding="5" cellspacing="0" border="1"><tr> <td width="75%" align="center">Total Earnings</td> <td width="25%" align="right">22642.00</td> </tr></table> </td> <td colspan="2"> <table width="100%" cellpadding="5" cellspacing="0" border="1"><tr> <td width="75%" align="center">Total Deduction</td> <td width="25%" align="right">1596.00</td> </tr></table> </td> </tr> </table> <table width="50%" border="0" align="right"> <tr><td align="right" width="75%"><b>Net Pay :</b></td> <td align="right" width="25%"><b>21046.00</b></td></tr> </table> <table width="100%" border="0"> <tr> <td> </td> </tr> <tr> <td></td> </tr> <tr> <td></td> </tr> </table> </div>'
							}).show();
					}
				}
            }
                
       ];
    },
	
	store : 'finance.payroll.SearchStore',
	columnLines : true,
	columns : [  {
		text : 'User Name',
		width : 75,
		sortable : true,
		dataIndex : 'userName'
	}, {
		text : 'User Role',
		width : 75,
		sortable : true,
		dataIndex : 'userRole'
	}, {
		xtype : 'datecolumn',
		text : 'Last Updated',
		width : 85,
		sortable : true,
		dataIndex : 'lastChange'
	} ],
	height : 350,
	width : 600,
	viewConfig : {
		stripeRows : true
	}
});
