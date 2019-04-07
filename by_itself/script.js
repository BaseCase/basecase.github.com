let media_data = [
  {
    title: "Pan’s Labyrinth",
    type: "movie",
    date_started: new Date("2019-01-09"),
    date_completed: new Date("2019-01-09"),
    thoughts: `Holy cow, this was a heavy movie. I was expecting the post-civil-war Spain stuff to be kind of a light frame story around mostly the fantasy stuff, but that was not the case at all. The interplay between the two worlds, and the fact that the fantasy things were not an “escape” from Ofelia’s reality but more like an echo of it, made this one of the most immersive dark fantasy movies I’ve ever seen. Also Del Toro’s visual sense is just unmatched.`
  }
  ,
  {
    title: "Spider-Man: Into the Spider-Verse",
    type: "movie",
    date_started: new Date("2019-01-19"),
    date_completed: new Date("2019-01-19"),
    thoughts: `So awesome! I’ve gotten kind of sick of superhero movies, but this was such a fresh and stylish take on the genre that I loved it. Incredible visuals, really smart script, and a sweet soundtrack.`
  }
  ,
  {
    title: "The Dark Tower 3: The Waste Lands",
    type: "book",
    date_started: new Date("2019-01-01"),
    date_completed: new Date("2019-03-03"),
    thoughts: ``
  }
  ,
  {
    title: "The Eyes of the Dragon",
    type: "book",
    date_started: new Date("2019-02-07"),
    date_completed: new Date("2019-02-16"),
    thoughts: `I had never heard of this one before, but I’m listening through the Radio Free Midworld podcast, which goes book-by-book through Stephen King’s Dark Tower series as well as books that brush up against it. I...didn’t love it. It’s quite a departure (intentionally) from King’s usualy style, and I didn’t feel like he nailed the landing.`
  }
  ,
  {
    title: "tmux 2: Productive Mouse-Free Development",
    type: "book",
    date_started: new Date("2019-02-08"),
    date_completed: new Date("2019-02-09"),
    thoughts: `Some pretty decen tmux tips in here. Not much stuff that you can’t find in the manpage, but arranged more sensibly, I think.`
  }
  ,
  {
    title: "Yooka-Laylee",
    type: "game",
    date_started: new Date("2019-01-01"),
    date_completed: new Date("2019-01-31"),
    thoughts: `I decided to give this Banjo-Kazooie follow-up another shot, mostly because I picked up the Switch version on a whim. I’m glad I did! There’s a lot more charm and enjoyment here than I gave it a chance to show me the first time around. True, the controls and physics are pretty mushy-feeling, and there are some very annoying moments (like the quizzes), but if you can get past those, there are a lot of bright colors and fun environments to explore.`
  }
  ,
  {
    title: "Celeste",
    type: "game",
    date_started: new Date("2019-01-01"),
    date_completed: new Date("2019-01-07"),
    thoughts: `An amazingly good platformer—maybe the best tight-timing 2D platformer I’ve ever played—coupled with beautiful art and music, and a surprisingly heartfelt and personal story. This is really something special.`
  }
  ,
  {
    title: "Return of the Obra Dinn",
    type: "game",
    date_started: new Date("2019-01-01"),
    date_completed: new Date("2019-03-09"),
    thoughts: `A very weird but amazingly well-made game. Ultimately, I decided that solving the whole thing myself was going to be too labor-intensive, so I cheated and looked up spoilers, but the parts that I played honestly I really enjoyed.`
  }
  ,
  {
    title: "Deus Ex GO",
    type: "game",
    date_started: new Date("2019-02-01"),
    date_completed: new Date("2019-02-05"),
    thoughts: `A reasonably decent puzzler. Very much in the vein of Hitman GO. I have to say I preferred that one, but this was still enjoyable for a couple of hours.`
  }
  ,
  {
    title: "Cosmic Express",
    type: "game",
    date_started: new Date("2019-02-02"),
    date_completed: null,
    thoughts: ``
  }
  ,
  {
    title: "Sea of Thieves",
    type: "game",
    date_started: new Date("2019-02-01"),
    date_completed: new Date("2019-02-28"),
    thoughts: ``
  }
  ,
  {
    title: "Cinco Paus",
    type: "game",
    date_started: new Date("2019-02-02"),
    date_completed: new Date("2019-02-09"),
    thoughts: ``
  }
  ,
  {
    title: "Apex Legends",
    type: "game",
    date_started: new Date("2019-02-07"),
    date_completed: new Date("2019-02-07"),
    thoughts: `Figured I’d give this a try, since everyone was talking about it and it’s free. As suspected, it wasn’t really for me. I’m just not super into the Battle Royale genre. It is beautiful, though, and the design seems very well done, it just isn’t my cup of tea.`
  }
  ,
  {
    title: "Jessica Jones s2",
    type: "tv",
    date_started: new Date("2019-02-10"),
    date_completed: new Date("2019-02-23"),
    thoughts: ``
  }
  ,
  {
    title: "Rusty Lake series",
    type: "game",
    date_started: new Date("2019-02-20"),
    date_completed: null,
    thoughts: ``
  }
  ,
  {
    title: "Gemini Rue",
    type: "game",
    date_started: new Date("2019-02-26"),
    date_completed: new Date("2019-03-10"),
    thoughts: `I had fun with this indie point-and-click adventure game. The writing got a little heavy-handed at points, the voice acting was kind of amateurish, and some of the puzzles were real frustrating, but it had a lot of heart. The Blade Runner-inspired pixel art and soundtrack were big pluses, too.`
  }
  ,
  {
    title: "Game of Thrones",
    type: "tv",
    date_started: new Date("2019-03-03"),
    date_completed: null,
    thoughts: ``
  }
  ,
  {
    title: "Clojure for the Brave and True",
    type: "book",
    date_started: new Date("2019-03-03"),
    date_completed: new Date("2019-03-28"),
    thoughts: `At first, the humor style grated on me, but once I got used to it, I found this to be a pretty entertaining and also helpful introduction to the Clojure language. Related: Clojure is super awesome and I really want to do a project in it soon.`
  }
  ,
  {
    title: "The Linux Programming Interface",
    type: "book",
    date_started: new Date("2019-03-10"),
    date_completed: new Date("2019-04-01"),
    thoughts: `A surprisingly accessible book about a topic I had long thought of as arcane and unapproachable. Equally impressive is the fact that this book serves both as an introduction to the topic as well as a fairly comprehensive reference. A great book!`
  }
  ,
  {
    title: "Monument Valley",
    type: "game",
    date_started: new Date("2019-03-15"),
    date_completed: new Date("2019-03-16"),
    thoughts: `Finally got around to playing this iOS classic. It's absolutely beautiful. The gameplay is pretty straightforward but still reasonably engaging; the real draw is the artwork, though.`
  }
  ,
  {
    title: "Prey",
    type: "game",
    date_started: new Date("2019-03-15"),
    date_completed: new Date("2019-04-05"),
    thoughts: `Basically Dishonored but futuristic Sci-Fi. Really good! I felt like the first half of the game was amazingly good, and things got a little sketchy in the back half or third or so. Still, I played all the way to the end and had a great time.`
  }
  ,
  {
    title: "The Life-Changing Magic of Tidying Up",
    type: "book",
    date_started: new Date("2019-03-24"),
    date_completed: null,
    thoughts: ``
  }
  ,
  {
    title: "Mindfulness in Plain English",
    type: "book",
    date_started: new Date("2019-03-23"),
    date_completed: null,
    thoughts: ``
  }
  ,
  {
    title: "Designing Data-Intensive Applications",
    type: "book",
    date_started: new Date("2019-03-26"),
    date_completed: null,
    thoughts: ``
  }
  ,
  {
    title: "Hacking With macOS",
    type: "book",
    date_started: new Date("2019-03-29"),
    date_completed: null,
    thoughts: ``
  }
  ,
  {
    title: "William Gibson's Alien 3",
    type: "book",
    date_started: new Date("2019-04-06"),
    date_completed: null,
    thoughts: ``
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


const HALF_UNIT = 10;
const BUFFER = 10;
const MS_TO_DAYS_DIVISOR = 1000 * 60 * 60 * 24;
const START_DATE = new Date('2019-01-01');
const TODAY = new Date();
TODAY.setHours(0,0,0,0);


document.addEventListener('DOMContentLoaded', function() {
  let canvas = document.getElementById('canvas');
  let ctx = canvas.getContext('2d');

  let name_el = document.getElementById('tmp-media-title');


  {
    // reserve vertical lanes for each event to prevent overlap
    media_data.sort((a, b) => a.date_started - b.date_started);

    let lanes = [
      {
        occupied: false,
        by: null,
      }
    ];

    media_data.forEach(item => {
      // check to see if we can clear any lanes
      lanes.forEach(lane => {
        if (lane.occupied && ((lane.by.date_completed || TODAY) < item.date_started)) {
          lane.occupied = false;
          lane.by = null;
        }
      });

      // find an empty lane for this event
      lanes.forEach((lane, lane_index) => {
        if (!item.lane && !lane.occupied) {
          lane.occupied = true;
          lane.by = item;
          item.lane = lane_index + 1;
        }
      });

      // if all lanes were full, make a new one for this item
      if (!item.lane) {
        lanes.push({ occupied: true, by: item });
        item.lane = lanes.length;
      }
    });

    canvas.height = HALF_UNIT * 2 * lanes.length + HALF_UNIT * 2 + BUFFER * lanes.length;
  }



  {
    // draw backgrounds for each month
    canvas.width = HALF_UNIT * 2 * 365;
    let month_start_x = 0;

    months.forEach(month => {
      let month_end_x = month_start_x + HALF_UNIT*2*month.num_days;
      ctx.fillStyle = month.color;
      ctx.fillRect(month_start_x, 0, month_end_x, canvas.height);
      month_start_x = month_end_x;
    });
  }



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


  // draw blips on the map for each entry
  media_data.forEach((entry) => {
    let start_offset_days = (entry['date_started'] - START_DATE) / MS_TO_DAYS_DIVISOR;
    let end_date = entry['date_completed'] || TODAY;
    let duration_in_days = (end_date - entry['date_started']) / MS_TO_DAYS_DIVISOR + 1;

    let start_x = start_offset_days * (2 * HALF_UNIT);
    let start_y = HALF_UNIT * 2 * entry.lane + BUFFER * entry.lane;

    {
      // store edges of bounding rect on each entry, for fast mouse hover detection
      entry.left = start_x;
      entry.right = start_x + (2 * HALF_UNIT * duration_in_days);
      entry.top = start_y - HALF_UNIT;
      entry.bottom = start_y + HALF_UNIT;
    }

    draw_blip(entry, '#00f');
  });


  function draw_blip(item, fill_color) {
    ctx.fillStyle = fill_color;
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 3;

    let start_y = item.top + HALF_UNIT;

    ctx.beginPath();
    // starting point
    ctx.moveTo(item.left, start_y);
    // first upward angle
    ctx.lineTo(item.left + HALF_UNIT, start_y - HALF_UNIT);
    // top length, matching duration of entry
    ctx.lineTo(item.right - HALF_UNIT, start_y - HALF_UNIT);
    // angle down to right side
    ctx.lineTo(item.right, start_y);
    // angle down and back to bottom
    ctx.lineTo(item.right - HALF_UNIT, start_y + HALF_UNIT);
    // bottom lenth, matching duration of entry
    ctx.lineTo(item.left + HALF_UNIT, start_y + HALF_UNIT);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  }


  {
    // draw a line on today
    let x = HALF_UNIT * 2 * (TODAY - START_DATE) / MS_TO_DAYS_DIVISOR;
    ctx.strokeStyle = '#f00';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.closePath();
    ctx.stroke();

    // and scroll there? not convinced that this is a good idea.
    // also seems to jank up pageX and pageY values on the mouse handler stuff :(
    // window.scroll(x - 300, 0);
  }


  // handle mouse movement, look for blips underneath the mouse so we can display details
  const canvas_pos = canvas.getBoundingClientRect();
  const offset_x = canvas_pos.x;
  const offset_y = canvas_pos.y;
  let highlighted_item = media_data[0];

  function handle_mouse_move(e) {
    let mouse_x = e.pageX - offset_x;
    let mouse_y = e.pageY - offset_y;

    for (let i = 0; i < media_data.length; i += 1) {
      let item = media_data[i];

      if ((item.left < mouse_x) &&
          (item.right > mouse_x) &&
          (item.top < mouse_y) &&
          (item.bottom > mouse_y)) {
        draw_blip(highlighted_item, '#00f');
        highlighted_item = item;
        name_el.innerHTML = item.title;
        draw_blip(item, '#ff0');
        return;
      }
    }
    draw_blip(highlighted_item, '#00f');
    name_el.innerHTML = "";
  }

  canvas.addEventListener('mousemove', handle_mouse_move);
});
