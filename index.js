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

//VARIABLES
const canvas = document.getElementById("Canvas");
const ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 360;
w = 600;
h = 360;
const playerImage = document.querySelector(".player");
const bedImage = document.querySelector(".bed");
const foodImage = document.querySelector(".food");
const foodToEatImage = document.querySelector(".foodToEat");
const floorImage = document.querySelector(".floor");
const wallImage = document.querySelector(".wall");
let nftName = "Anchorage";
let weatherCalled = false;
let snows;
let rains;
let raining = true;
let snowing = true;
let sunny = true;
let dayTime = false;
let morning = false;
let evening = false;
let nightTime = false;
let foodClicked = false;

//OBJECTS
const mouse = {
  x: 0,
  y: 0,
};

const player = {
  w: 178,
  h: 196,
  x: Math.floor(Math.random() * 245) + 1,
  y: 150,
  speed: 1,
  dx: 0,
  dy: 0,
};

const bed = {
  w: 194,
  h: 125,
  x: 0,
  y: 220,
};

const floor = {
  w: 600,
  h: 89,
  x: 0,
  y: 271,
};

const wall = {
  w: 600,
  h: 289,
  x: 0,
  y: -10,
};

const food = {
  w: 187,
  h: 125,
  x: 413,
  y: 220,
};

let foodToEat = {
  w: 76,
  h: 66,
  x: 495,
  y: 195,
};

//DRAW FUNCTIONS
function drawPlayer() {
  ctx.drawImage(playerImage, player.x, player.y, player.w, player.h);
}

function drawBed() {
  ctx.drawImage(bedImage, bed.x, bed.y, bed.w, bed.h);
}

function drawFood() {
  ctx.drawImage(foodImage, food.x, food.y, food.w, food.h);
}

function drawFoodToEat() {
  ctx.drawImage(
    foodToEatImage,
    foodToEat.x,
    foodToEat.y,
    foodToEat.w,
    foodToEat.h
  );
}

function drawFloor() {
  ctx.drawImage(floorImage, floor.x, floor.y, floor.w, floor.h);
}

function drawWall() {
  ctx.drawImage(wallImage, wall.x, wall.y, wall.w, wall.h);
}

//OPERATIONS
const index = Countries.findIndex((object) => {
  return object.name === nftName;
});

//create random numbers
const ranNums = {
  eat: Math.floor(Math.random() * 60) + 1,
  sleep: Math.floor(Math.random() * 60) + 1,
};

//clear function
function clear() {
  // ctx.clearRect(0, 80, 300, 70);
  // ctx.clearRect(0, 0, 300, 15);
  ctx.clearRect(0, 0, 600, 360);
  ctx.beginPath();
  ctx.stroke();
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.closePath();
}

//WEATHER
function rain() {
  if (raining == true) {
    console.log("rain got called");

    function init() {
      rains = [];
      for (let i = 0; i < 500; i++) {
        rains.push(new Rain());
      }
      animationLoop();
    }

    function animationLoop() {
      drawScene();
      requestAnimationFrame(animationLoop);
    }

    function drawScene() {
      for (let i = 0; i < rains.length; i++) {
        rains[i].update();
        rains[i].draw();
      }
    }

    function getRandomInt(min, max) {
      return Math.round(Math.random() * (max - min)) + min;
    }

    class Rain {
      constructor() {
        this.reset();
        this.rgb = "52, 235, 236";
      }
      reset() {
        this.x = getRandomInt(0, w);
        this.xc = (this.x - w / 2) / (w / 2) / 2;
        this.y = getRandomInt(-(h * 0.3), h);
        this.yc = getRandomInt(10, 15) / 10;
        this.size = getRandomInt(5, 11) / 10;
        this.a = getRandomInt(-5, 0) / 10;
        this.ac = getRandomInt(1, 3) / 100;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = "blue";
        ctx.fill();
        ctx.closePath();
      }
      update() {
        this.x += this.xc;
        this.y += this.yc;
        this.a += this.ac;
        if (this.a > 2) {
          this.ac *= -1;
        } else if (this.a < 0 && this.ac < 0) {
          this.reset();
        }
      }
    }
  }
  window.addEventListener("DOMContentLoaded", init);
}

