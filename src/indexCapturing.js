import "./styles.css";
document.querySelector("#grandparent").addEventListener(
  "click",
  () => {
    console.log("grandparent clicked");
  },
  true
);
document.querySelector("#parent").addEventListener(
  "click",
  () => {
    console.log("parent clicked");
  },
  true
);
document.querySelector("#child").addEventListener(
  "click",
  () => {
    console.log("child clicked");
  },
  true
);
/***************************/
//Event propogation in capturing is
//from my parents to me
//where i am the element where event
// was triggered
/*********************/
//If u clicked the child div
//Output:
//grandparent clicked
//parent clicked
//child clicked

/**********************/
//if u clicked the grandparent div
//output:
//grandparent clicked

/****************/
//if u clicked the parent
//output:
//grandparent clicked
//parent clicked
