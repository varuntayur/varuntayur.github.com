Ext.define('scholar.view.detail.staff.attendance.Report', {
	extend : 'Ext.grid.Panel',
	requires : [ 'Ext.window.Window'],
	alias: 'widget.staffAttendanceReport',
	
	// Component initialization override: adds the top and bottom toolbars and setup headers renderer.
    initComponent: function() {
        var me = this;
        me.tbar = [ Ext.create('Ext.form.ComboBox', {
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
			  		          	} ];
			  		            var store =  new Ext.data.ArrayStore({
					  		      		fields : [ {
						  		  			name : 'admissionNumber',
						  		  			type : 'string'
					  		      			}],
					  		      			data : [ [ '001/005' ]]
			  		            });
			  		            this.reconfigure(store,columns);
		  		            }
	  		            }
                   })];

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
		data : [ [ '001/005', 'Rama', 'I', 'Blore', '9/1 12:00am' ],
				[ '001/006', 'Krishna', 'II', 'Blore', '9/1 12:00am' ],
				[ '001/007', 'Govinda', 'IV', 'Blore', '9/1 12:00am' ] 
		]
	}),
	columnLines : true,
	columns : [ {
		text : 'Admission Number',
		flex : 1,
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

