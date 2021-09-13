const flashcardsContainer = document.getElementsByClassName("flashcards-container")[0];
const createContainer = document.getElementsByClassName("create-container")[0];

function showCreateContainer(){
  createContainer.style.display = "block";
}

function hideCreateContainer(){
  createContainer.style.display = "none";
}

function saveFlashcard(){
  const question = document.getElementById("question").value;
  const answer = document.getElementById("answer").value;

  var node0 = document.createElement("div");
  var node1 = document.createElement("h2");
  var node2 = document.createElement("h2");

  node1.setAttribute("style", "border-top:1px solid red ; padding: 15px; margin-top:30px");
  node1.innerHTML = question;
  node2.innerHTML = answer;

  node2.style.textAlign = "center";
  node2.style.display = "none";
  node2.style.color = "red";

  node0.appendChild(node1);
  node0.appendChild(node2);

  node0.addEventListener("click", function(){
    if(node2.style.display == "none"){
      node2.style.display = "block";
    }
    else{
      node2.style.display = "none";
    }
  })

  node0.addEventListener("dblclick", function(){
    node0.remove();
  })

  node0.setAttribute("style", "background:white; width:390px; height: 200px; margin:10px; overflow:hidden; box-shadow: 10px 10px 24px 0px rgba(0,0,0,0.50)");

  flashcardsContainer.insertAdjacentElement("beforeend", node0);

  document.getElementById("question").value = '';
  document.getElementById("answer").value = '';
}