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
    date_completed: new Date("2019-04-08"),
    thoughts: `I think it's time to admit once again to myself that I will probably never finish this game. It's delightful, but it's just too damn hard. Something about it does not fit into my brain the way other puzzlers do. Anyway, it's great. I'm sad I won't see the end of it.`
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
    date_completed: new Date("2019-04-21"),
    thoughts: `A really interesting series of small point-and-click adventure games. They are explicitly inspired by and an homage to Twin Peaks, and it shows. At points it starts to feel a bit like Twin Peaks fan fiction, which is not really a complaint. They're really great at setting a creepy and mysterious mood, and I'm looking forward to more entries in the series that will flesh out the mythos even more.`
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
    date_completed: new Date("2019-08-18"),
    thoughts: `Holy cow what a show. I don't have anything smart to add about this that a million other people haven't already said, but just...holy cow.`
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
    date_completed: new Date("2019-04-14"),
    thoughts: `I watched a bit of KonMari's Netflix show and decided that I wanted to reread this one. I read it when it came out but never really gave her techniques an honest try, so now I think I want to really give it a shot at home and see how things go.`
  }
  ,
  {
    title: "William Gibson's Alien 3",
    type: "book",
    date_started: new Date("2019-04-06"),
    date_completed: new Date("2019-04-06"),
    thoughts: `This is a pretty interesting thing. Apparently Gibson wrote a screenplay for the Aliens 3 movie, but it wound up not getting used. But now they decided to make a comic book based on that screenplay. To be honest, it's...fine. Not amazing, I don't think, but decent enough.`
  }
  ,
  {
    title: "The Secret Lives of Color",
    type: "book",
    date_started: new Date("2019-04-23"),
    date_completed: new Date("2019-05-04"),
    thoughts: `This was a lot of fun! Very well-researched and engagingly written stories about a huge palette of colors, from the commonplace to ones I'd never heard of before.`
  }
  ,
  {
    title: "The Haunted Island: A Frog Detective Game",
    type: "game",
    date_started: new Date("2019-04-26"),
    date_completed: new Date("2019-04-26"),
    thoughts: `A truly delightful little bite-sized adventure game, just packed with charm and good-natured humor.`
  }
  ,
  {
    title: "Tacoma",
    type: "game",
    date_started: new Date("2019-04-28"),
    date_completed: new Date("2019-04-28"),
    thoughts: `A pretty solid follow-up to the landmark Gone Home. The voice actors and solid writing are really the stars of the show here. I felt like the rummaging around part was less compelling than in Gone Home, but the storytelling was quite good.`
  }
  ,
  {
    title: "Lara Croft GO",
    type: "game",
    date_started: new Date("2019-04-29"),
    date_completed: new Date("2019-05-04"),
    thoughts: `Another GO game. Better than Deus Ex GO. Not quite as good as Hitman GO.`
  }
  ,
  {
    title: "REMOTE: Office Not Required",
    type: "book",
    date_started: new Date("2019-05-04"),
    date_completed: new Date("2019-05-04"),
    thoughts: `Another decent book from the Basecamp guys. It's a quick read that challenges a lot of the assumptions many modern office workers and managers have about remote working. It also validates a lot of my own personal beliefs, so of course I found it enjoyable to read.`
  }
  ,
  {
    title: "STEEP",
    type: "game",
    date_started: new Date("2019-05-18"),
    date_completed: new Date("2019-05-18"),
    thoughts: `Grabbed this because it was free on UPlay and looked kind of cool. Wound up not really being my cup of tea, although I still think the idea has lots of promise.`
  }
  ,
  {
    title: "Star Wars: The Old Republic",
    type: "game",
    date_started: new Date("2019-05-19"),
    date_completed: new Date("2019-05-19"),
    thoughts: `Thought I'd give this MMO a try, but it won't run on my computer for some reason and I'm not ravenous enough for it to figure out why :/`
  }
  ,
  {
    title: "To Sell is Human",
    type: "book",
    date_started: new Date("2019-05-19"),
    date_completed: new Date("2019-06-04"),
    thoughts: `An okay pop overview of some ideas about salespersonship in the modern era. This is in that genre of pop psych book that annoyingly alternates between actual information and definitely-fabricated case studies, which means it's about twice as long as it should be. Still had some somewhat useful info in it, though.`
  }
  ,
  {
    title: "Campfire Cooking",
    type: "game",
    date_started: new Date("2019-05-20"),
    date_completed: new Date("2019-05-30"),
    thoughts: `Cute and clever! It takes a lot of inspiration from Stephen's Sausage Roll, and while it's not nearly as brilliant as that game is, it's still fun and challenging.`
  }
  ,
  {
    title: "Elder Scrolls Blades",
    type: "game",
    date_started: new Date("2019-05-22"),
    date_completed: new Date("2019-05-26"),
    thoughts: `A surprisingly decent realization of the Elder Scrolls world for mobile devices. The combat feels pretty good, which is the first time I've been able to say that about an Elder Scrolls game. The town-building mechanic is pretty fun too. It's all hamstrung, unfortunately, by awful F2P mechanics :(`
  }
  ,
  {
    title: "Detective Pikachu",
    type: "movie",
    date_started: new Date("2019-05-25"),
    date_completed: new Date("2019-05-25"),
    thoughts: `This was lots of fun! The premise of live-action Pokemon sounds like a disaster waiting to happen, but they applied just enough self-awareness to keep things light and enjoyable.`
  }
  ,
  {
    title: "Obduction",
    type: "game",
    date_started: new Date("2019-05-25"),
    date_completed: new Date("2019-05-28"),
    thoughts: `Advertised as a spiritual successor to Myst, and delivers on that promise quite well. Aside from one very tedious puzzle near the end that involved a million long load screens, I loved this.`
  }
  ,
  {
    title: "Driven to Distraction at Work",
    type: "book",
    date_started: new Date("2019-06-05"),
    date_completed: new Date("2019-06-20"),
    thoughts: `Not super useful, unfortunately. Intends to be a guide for people with ADHD-like symptoms, but didn't really teach me anything new. I think it could be a good guide if you haven't previously researched the topic.`
  }
  ,
  {
    title: "The Expanse 1: Leviathan Wakes",
    type: "book",
    date_started: new Date("2019-06-05"),
    date_completed: new Date("2019-06-30"),
    thoughts: `A really fun space opera with some clear George R.R. Martin influences. I bounced off this book a while back but I'm glad I gave it another shot, because it's very enjoyable! I'll definitely check out the next entry in the series.`
  }
  ,
  {
    title: "John Wick 3",
    type: "movie",
    date_started: new Date("2019-06-08"),
    date_completed: new Date("2019-06-08"),
    thoughts: `Fun times! It's more John Wick. Doesn't really do anything the previous 2 didn't do, but the fight scenes keeps getting amped up. Super impressive fight choreography.`
  }
  ,
  {
    title: "The Room 1–4",
    type: "game",
    date_started: new Date("2019-06-08"),
    date_completed: new Date("2019-06-17"),
    thoughts: `A great series of very satisfying puzzle box interactions, plus a nice spooky gaslamp/Lovecraft-y style atmosphere. They're not reeealllllyy puzzle games in the common sense, because they're focused primarily around these object manipulations, but there are a few legit puzzles sprinkled in amidst the other stuff. Very good!`
  }
  ,
  {
    title: "Distributed Systems for Fun and Profit",
    type: "book",
    date_started: new Date("2019-06-13"),
    date_completed: new Date("2019-06-26"),
    thoughts: `A pretty good overview of the kinds of things you need to think about when working in distributed systems. As a beginner in the topic, I found this helpful in getting my head into the right space.`
  }
  ,
  {
    title: "Hollow Knight",
    type: "book",
    date_started: new Date("2019-06-21"),
    date_completed: new Date("2019-07-13"),
    thoughts: ``,
  }
  ,
  {
    title: "White Fragility",
    type: "book",
    date_started: new Date("2019-06-21"),
    date_completed: new Date("2019-06-24"),
    thoughts: `Lots to think about here. I don't think I'll know how I really feel about this book until I take some time to digest it.`,
  }
  ,
  {
    title: "Call of Cthulhu",
    type: "game",
    date_started: new Date("2019-06-30"),
    date_completed: new Date("2019-07-04"),
    thoughts: `Like Lovecraft's writing, this game is at its best when it's developing a spooky atmosphere and playing with your perceptions of what's real and what's imagined, and it's at its worst when trying to develop characters and present dialogue. Overall I liked it, and there are some cool surprises that are paced really well, but I was cringing through a lot of the acting and writing.`,
  }
  ,
  {
    title: "Neon Genesis Evangelion",
    type: "tv",
    date_started: new Date("2019-06-28"),
    date_completed: null,
    thoughts: ``
  }
  ,
  {
    title: "Los Espookys",
    type: "tv",
    date_started: new Date("2019-06-14"),
    date_completed: new Date("2019-07-19"),
    thoughts: ``
  }
  ,
  {
    title: "Fire Emblem: Three Houses",
    type: "game",
    date_started: new Date("2019-07-26"),
    date_completed: null,
    thoughts: ``,
  }
  ,
  {
    title: "Exapunks",
    type: "game",
    date_started: new Date("2019-07-15"),
    date_completed: new Date("2019-08-15"),
    thoughts: `Another awesome hacking game from Zachtronics. I didn't get super far in this one, but I know I'll come back to it in the future. It's super good.`
  }
  ,
  {
    title: "Hacking With MacOS",
    type: "book",
    date_started: new Date("2019-07-22"),
    date_completed: null,
    thoughts: ``,
  }
  ,
  {
    title: "City of Darkness Revisited",
    type: "book",
    date_started: new Date("2019-07-26"),
    date_completed: null,
    thoughts: ``,
  }
  ,
  {
    title: "The Peripheral",
    type: "book",
    date_started: new Date("2019-08-01"),
    date_completed: null,
    thoughts: ``,
  }
  ,
  {
    title: "The Elements of Computing Systems",
    type: "book",
    date_started: new Date("2019-07-31"),
    date_completed: null,
    thoughts: ``,
  }
  ,
  {
    title: "Shape Up",
    type: "book",
    date_started: new Date("2019-07-30"),
    date_completed: new Date("2019-08-08"),
    thoughts: `It's good! More wisdom from the Basecamp crew.`,
  }
  ,
  {
    title: "Dark Crystal",
    type: "movie",
    date_started: new Date("2019-08-31"),
    date_completed: new Date("2019-08-31"),
    thoughts: `Classic Jim Henson Studios weird 80s movie. I rewatched this to get ready to check out the Netflix series that just came out. Good times.`,
  }
  ,
  {
    title: "Hip Hop Evolution",
    type: "tv",
    date_started: new Date("2019-08-31"),
    date_completed: null,
    thoughts: ``,
  }
  ,
  {
    title: "Control",
    type: "game",
    date_started: new Date("2019-09-05"),
    date_completed: null,
    thoughts: ``,
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
