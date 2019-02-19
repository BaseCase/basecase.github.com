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


const HALF_UNIT = 25;
const BUFFER = 20;


document.addEventListener('DOMContentLoaded', function() {
  let canvas = document.getElementById('canvas');
  let ctx = canvas.getContext('2d');

  ctx.fillStyle = '#ddaacc';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  data.forEach((entry, index) => {
    let days_past_start = (entry['date_completed'] - entry['date_started']) / 1000 / 60 / 60 / 24;

    let v_center = canvas.height / 2;

    let start_x = HALF_UNIT * 2 * index + BUFFER;
    let start_y = v_center;

    // draw the black background shape for this entry
    ctx.fillStyle = '#000';
    ctx.lineWidth = 1;
    ctx.beginPath();
    // starting point
    ctx.moveTo(start_x, start_y);
    // first upward angle
    ctx.lineTo(start_x + HALF_UNIT, start_y - HALF_UNIT);
    // top length, matching duration of entry
    ctx.lineTo(start_x + HALF_UNIT + (HALF_UNIT * days_past_start), start_y - HALF_UNIT);
    // angle down to right side
    ctx.lineTo(start_x + HALF_UNIT + (HALF_UNIT * days_past_start) + HALF_UNIT, start_y);
    // angle down and back to bottom
    ctx.lineTo(start_x + HALF_UNIT + (HALF_UNIT * days_past_start), start_y + HALF_UNIT);
    // bottom lenth, matching duration of entry
    ctx.lineTo(start_x + HALF_UNIT, start_y + HALF_UNIT);
    ctx.closePath();
    ctx.fill();


    // draw the white outline
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 3;
    ctx.beginPath();
    // starting point
    ctx.moveTo(start_x, start_y);
    // first upward angle
    ctx.lineTo(start_x + HALF_UNIT, start_y - HALF_UNIT);
    // top length, matching duration of entry
    ctx.lineTo(start_x + HALF_UNIT + (HALF_UNIT * days_past_start), start_y - HALF_UNIT);
    // angle down to right side
    ctx.lineTo(start_x + HALF_UNIT + (HALF_UNIT * days_past_start) + HALF_UNIT, start_y);
    // angle down and back to bottom
    ctx.lineTo(start_x + HALF_UNIT + (HALF_UNIT * days_past_start), start_y + HALF_UNIT);
    // bottom lenth, matching duration of entry
    ctx.lineTo(start_x + HALF_UNIT, start_y + HALF_UNIT);
    ctx.closePath();
    ctx.stroke();
  });
});
