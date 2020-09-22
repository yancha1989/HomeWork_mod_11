function Same(a, b) {
  let i = a;
  {
     timerid = setInterval(function() { if(i <= b) console.log(i++); else (clearInterval(timerid)) }, 1000);
    }
  }

Same(5, 11)
