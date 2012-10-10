Ext.define('scholar.store.administration.admission.CategoryStore', {
	extend : 'Ext.data.Store',
	model : 'scholar.model.administration.admission.CategoryModel',
	data : [ {
		"abbr" : "AL",
		"categoryName" : "General"
	}, {
		"abbr" : "AL",
		"categoryName" : "OBC"
	}, {
		"abbr" : "AL",
		"categoryName" : "SC"
	}, {
		"abbr" : "AL",
		"categoryName" : "ST"
	} ],
	autoLoad : true
});