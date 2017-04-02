export let Right = false
export let Left = false
export let Down = false
export let Up = false

export function knopki() {
  function downHandler(e) {
    if(e.keyCode === 68) {
      Right = true;
    }
    else if(e.keyCode === 65) {
      Left = true;
    }
    else if(e.keyCode === 87) {
      Up = true;
    }
    else if(e.keyCode === 83) {
      Down = true;
    }
  }

  function upHandler(e) {
      if(e.keyCode === 68) {
        Right = false;
      }
      else if(e.keyCode === 65) {
        Left = false;
      }
      else if(e.keyCode === 87) {
        Up = false;
      }
      else if(e.keyCode === 83) {
        Down = false;
      }
    }
    document.addEventListener('keydown', downHandler, false);
    document.addEventListener('keyup', upHandler, false);
  };
