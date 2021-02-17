export default function editEntity(context) {

    console.log('hi');

    var ID = context.getBindingObject().ID;


    context.getPageProxy().getClientData().Url = 'draftEdit';
    context.getPageProxy().getClientData().ID = ID;

    context.executeAction('/dtdcmobileapp/Actions/editEntityAction.action').then(function (r) {

        context.getPageProxy().getClientData().Url = 'patchIncident';
        context.getPageProxy().getClientData().ID = ID;
        context.getPageProxy().getClientData().Body = "Update";

        context.executeAction('/dtdcmobileapp/Actions/patchEntity.action').then(function (r) {

            context.getPageProxy().getClientData().Url = 'prepare';
            context.getPageProxy().getClientData().ID = ID;

            context.executeAction('/dtdcmobileapp/Actions/editEntityAction.action').then(function (r) {

                context.getPageProxy().getClientData().Url = 'activate';
                context.getPageProxy().getClientData().ID = ID;
                context.executeAction('/dtdcmobileapp/Actions/editEntityAction.action').then(function (r) {
                    context.executeAction('/dtdcmobileapp/Actions/showSuccess.action');
                    context.executeAction('/dtdcmobileapp/Actions/NavToMainPage.action');
                });
            });

        });
    });
}