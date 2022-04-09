window.addEventListener('load', function(){
  const Countries = [
    // canada
    {
      name: "Vancouver",
      country: "Canada",
      time: -7,
      daylightSavings: 1,
      rain: 168,
      snow: 9,
      sun: 289,
    },
    {
      name: "Yellowknife",
      country: "Canada",
      time: -6,
      daylightSavings: 1,
      rain: 119,
      snow: 78,
      sun: 43,
    },
    {
      name: "Quebec",
      country: "Canada",
      time: -4,
      daylightSavings: 1,
      rain: 175,
      snow: 70,
      sun: 290,
    },
    {
      name: "Resolute Bay",
      country: "Canada",
      time: -5,
      daylightSavings: 1,
      rain: 109,
      snow: 93,
      sun: 183,
    },
  
    // USA
    {
      name: "Los Angeles",
      country: "USA",
      time: -7,
      daylightSavings: 1,
      rain: 34,
      snow: 0,
      sun: 186,
      winter: [0, 1, 11],
      spring: [2, 3, 4],
      summer: [5, 6, 7],
      fall: [8, 9, 10],
      winterWeather: "wet",
      springWeather: "dry",
      summerWeather: "dry",
      fallWeather: "wet",
    },
    {
      name: "Denver",
      country: "USA",
      time: -6,
      daylightSavings: 1,
      rain: 84,
      snow: 31,
      sun: 115,
    },
    {
      name: "Chicago",
      country: "USA",
      time: -5,
      daylightSavings: 1,
      rain: 127,
      snow: 28,
      sun: 84,
    },
    {
      name: "New York",
      country: "USA",
      time: -4,
      daylightSavings: 1,
      rain: 125,
      snow: 11,
      sun: 107,
    },
    {
      name: "Anchorage",
      country: "USA",
      time: -8,
      daylightSavings: 1,
      rain: 115,
      snow: 47,
      sun: 126,
    },
  
    // Mexico
    {
      name: "Mexico City",
      country: "Mexico",
      time: -5,
      daylightSavings: 1,
      rain: 64,
      snow: 0,
      sun: 301,
    },
    {
      name: "Puerto Vallarta",
      country: "Mexico",
      time: -5,
      daylightSavings: 1,
      rain: 95,
      snow: 0,
      sun: 270,
    },
  
    // Brazil
    {
      name: "Rio de Janeiro",
      country: "Brazil",
      time: -3,
      daylightSavings: 1,
      rain: 93,
      snow: 0,
      sun: 218,
    },
    {
      name: "Sao Paulo",
      country: "Brazil",
      time: -3,
      daylightSavings: 1,
      rain: 107,
      snow: 0,
      sun: 200,
    },
    {
      name: "Manaus",
      country: "Brazil",
      time: -4,
      daylightSavings: 1,
      rain: 160,
      snow: 0,
      sun: 182,
    },
  
    // South America
    // Argentina
    {
      name: "Cordoba",
      country: "Argentina",
      time: -3,
      daylightSavings: 1,
      rain: 82,
      snow: 1,
      sun: 282,
    },
    //Peru
    {
      name: "Lima",
      country: "Peru",
      time: -5,
      daylightSavings: 1,
      rain: 60,
      snow: 0,
      sun: 316,
    },
    // Venezuela
    {
      name: "Caracas",
      country: "Venezuela",
      time: -4,
      daylightSavings: 1,
      rain: 100,
      snow: 0,
      sun: 265,
    },
  
    // Europe
    // Germany
    {
      name: "Berlin",
      country: "Germany",
      time: +2,
      daylightSavings: 1,
      rain: 106,
      snow: 40,
      sun: 162,
    },
    // France
    {
      name: "Paris",
      country: "France",
      time: +2,
      daylightSavings: 1,
      rain: 111,
      snow: 2.4,
      sun: 166,
    },
    // Italy
    {
      name: "Rome",
      country: "Italy",
      time: +2,
      daylightSavings: 1,
      rain: 78,
      snow: 0,
      sun: 225,
    },
    // Spain
    {
      name: "Madrid",
      country: "Spain",
      time: +2,
      daylightSavings: 1,
      rain: 63,
      snow: 0,
      sun: 276,
    },
    // Ukraine
    {
      name: "Kyiv",
      country: "Ukraine",
      time: +3,
      daylightSavings: 1,
      rain: 195,
      snow: 61,
      sun: 184,
    },
    // Norway
    {
      name: "Oslo",
      country: "Norway",
      time: +2,
      daylightSavings: 1,
      rain: 172,
      snow: 71,
      sun: 192,
    },
    // United Kingdom
    {
      name: "London",
      country: "United Kingdom",
      time: +1,
      daylightSavings: 1,
      rain: 110,
      snow: 16,
      sun: 148,
    },
    {
      name: "Cambridge",
      country: "United Kingdom",
      time: +1,
      daylightSavings: 1,
      rain: 108,
      snow: 2,
      sun: 149,
    },
    // Ireland
    {
      name: "Dublin",
      country: "Ireland",
      time: +1,
      daylightSavings: 1,
      rain: 191,
      snow: 17,
      sun: 142,
    },
  
    // Asia
    // China
    {
      name: "Beijing",
      country: "China",
      time: +8,
      daylightSavings: 1,
      rain: 46,
      snow: 6,
      sun: 274,
    },
    // Japan
    {
      name: "Tokyo",
      country: "Japan",
      time: +9,
      daylightSavings: 1,
      rain: 101,
      snow: 5,
      sun: 188,
    },
    // South Korea
    {
      name: "Seoul",
      country: "South Korea",
      time: +9,
      daylightSavings: 1,
      rain: 107,
      snow: 20,
      sun: 258,
    },
    // India
    {
      name: "Mumbai",
      country: "India",
      time: +5,
      minute: 30,
      daylightSavings: 1,
      rain: 90,
      snow: 0,
      sun: 258,
    },
    // Saudi Arabia
    {
      name: "Mecca",
      country: "Saudi Arabia",
      time: +3,
      daylightSavings: 1,
      rain: 10,
      snow: 0,
      sun: 355,
    },
    // Iran
    {
      name: "Tehran",
      country: "Iran",
      time: +4,
      minute: 30,
      daylightSavings: 1,
      rain: 61,
      snow: 2,
      sun: 304,
    },
    // Israel
    {
      name: "Jerusalem",
      country: "Israel",
      time: +3,
      daylightSavings: 1,
      rain: 41,
      snow: 0,
      sun: 324,
    },
  
    // Africa
  
    // Ethiopia
    {
      name: "Addis Ababa",
      country: "Ethiopia",
      time: +3,
      daylightSavings: 1,
      rain: 104,
      snow: 0,
      sun: 261,
    },
    // South Africa
    {
      name: "Cape Town",
      country: "South Africa",
      time: +2,
      daylightSavings: 1,
      rain: 103,
      snow: 2,
      sun: 262,
    },
    // Egypt
    {
      name: "Cairo",
      country: "Egypt",
      time: +2,
      daylightSavings: 1,
      rain: 17,
      snow: 0,
      sun: 348,
    },
    // Nigeria
    {
      name: "Lagos",
      country: "Nigeria",
      time: +1,
      daylightSavings: 1,
      rain: 130,
      snow: 1,
      sun: 235,
    },
  
    // Australia
    {
      name: "Sydney",
      country: "Australia",
      time: +10,
      daylightSavings: 1,
      rain: 95,
      snow: 0,
      sun: 262,
    },
    {
      name: "Perth",
      country: "Australia",
      time: +8,
      daylightSavings: 1,
      rain: 79,
      snow: 0,
      sun: 321,
    },
    // New Zealand
    {
      name: "Wellington",
      country: "New Zealand",
      time: +12,
      daylightSavings: 1,
      rain: 122,
      snow: 0,
      sun: 211,
    },
  ];
    
  //LOCATION
  let nftName = "Los Angeles";

  //CANVAS
  const canvas = document.getElementById("Canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = 800;
  canvas.height = 500;
  
  //VARIABLES
  let currentHour = 0;
  let currentMinute = 0;
  let currentSecond = 0;
  let milliseconds =  0;
  let currentMonth = 0;
  let currentTime = "";
  let raining = true;
  let snowing = true;
  let sunny = true;
  let bedCollided = false;
  let tableCollided = false;
  let xv = 0;
  let yv = 0;
  let lastTime = 0;
  let weatherTimer = 0;
  let weatherInterval = 60000;
  let deltaTime = 0;

  //OPERATIONS
  const index = Countries.findIndex((object) => {
    return object.name === nftName;
  });

  const ranNums = {
    eat: Math.floor(Math.random() * 60) + 1,
    sleep: Math.floor(Math.random() * 60) + 1,
  };

  //CLASSES
  class InputHandler {
    constructor(){
      this.keys = [];
      window.addEventListener('keydown', event => {
        if ((event.key == 'ArrowDown' || 
            event.key == 'ArrowUp' || 
            event.key == 'ArrowLeft' || 
            event.key == 'ArrowRight') && 
            this.keys.indexOf(event.key) == -1) {
            this.keys.push(event.key);
        }
        // console.log(event.key, this.keys);
      });
      window.addEventListener('keyup', event => {
        if (event.key == 'ArrowDown' || 
            event.key == 'ArrowUp' || 
            event.key == 'ArrowLeft' || 
            event.key == 'ArrowRight') {
            this.keys.splice(this.keys.indexOf(event.key), 1);
        }
        // console.log(event.key, this.keys);
      });
    }
  };

  class Player {
    constructor(){
      this.width = 244;
      this.height = 271;
      this.x = Math.floor(Math.random() * 399) + 51;
      this.y = 400;
      this.image = document.querySelector(".player");
      this.speed = 0;
      this.vy = 0;
      this.weight = 0.15;
    }
    draw(context){
      context.drawImage(this.image, this.x, this.y);
    }
    update(input){
      if (input.keys.indexOf('ArrowRight') > -1) {
          this.speed = 1.5;
      } else if(input.keys.indexOf('ArrowLeft') > -1) {
          this.speed = -1.5;
      } else if(input.keys.indexOf('ArrowUp') > -1 && this.onGround()) {
          this.vy -= 5;
      } else {
          this.speed = 0;
      }
      //horizontal movement
      this.x += this.speed;
      if (this.x < 0) this.x = 0;
      else if (this.x > canvas.width - this.width) this.x = canvas.width - this.width;
      //vertical movement
      this.y += this.vy;
      if (!this.onGround()){
          this.vy += this.weight;
      } else {
          this.vy = 0;
      }
      if (this.y > 210) this.y = 210;
    }
    onGround(){
      return this.y >= 210;
    }
  };

  class Bed {
    constructor(){
      canvas.width = canvas.width;
      canvas.height = canvas.height;
      this.width = 321;
      this.height = 207;
      this.x = 0;
      this.y = 270;
      this.image = document.querySelector(".bed");
    }
    draw(context){
      context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
  };

  class Table {
    constructor(){
      this.width = 223;
      this.height = 140;
      this.x = canvas.width - this.width;
      this.y = 335;
      this.image = document.querySelector(".food");
    }
    draw(context){
      context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
  };

  class Food {
    constructor(){
      this.width = 106;
      this.height = 93;
      this.x = 650;
      this.y = 285;
      this.image = document.querySelector(".foodToEat");
    }
    draw(context){
      context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
  };

  class Floor {
    constructor(){
      this.width = 800;
      this.height = 129;
      this.x = 0;
      this.y = canvas.height - this.height;
      this.image = document.querySelector(".floor");
    }
    draw(context){
      context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
  };

  class Wall {
    constructor(){
      this.width = 800;
      this.height = 414;
      this.x = 0;
      this.y = 0;
      this.image = document.querySelector(".wall");
    }
    draw(context){
      context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
  };

  class Scenery {
    constructor(){
      this.width = 286;
      this.height = 359;
      this.x = 380;
      this.y = 0;
      this.image = document.querySelector(".scenery");
    }
    draw(context){
      context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
  };

  class Gamebar {
    constructor(){
      this.width = 407;
      this.height = 49;
      this.x = 15;
      this.y = 15;
      this.image = document.querySelector(".gamebar");
    }
    draw(context){
      context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
  };

  class Snowflake {
    //NEED TO SPLICE OUT OF ARRAY INSTEAD OF REUSING PARTICLES TO END CLEANLY
    constructor(){
      this.x = Math.random() * 289 + 375;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 4 + 0.5;
      this.speed = Math.random() * 0.5 + 0.2;
    }
    update(){
      this.y += this.speed;
      if (this.y - this.size > canvas.height) this.y = 0 - this.size;
    }
    draw(canvas){
      const ctx = canvas.getContext("2d");
      ctx.fillStyle = 'white';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
      ctx.fill();
    }
  };

  class Raindrop {
    constructor(){
      this.x = Math.random() * 289 + 375;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 1.5 + 1;
      this.speed = Math.random() * 2 + 1.3;
    }
    update(){
      this.y += this.speed;
      if (this.y - this.size > canvas.height) this.y = 0 - this.size;
    }
    draw(canvas){
      const ctx = canvas.getContext("2d");
      ctx.fillStyle = 'blue';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
      ctx.fill();
    }
  };

  class Stars {
    constructor(){
      this.colorStars = 'lightyellow';
      this.starNum = 120;
      this.size = 0.005;
      this.speed = 0.05; 
    }
    update(){
      for (let i = 0; i < star.starNum; i++) {
      stars[i].x += 0.01;
      stars[i].y += 0.01;

      if (stars[i].x < 377 - stars[i].r) {
        stars[i].x = 662 + stars[i].r;
      } else if (stars[i].x > 662 + stars[i].r) {
          stars[i].x = 377 - stars[i].r;
      }

      if (stars[i].y < 0 - stars[i].r) {
        stars[i].y = 330 + stars[i].r;
      } else if (stars[i].y > 330 + stars[i].r) {
        stars[i].y = 0 - stars[i].r;
      }
      }
    }
    draw(canvas){
      const ctx = canvas.getContext("2d");
      ctx.fillStyle = star.colorStars;
      for (let i = 0; i < star.starNum; i++) {
        ctx.beginPath();
        ctx.arc(stars[i].x, stars[i].y, stars[i].r, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  };

  //FUNCTIONS
  function time() {
    date = new Date();
    currentHour = date.getUTCHours() + Countries[index].time;
    currentMinute = 0;
    currentSecond = date.getUTCSeconds();
    milliseconds = date.getUTCMilliseconds();
    currentMonth = date.getMonth();

    if (
      Countries[index].name == "Tehran" ||
      Countries[index].name == "Mumbai"
    ) {
      currentMinute = date.getUTCMinutes() + Countries[index].minute;
    } else {
      currentMinute = date.getUTCMinutes();
    }
    // make sure time doesn't go above 24 hours of the day
    if (currentHour > 24) {
      // console.log("time greater than 24");
      currentHour = currentHour - 24;
    }
    // make sure time doesn't go bellow 1 hours of the day
    if (currentHour < 1) {
      // console.log("time less than 1");
      currentHour = currentHour + 24;
    }
    //set daytime variable
    if (currentHour >= 6 && currentHour < 8) {
      morning = true;
      dayTime = false;
      evening = false;
      nightTime = false;
    } else if (currentHour >= 8 && currentHour < 18) {
      morning = false;
      dayTime = true;
      evening = false;
      nightTime = false;
    } else if (currentHour >= 18 && currentHour < 19) {
      morning = false;
      dayTime = false;
      evening = true;
      nightTime = false;
    } else {
      morning = false;
      dayTime = false;
      evening = false;
      nightTime = true;
    }

    //adds a zero to the minutes and seconds if below 10
    if (currentMinute < 10 && currentSecond >= 10 && currentHour >= 10) {
      currentTime = currentHour + ":0" + currentMinute + ":" + currentSecond;
    } else if (currentMinute < 10 && currentSecond < 10 && currentHour >= 10) {
      currentTime = currentHour + ":0" + currentMinute + ":0" + currentSecond;
    } else if (currentMinute < 10 && currentSecond < 10 && currentHour < 10) {
      currentTime = "0" + currentHour + ":0" + currentMinute + ":0" + currentSecond;
    } else if (currentMinute >= 10 && currentSecond < 10 && currentHour >= 10) {
      currentTime = currentHour + ":" + currentMinute + ":0" + currentSecond;
    } else if (currentMinute >= 10 && currentSecond < 10 && currentHour <= 10) {
      currentTime = "0" + currentHour + ":" + currentMinute + ":0" + currentSecond;
    } else if (currentMinute >= 10 && currentSecond > 10 && currentHour <= 10) {
      currentTime = "0" + currentHour + ":" + currentMinute + ":" + currentSecond;
    } else {
      currentTime = currentHour + ":" + currentMinute + ":" + currentSecond;
    }

  };

  function clock() {
    ctx.fillStyle = "white";
    ctx.font = "30px Courier";
    ctx.fillText(currentTime, 225, 50);
  };

  //CANNOT FADE BETWEEN GRADIENTS FOR SOME REASON
  function defaultSky() {
    if (morning === true && raining === true) {
      canvas.style.background = "linear-gradient(#1F6064, #E8AE56)";
    } else if (dayTime === true && raining === true) {
      canvas.style.background = "linear-gradient(#9BB9B8, #3F8F93)";
    } else if (evening === true && raining === true) {
      canvas.style.background = "linear-gradient(#9BB9B8, #1F6064)";
    } else if (nightTime === true && raining === true) {
      canvas.style.background = "linear-gradient(#0D0627, #000000)";
    } else if (morning === true && snowing === true) {
      canvas.style.background = "linear-gradient(#31C4BF, #DAF8C3)";
    } else if (dayTime === true && snowing === true) {
      canvas.style.background = "linear-gradient(#CCFFFD, #31C4BF)";
    } else if (evening === true && snowing === true) {
      canvas.style.background = "linear-gradient(#DAF8C3, #31C4BF)";
    } else if (nightTime === true && snowing === true) {
      canvas.style.background = "linear-gradient(#0D0627, #000000)";
    } else if (morning === true && sunny === true) {
      canvas.style.background = "linear-gradient(#31C4BF, #E8AE56)";
    } else if (dayTime === true && sunny === true) {
      canvas.style.background = "linear-gradient(#D3FFFF, #56E7E7)";
    } else if (evening === true && sunny === true) {
      canvas.style.background = "linear-gradient(#E8AE56, #D3FFFF)";
    } else if (nightTime === true && sunny === true) {
      canvas.style.background = "linear-gradient(#0D0627, #000000)";
    }
  };

  function weather() {
    let chance = Math.floor(Math.random() * 365) + 1;
    let rainChance = Countries[index].rain - Countries[index].snow;
    if (chance < rainChance) {
    //console.log(chance + " < " + rainChance);
      console.log("Raining");
      handleRaindrop(canvas);
      raining = true;
      snowing = false;
      sunny = false;
    } else if (
      chance > rainChance &&
      chance < rainChance + Countries[index].snow
    ) {
    //   console.log(
    //     chance +
    //       " > " +
    //       rainChance +
    //       "&&" +
    //       chance +
    //       " < " +
    //       rainChance +
    //       Countries[index].snow
    //   );
      console.log("Snowing");
      handleSnowflakes(canvas);
      snowing = true;
      sunny = false;
      raining = false;
    } else if (
      chance > rainChance &&
      chance > rainChance + Countries[index].snow
    ) {
      console.log("Sunny");
      // console.log(
      //   chance +
      //     " > " +
      //     rainChance +
      //     " && " +
      //     chance +
      //     " > " +
      //     (rainChance + Countries[index].snow)
      // );
      sunny = true;
      snowing = false;
      raining = false;
    }
  };

  function handleSnowflakes(canvas){
    for (let i = 0; i < snowArray.length; i++) {
    snowArray[i].update();
    snowArray[i].draw(canvas);
    }
  };

  function handleRaindrop(canvas){
    for (let i = 0; i < rainArray.length; i++) {
    rainArray[i].update();
    rainArray[i].draw(canvas);
    }
  };

  function handleClick(event) {
    let bound = canvas.getBoundingClientRect();
    let x = event.clientX - bound.left - canvas.clientLeft;
    let y = event.clientY - bound.top - canvas.clientTop;
    console.log("clicked X:" + x + " Y:" + y);
  };

  function handleCollisions() {
    //bed collision
    if (player.x <= 270) {
      bedCollided = true;
      // console.log("Bed collided.");
    } else {
      bedCollided = false;
    }

    //table collision
    if (player.x >= 410) {
      tableCollided = true;
      // console.log("Table collided.");
    } else {
      tableCollided = false;
    }
  }

  //BUILD GAME
  const input = new InputHandler();
  const player = new Player();
  const bed = new Bed();
  const table = new Table();
  const food = new Food();
  const floor = new Floor();
  const wall = new Wall();
  const scenery = new Scenery();
  const gamebar = new Gamebar();
  const star = new Stars();

  const snowArray = [];
  for (let i = 0; i < 100; i++){
      snowArray.push(new Snowflake);
  };

  const rainArray = [];
  for (let i = 0; i < 75; i++){
      rainArray.push(new Raindrop);
  };

  const stars = [];
  for (let i = 0; i < star.starNum; i++) {
      let speedMult = Math.random() * 1.5 + 0.5;
      stars[i] = {
          r: Math.random() * star.size * canvas.width / 2,
          x: Math.floor(Math.random() * 289 + 375),
          y: Math.floor(Math.random() * 330),
          xv: xv * speedMult,
          yv: yv * speedMult
      }
  }
 
  weather();

  function animate(timeStamp) {
    deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    ctx.clearRect(0,0,canvas.width,canvas.height);
    time();
    handleCollisions();
    defaultSky();

    if (nightTime == true) {
      star.draw(canvas);
      star.update();
    }
    
    scenery.draw(ctx);

    if (weatherTimer > weatherInterval) {
      weather();
      weatherTimer = 0;
    } else {
      weatherTimer += deltaTime;
    }

    if (raining == true) {
      handleRaindrop(canvas);
    } else if (snowing == true) {
      handleSnowflakes(canvas);
    }
    
    wall.draw(ctx);
    floor.draw(ctx);
    bed.draw(ctx);
    table.draw(ctx);
    food.draw(ctx);
    player.draw(ctx);
    gamebar.draw(ctx);
    clock();
    player.update(input);

    requestAnimationFrame(animate)
  }
  animate(0);

  //EVENT LISTENERS
  document.addEventListener("click", (event) => {
    handleClick(event);
  });
});
