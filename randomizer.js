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


  // Get random font
  // var fonts = ['Times New Roman', 'Georgia', 'Garamond', 'Arial', 'Verdana', 'Helvetica', 'Courier New', 'Lucida Console', 'Monaco', 'Brush Script MT', 'Lucida Handwriting', 'Copperplate', 'Papyrus' ];
  // var random_font = fonts[Math.floor(Math.random() * fonts.length)];
  // document.getElementById('superlative').style.fontFamily = random_font;
  // var random_font = fonts[Math.floor(Math.random() * fonts.length)];
  // document.getElementById('term').style.fontFamily = random_font;

  // Hide startup page
  document.getElementById("wrapper_welcome").style.height = "20%";
  document.getElementById("wrapper_welcome").style.display = "none";


  document.getElementById("js_button").innerHTML = "&#8635;"
  document.getElementById("wrapper").style.height = '100%';




  // document.getElementById("superlative").style.fontSize = "4em";
  // document.getElementById("term").style.fontSize = "4em";
  document.getElementById("superlative").innerHTML = superlative;
  document.getElementById("term").innerHTML = term;
}
