const superlatives =
[
["First", 2],
["Last", 2],
["Best", 2],
["Worst", 2],
["Dream", 2],
["Most unexpected", 2],
["Funniest", 2],
["Easiest", 2],
["Most challenging", 1],
["Most rewarding", 1],
["Most interesting", 1],
["Most complicated", 1],
["Most wholesome", 1],
["Most awesome", 1]
];

// Sum up all weights to have upper bound for later randomization
let superlatives_total = 0;
for (let i = 0; i < superlatives.length; ++i) {
    superlatives_total += superlatives[i][1];
}
