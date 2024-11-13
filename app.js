// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA94JByUhIOxdvrPLzP-A62dSX8syhHSxE",
    authDomain: "todo-app-63af5.firebaseapp.com",
    projectId: "todo-app-63af5",
    storageBucket: "todo-app-63af5.firebasestorage.app",
    messagingSenderId: "433187591522",
    appId: "1:433187591522:web:1fd14e7ebbd2435a1a883b"
  };

  // Initialize Firebase
//   const app = initializeApp(firebaseConfig);





var ulElement = document.getElementById("list");

function addTodo() {
    var input = document.getElementById("input");
  
    if (input.value) {
      var liElement = document.createElement("li");
  
      var liText = document.createTextNode(input.value);
  
      liElement.appendChild(liText);
  
      // delete button create
  
      var delBtnElement = document.createElement("button");
  
      var delBtnText = document.createTextNode("Delete");
  
      delBtnElement.appendChild(delBtnText);
  
      delBtnElement.setAttribute("onclick", "deleteSingleTodo(this)");
  
      liElement.appendChild(delBtnElement);
  
      // edit button create
  
      var EditBtnElement = document.createElement("button");
  
      var EditBtnText = document.createTextNode("Edit");
  
      EditBtnElement.appendChild(EditBtnText);
  
      liElement.appendChild(EditBtnElement);
  
      EditBtnElement.setAttribute("onclick", "editSingleTodo(this)");
      ulElement.appendChild(liElement);
      input.value = "";
    } else {
      alert("Enter items..");
    }
  }
  
  function deleteAllTodos() {
    ulElement.innerHTML = "";
  }
  
  function deleteSingleTodo(e) {
    console.log(e.parentNode.remove());
  }
  
  function editSingleTodo(e) {
    var updateVal = prompt("Enter updated value ");
  
    e.parentNode.firstChild.nodeValue = updateVal;
  }