Ext.Loader.setConfig({enabled: true});

Ext.application({
    name: 'app',

    controllers: [
        'Contacts'
    ],

    autoCreateViewport: true
});
