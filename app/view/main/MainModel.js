/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('MyApp.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    requires: [
        'MyApp.model.User',
        'MyApp.store.User'
    ],

    // regist store in viewModel
    stores: {
        // get obj by this.getViewModel().getStore('users')
        users: {
            type: 'user'
        }
    },

    // regist data in viewModel
    data: {
        name: 'MyApp',
        value: (function(){
            return (new Date).toString();
        })()
    }

    //TODO - add data, formulas and/or methods to support your view
});