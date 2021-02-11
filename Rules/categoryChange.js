export default function categoryChange(context) {

    if (context.getName() == 'FormCellListCategory') {
        context.getPageProxy().getClientData().category = context.getValue();
    }

    if (context.getName() == 'FormCellListStatus') {
        context.getPageProxy().getClientData().status = context.getValue();
    }

    if (context.getName() == 'FormCellListPriority') {
        context.getPageProxy().getClientData().priority = context.getValue();
    }

}