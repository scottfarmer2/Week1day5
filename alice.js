module.exports = {
  alice: function(){
    console.log("I'm in wonderland.");
    return hatter();
  }
}

function hatter(){
  console.log("I just met the hatter.");
}