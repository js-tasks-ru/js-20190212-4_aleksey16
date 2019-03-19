/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */

function addElements (obj) {
    let objNew ={};

    for (var key in obj) {
        if(obj[key] === null){
            objNew[key] = null;
            continue
        }
        if(typeof(obj[key]) === "object"){
            objNew[key] = addElements (obj[key]);
            continue
        }
        objNew[key] = obj[key];
    }

    return objNew
}

function clone (obj) {

    return  addElements (obj);
}