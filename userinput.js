let username;
document.getElementById('button').onclick = function(){
   username =  document.getElementById('name').value;
    document.getElementById('title').textContent = `Hello ${username}`;
}