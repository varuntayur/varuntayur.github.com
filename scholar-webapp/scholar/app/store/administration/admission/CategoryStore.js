Ext.define('scholar.store.administration.admission.CategoryStore', {
	extend : 'Ext.data.Store',
	model : 'scholar.model.administration.admission.CategoryModel',
	data : [ {
		"abbr" : "AL",
		"name" : "General"
	}, {
		"abbr" : "AL",
		"name" : "OBC"
	}, {
		"abbr" : "AL",
		"name" : "SC"
	}, {
		"abbr" : "AL",
		"name" : "ST"
	} ],
	autoLoad : true
});