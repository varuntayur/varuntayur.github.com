Ext.define('scholar.view.detail.administration.Dashboard', {
	extend : 'Ext.form.Panel',
	xtype : 'administrationDashboard',
	requires:['Ext.chart.*'],
	title : 'Administration Dashboard',
	collapsible : false,
	defaults : {
		layout : {
			type : 'table',
			defaultMargins : {
				top : 0,
				right : 5,
				bottom : 0,
				left : 0
			},
			columns:2
		},
		margins : '10 10 10 10'
	},
	
	items : [
	         Ext.create('Ext.chart.Chart', {		
	  		   width: 400,
	  		   height: 300,
	  		   animate: true,
	  		   donut:true,
	  		   showInLegend: true,
	            shadow: true,
	            legend: {
	                position: 'right'
	            },
	            title: 'Fee Collection',
	            insetPadding: 60,
	            theme: 'Base:gradients',
	  		   store: Ext.create('Ext.data.JsonStore', {
	  			        fields: ['name', 'data1'],
	  			    	data: [
	  				        { name: 'Jan', data1: 100 },
	  				        { name: 'Mar', data1: 100 },
	  				        { name: 'May', data1: 10 },
	  				        { name: 'Jun', data1: 70 },
	  				        { name: 'Aug', data1: 91 },
	  				        { name: 'Oct', data1: 80 },
	  				        { name: 'Dec', data1: 80 }				 
	  				    ]
	  			    }),		 			    
 			    
	  		  series: [
	  	        {
	  	            type: 'pie',
//	  	            xField: 'name',
	  	            field: 'data1',
	  	          tips: {
	                  trackMouse: true,
	                  width: 140,
	                  height: 28	
	                },
	                highlight: {
	                  segment: {
	                    margin: 20
	                  }
	                },
	                label: {
	                    field: 'name',
	                    display: 'rotate',
	                    contrast: true,
	                    font: '18px Arial'
	                }
	  	        }]
	         }),
	  	      Ext.create('Ext.chart.Chart', {		
		  		   width: 400,
		  		   height: 300,
		  		   animate: true,
		  		   store: Ext.create('Ext.data.JsonStore', {
		  			        fields: ['name', 'data1'],
		  			    	data: [
		  				        { name: '8am', data1: 1 },
		  				        { name: '9am', data1: 2 },
		  				        { name: '10am', data1: 0 },
		  				        { name: '11am', data1: 0 },
		  				        { name: '12pm', data1: 0 },
		  				        { name: '1pm', data1: 7 },
		  				        { name: '2pm', data1: 4 },
		  				        { name: '3pm', data1: 1 },
		  				        { name: '4pm', data1: 0 }		  				        			 
		  				    ]
		  			    }),		 			    
		  		  axes: [
		  				{
		  				    type: 'Numeric',
		  				    position: 'left',
		  				    fields: ['data1'],
		  				    title: 'Free Periods Available',
		  				    grid: true,
		  				    minimum: 0,
		  				    maximum: 10
		  				}, {
		  				    type: 'Category',
		  				    position: 'bottom',
		  				    fields: ['name'],
		  				    title: 'Time of Day',
		  				    label: {
		  				        rotate: {
		  				            degrees: 270
		  				        }
		  				    }
		  				}		  		        
		  		    ],
		  		  series: [
		  	        {
		  	            type: 'line',
		  	            xField: 'name',
		  	            yField: 'data1'
		  	        }
	  	    ]
	  	   })	         
	]
});