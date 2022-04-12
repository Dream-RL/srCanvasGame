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
    
  //*SET LOCATION
  let nftName = "Berlin";

  //# CANVAS
  const canvas = document.getElementById("Canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = 1000;
  canvas.height = 600;
  
  //# VARIABLES
  let currentHour;
  let currentMinute;
  let currentSecond;
  let currentMonth;
  let currentTime;
  let morning;
  let dayTime;
  let evening;
  let nightTime;
  let raining;
  let snowing;
  let sunny;
  let bedCollided;
  let tableCollided;
  let xv;
  let yv;
  let facingLeft;
  let facingRight;
  //*variable below must be set
  let lastTime = 0;
  let weatherTimer = 0;
  let weatherInterval = 60000;
  let deltaTime = 0;

  //# OPERATIONS
  const index = Countries.findIndex((object) => {
    return object.name == nftName;
  });

  const ranNums = {
    eat: Math.floor(Math.random() * 60) + 1,
    sleep: Math.floor(Math.random() * 60) + 1,
  };

  //TODO left and right movement with touch actions
  //# CLASSES
  class InputHandler {
    constructor(){
      this.keys = [];
      this.touchY = '';
      this.touchThreshold = 80;
      //*handles keyboard inputs
      window.addEventListener('keydown', event => {
        if ((event.code == 'ArrowDown' || 
            event.code == 'ArrowUp' || 
            event.code == 'ArrowLeft' || 
            event.code == 'ArrowRight' ||
            event.code == 'KeyA' ||
            event.code == 'KeyD' ||
            event.code == 'KeyW' ||
            event.code == 'Space') && 
            this.keys.indexOf(event.code) == -1) {
            this.keys.push(event.code);
        }
        console.log(this.keys);
      });
      window.addEventListener('keyup', event => {
        if (event.code == 'ArrowDown' || 
        event.code == 'ArrowUp' || 
        event.code == 'ArrowLeft' || 
        event.code == 'ArrowRight' ||
        event.code == 'KeyA' ||
        event.code == 'KeyD' ||
        event.code == 'KeyW' ||
        event.code == 'Space') {
            this.keys.splice(this.keys.indexOf(event.code), 1);
        }
        console.log(this.keys);
      });
      //*handles touch inputs
      window.addEventListener('touchstart', event => {
        this.touchY = event.changedTouches[0].pageY;
      });
      window.addEventListener('touchmove', event => {
        const swipeDistance = event.changedTouches[0].pageY - this.touchY;
        if (swipeDistance < -this.touchThreshold && this.keys.indexOf('swipe up') == -1) this.keys.push('swipe up');
        else if (swipeDistance > this.touchThreshold && this.keys.indexOf('swipe down') == -1) this.keys.push('swipe down');
      });
      window.addEventListener('touchend', event => {
        this.keys.splice(this.keys.indexOf('swipe down'), 1);
        this.keys.splice(this.keys.indexOf('swipe up'), 1);
      });
    };
  };

  class Player {
    constructor(){
      this.width = 302;
      this.height = 205;
      this.groundHeight = (canvas.height - this.height) - 25;
      this.x = Math.floor(Math.random() * 300) + 100;
      this.y = this.groundHeight;
      this.image = document.querySelector(".player");
      this.speed = 0;
      this.vy = 0;
      this.weight = 0.12;
      // where on sprite sheet to start
      this.frameX = 7;
      this.frameY = 0;
      this.maxFrame = 20;
      this.fps = 40;
      this.frameTimer = 0;
      this.frameInterval = 1000/this.fps;

    };
    draw(context){
      context.drawImage(this.image, this.frameX * this.width, this.frameY * this.height, this.width, this.height, this.x, this.y, this.width, this.height);
      
    }
    update(input, deltaTime){
      if (input.keys.indexOf('ArrowRight') > -1 || input.keys.indexOf('KeyD') > -1) {
        this.speed = 1.75;
        facingRight = true;    
        facingLeft = false;  
        //*sprite sheet cycle move right
        if(this.frameTimer > this.frameInterval){
          if (this.frameX >= this.maxFrame) this.frameX = 0;
          else {
            this.frameX++
            this.frameY = 0;
          }
          this.frameTimer = 0;
          } else{
          this.frameTimer += deltaTime;
        }
      } else if(input.keys.indexOf('ArrowLeft') > -1 || input.keys.indexOf('KeyA') > -1) {
          this.speed = -1.75;
          facingRight = false;
          facingLeft = true;
          //*sprite sheet cycle move left
          if(this.frameTimer > this.frameInterval){
            if (this.frameX >= this.maxFrame) this.frameX = 0;
            else {
              this.frameX++
              this.frameY = 1;
            };
            this.frameTimer = 0;
            } else{
            this.frameTimer += deltaTime;
            }
      } else if((input.keys.indexOf('ArrowUp') > -1 || input.keys.indexOf('swipe up') > -1 || input.keys.indexOf('KeyW') > -1 || input.keys.indexOf('Space') > -1)) {
        if( this.onGround()){
          this.vy -= 5;

        } 
        // else if (!this.onGround()){
        //          // jump animation
        //          if(this.frameTimer > this.frameInterval){
        //           if (this.frameX >= 17) this.frameX = 0;
        //           else {
        //             this.frameX++
        //             this.frameY = 2;
                    
        //           };
        //           this.frameTimer = 0;
        //           } else{
        //           this.frameTimer += deltaTime;
        //         }
        

        // }
   
      } else {
          this.speed = 0;
          //*facing left idle
          if (facingLeft == true){
            if(this.frameTimer > this.frameInterval){
              if (this.frameX >= this.maxFrame) this.frameX = 0;
              else {
                this.frameX++;
                this.frameY = 1;
              }
              this.frameTimer = 0;
              } else{
              this.frameTimer += deltaTime;
            }
          } 
          //*facing right idle
          else {
            if(this.frameTimer > this.frameInterval){
              if (this.frameX >= this.maxFrame) this.frameX = 0;
              else {
                this.frameX++;
                this.frameY = 0;
              }
              this.frameTimer = 0;
              } else{
              this.frameTimer += deltaTime;
            }
          } 
     
      } 

      //*horizontal movement
      this.x += this.speed;
      if (this.x < 0) this.x = 0;
      else if (this.x > canvas.width - this.width) this.x = canvas.width - this.width;
      //*vertical movement
      this.y += this.vy;
      if (!this.onGround()){
          this.vy += this.weight;
      } else {
          this.vy = 0;
      }
      if (this.y > this.groundHeight) this.y = this.groundHeight;
    }
    onGround(){
      return this.y >= this.groundHeight;
    }
  };

  class Bed {
    constructor(){
      canvas.width = canvas.width;
      canvas.height = canvas.height;
      this.width = 377;
      this.height = 247;
      this.x = 0;
      this.y = (canvas.height - this.height) - 25;
      this.image = document.querySelector(".bed");
    }
    draw(context){
      context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
  };

  class Table {
    constructor(){
      this.width = 312;
      this.height = 190;
      this.x = canvas.width - this.width;
      this.y = (canvas.height - this.height) - 25;
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
      this.x = (canvas.width - this.width) - 40;
      this.y = (canvas.height - this.height) - 163;
      this.image = document.querySelector(".foodToEat");
    }
    draw(context){
      context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
  };

  class Floor {
    constructor(){
      this.width = 1000;
      this.height = 116;
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
      this.width = 1000;
      this.height = 484;
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
      this.width = 360;
      this.height = 333;
      this.x = 470;
      this.y = 95;
      this.image = document.querySelector(".scenery");
    }
    draw(context){
      context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
  };

  class Clock {
    constructor(){
      this.width = 314;
      this.height = 61;
      this.x = 490;
      this.y = 30;
      this.image = document.querySelector(".clock");
    }
    draw(context){
      //*adds a zero to the minutes, seconds, and hour if below 10
      if (currentMinute < 10 
      && currentSecond >= 10 
      && currentHour >= 10
      ){
        currentTime = currentHour + ":0" + currentMinute + ":" + currentSecond;
      } else if (currentMinute < 10 
      && currentSecond < 10 
      && currentHour >= 10
      ){
        currentTime = currentHour + ":0" + currentMinute + ":0" + currentSecond;
      } else if (currentMinute < 10 
      && currentSecond < 10 
      && currentHour < 10
      ){
        currentTime = "0" + currentHour + ":0" + currentMinute + ":0" + currentSecond;
      } else if (currentMinute >= 10 
      && currentSecond < 10 
      && currentHour >= 10
      ){
        currentTime = currentHour + ":" + currentMinute + ":0" + currentSecond;
      } else if (currentMinute >= 10 
      && currentSecond < 10 
      && currentHour >= 10
      ){
        currentTime = "0" + currentHour + ":" + currentMinute + ":0" + currentSecond;
      } else if (currentMinute >= 10 
      && currentSecond >= 10 
      && currentHour <= 10
      ){
        currentTime = "0" + currentHour + ":" + currentMinute + ":" + currentSecond;
      } else if (currentMinute < 10 
      && currentSecond >= 10 
      && currentHour < 10
      ){
        currentTime = "0" + currentHour + ":0" + currentMinute + ":" + currentSecond;
      } else if (currentMinute >= 10 
      && currentSecond < 10 
      && currentHour < 10
      ){
        currentTime = "0" + currentHour + ":" + currentMinute + ":0" + currentSecond;
      } else {
        currentTime = currentHour + ":" + currentMinute + ":" + currentSecond;
      };

      context.drawImage(this.image, this.x, this.y, this.width, this.height);
      ctx.fillStyle = "#FFAC12";
      ctx.font = "35px Consolas";
      ctx.strokeStyle = "black";
      ctx.lineWidth = 3;
      ctx.strokeText(currentTime, 565, 72);
      ctx.fillText(currentTime, 565, 72);
    }
  };

  class Snowflake {
    //NEED TO SPLICE OUT OF ARRAY INSTEAD OF REUSING PARTICLES TO END CLEANLY
    constructor(){
      this.x = Math.random() * 365 + 470;
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
      this.x = Math.random() * 365 + 470;
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
      this.size = 0.0025;
      this.speed = 0.03; 
    }
    update(){
      for (let i = 0; i < star.starNum; i++) {
      stars[i].x += 0.01;
      stars[i].y += 0.01;

      if (stars[i].x < 470 - stars[i].r) {
        stars[i].x = 835 + stars[i].r;
      } else if (stars[i].x > 835 + stars[i].r) {
          stars[i].x = 470 - stars[i].r;
      }

      if (stars[i].y < 95 - stars[i].r) {
        stars[i].y = 410 + stars[i].r;
      } else if (stars[i].y > 410 + stars[i].r) {
        stars[i].y = 95 - stars[i].r;
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

  //# FUNCTIONS
  function time() {
    date = new Date();
    currentHour = date.getUTCHours() + Countries[index].time;
    currentMinute = 0;
    currentSecond = date.getUTCSeconds();
    milliseconds = date.getUTCMilliseconds();
    currentMonth = date.getMonth();
    let adjustedMinute;

    //*handle time for countries that are 30 minutes ahead
    if (
      Countries[index].name == "Tehran" ||
      Countries[index].name == "Mumbai"
    ) {
      adjustedMinute = date.getUTCMinutes() + Countries[index].minute;
      //*stops minutes from going over 60
      if (adjustedMinute >= 61) {
        currentMinute = adjustedMinute - 60;
      } else {
        currentMinute = adjustedMinute;
      }
    } 
    //*countries that do not need 30 minutes added 
    else {
      currentMinute = date.getUTCMinutes();
    }
    //*make sure time doesn't go above 24 hours of the day
    if (currentHour >= 24) {
      // console.log("time greater than 24");
      currentHour = currentHour - 24;
    }
    //*make sure time doesn't go bellow 1 hours of the day
    if (currentHour < 1 && currentHour !== 0) {
      // console.log("time less than 1");
      currentHour = currentHour + 24;
    }
    //*set time of day variables
    if (currentHour == 6) {
      morning = true;
      dayTime = false;
      evening = false;
      nightTime = false;
    } else if (currentHour >= 7 && currentHour < 18) {
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
  };

  //*determine which type of weather will happen
  function weather() {

    let chance = Math.floor(Math.random() * 365) + 1;
    let rainChance = Countries[index].rain - Countries[index].snow;

    //*rain
    if (chance < rainChance) {
      console.log("Raining");
      handleBackground();
      raining = true;
      snowing = false;
      sunny = false;
    } 
    //*snowing
    else if (
      chance > rainChance &&
      chance < rainChance + Countries[index].snow
    ) {
      console.log("Snowing");
      handleBackground();
      snowing = true;
      sunny = false;
      raining = false;
    } 
    //*sunny/clear
    else if (
      chance > rainChance &&
      chance > rainChance + Countries[index].snow
    ) {
      console.log("Sunny");
      sunny = true;
      snowing = false;
      raining = false;
    }
  };

  //TODO bg color transition happens on page load
  //TODO would be nice to have rain/snow/stars transition in and out when called
  //*draw everything outside the window including rain and snow
  function handleBackground() {
    //*draw sky gradient
    if (morning == true && raining == true) {
      canvas.style.background = "#6B859E";
    } else if (dayTime == true && raining == true) {
      canvas.style.background = "#A3B2C6";
    } else if (evening == true && raining == true) {
      canvas.style.background = "#6B859E";
    } else if (nightTime == true && raining == true) {
      canvas.style.background = "#0D0627";
    } else if (morning == true && snowing == true) {
      canvas.style.background = "#6B859E";
    } else if (dayTime == true && snowing == true) {
      canvas.style.background = "#BDDEF2";
    } else if (evening == true && snowing == true) {
      canvas.style.background = "#6B859E";
    } else if (nightTime == true && snowing == true) {
      canvas.style.background = "#0D0627";
    } else if (morning == true && sunny == true) {
      canvas.style.background = "#F2E1AC";
    } else if (dayTime == true && sunny == true) {
      canvas.style.background = "#77CFF2";
    } else if (evening == true && sunny == true) {
      canvas.style.background = "#737EBF";
    } else if (nightTime == true && sunny == true) {
      canvas.style.background = "#0D0627";
    };

    //*draw stars
    if (nightTime == true) {
      star.draw(canvas);
      star.update();
    };
    
    //*draw scenery
    scenery.draw(ctx);

    //*draw and update rain and snow
    if (raining == true) {
      for (let i = 0; i < rainArray.length; i++) {
      rainArray[i].update();
      rainArray[i].draw(canvas);
      }
    } else if (snowing == true) {
      for (let i = 0; i < snowArray.length; i++) {
      snowArray[i].update();
      snowArray[i].draw(canvas);
      }
    };


  };

  //*handle click event
  function handleClick(event) {
    let bound = canvas.getBoundingClientRect();
    let x = event.clientX - bound.left - canvas.clientLeft;
    let y = event.clientY - bound.top - canvas.clientTop;
    console.log("clicked X:" + x + " Y:" + y);
  };

  //*handle collisions with the bed and table
  function handleCollisions() {
    //*bed collision
    if (player.x <= (bed.x + bed.width) - 65) {
      bedCollided = true;
      // console.log("Bed collided.");
    } else {
      bedCollided = false;
    }

    //*table collision
    if (player.x >= (table.x - player.width) + 100) {
      tableCollided = true;
      // console.log("Table collided.");
    } else {
      tableCollided = false;
    }
  };

  //# EVENT LISTENERS
  document.addEventListener("click", (event) => {
    handleClick(event);
  });

  //# INITIALIZE CLASS OBJECTS
  const input = new InputHandler();
  const player = new Player();
  const bed = new Bed();
  const table = new Table();
  const food = new Food();
  const floor = new Floor();
  const wall = new Wall();
  const scenery = new Scenery();
  const clock = new Clock();
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
      x: Math.floor(Math.random() * 365 + 470),
      y: Math.floor(Math.random() * 315) + 95,
      xv: xv * speedMult,
      yv: yv * speedMult
    }
  };
 
  //# CALL ON LOAD
  function animate(timeStamp) {
    
    //*track time between animation frames
    deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;

    ctx.clearRect(0,0,canvas.width,canvas.height);
    time();
    handleCollisions();

    //*call weather function when the weatherInterval has passed
    if (weatherTimer > weatherInterval) {
      weather();
      weatherTimer = 0;
    } else {
      weatherTimer += deltaTime;
    };
   
    //*draw and update all of the visual elements on screen
    handleBackground();
    wall.draw(ctx);
    floor.draw(ctx);
    bed.draw(ctx);
    table.draw(ctx);
    food.draw(ctx);
    player.draw(ctx);
    clock.draw(ctx);
    player.update(input, deltaTime);

    requestAnimationFrame(animate);
  }

  weather();
  animate(0);
});
