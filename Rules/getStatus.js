export default function getCategory(context) {

  
    let urlpre = context.getGlobalDefinition('/dtdcmobileapp/Globals/Url.global').data.url;
    if(urlpre == "nsdtdcmobileapp") urlpre = "/"+urlpre+"/";


    let appVersion = context.getGlobalDefinition('/dtdcmobileapp/Globals/Url.global');
    
    let url = urlpre + "testDestURL/Status";

    return context.sendRequest(url).then(function (res) {
       res = JSON.parse(res.content._data);
        res= res["d"]["results"];
        
        let resp = [];
        for( var i=0;i<res.length;i++){
            resp.push(res[i]["code"]);
        }

        return resp;

    })

    // return [1,2,3];

}
