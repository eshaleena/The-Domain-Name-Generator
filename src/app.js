/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "superstar"];
  let noun = ["beyonce", "rihanna"];

  var domainGenerator = (pronoun, adj, noun) => {
    for (var i = 0; i < pronoun.length; i++) {
      for (var j = 0; j < adj.length; j++) {
        for (var r = 0; r < noun.length; r++) {
          console.log(pronoun[i] + adj[j] + noun[r] + ".com");
        }
      }
    }
  };
  domainGenerator(pronoun, adj, noun);
};
