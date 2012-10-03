Ext.application({
	requires : [ 'Ext.container.Viewport'],
    name: 'scholar',
    autoCreateViewport: true,
    
    /*launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    title: 'Scholar',
                    html : 'Hello! Welcome to Scholar.'
                }
            ]
        });
    }*/
    
    controllers: [
                  'Scholar',
                  'administration.admission.Controller',
                  'scholar.controller.administration.settings.batch.Controller',
                  'scholar.controller.administration.settings.course.Controller',
                  'scholar.controller.administration.settings.general.Controller',
                  'scholar.controller.administration.settings.subject.Controller'
              ],
});