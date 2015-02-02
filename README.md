# Usage

    1. sencha -sdk ~/Tools/ext-5.1.0/ generate app MyApp ./app
        ( -sdk $your_local_extjs5_framework_path )

    2. cd app
    3. python -m SimpleHTTPServer

    4. See the app/view/*, there are view(main.js), viewModel(MainModel.js), viewController(MainController.js).

    5. ViewModel Binding & update automatically sample, you can see the Method->updateData() of the MainController.js

    6. Good Luck!

## Referrence

    1. http://docs.sencha.com/extjs/5.0/getting_started/getting_started.html
    2. viewModel: http://docs.sencha.com/extjs/5.0/5.0.1-apidocs/#!/api/Ext.app.ViewModel, (How to update ViewModel)
    3. viewController: http://docs.sencha.com/extjs/5.0/5.0.1-apidocs/#!/api/Ext.app.ViewController (How to design View Method)
    4. view: http://docs.sencha.com/extjs/5.0/5.0.1-apidocs/#!/api/Ext.container.Container (How to Config a View)
    5. router: http://docs.sencha.com/extjs/5.0/application_architecture/router.html (How to design Restful App Routers)
    6. change to anothwe viewport: http://docs.sencha.com/extjs/5.0/tutorials/login_app.html#Step_5___Add_Login_Logic (destory & create a new one)

## MVVM

    1. MVVN Concept: The viewModel is bound by view by the evnet of data changed and view is bound by viewModel too. both they are update/refresh automatically.
