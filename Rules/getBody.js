export default function getBody(context) {


    console.log('hi');
    try {
        if (context.getPageProxy().getClientData().Body == 'Update') {
            return {
                description: context.evaluateTargetPath("#Page:Edit/#Control:Description").getValue(),
                priority_code: context.evaluateTargetPath("#Page:Edit/#Control:Priority").getValue()[0].DisplayValue,
                category_code: context.evaluateTargetPath("#Page:Edit/#Control:Category").getValue()[0].DisplayValue

            }
        }
    } catch (e) {
        console.log(e);
    }

    let body = {
        IsActiveEntity: true,
        location: context.evaluateTargetPath("#Page:Create/#Control:Location").getValue(),
        title: context.evaluateTargetPath("#Page:Create/#Control:Title").getValue(),
        description: context.evaluateTargetPath("#Page:Create/#Control:Description").getValue(),
        priority_code: context.evaluateTargetPath("#Page:Create/#Control:Priority").getValue()[0].DisplayValue,
        category_code: context.evaluateTargetPath("#Page:Create/#Control:Category").getValue()[0].DisplayValue
    };

    return body;

}