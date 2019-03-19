$(document).ready(function() {
    // Create DOM Element;
    let clearButton = $("<input>");
    clearButton.attr({"type": "button", "value": "clear"});
    $('#row-submit').append(clearButton);
 
    let newSection = $("<section>");
    newSection.addClass("sections");
    newSection.attr("id", "update-contact");
    $('#content').append(newSection);

    let heading = $('<h1>');
    heading.text("Update Contacts");
    newSection.append(heading);

    let form = $('<form>');
    form.attr("id", "form2");
    newSection.append(form);

    let rowUpdateName = $('<div>');
    rowUpdateName.attr("id", "update-row-name");
    let rowUpdatePhone = $('<div>');
    rowUpdatePhone.attr("id", "update-row-phone");
    let rowUpdateEmail = $('<div>');
    rowUpdateEmail.attr("id", "update-row-email");
    let rowUpdateSubmit = $('<div>');
    rowUpdateSubmit.attr("id", "update-row-submit");
    form.append(rowUpdateName);
    form.append(rowUpdatePhone);
    form.append(rowUpdateEmail);
    form.append(rowUpdateSubmit);

    let updateInputName = $('<input>');
    updateInputName.attr({"type": "text", "name": "update-name", "placeholder": "Name"});
    rowUpdateName.append(updateInputName);
    
    let updateInputPhone = $('<input>');
    updateInputPhone.attr({"type": "text", "name": "update-phone", "placeholder": "Telephone Number"});
    rowUpdatePhone.append(updateInputPhone);
    
    let updateInputEmail = $('<input>');
    updateInputEmail.attr({"type": "text", "name": "update-email", "placeholder": "Email"});
    rowUpdateEmail.append(updateInputEmail);

    let updateButtonSubmit = $('<input>');
    updateButtonSubmit.attr({"type": "submit", "value": "submit"});
    let updateButtonClear = $('<input>');
    updateButtonClear.attr({"type": "button", "value": "clear"});
    rowUpdateSubmit.append(updateButtonSubmit);
    rowUpdateSubmit.append(updateButtonClear);


    // Data Validation;
    $('input[name="name"]').keyup(function() {
        let inputName = $('input[name="name"]');
        if (inputName.val().length > 10) {
            inputName.css({"border": "2px solid red"});    
        }
        else {
            inputName.css({"border": ""})
        }
    })

    $('input[name="phone"]').keyup(function() {
        let inputPhone = $('input[name="phone"]');
        if (inputPhone.val().length < 6 || inputPhone.val().length > 16) {
            inputPhone.css({"border": "2px solid red"});
        }
        else {
            inputPhone.css({"border": ""})
        }
    })

    $('input[name="email"]').keyup(function() {
        let inputEmail = $('input[name="email"]');
        let regex = /.*@..*.com/;
        if (regex.test(inputEmail.val())) {
            inputEmail.css({"border": ""});
        }
        else {
            inputEmail.css({"border": "2px solid red"})
        }
    })

    $('input[name="update-name"]').keyup(function() {
        let updateInputName = $('input[name="update-name"]');
        if (updateInputName.val().length > 10) {
            updateInputName.css({"border": "2px solid red"});    
        }
        else {
            updateInputName.css({"border": ""})
        }
    })

    $('input[name="update-phone"]').keyup(function() {
        let updateInputPhone = $('input[name="update-phone"]');
        if (updateInputPhone.val().length < 5 || updateInputPhone.val().length > 16) {
            updateInputPhone.css({"border": "2px solid red"});
        }
        else {
            updateInputPhone.css({"border": ""})
        }
    })

    $('input[name="update-email"]').keyup(function() {
        let updateInputEmail = $('input[name="update-email"]');
        let regex = /.*@..*.com/;
        if (regex.test(updateInputEmail.val())) {
            updateInputEmail.css({"border": ""});
        }
        else {
            updateInputEmail.css({"border": "2px solid red"})
        }
    })

    // Click Clear Button;
    clearButton.click(function() {
        $('input[name="name"]').val("").css({"border": ""});
        $('input[name="phone"]').val("").css({"border": ""});
        $('input[name="email"]').val("").css({"border": ""});
    })

    updateButtonClear.click(function() {
        $('input[name="update-name"]').val("").css({"border": ""});
        $('input[name="update-phone"]').val("").css({"border": ""});
        $('input[name="update-email"]').val("").css({"border": ""});
    })

    // Click <tr> and show data in update section;
    $('.row').click(function() {
        let name = this.children[0].innerHTML;
        let phone = this.children[1].innerHTML;
        let email = this.children[2].innerHTML;
        $('input[name="update-name"]').val(name);
        $('input[name="update-phone"]').val(phone);
        $('input[name="update-email"]').val(email);
    })

    // Click submit to create new contact
    $('#row-submit input[value="submit"]').click(function() {
        console.log("AAA")
    })
})