function snow() {
  if (snowing == true) {
    console.log("snow got called");
    function init() {
      snows = [];
      for (let i = 0; i < 200; i++) {
        snows.push(new Snow());
      }
      animationLoop();
    }

    function animationLoop() {
      drawScene();
      requestAnimationFrame(animationLoop);
    }

    function drawScene() {
      for (let i = 0; i < snows.length; i++) {
        snows[i].update();
        snows[i].draw();
      }
    }

    function getRandomInt(min, max) {
      return Math.round(Math.random() * (max - min)) + min;
    }

    class Snow {
      constructor() {
        this.reset();
        this.rgb = "52, 235, 236";
      }
      reset() {
        this.x = getRandomInt(0, w);
        this.xc = (this.x - w / 2) / (w / 2) / 2;
        this.y = getRandomInt(-(h * 0.3), h);
        this.yc = getRandomInt(10, 15) / 10;
        this.size = getRandomInt(5, 11) / 4;
        this.a = getRandomInt(-5, 0) / 10;
        this.ac = getRandomInt(1, 3) / 100;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.closePath();
      }
      update() {
        this.x += this.xc;
        this.y += this.yc;
        this.a += this.ac;
        if (this.a > 2) {
          this.ac *= -1;
        } else if (this.a < 0 && this.ac < 0) {
          this.reset();
        }
      }
    }
  }

  window.addEventListener("DOMContentLoaded", init);
}

function weather() {
  let chance = Math.floor(Math.random() * 365) + 1;
  let rainChance = Countries[index].rain - Countries[index].snow;
  if (chance < rainChance) {
    console.log(chance + " < " + rainChance);
    console.log("Raining");
    rain();
    rain = true;
    snow = false;
    sunny = false;
  } else if (
    chance > rainChance &&
    chance < rainChance + Countries[index].snow
  ) {
    console.log(
      chance +
        " > " +
        rainChance +
        "&&" +
        chance +
        " < " +
        rainChance +
        Countries[index].snow
    );
    console.log("Snowing");
    snow();
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
}

weather();

// if (raining == true) {
//   console.log("raining is true");
//   snow();
// }
// if (snowing == true) {
//   console.log("snowing is true");

//   snow();
// }
// if (sunny == true) {
//   console.log("sunny is true");

//   snow();
// }

// game related functions
function loadEverything() {
  function time() {
    let date = new Date();
    let currentHour = date.getUTCHours() + Countries[index].time;
    let currentMinute = 0;
    let currentSecond = date.getUTCSeconds();
    let milliseconds = date.getUTCMilliseconds();

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
      console.log("time greater than 24");
      currentHour = currentHour - 24;
    }
    // make sure time doesn't go bellow 1 hours of the day
    if (currentHour < 1) {
      console.log("time less than 1");
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
    let time = "";
    if (currentMinute < 10 && currentSecond >= 10) {
      time = currentHour + ":0" + currentMinute + ":" + currentSecond;
    } else if (currentMinute < 10 && currentSecond < 10) {
      time = currentHour + ":0" + currentMinute + ":0" + currentSecond;
    } else if (currentMinute >= 10 && currentSecond < 10) {
      time = currentHour + ":" + currentMinute + ":0" + currentSecond;
    } else {
      time = currentHour + ":" + currentMinute + ":" + currentSecond;
    }

    //text color based on day or night time
    if (dayTime === true || morning === true) {
      ctx.fillStyle = "black";
    } else {
      ctx.fillStyle = "white";
    }

    ctx.font = "20px Verdana";
    ctx.fillText(time, canvas.width / 2 - 50, 25);
    // for testing
    ctx.fillText("player x: " + player.x, 10, 25);

    // if (currentSecond % 3 == 0 && milliseconds <= 16.6) {
    //   if (currentSecond > 40 && currentSecond < 43) {
    //     weatherCalled = false;
    //     if (weatherCalled == false) {
    //       weatherCalled = true;
    //       weather();
    //     }
    //   }
    //   if (weatherCalled == false) {
    //     weatherCalled = true;
    //     weather();
    //   }
    // }
  }

  //sky color
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
  }

  defaultSky();

  // drawScene();
  time();

  clear();
  time();

  //drawWall();
  drawFloor();
  drawBed();
  drawFood();
  drawFoodToEat();
  drawPlayer();

  newPos();
  bedCollision();
  foodCollision();

  waitForHunger();

  requestAnimationFrame(loadEverything);
}

function newPos() {
  player.x += player.dx;
  detectWalls();
}

