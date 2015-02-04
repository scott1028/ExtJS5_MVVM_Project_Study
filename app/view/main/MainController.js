/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MyApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.window.MessageBox'
    ],

    alias: 'controller.main',

    onClickButton: function () {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },

    updateData: function() {
        this.getViewModel().set('name', 'aabb');
        // will update view automatically.

        console.log(this.getViewModel().getStore('users'));
        // get Store which regiested in viewModel
    },

    updateStoreData: function() {
        // test Update Store Data, and check view will be refresh automatically.
        this.getViewModel().getStore('users').first().set('firstName', 'test2');
        this.getViewModel().getStore('users').sync();
        // record.save();
        // debugger;
    }
});
