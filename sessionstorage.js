class SessionStorage{

  static addList(key, list){
      sessionStorage.setItem(key, JSON.stringify(list));
  }

  static addItem(key, newUser){
    let users = parseJSON(sessionStorage.getItem(key));
    users.push(newUser);
    sessionStorage.setItem('users', JSON.stringify(users));
  }

  static getList(users){
    return sessionStorage.getItem('users');
  }

  static getById(key, id){
      let users = parseJSON(sessionStorage.getItem(key));
      let user = users.filter(user => user.id === id);
      return user;
  }

  static updateList(key, newList){
    sessionStorage.setItem(key, JSON.stringify(newList));
    let updateUsers = JSON.parse(sessionStorage.getItem(key));
    return updateUsers;
  }

  static updateItem(key, newList){
    let userUpdate = {};
    let users = parseJSON(sessionStorage.getItem(key));
    for (let i = 0; i < users.length; i++){
        for (let j in users[i]){
            if(users[i][j] !== newList[i][j]){
              users[i][j] = newList[i][j];
              console.log("Измененный элемент: " + JSON.stringify(newList[i]));
            }
        }   
      }

    sessionStorage.setItem(key, JSON.stringify(users));
  } 

  static deleteList(key){
    sessionStorage.removeItem(key);
  }

  static deleteById(key, id){
    let users = parseJSON(sessionStorage.getItem(key));
    let usersAfterDeleteOneUser = users.filter(user => user.id !== id);
    sessionStorage.setItem(key, JSON.stringify(usersAfterDeleteOneUser));
    return usersAfterDeleteOneUser;
  }


}


function parseJSON(key){
  if(!!key){
    return JSON.parse(key);
  }
  else console.log("Нет массива с указанным ключом");
}

console.log("______________SessionStorage_____________");
//Добавление списка элементов по ключу в SessionStorage
SessionStorage.addList("users", users);
//Добавление 1 элемента в список по ключу в SessionStorage
SessionStorage.addItem("users", user6);
//Получения списка элементов по ключу из SessionStorage
console.log("Получение списка из SessionStorage: " + SessionStorage.getList(users));
//Получения 1 элемента по ключу и идентификатору из SessionStorage
let userSession = SessionStorage.getById("users", 1568803949180);
console.log(userSession);

//Обновление списка по ключу SessionStorage
let updateList = SessionStorage.updateList("users", newUsers);
console.log(updateList);


//Oбновление 1 элемента в списке по ключу в SessionStorage
let updateOneUser = SessionStorage.updateItem("users", oneNewUser);


//Удаление списка по ключу в SessionStorage
// SessionStorage.deleteList("users");

//Удаления элемента в списке по ключу и идентификатору в LocalStorage
let listAfterDeleteElementS = SessionStorage.deleteById("users", 1568803949176);
console.log(listAfterDeleteElementS);
