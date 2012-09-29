Ext.define('scholar.view.staff.timetable.Search', {
	extend : 'Ext.ux.LiveSearchGridPanel',
	alias:'widget.timeTableSearch',
	store: new Ext.data.ArrayStore({
		fields : [
		    {
				name : 'dayTime',
				type : 'string'
			},
			{
				name : 'period1',
				type : 'string'
			},
			{
				name : 'period2',
				type : 'string'
			},
			{
				name : 'period3',
				type : 'string'
			},
			{
				name : 'period4',
				type : 'string',
			},
			{
				name : 'period5',
				type : 'string'
			},
			{
				name : 'period6',
				type : 'string'
			},
			{
				name : 'period7',
				type : 'string'
			},
			{
				name : 'period8',
				type : 'string'
			},
			{
				name : 'period9',
				type : 'string'
			}
		],
		data : [
		        [ 'Monday',   'Maths', 'Social-Science', 'General-Science', 'Short-Break','English','','Lunch','Hindi','Library' ],
				[ 'Tuesday',  'Social-Science', 'Maths', '', 'Short-Break','General-Science','','Lunch','','Moral-Science' ],
				[ 'Wednesday', 'English', 'General-Science', 'Maths', 'Short-Break','','General-Science','Lunch','','Physical-Training'  ],
				[ 'Thursday', 'General-Science', 'Hindi', '', 'Short-Break','Maths','Kannada','Lunch','English','Games' ],
		        [ 'Friday',   'Hindi', 'Kannada', 'Social-Science', 'Short-Break','General-Science','Maths','Lunch','English','Crafts/Hobbies' ],
		        [ 'Saturday', 'Social-Science', 'Maths', 'General-Science', 'Short-Break' ],
		        [ 'Sunday' ]
		      ]
	}),
    stateful: true,
    collapsible: false,
    multiSelect: true,
    columns: [
		{
		    text     : 'Day/Time',
		    flex     : 1,
		    sortable : false,
		    dataIndex: 'dayTime',
		    renderer : function(val) {
           	 return '<span style="color:red;">' + val + '</span>';
           }
		},
        {
            text     : '0800 - 0900',
            flex     : 1,
            sortable : false,
            dataIndex: 'period1'
        },
        {
            text     : '0900 - 1000',
            flex     : 1,
            sortable : false,
            dataIndex: 'period2'
        },
        {
            text     : '1000 - 1045',
            flex     : 1,
            sortable : false,
            dataIndex: 'period3'
        },
        {
            text     : '1045 - 1100',
            flex     : 1,
            sortable : false,
            dataIndex: 'period4',
            renderer : function(val) {
            	 return '<span style="color:green;">' + val + '</span>';
            }            
        },
        {
            text     : '1100 - 1200',
            flex     : 1,
            sortable : false,
            dataIndex: 'period5'
        },
        {
            text     : '1200 - 1300',
            flex     : 1,
            sortable : false,
            dataIndex: 'period6'
        },
        {
            text     : '1300 - 1345',
            flex     : 1,
            sortable : false,
            dataIndex: 'period7',
            renderer : function(val) {
           	 return '<span style="color:green;">' + val + '</span>';
           }
        },
        {
            text     : '1345 - 1445',
            flex     : 1,
            sortable : false,
            dataIndex: 'period8'
        },
        {
            text     : '1445 - 1545',
            flex     : 1,
            sortable : false,
            dataIndex: 'period9'
        }
    ],
    viewConfig: {
        stripeRows: true,
        enableTextSelection: true
    }
});

