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
  var modal= "";
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
          <span class="delete-user">DELETE</span> | <span class="edit-user" data-bs-toggle="modal" data-bs-target="#edit-user">EDIT</span>
        </td>
      </tr>
    `
  });

  $("table tbody").html(html);
  $("#exampleModal").append(modal);
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
      loadUsers();
      editUser();
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
      editUser();
    })
  }

  function editUser() {
    var findUser;
    $(".edit-user").click(function() {
      var getId = $(this).parent().attr("id");
      findUser = listUsers.find(function(user) {
        return user.id === getId;
      });
      $("#first_name_edit").val(findUser.firstName);
      $("#last_name_edit").val(findUser.lastName);
      $("#email_edit").val(findUser.email)
      $("#role_edit").find(":selected").text(findUser.role);
    });
    
    $("#edit").click(function() {
      var firstNameEdit = $("#first_name_edit").val();
      var lastNameEdit = $("#last_name_edit").val();
      var emailEdit = $("#email_edit").val();
      var roleEdit = $("#role_edit").find(":selected").text();
      findUser.firstName = firstNameEdit;
      findUser.lastName = lastNameEdit;
      findUser.email = emailEdit;
      findUser.role = roleEdit;
      loadUsers();
    })
  }

  function main() {
    loadUsers();
    addUser();
    editUser();

    $('#exampleModal').on('hidden.bs.modal', function (e) {
      $(".form__user").trigger("reset");
    })
  };
  main()
})