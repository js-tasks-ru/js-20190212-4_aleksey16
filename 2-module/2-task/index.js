/**
 * Клонируем объект
 * @param {Object} obj - объект в котором ищем
 * @param {*} value - значение, которе ищем
 * @returns {Object}
 */

function findElements (obj, value, objRoute) {


    for (var key in obj) {
        if(obj[key] === value){
            objRoute.arr[objRoute.arr.length] = (objRoute.str === null) ? key :objRoute.str + "." + key
            continue
        };

        if(obj[key] !== null && typeof(obj[key]) === "object"){

            objRoute.str = (objRoute.str === null) ? key : objRoute.str + "." + key;
            findElements (obj[key],value,objRoute);
            continue
        };
    }
    objRoute.str = null

}

function find (obj, value){
    let objRoute ={str:null, arr:[]};

    findElements (obj,value,objRoute);

    console.log(objRoute.arr.length);
    if(objRoute.arr.length===0){
        return null
    }
    if(objRoute.arr.length===1){
        return objRoute.arr[0]
    }

    return objRoute.arr
}