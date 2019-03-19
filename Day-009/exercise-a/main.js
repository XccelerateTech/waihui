$(document).ready(function() {
    let name = $('input[name="name"]').val();
    console.log(name);

    let phone = $('input[name="phone"]').val();
    console.log(phone);

    let email = $('input[name="email"]').val();
    console.log(email);

    let sectionList = $('section');
    for (let i = 0; i < sectionList.length; i++) {
        console.log(sectionList[i]);
    }

    let secondRowContactList = $('tr')[1];
    console.log(secondRowContactList)
})