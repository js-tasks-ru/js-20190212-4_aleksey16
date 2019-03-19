'use strict';

/**
 * Генерация HTML списка друзей
 * @param {Friend[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList (friends) {
    const ul = document.createElement('ul');
    let li = '';

    for (let i=0; i<friends.length; i++) {

        li = document.createElement('li');
        li.innerText = friends[i].firstName + ' ' + friends[i].lastName ;
        ul.appendChild(li);



    }
    return ul

}
