var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

document.querySelectorAll("button").forEach(button => {
  button.addEventListener("click", () => {
    let move = "NONE";
    let action = "NONE";  

    if (button.dataset.move) {
      move = button.dataset.move;
    }
    if (button.dataset.action) {
      action = button.dataset.action;
    }

    var raw = JSON.stringify({
      move, action
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:3000/action", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.error("error:", error));
  });
});