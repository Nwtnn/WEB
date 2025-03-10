$(document).ready(function() {
    $('#btnsave').click(function() {
        console.log("btnsave clicked");
        var uname = $("#txfuname").val();
        console.log("Username:", uname);
        var email = $("#txfemail").val();
        console.log("Email:", email);
        var gender = $('input[name="radgender"]:checked').val();
        console.log("Gender:", gender);

        if (!uname || !email || !gender) {
            alert("Please fill in all fields!");
            return;
        }
        alert("Saved Data:\nUsername: " + uname + "\nEmail: " + email + "\nGender: " + gender);
    });
});
