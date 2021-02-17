
export default function checkData(context) {

    console.log('enter check data');
    var url = "/Incidents";

    // var url = "testDestURL/Incidents";

    var urlEnd = "";
    var status = [],
        priority = [],
        category = [];
    try {
        if (context.evaluateTargetPathForAPI("#Page:Product_Filter").getClientData().status) status = context.evaluateTargetPathForAPI("#Page:Product_Filter").getClientData().status;
        if (context.evaluateTargetPathForAPI("#Page:Product_Filter").getClientData().priority) priority = context.evaluateTargetPathForAPI("#Page:Product_Filter").getClientData().priority;
        if (context.evaluateTargetPathForAPI("#Page:Product_Filter").getClientData().category) category = context.evaluateTargetPathForAPI("#Page:Product_Filter").getClientData().category;
    } catch (e) {
        console.log(e);
    }

    var statuslen = '',
        prioritylen = '',
        categorylen = '';
    if (status.length > 0) {
        for (var i = 0; i < status.length; i++) {
            statuslen = statuslen + "status_code eq '" + status[i].DisplayValue + "' or ";
        }
    }
    if (priority.length > 0) {
        for (var _i = 0; _i < priority.length; _i++) {
            prioritylen = prioritylen + "priority_code eq '" + priority[_i].DisplayValue + "' or ";
        }
    }
    if (category.length > 0) {
        for (var _i2 = 0; _i2 < category.length; _i2++) {
            categorylen = categorylen + "category_code eq '" + category[_i2].DisplayValue + "' or ";
        }
    }

    if (statuslen.length > 0) {
        statuslen = '(' + statuslen.slice(0, statuslen.length - 4) + ") and ";
    }

    if (categorylen.length > 0) {
        categorylen = '(' + categorylen.slice(0, categorylen.length - 4) + ") and ";
    }

    if (prioritylen.length > 0) {
        prioritylen = '(' + prioritylen.slice(0, prioritylen.length - 4) + ") and ";
    }

    if (status.length > 0 || priority.length > 0 || category.length > 0) {
        urlEnd = "?$filter=" + statuslen + categorylen + prioritylen;
        urlEnd = urlEnd.slice(0, urlEnd.length - 5);
    }

    url = url + urlEnd;
   
    return url;

}