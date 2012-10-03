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
//                  'administration.settings.batch.Controller'
                  'scholar.controller.administration.settings.batch.Controller'
              ],
});