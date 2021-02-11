export default function getCategory(context) {

    console.log('creat');

    let urlpre = context.getGlobalDefinition('/dtdcmobileapp/Globals/Url.global').data.url;
    if (urlpre == "nsdtdcmobileapp") urlpre = "/" + urlpre;


    let url = urlpre + "/testDestURL/Incidents";

    let body = {
        location: context.evaluateTargetPath("#Page:Create/#Control:Location").getValue(),
        title: context.evaluateTargetPath("#Page:Create/#Control:Title").getValue(),
        description: context.evaluateTargetPath("#Page:Create/#Control:Description").getValue(),
        priority_code: context.evaluateTargetPath("#Page:Create/#Control:Priority").getValue()[0].DisplayValue,
        category_code: context.evaluateTargetPath("#Page:Create/#Control:Category").getValue()[0].DisplayValue
    };

    let params = {
        method: 'POST',
        body: body,
        headers: {
            'Content-Type': 'application/json'
        }
    };

    context.sendRequest(url, params).then(function (res) {
        res = JSON.parse(res.content._data);
        res= res["d"];
        
        let urlPatch = urlpre + "/testDestURL/Incidents_draftActivate?ID=guid'" + res.ID + "'&IsActiveEntity=false";
        let urlPrepare = urlpre + "/testDestURL/Incidents_draftPrepare?ID=guid'" + res.ID + "'&IsActiveEntity=false";
        context.sendRequest(urlPrepare, {
            method: 'POST', headers: {
                'Content-Type': 'application/json'
            },
            body:{}
        }).then(function (response) {
            context.sendRequest(urlPatch, {
                method: 'POST', headers: {
                    'Content-Type': 'application/json'
                },
                body:{}
            }).then(function (r) {
                let statusCode = r.statusCode;
                console.log(r);
                if(parseInt(statusCode/100,0)==2){
                      context.executeAction('/dtdcmobileapp/Actions/showSuccess.action');
                } 
                
            });
        });


    });

}