// 기명 함수(named function)
function add(x, y) {
    return x + y;
  }
  
// 익명 함수(anonymous function)
let myAdd = function(x, y) { return x + y };

// capture
let z = 100;

function addToZ(x, y) {
  return x + y + z; // z 변수를 캡쳐한다고 말함.
}