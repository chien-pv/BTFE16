$(document).ready(function() {
  $("#join_list").click(function() {
    var isValid = true;

    var emailAddress1 = $("#email_address1").val();
    var emailAddress2 = $("#email_address2").val();
    var firstName = $("#first_name").val();

    if(emailAddress1 === "") {
      isValid = false;
      $("#email_address1_error").text("Email address is required");
    } else {
      $("#email_address1_error").text("");
    }

    if(emailAddress2 === "") {
      isValid = false;
      $("#email_address2_error").text("Re-enter email address is required");
    } else if(emailAddress1 !== emailAddress2) {
      isValid = false;
      $("#email_address2").next().text("This entry must equal first entry");
    } else {
      $("#email_address2_error").text("");
    }

    if(firstName === "") {
      isValid = false;
      $("#first_name_error").text("First name is required");
    }else {
      $("#first_name_error").text("");
    }

    if(isValid) {
      $("#email_form").submit();
    }
  })
})