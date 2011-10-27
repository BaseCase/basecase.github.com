function rotate(array_in) {
    var new_array = array_in.slice(2) + array_in.slice(0,2);
    return new_array;
}

var current = "";

$(function() {
    $('#clickit').click(function() {
        if (!current) {
            current = rotate($('#array_in').val());
        } else {
            current = rotate(current);
        }
        $('#rotations').append(current + "<br/>");
    });
});
