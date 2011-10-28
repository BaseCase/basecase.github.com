function rotate(array_in) {
    var new_array = array_in.slice(2) + array_in.slice(0,2);
    return new_array;
}

var current = "";
var input = "";
var counter = 1;

$(function() {
    $('#clickit').click(function() {
        if (input !== $('#array_in').val()) {
            input = $('#array_in').val();
            current = input;
            $('#rotations').html('');
            counter = 1;
        }

        current = rotate(current);
        $('#rotations').append(current + "<br/>");
    });
});
