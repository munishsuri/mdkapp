// export default function getCategory(context) {

   
    // let urlpre = context.getGlobalDefinition('/dtdcmobileapp/Globals/Url.global').data.url;
    // if(urlpre == "nsdtdcmobileapp") urlpre = "/"+urlpre+"/";

    // let appVersion = context.getGlobalDefinition('/dtdcmobileapp/Globals/Url.global');
  
    // let url = urlpre + "testDestURL/Priority";
    //  return context.sendRequest(url).then(function (res) {
    //     res = JSON.parse(res.content._data);
    //     res= res["d"]["results"];
        
    //     let resp = [];
    //     for( var i=0;i<res.length;i++){
    //         resp.push(res[i]["code"]);
    //     }

    //     return resp;

    // })

    // return [1,2,3];

// }

export default function getPriority(context) {
// context.executeAction('/dtdcmobileapp/Actions/geteRest.action').then(function(r){
//     console.log(r);
// });
  return context.executeAction('/dtdcmobileapp/Actions/getPriorityAction.action').then(function(r){
      let ret = []
      for(let i=0;i<r.data._array.length;i++) ret.push(r.data._array[i].code.toString());
      return ret;
  });

}
