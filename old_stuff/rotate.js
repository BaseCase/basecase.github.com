function rotate(arr) {
    new_array = arr.slice(1);
    new_array.push(arr[0]);
    return new_array;
}

var current = [];
var input = "";
var all_rotations = [];

function convert_to_numbers(arr) {
    for(var i=0; i<arr.length;i++) {
        if(arr[i] === 'E') { arr[i] = 11; }
        else if(arr[i] === 'T') { arr[i] = 10; }
        else { arr[i] = parseInt(arr[i]); }
    }
}

function convert_to_letters(arr) {
    for(var i=0;i<arr.length;i++) {
        if(arr[i] === 11) { arr[i] = 'E'; }
        if(arr[i] === 10) { arr[i] = 'T'; }
    }
}


$(function() {
    $('#clickit').click(function() {
        if (input !== $('#array_in').val()) {
            input = $('#array_in').val();
            current = input.split(" ");
            $('#rotations').html('');
            $('#transpositions').html('');
        }

        for (var i=0;i<5;i++) {
            current = rotate(current);
            all_rotations[i] = current.slice(0);
            $('#rotations').append(current.join(" ") + "<br/>");
        }
    });

    $('#clickit_add').click(function() {
        for(var i=0;i<all_rotations.length;i++) {
            convert_to_numbers(all_rotations[i]);
            var transposition_distance = parseInt($('#starting_pc').val()) - all_rotations[i][0];
            for (var j=0;j<all_rotations[i].length;j++) {
                var raw = all_rotations[i][j] + transposition_distance;
                if (raw > 11) { all_rotations[i][j] = raw % 12; }
                else if (raw < 0) { all_rotations[i][j] = 12 + raw; }
                else { all_rotations[i][j] = raw; }
            }
            convert_to_letters(all_rotations[i]);
            $('#transpositions').append(all_rotations[i].join(" ") + "<br/>");
        }

    });

});
