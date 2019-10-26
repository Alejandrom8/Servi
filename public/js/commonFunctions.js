function formToJson(formElement){
    let inputElements = formElement.getElementsByTagName("input");
    let jsonObject = {};
    
    for(var i = 0; i < inputElements.length; i++){
        let inputElement = inputElements[i];
        jsonObject[inputElement.name] = inputElement.value;
    }

    return jsonObject;
}