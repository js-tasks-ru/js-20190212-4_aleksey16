'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */

function getMinMax(str) {
    let strArr, res, i, parseFl;

    strArr = str.split(" ");
    strArr = strArr.join().split(',');
    res = [];

    for ( i = 0; i < strArr.length; ++i) {
        parseFl = parseFloat(strArr[i]);
        if (!isNaN(parseFl && isFinite(strArr[i])))
            res.push(parseFl);
    }
    res.sort(function (a, b) {
        if (a < b) return -1;
        if (a > b) return 1;
    });
    return {min: res[0], max: res[res.length-1]};

}

