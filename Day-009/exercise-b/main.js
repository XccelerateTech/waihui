$(document).ready(function() {
    let row = $('tbody').append('<tr class="row"></tr>');
    row.append("<td>Peter</td>");
    row.append("<td>123456789</td>");
    row.append("<td>peter@gmail.com</td>");

    $('#row-submit').append('<input type="button" value="clear"/>');

    $('header').append('<title>Willy\'s contact list application</title>')

    $('td').css({"color": "rgb(160, 168, 219)"});
})