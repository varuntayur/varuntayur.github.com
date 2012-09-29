 Ext.define('BloodGroup', {
     extend: 'Ext.data.Model',
     fields : [ 'abbr', 'name' ]
 });
Ext.create('Ext.data.Store', {		
			model:'BloodGroup'
			data : [ {
				"abbr" : "AL",
				"name" : "Unknown"
			}, {
				"abbr" : "AL",
				"name" : "A+"
			}, {
				"abbr" : "AL",
				"name" : "A-"
			}, {
				"abbr" : "AL",
				"name" : "B+"
			}, {
				"abbr" : "AL",
				"name" : "B-"
			}, {
				"abbr" : "AL",
				"name" : "O+"
			}, {
				"abbr" : "AL",
				"name" : "O-"
			}, {
				"abbr" : "AK",
				"name" : "AB+"
			}, {
				"abbr" : "AZ",
				"name" : "AB-"
			} ]
})