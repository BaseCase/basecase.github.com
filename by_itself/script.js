let data = [
  {
    'title': "Finished in one day",
    'type': 'movie',
    'date_started': new Date('2019-01-01'),
    'date_completed': new Date('2019-01-01'),
  }, {
    'title': "Took me three days",
    'type': 'book',
    'date_started': new Date('2019-01-03'),
    'date_completed': new Date('2019-01-05'),
  }
];


const SIZE = 40;


document.addEventListener('DOMContentLoaded', function() {
  let canvas = document.getElementById('canvas');
  let ctx = canvas.getContext('2d');

  ctx.fillStyle = '#ddaacc';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  data.forEach((entry, index) => {
    let duration_in_days = ((entry['date_completed'] - entry['date_started']) /
                            1000 / 60 / 60 / 24)
                            + 1;

    let v_center = canvas.height / 2;

    let start_x = SIZE * 4 * index;
    let start_y = v_center;

    // draw the black background shape for this entry
    ctx.fillStyle = '#000';
    ctx.lineWidth = 1;
    ctx.beginPath();
    // starting point
    ctx.moveTo(start_x, start_y);
    // first upward angle
    ctx.lineTo(start_x + SIZE, start_y - SIZE);
    // top length, matching duration of entry
    ctx.lineTo(start_x + SIZE + (duration_in_days * SIZE), start_y - SIZE);
    // angle down to right side
    ctx.lineTo(start_x + SIZE + (duration_in_days * SIZE) + SIZE, start_y);
    // angle down and back to bottom
    ctx.lineTo(start_x + SIZE + (duration_in_days * SIZE), start_y + SIZE);
    // bottom lenth, matching duration of entry
    ctx.lineTo(start_x + SIZE, start_y + SIZE);
    ctx.closePath();
    ctx.fill();


    // draw the white outline
    // ctx.strokeStyle = '#fff';
    // ctx.lineWidth = 3;
    // ctx.beginPath();
    // ctx.moveTo(start_x, start_y);
    // ctx.closePath();
    // ctx.stroke();
  });
});
