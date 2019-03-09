/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
function pow (m, n) {
    let rez = 1;
    for (let i = 1; i <= n; i++){
        rez *= m
    }
    return rez

}