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
  }, {
    'title': "Finished in one day",
    'type': 'movie',
    'date_started': new Date('2019-01-06'),
    'date_completed': new Date('2019-01-10'),
  }, {
    'title': "Finished in one day",
    'type': 'movie',
    'date_started': new Date('2019-01-11'),
    'date_completed': new Date('2019-01-11'),
  }
];


let months = [
  {
    'name': "January",
    'color': "#111",
    'num_days': 31,
  }, {
    'name': "February",
    'color': "#222",
    'num_days': 28,
  }, {
    'name': "March",
    'color': "#333",
    'num_days': 31,
  }, {
    'name': "April",
    'color': "#444",
    'num_days': 30,
  }, {
    'name': "May",
    'color': "#555",
    'num_days': 31,
  }, {
    'name': "June",
    'color': "#666",
    'num_days': 30,
  }, {
    'name': "July",
    'color': "#777",
    'num_days': 31,
  }, {
    'name': "August",
    'color': "#888",
    'num_days': 31,
  }, {
    'name': "September",
    'color': "#999",
    'num_days': 30,
  }, {
    'name': "October",
    'color': "#aaa",
    'num_days': 31,
  }, {
    'name': "November",
    'color': "#bbb",
    'num_days': 30,
  }, {
    'name': "December",
    'color': "#ccc",
    'num_days': 31,
  }
];


const HALF_UNIT = 25;
const BUFFER = 20;
const MS_TO_DAYS_DIVISOR = 1000 * 60 * 60 * 24;
const START_DATE = new Date('2019-01-01');


document.addEventListener('DOMContentLoaded', function() {
  let canvas = document.getElementById('canvas');
  let ctx = canvas.getContext('2d');



  // draw backgrounds for each month
  canvas.width = HALF_UNIT * 2 * 365;
  let month_start_x = 0;

  months.forEach(month => {
    let month_end_x = month_start_x + HALF_UNIT*2*month.num_days;
    ctx.fillStyle = month.color;
    ctx.fillRect(month_start_x, 0, month_end_x, canvas.height);
    month_start_x = month_end_x;
  });



  {
  // debug, draw day lines
    ctx.fillStyle = '#CCC';
    ctx.strokeStyle = '#CCC';
    ctx.lineWidth = 1;
    for (let i = 0; i < canvas.width; i += HALF_UNIT * 2) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, canvas.height);
      ctx.closePath();
      ctx.stroke();
    }
  }





  data.forEach((entry) => {
    let start_offset_days = (entry['date_started'] - START_DATE) / MS_TO_DAYS_DIVISOR;
    let duration_in_days = (entry['date_completed'] - entry['date_started']) / MS_TO_DAYS_DIVISOR + 1;

    let v_center = canvas.height / 2;
    let start_x = start_offset_days * (2 * HALF_UNIT);
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
    ctx.lineTo(start_x + (2 * HALF_UNIT * duration_in_days) - HALF_UNIT, start_y - HALF_UNIT);
    // angle down to right side
    ctx.lineTo(start_x + (2 * HALF_UNIT * duration_in_days), start_y);
    // angle down and back to bottom
    ctx.lineTo(start_x + (2 * HALF_UNIT * duration_in_days) - HALF_UNIT, start_y + HALF_UNIT);
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
    ctx.lineTo(start_x + (2 * HALF_UNIT * duration_in_days) - HALF_UNIT, start_y - HALF_UNIT);
    // angle down to right side
    ctx.lineTo(start_x + (2 * HALF_UNIT * duration_in_days), start_y);
    // angle down and back to bottom
    ctx.lineTo(start_x + (2 * HALF_UNIT * duration_in_days) - HALF_UNIT, start_y + HALF_UNIT);
    // bottom lenth, matching duration of entry
    ctx.lineTo(start_x + HALF_UNIT, start_y + HALF_UNIT);
    ctx.closePath();
    ctx.stroke();
  });
});
