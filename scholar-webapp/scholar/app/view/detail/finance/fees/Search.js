Ext.define('scholar.view.detail.finance.fees.Search', {
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
		data : [ [ '001/007', 'Test',  '9/1 12:00am' ],
				[  '001/002', '123',  '9/1 12:00am' ],
				[  '003/003', 'Hello', '9/1 12:00am' ] ]
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
