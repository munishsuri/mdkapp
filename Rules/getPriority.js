export default function getCategory(context) {

   
    let urlpre = context.getGlobalDefinition('/dtdcmobileapp/Globals/Url.global').data.url;
    if(urlpre == "nsdtdcmobileapp") urlpre = "/"+urlpre+"/";

    let appVersion = context.getGlobalDefinition('/dtdcmobileapp/Globals/Url.global');
  
    let url = urlpre + "testDestURL/Priority";
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

// export default function getCategory(context) {

//      context.getPageProxy();
//      pageProxy.setActionBinding({
//     "url": "Priority",
//     "output":"/d/results"
//   });
  
//   return context.executeAction('/dtdcmobileapp/Actions/get.action');
// }