// buttons
function waitForHunger() {
  let date = new Date();
  let currentMinute = date.getMinutes();
  let currentSecond = date.getSeconds();
  if (currentMinute % 1 === 0) {
    // console.log("will be hungry at " + ranNums.eat + " seconds.");
    if (currentSecond === ranNums.eat) {
      console.log("I'm hungry");
      ctx.clearRect(0, 100, 300, 15);
      ctx.fillText("I'm Hungry ", 25, 100);
    }
  }
}

function sleepBtn() {
  ctx.beginPath();
  ctx.rect(20, 20, 150, 100);
  ctx.stroke();
}

// collision detection
function bedCollision() {
  if (player.x > -1 && player.x <= 150) {
    // ctx.beginPath();
    // ctx.fillText("Bed!!!", 10, 160);
    // ctx.stroke();
    console.log("Bed Collision Detected.");
  }
}

function foodCollision() {
  if (player.x > 475 - player.w && player.x <= 600) {
    // ctx.beginPath();
    // ctx.fillText("Food!!!", 500, 160);
    // ctx.stroke();
    console.log("Table Collision Detected.");
  }
}

function detectWalls() {
  if (player.x < 0) {
    player.x = 0;
  }

  if (player.x + player.w > canvas.width) {
    player.x = canvas.width - player.w;
  }
}

// movement functions
function moveRight() {
  player.dx = player.speed;
}

function moveLeft() {
  player.dx = -player.speed;
}

function keyDown(e) {
  if (e.key === "ArrowRight" || e.key === "Right" || e.key === "d") {
    moveRight();
  } else if (e.key === "ArrowLeft" || e.key === "Left" || e.key === "a") {
    moveLeft();
  }
}

function keyUp(e) {
  if (
    e.key == "Right" ||
    e.key == "ArrowRight" ||
    e.key == "Left" ||
    e.key == "ArrowLeft" ||
    e.key === "d" ||
    e.key === "a"
  ) {
    player.dx = 0;
  }
}

document.addEventListener("click", (event) => {
  let bound = canvas.getBoundingClientRect();
  let x = event.clientX - bound.left - canvas.clientLeft;
  let y = event.clientY - bound.top - canvas.clientTop;
  //fill with functions for positional clicks
  console.log("clicked X:" + x + " Y:" + y);
  // clickable positions
  function hungryClicked() {
    if (y >= 31 && y < 68 && x > 40 && x < 155) {
      console.log("tired clicked");
      ctx.clearRect(24, 14, 50, 20);
      // ctx.beginPath();
      // ctx.rect(24, 14, 50, 20);
      // ctx.stroke();
    }
  }
  hungryClicked();
});
loadEverything();

document.addEventListener("mousedown", (event) => {
  let bound = canvas.getBoundingClientRect();
  let x = event.clientX - bound.left - canvas.clientLeft;
  let y = event.clientY - bound.top - canvas.clientTop;
  //move food with mouse when clicked
  if (x > 489 && x < 571 && y > 194 && y < 257) {
    document.addEventListener("mousemove", function (event) {
      let bound = canvas.getBoundingClientRect();
      foodToEat.x =
        event.clientX - bound.left - canvas.clientLeft - foodToEat.w / 2;
      foodToEat.y =
        event.clientY - bound.top - canvas.clientTop - foodToEat.h / 2;
      foodClicked = true;
    });
  }
});

document.addEventListener("mouseup", (event) => {
  let bound = canvas.getBoundingClientRect();
  let x = event.clientX - bound.left - canvas.clientLeft;
  let y = event.clientY - bound.top - canvas.clientTop;

  //put food back on table
  if (x > 409 && x < 591 && y > 234 && y < 282 && foodClicked === true) {
    document.addEventListener("mousemove", function (event) {
      foodToEat.x = 495;
      foodToEat.y = 195;
      foodClicked = false;
    });
  }

  if (
    foodClicked === true &&
    foodToEat.x - (player.x + player.w) <= -50 &&
    foodToEat.x - (player.x + player.w) >= -200 &&
    foodToEat.y - (player.y + player.h) <= 5 &&
    foodToEat.y - (player.y + player.h) >= -225
  ) {
    document.addEventListener("mousemove", function (event) {
      foodToEat.x = 495;
      foodToEat.y = 195;
      foodClicked = false;
    });
    console.log("on rabbit!");
  }
});

document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);
// window.addEventListener("DOMContentLoaded", init);
