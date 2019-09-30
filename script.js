let users = [
  {"name":"Vasya","age":34,"id":1568803949180},
  {"name":"Petya","age":30,"id":1568803949176},
  {"name":"Kolya","age":29,"id":1568803949175},
  {"name":"Anton","age":25,"id":1568803949171},
  {"name":"Vsevolod","age":20,"id":1568803949166},
  ];
console.log(users);

let user6 = {"name":"Vova","age":18,"id":1568803949164};

class LocalStorage{

  static addToLocalStorage(key, list){
    localStorage.setItem(key, JSON.stringify(list));
  }

  static addOneToLocalStorage(key, newUser){
    let users = parseObj(localStorage.getItem(key));
    console.log(users);
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
  }

  static getFromLocalStorage(key){
    return localStorage.getItem(key);
  }

  static getByIdFromLocalStorage(key, id){
    let users = parseObj(localStorage.getItem(key));
    let user = users.filter(user => user.id === id);
    return user;
  }

  static updateInLocalStorage(key, newList){
    localStorage.setItem(key, JSON.stringify(newList));
    let updateUsers = parseObj(localStorage.getItem(key));
    return updateUsers;
  }

  static updateOneInLocalStorage(key, newList){
    let list = localStorage.getItem(key);
    let updateList = JSON.stringify(newList);
    if (list !== updateList){
      localStorage.setItem(key, updateList);
    }
  }  

  static deleteListFromLocalStorage(key){
    localStorage.removeItem(key);
  }

  static deleteListFromLocalStorageById(key, id){
    let users = parseObj(localStorage.getItem(key));
    console.log(users);
    let usersAfterDeleteOneUser = users.filter(user => user.id !== id);
    localStorage.setItem(key, JSON.stringify(usersAfterDeleteOneUser));
    return usersAfterDeleteOneUser;
  }

}


class SessionStorage{

  static addToSessionStorage(key, list){
      sessionStorage.setItem(key, JSON.stringify(list));
  }

  static addOneToSessionStorage(key, newUser){
    let users = parseObj(sessionStorage.getItem(key));
    users.push(newUser);
    sessionStorage.setItem('users', JSON.stringify(users));
  }

  static getFromSessionStorage(users){
    return sessionStorage.getItem('users');
  }

  static getByIdFromSessionStorage(key, id){
      let users = parseObj(sessionStorage.getItem(key));
      let user = users.filter(user => user.id === id);
      return user;
    }

  static updateInSessionStorage(key, newList){
    sessionStorage.setItem(key, JSON.stringify(newList));
    let updateUsers = JSON.parse(sessionStorage.getItem(key));
    return updateUsers;
  }

  static updateOneInSessionStorage(key, newList){
    let list = sessionStorage.getItem(key);
    let updateList = JSON.stringify(newList);
    if (list !== updateList){
      sessionStorage.setItem(key, updateList);
    }
  }  

  static deleteListFromSessionStorage(key){
    sessionStorage.removeItem(key);
  }

  static deleteListFromSessionStorageById(key, id){
    let users = parseObj(sessionStorage.getItem(key));
    let usersAfterDeleteOneUser = users.filter(user => user.id !== id);
    sessionStorage.setItem(key, JSON.stringify(usersAfterDeleteOneUser));
    return usersAfterDeleteOneUser;
  }


}


function parseObj(key){
  if(!!key){
    return JSON.parse(key);
  }
  else console.log("Нет массива с указанным ключом");
}



//Добавление списка элементов по ключу в LocalStorage
LocalStorage.addToLocalStorage("users", users);
//Добавление списка элементов по ключу в SessionStorage
SessionStorage.addToSessionStorage("users", users);
//Добавление 1 элемента в список по ключу в LocalStorage
LocalStorage.addOneToLocalStorage("users", user6);
//Добавление 1 элемента в список по ключу в SessionStorage
//SessionStorage.addOneToSessionStorage("users", user6);
//Получения списка элементов по ключу из LocalStorage
console.log("Получение списка из LocalStorage: " + LocalStorage.getFromLocalStorage("users"));
//Получения списка элементов по ключу из SessionStorage
console.log("Получение списка из SessionStorage: " + SessionStorage.getFromSessionStorage(users));
//Получения 1 элемента по ключу и идентификатору из LocalStorage
let user = LocalStorage.getByIdFromLocalStorage("users", 1568803949180);
console.log(user);
//Получения 1 элемента по ключу и идентификатору из SessionStorage


//Обновление списка по ключу в LocalStorage
// let newUsers = [
//   {"name":"Petya","age":34,"id":1568803949180},
//   {"name":"Petya","age":30,"id":1568803949176},
//   {"name":"Petya","age":29,"id":1568803949175},
//   {"name":"Petya","age":25,"id":1568803949171},
//   {"name":"Petya","age":20,"id":1568803949166},
//   ];
// let updateList = LocalStorage.updateInLocalStorage("users", newUsers);
// console.log(updateList);

//Обновление списка по ключу SessionStorage
// let updateList = SessionStorage.updateInSessionStorage("users", newUsers);
// console.log(updateList);

//Oбновление 1 элемента в списке по ключу в LocalStorage
let oneNewUser = [
  {"name":"Olya","age":25,"id":1568803949180},
  {"name":"Petya","age":30,"id":1568803949176},
  {"name":"Kolya","age":29,"id":1568803949175},
  {"name":"Anton","age":25,"id":1568803949171},
  {"name":"Vsevolod","age":20,"id":1568803949166},
  ];
LocalStorage.updateOneInLocalStorage("users", oneNewUser);

//Oбновление 1 элемента в списке по ключу в SessionStorage
let updateOneUser = SessionStorage.updateOneInSessionStorage("users", oneNewUser);

//Удаление списка по ключу в LocalStorage
// LocalStorage.deleteListFromLocalStorage("users");

//Удаление списка по ключу в SessionStorage
//SessionStorage.deleteListFromSessionStorage("users");


//Удаления элемента в списке по ключу и идентификатору в LocalStorage
// let listAfterDeleteElement = LocalStorage.deleteListFromLocalStorageById("users", 1568803949176);
// console.log(listAfterDeleteElement);


//Удаления элемента в списке по ключу и идентификатору в LocalStorage
//let listAfterDeleteElement = SessionStorage.deleteListFromSessionStorageById("users", 1568803949176);
//console.log(listAfterDeleteElement);