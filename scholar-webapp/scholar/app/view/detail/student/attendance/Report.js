Ext.define('scholar.view.detail.student.attendance.Report', {
	extend : 'Ext.grid.Panel',
	requires : [ 'Ext.window.Window'],
	alias: 'widget.studentAttendanceReport',
	
	// Component initialization override: adds the top and bottom toolbars and setup headers renderer.
    initComponent: function() {
        var me = this;
        me.tbar = [ 
					{
					    xtype: 'datefield',
					    anchor: '100%',
					    fieldLabel: 'Date',
					    itemId: 'reportDate',
					    maxValue: new Date()  // limited to the current date or prior
					},
                    Ext.create('Ext.form.ComboBox', {
			            fieldLabel: 'Choose Course',
			            store: Ext.create('Ext.data.Store', {
			                fields: ['abbr', 'name'],
			                data : [
			                    {"abbr":"AL", "name":"Standard 1"},
			                    {"abbr":"AK", "name":"Standard 2"},
			                    {"abbr":"AZ", "name":"B.E"}
			                ]
			            }),
			            queryMode: 'local',
			            displayField: 'name',
			            valueField: 'abbr'
                  	}),
                  	Ext.create('Ext.form.ComboBox', {
			            fieldLabel: 'Choose Batch',
			            store: Ext.create('Ext.data.Store', {
			                fields: ['abbr', 'name'],
			                data : [
			                    {"abbr":"AL", "name":"A"},
			                    {"abbr":"AK", "name":"C"},
			                    {"abbr":"AZ", "name":"CS 1"}
			                ]
			            }),
			            queryMode: 'local',
			            displayField: 'name',
			            valueField: 'abbr'
                  	}),
                  	Ext.create('Ext.form.ComboBox', {
	  		            fieldLabel: 'Report Type',
	  		            store: Ext.create('Ext.data.Store', {
	  		                fields: ['abbr', 'name'],
	  		                data : [
	  		                    {"abbr":"AL", "name":"Overall"},
	  		                    {"abbr":"AK", "name":"Weekly"},
	  		                    {"abbr":"AZ", "name":"Daily"}
	  		                ]
	  		            }),
	  		            queryMode: 'local',
	  		            displayField: 'name',
	  		            valueField: 'abbr',
	  		            listeners:{
		  		            scope: this,
		  		            'select': function()
		  		            {
		  		            	this.getStore().removeAll();
			  		            var columns = [ {
			  		          		text : 'Admission Number',
			  		          		flex : 1,
			  		          		sortable : false,
			  		          		dataIndex : 'admissionNumber'
			  		          	},
			  		          	{
				  		      		text : 'Name',
				  		      		width : 75,
				  		      		sortable : true,
				  		      		dataIndex : 'studentName'
					  		  	},
					  		  	{
					  		  		text : 'Class',
					  		  		width : 75,
					  		  		sortable : true,
					  		  		dataIndex : 'standard'
					  		  	} ];
			  		            
			  		            var daysInMonth = Ext.Date.getDaysInMonth(Ext.ComponentQuery.query('#reportDate')[0].getValue());
			  		            
			  		            var dayCols = [];
			  		            dayCols.push({
						  		  			name : 'admissionNumber',
						  		  			type : 'string'
				  		      	});
			  		            for(var i = 0 ; i < daysInMonth; i++)
			  		            {
			  		            	dayCols.push({
			  		            		type: 'bool',
			  		            		name: 'day'+i,
			  		            	});
			  		            	columns.push({
			  		            		xtype: 'checkcolumn',
			  		            		text: i+1,
			  		            		dataIndex:'day'+i
			  		            	});
			  		            }
			  		            
			  		            var store =  new Ext.data.ArrayStore({
				  		      		fields :  dayCols ,
				  		      		data : [ [ '001/005','Amar', 'Standard 1',  ]]
		  		            	});
			  		            this.reconfigure(store,columns);
		  		            }
	  		            }
                   })
                   ];

        me.bbar = Ext.create('Ext.ux.StatusBar', {
            defaultText: me.defaultStatusText,
            name: 'searchStatusBar'
        });
        
        me.callParent(arguments);
    },
	
	store : new Ext.data.ArrayStore({
		fields : [ {
			name : 'admissionNumber',
			type : 'string'
		}, {
			name : 'studentName',
			type : 'string'
		}, {
			name : 'standard',
			type : 'string'
		}, {
			name : 'address',
			type : 'string'
		}, {
			name : 'lastChange',
			type : 'date',
			dateFormat : 'n/j h:ia'
		} ],
		data : [
		        [ '001/001', 'Amar', 'Standard 1', 	  'Blore', '9/1 12:00am' ],
				[ '001/002', 'Ishaan', 'Standard 2',  'Blore', '9/1 12:00am' ],
				[ '001/005', 'Pran', 'Standard 3',    'Blore', '9/1 12:00am' ], 
				[  '001/010', 'Vishnu', 'Standard 1',  'Blore', '9/1 12:00am' ],
				[  '010/234', 'Sri Hari', 'Standard 5','Blore', '9/1 12:00am' ],
				[  '111/286', 'Shiva', 'Standard 8',   'Blore', '9/1 12:00am' ],
				[  '101/234', 'Jyestha', 'Standard 9', 'Blore', '9/1 12:00am' ],
				[  '201/002', 'Laksha', 'Standard 10', 'Blore', '9/1 12:00am' ],
				[  '501/004', 'Sangeetha', 'Standard 4','Blore', '9/1 12:00am' ],
				[ '116/006', 'Shwetha', 'Standard 1', 'Blore', '9/1 12:00am' ],
				[ '145/007', 'Sushma', 'Standard 7',  'Blore', '9/1 12:00am' ],
				[ '723/007', 'Santhosh', 'Standard 5','Blore', '9/1 12:00am' ] 
		]
	}),
	columnLines : true,
	columns : [ {
		text : 'Admission Number',		
		sortable : false,
		dataIndex : 'admissionNumber'
	}, {
		text : 'Name',
		width : 75,
		sortable : true,
		dataIndex : 'studentName'
	}, {
		text : 'Class',
		width : 75,
		sortable : true,
		dataIndex : 'standard'
	}, {
		text : 'Address',
		width : 75,
		flex : 1,
		sortable : true,
		dataIndex : 'address'
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

