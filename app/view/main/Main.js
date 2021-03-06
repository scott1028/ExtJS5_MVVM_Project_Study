/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'MyApp.view.main.MainController',
        'MyApp.view.main.MainModel'
    ],

    xtype: 'app-main',
    
    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border'
    },

    items: [
        {
            xtype: 'panel',
            title: 'name',
            bind: {
                title: '{name}'
            },
            region: 'west',
            html: '<ul><li>This area is commonly used for navigation, for example, using a "tree" component.</li></ul>',
            width: 250,
            split: true,
            tbar: [{
                text: 'Button',
                handler: 'onClickButton'
            }, {
                text: 'Update',
                handler: 'updateData'
            }],
        },
        {
            region: 'center',
            xtype: 'tabpanel',
            items:[{
                title: 'Tab 1',
                bind: {
                    html: '<h2>Content appropriate for the current navigation, {value}</h2>'
                }
            }]
        },
        {
            region: 'south',
            title: 'User Grid',
            xtype: 'grid',
            bind: {
                store: '{users}'
            },
            columns: [
                // some grid columns
                { text: 'First Name',  dataIndex: 'firstName' },
            ],
            bbar: [{
                text: 'update Data',
                handler: 'updateStoreData'
            }]
        }
    ]
});
