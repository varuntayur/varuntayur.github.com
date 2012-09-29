Ext.define('scholar.view.finance.fees.Search', {
	extend : 'Ext.ux.LiveSearchGridPanel',
	alias: 'widget.feeDetailSearch',
	title:'Fee Collection',
	getTbar :function()
    {
    	return [	{
	    		xtype : 'datefield',
	    		fieldLabel : 'Start Date',
	    		name : 'startDate'
    		},
    		{
	    		xtype : 'datefield',
	    		fieldLabel : 'End Date',
	    		name : 'endDate'
    		},
            {
                xtype: 'button',
                name: 'viewCollections',
                text: 'Refresh'
            }
                
       ];
    },
	
	store : new Ext.data.ArrayStore({
		fields : [  {
			name : 'admissionNumber',
			type : 'string'
		}, {
			name : 'studentName',
			type : 'string'
		}, {
			name : 'feeCollectionDate',
			type : 'date',
			dateFormat : 'n/j h:ia'
		} ],
		data : [
				[ '001/001', 'Amar',  '9/1 12:00am' ],
				[ '001/002', 'Ishaan', '9/1 12:00am' ],
				[ '001/005', 'Pran',  '9/1 12:00am' ], 
				[  '001/010', 'Vishnu', '9/1 12:00am' ],
				[  '010/234', 'Sri Hari', '9/1 12:00am' ],
				[  '111/286', 'Shiva',  '9/1 12:00am' ],
				[  '101/234', 'Jyestha', '9/1 12:00am' ],
				[  '201/002', 'Laksha', '9/1 12:00am' ],
				[  '501/004', 'Sangeetha', '9/1 12:00am' ],
				[ '116/006', 'Shwetha',  '9/1 12:00am' ],
				[ '145/007', 'Sushma', '9/1 12:00am' ],
				[ '723/007', 'Santhosh', '9/1 12:00am' ]
		       ]
	}),
	columnLines : true,
	columns : [  {
		text : 'Admission Number',
		width : 75,
		sortable : true,
		dataIndex : 'admissionNumber'
	}, {
		text : 'Student Name',
		width : 75,
		sortable : true,
		dataIndex : 'studentName'
	}, {
		xtype : 'datecolumn',
		text : 'Fee Collection Date',
		width : 85,
		sortable : true,
		dataIndex : 'feeCollectionDate'
	} ],
	height : 350,
	width : 600,
	viewConfig : {
		stripeRows : true
	}
});
