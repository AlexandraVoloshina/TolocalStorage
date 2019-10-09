class LocalStorage{

  static addList(key, list){
    localStorage.setItem(key, JSON.stringify(list));
  }

  static addOneItem(key, newUser){
    let users = parseJSON(localStorage.getItem(key));
    console.log(users);
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
  }

  static getList(key){
    return localStorage.getItem(key);
  }

  static getById(key, id){
    let users = parseJSON(localStorage.getItem(key));
    let user = users.filter(user => user.id === id);
    return user;
  }

  static updateList(key, newList){
    localStorage.setItem(key, JSON.stringify(newList));
    let updateUsers = parseJSON(localStorage.getItem(key));
    return updateUsers;
  }

  static updateItem(key, newList){
    let userUpdate = {};
    let updateUsers = parseJSON(localStorage.getItem(key));
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

  static deleteList(key){
    localStorage.removeItem(key);
  }

  static deleteById(key, id){
    let users = parseJSON(localStorage.getItem(key));
    console.log(users);
    let usersAfterDeleteOneUser = users.filter(user => user.id !== id);
    localStorage.setItem(key, JSON.stringify(usersAfterDeleteOneUser));
    return usersAfterDeleteOneUser;
  }

}


function parseJSON(key){
  if(!!key){
    return JSON.parse(key);
  }
  else console.log("Нет массива с указанным ключом");
}

console.log("______________LocalStorage_____________");
//Добавление списка элементов по ключу в LocalStorage
LocalStorage.addList("users", users);
//Добавление 1 элемента в список по ключу в LocalStorage
LocalStorage.addOneItem("users", user6);
//Получения списка элементов по ключу из LocalStorage
console.log("Получение списка из LocalStorage: " + LocalStorage.getList("users"));
//Получения 1 элемента по ключу и идентификатору из LocalStorage
let userLocal = LocalStorage.getById("users", 1568803949180);
console.log(userLocal);

//Обновление всего списка
let updateListLocal = LocalStorage.updateList("users", newUsers);
console.log(updateListLocal);
//Обновление одного элемента
let updateOneUserLocal = LocalStorage.updateItem("users", oneNewUser);
console.log(updateOneUserLocal);

//Удаление списка по ключу в LocalStorage
//LocalStorage.deleteList("users");

//Удаления элемента в списке по ключу и идентификатору в LocalStorage
let listAfterDeleteElement = LocalStorage.deleteById("users", 1568803949176);
console.log(listAfterDeleteElement);