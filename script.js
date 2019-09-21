let users = [
  {"name":"Vasya","age":34,"id":1568803949180},
  {"name":"Petya","age":30,"id":1568803949176},
  {"name":"Kolya","age":29,"id":1568803949175},
  {"name":"Anton","age":25,"id":1568803949171},
  {"name":"Vsevolod","age":20,"id":1568803949166},
  ];
console.log(users);

let user6 = {"name":"Vova","age":18,"id":1568803949164};

class ClassLocalStorage{

  static addUsersToLocalStorage(key, list){
    localStorage.setItem(key, JSON.stringify(list));
  }

  static addUserToLocalStorage(key, newUser){
    let users = JSON.parse(localStorage.getItem(key));
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
  }

  static getUsersToLocalStorage(key){
    return localStorage.getItem(key);
  }

  static getUserByIdFromLocalStorage(key, id){
    let users = JSON.parse(localStorage.getItem(key));
    let user = users.filter(user => user.id === id);
    return user;
  }

  static updateUsersInLocalStorage(key, newList){
    localStorage.setItem(key, JSON.stringify(newList));
    let updateUsers = JSON.parse(localStorage.getItem(key));
    return updateUsers;
  }

  static updateOneUserInLocalStorage(key, newList){
    let userUpdate = {};
    let users = JSON.parse(localStorage.getItem(key));
    for (let i = 0; i < users.length; i++){
        for (let j in users[i]){
            if(users[i][j] !== newList[i][j]){
              users[i][j] = newList[i][j];
              console.log("Измененнный элемент: " + JSON.stringify(users[i]));
            }
        }
      }
    localStorage.setItem(key, JSON.stringify(users));
  }  

  static deleteListFromLocalStorage(key){
    localStorage.removeItem(key);
  }

  static deleteListFromLocalStorageById(key, id){
    let users = JSON.parse(localStorage.getItem(key));
    let usersAfterDeleteOneUser = users.filter(user => user.id !== id);
    localStorage.setItem(key, JSON.stringify(usersAfterDeleteOneUser));
    return usersAfterDeleteOneUser;
  }

}


class ClassSessionStorage{

  static addUsersToSessionStorage(users){
      sessionStorage.setItem('users', JSON.stringify(users));
  }

  static addUserToSessionStorage(newUser){
    let users = JSON.parse(sessionStorage.getItem('users'));
    users.push(newUser);
    sessionStorage.setItem('users', JSON.stringify(users));
  }

  static getUsersToSessionStorage(users){
    return sessionStorage.getItem('users');
  }

  static getUserByIdFromSessionStorage(key, id){
      let users = JSON.parse(sessionStorage.getItem(key));
      let user = users.filter(user => user.id === id);
      return user;
    }

  static updateUsersInSessionStorage(key, newList){
    sessionStorage.setItem(key, JSON.stringify(newList));
    let updateUsers = JSON.parse(sessionStorage.getItem(key));
    return updateUsers;
  }

  static updateOneUserInSessionStorage(key, newList){
    let userUpdate = {};
    let users = JSON.parse(sessionStorage.getItem(key));
    for (let i = 0; i < users.length; i++){
        for (let j in users[i]){
            if(users[i][j] !== newList[i][j]){
              users[i][j] = newList[i][j];
              console.log("Измененнный элемент: " + JSON.stringify(users[i]));
            }
        }
      }
    sessionStorage.setItem(key, JSON.stringify(users));
  }  

  static deleteListFromSessionStorage(key){
    sessionStorage.removeItem(key);
  }

  static deleteListFromSessionStorageById(key, id){
    let users = JSON.parse(sessionStorage.getItem(key));
    let usersAfterDeleteOneUser = users.filter(user => user.id !== id);
    sessionStorage.setItem(key, JSON.stringify(usersAfterDeleteOneUser));
    return usersAfterDeleteOneUser;
  }


}

//Добавление списка элементов по ключу в LocalStorage
ClassLocalStorage.addUsersToLocalStorage("users", users);
//Добавление списка элементов по ключу в SessionStorage
ClassSessionStorage.addUsersToSessionStorage(users);
//Добавление 1 элемента в список по ключу в LocalStorage
ClassLocalStorage.addUserToLocalStorage("users", user6);
//Добавление 1 элемента в список по ключу в SessionStorage
ClassSessionStorage.addUserToSessionStorage(user6);
//Получения списка элементов по ключу из LocalStorage
console.log("Получение списка из LocalStorage: " + ClassLocalStorage.getUsersToLocalStorage("users"));
//Получения списка элементов по ключу из SessionStorage
console.log("Получение списка из SessionStorage: " + ClassSessionStorage.getUsersToSessionStorage(users));
//Получения 1 элемента по ключу и идентификатору из LocalStorage
let user = ClassLocalStorage.getUserByIdFromLocalStorage("users", 1568803949180);
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
// let updateList = ClassLocalStorage.updateUsersInLocalStorage("users", newUsers);
// console.log(updateList);

//Обновление списка по ключу SessionStorage
// let updateList = ClassSessionStorage.updateUsersInSessionStorage("users", newUsers);
// console.log(updateList);

//Oбновление 1 элемента в списке по ключу в LocalStorage
let oneNewUser = [
  {"name":"Olya","age":25,"id":1568803949180},
  {"name":"Petya","age":30,"id":1568803949176},
  {"name":"Kolya","age":29,"id":1568803949175},
  {"name":"Anton","age":25,"id":1568803949171},
  {"name":"Vsevolod","age":20,"id":1568803949166},
  {"name":"Vova","age":21,"id":1568803949163}
  ];
//let updateOneUser = ClassLocalStorage.updateOneUserInLocalStorage("users", oneNewUser);

//Oбновление 1 элемента в списке по ключу в SessionStorage
let updateOneUser = ClassSessionStorage.updateOneUserInSessionStorage("users", oneNewUser);

//Удаление списка по ключу в LocalStorage
// ClassLocalStorage.deleteListFromLocalStorage("users");

//Удаление списка по ключу в SessionStorage
//ClassSessionStorage.deleteListFromSessionStorage("users");


//Удаления элемента в списке по ключу и идентификатору в LocalStorage
let listAfterDeleteElement = ClassLocalStorage.deleteListFromLocalStorageById("users", 1568803949176);
console.log(listAfterDeleteElement);


//Удаления элемента в списке по ключу и идентификатору в LocalStorage
let listAfterDeleteElement = ClassSessionStorage.deleteListFromSessionStorageById("users", 1568803949176);
console.log(listAfterDeleteElement);




