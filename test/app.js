Ext.application({
    name: 'Scholar',
    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    title: 'Scholar',
                    html : 'Welcome to Scholar.'
                }
            ]
        });
    }
});