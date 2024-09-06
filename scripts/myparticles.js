const snowflakes = {
    "particles": {
      "number": {
        "value": 50
      },
      "color": {
        "value": "random"

      },
      "shape": {
        "type": "circle"
      },
      "size": {
        "value": 5,
        "random": false,
        "anim": {
          "enable": true,
          "speed": 2,
          "opacity_min": .25,
          "size_min": .20

        }
      },
      "line_linked": {
        "enable": false
      },
      "move": {
        "enable": true,
        "speed": .2,
        "direction": "top",
        "straight": false
      }
    },
    "interactivity": {
       "events": {
        "onhover": {
          "enable": false,
          "mode": "grab"
        }
       }
    }
  }
  
  particlesJS("home-bg-js", snowflakes);
  particlesJS("main-bg-js", snowflakes);