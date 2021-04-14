$(document).ready(function() {
  var listUsers = [
    {id: "asdf", firstName: "Don", lastName: "Diaz", email: "don.diaz@gmail.com", role: "USER" },
    {id: "redft3", firstName: "Don1", lastName: "Diaz", email: "don1.diaz@gmail.com", role: "USER ADMIN" },
    {id: "123rdfdf", firstName: "Don2", lastName: "Diaz", email: "don2.diaz@gmail.com", role: "USER" },
    {id: "rfds5", firstName: "Don3", lastName: "Diaz", email: "don3.diaz@gmail.com", role: "USER" },
    {id: "pkf45", firstName: "Don4", lastName: "Diaz", email: "don4.diaz@gmail.com", role: "USER ADMIN" },
  ];
  
  function loadUsers() {
  var html = "";
  listUsers.forEach(function(user) {
    html+= `
      <tr>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.email}</td>
        <td>
          <select class="form-select" aria-label="Default select example">
            <option value="${user.role}">${user.role}</option>
          </select>
        </td>
        <td id="${user.id}">
          <span class="delete-user">DELETE</span> | <span class="edit-user">EDIT</span>
        </td>
      </tr>
    `
  });

  $("table tbody").html(html);
  deleteUser();
 }

 function addUser() {
   $("#add").click(function() {
     var firstName = $("#first_name").val();
     var lastName = $("#last_name").val();
     var email = $("#email").val();
     var role = $("#role").find(":selected").text();

     var newUser = {
      id: Math.random().toString(36).substring(7),
      firstName,
      lastName,
      email,
      role 
     };

      listUsers = [...listUsers, newUser];
      $(".form__user").trigger("reset");
      loadUsers();
   });
 }

  function deleteUser() {
    $(".delete-user").click(function() {
      var getId = $(this).parent().attr("id");
      var findUser = listUsers.find(function(user) {
        return user.id === getId;
      });
      var findIndex = listUsers.indexOf(findUser);

      listUsers.splice(findIndex, 1);
      loadUsers();
    })
  }

  function editUser() {
    
  }

  function main() {
    loadUsers();
    addUser();
    editUser();
  };
  main()
})