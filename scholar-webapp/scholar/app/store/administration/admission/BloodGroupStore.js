Ext.define('scholar.store.administration.admission.BloodGroupStore', {
	extend : 'Ext.data.Store',
	model : 'scholar.model.administration.admission.BloodGroupModel',
	data : [ {
		"abbr" : "AL",
		"bloodGroupName" : "Unknown"
	}, {
		"abbr" : "AL",
		"bloodGroupName" : "A+"
	}, {
		"abbr" : "AL",
		"bloodGroupName" : "A-"
	}, {
		"abbr" : "AL",
		"bloodGroupName" : "B+"
	}, {
		"abbr" : "AL",
		"bloodGroupName" : "B-"
	}, {
		"abbr" : "AL",
		"bloodGroupName" : "O+"
	}, {
		"abbr" : "AL",
		"bloodGroupName" : "O-"
	}, {
		"abbr" : "AK",
		"bloodGroupName" : "AB+"
	}, {
		"abbr" : "AZ",
		"bloodGroupName" : "AB-"
	} ],
	autoLoad : true
});