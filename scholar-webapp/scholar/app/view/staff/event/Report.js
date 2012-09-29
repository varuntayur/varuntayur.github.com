Ext.define('scholar.view.staff.event.Report', {
	extend : 'Ext.grid.Panel',
	requires : [ 'Ext.window.Window'],
	alias: 'widget.memos',
	
	// Component initialization override: adds the top and bottom toolbars and setup headers renderer.
    initComponent: function() {
        var me = this;
        me.tbar = [ Ext.create('Ext.form.ComboBox', {
			            fieldLabel: 'Choose Course',
			            store: Ext.create('Ext.data.Store', {
			                fields: ['abbr', 'courseName'],
			                data : [
			                    {"abbr":"AL", "courseName":"Standard 1"},
			                    {"abbr":"AK", "courseName":"Standard 2"},
			                    {"abbr":"AZ", "courseName":"B.E"}
			                ]
			            }),
			            queryMode: 'local',
			            displayField: 'courseName',
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
			name : 'eventName',
			type : 'string'
		}, {
			name : 'eventDescription',
			type : 'string'
		}, {
			name : 'eventDate',
			type : 'date',
			dateFormat : 'n/j h:ia'
		} ],
		data : [
		        [ 'Independance Day', 'Program schedule: 9.am',  '9/1 12:00am' ],
				[ 'Krishna Janmashthami Celebrations', 'Krishna costume event at Auditorium starts 3pm', '9/1 12:00am' ]				 
		       ]
	}),
	columnLines : true,
	columns : [ {
		text : 'Event Name',
		flex : 1,
		sortable : false,
		dataIndex : 'eventName'
	}, {
		text : 'Description',
		width : 75,
		flex : 1,
		sortable : true,
		dataIndex : 'eventDescription'
	}, {
		xtype : 'datecolumn',
		text : 'Event Date',
		width : 85,
		sortable : true,
		dataIndex : 'eventDate'
	} ],
	height : 350,
	width : 600,
	viewConfig : {
		stripeRows : true
	}
});

