export default function getUrlsByClientData(context) {

    console.log('hi');
    if (context.getPageProxy().getClientData().Url == 'prepare')
        return "/Incidents_draftPrepare?ID=guid'" + context.getPageProxy().getClientData().ID + "'&IsActiveEntity=false";


    if (context.getPageProxy().getClientData().Url == 'activate')
        return "/Incidents_draftActivate?ID=guid'" + context.getPageProxy().getClientData().ID + "'&IsActiveEntity=false";

    if (context.getPageProxy().getClientData().Url == 'draftEdit')
        return "/Incidents_draftEdit?PreserveChanges=true&ID=guid'" + context.getPageProxy().getClientData().ID + "'&IsActiveEntity=true";

    if (context.getPageProxy().getClientData().Url == 'patchIncident')
        return "/Incidents(ID=guid'" + context.getPageProxy().getClientData().ID + "',IsActiveEntity=false)";

}