function drawNewCards() {
  fillCards(randomizeSuperlative(), randomizeTerm());
}

function randomizeSuperlative() {
  // Superlatives have weight - Slightly more complicated randomization required
  let threshold = Math.random() * superlatives_total;

  let total = 0;
  for (let i = 0; i < superlatives.length - 1; ++i) {
      // Add the weight to our running total.
      total += superlatives[i][1];

      // If this value falls within the threshold, we're done!
      if (total >= threshold) {
          return superlatives[i][0];
      }
  }
  // Last value needed
  return superlatives[superlatives.length - 1][0];
}

function randomizeTerm() {
  return terms[Math.floor(Math.random() * terms.length)];
}



function fillCards(superlative, term) {
  // Get random colour
  var colors = ['#DFFF00', '#FFBF00', '#FF7F50', '#DE3163', '#9FE2BF', '#FF00FF', '#800080'  ];
  var random_color = colors[Math.floor(Math.random() * colors.length)];
  document.getElementById('superlative').style.color = random_color;
  var random_color = colors[Math.floor(Math.random() * colors.length)];
  document.getElementById('term').style.color = random_color; 


  // Get random font
  var fonts = ['Times New Roman', 'Georgia', 'Garamond', 'Arial', 'Verdana', 'Helvetica', 'Courier New', 'Lucida Console', 'Monaco', 'Brush Script MT', 'Lucida Handwriting', 'Copperplate', 'Papyrus' ];
  var random_font = fonts[Math.floor(Math.random() * fonts.length)];
  document.getElementById('superlative').style.fontFamily = random_font;
  var random_font = fonts[Math.floor(Math.random() * fonts.length)];
  document.getElementById('term').style.fontFamily = random_font;





  document.getElementById("superlative").innerHTML = superlative;
  document.getElementById("term").innerHTML = term;

  document.getElementById("wrapper").style.height = '60%';


}
