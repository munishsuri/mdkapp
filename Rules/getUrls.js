export default function getUrls(context) {

    if (context.getPageProxy().getActionBinding().Url == 'prepare')
        return "/Incidents_draftPrepare?ID=guid'" + context.getPageProxy().getActionBinding().ID + "'&IsActiveEntity=false";


    if (context.getPageProxy().getActionBinding().Url == 'activate')
        return "/Incidents_draftActivate?ID=guid'" + context.getPageProxy().getActionBinding().ID + "'&IsActiveEntity=false";

    if (context.getPageProxy().getActionBinding().Url == 'draftEdit')
        return "/Incidents_draftEdit?PreserveChanges=true&ID=guid'" + context.getPageProxy().getActionBinding().ID + "'&IsActiveEntity=true";

     if (context.getPageProxy().getActionBinding().Url == 'patchIncident')
        return "/v2/low-code/Incidents(ID=guid'" + context.getPageProxy().getActionBinding().ID + "',IsActiveEntity=false)";

                      
}