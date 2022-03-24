const superlatives =
[
["Best", 2],
["Worst", 2],
["Most unexpected", 2],
["First", 2],
["Last", 2],
["Dream", 2],
["Funniest", 2],
["Most complicated", 1],
["Most wholesome", 1]
];

// Sum up all weights to have upper bound for later randomization
let superlatives_total = 0;
for (let i = 0; i < superlatives.length; ++i) {
    superlatives_total += superlatives[i][1];
}
