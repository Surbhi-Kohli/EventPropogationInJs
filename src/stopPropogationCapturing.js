import "./styles.css";
document.querySelector("#grandparent").addEventListener(
  "click",
  (event) => {
    console.log("grandparent clicked");
  },
  true
);
document.querySelector("#parent").addEventListener(
  "click",
  (event) => {
    console.log("parent clicked");
    event.stopPropagation();
  },
  true
);
document.querySelector("#child").addEventListener(
  "click",
  (event) => {
    console.log("child clicked");
  },
  true
);

/***************************/
//Event propogation in capturing is
//from me  to my parents
//where i am the element where event
// was triggered
/*********************/
/***************************/
//If u clicked the child div //Important
//Output:
//grandparent clicked
//parent clicked

/**********************/
//if u clicked the grandparent div
//output:
//grandparent clicked

/****************/
//if u clicked the parent
//output:
//grandparent clicked
//parent clicked

/****Other scenarios */
// document.querySelector("#grandparent").addEventListener(
//   "click",
//   (event) => {
//     console.log("grandparent clicked");
//   },
//   true
// );
// document.querySelector("#parent").addEventListener(
//   "click",
//   (event) => {
//     console.log("parent clicked");
//   },
//   true
// );
// document.querySelector("#child").addEventListener(
//   "click",
//   (event) => {
//     console.log("child clicked");
//     event.stopPropagation();
//   },
//   true
// );

/***************************/
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

/****Other scenario*/
// document.querySelector("#grandparent").addEventListener(
//   "click",
//   (event) => {
//     console.log("grandparent clicked");
//     event.stopPropagation();
//   },
//   true
// );
// document.querySelector("#parent").addEventListener(
//   "click",
//   (event) => {
//     console.log("parent clicked");
//   },
//   true
// );
// document.querySelector("#child").addEventListener(
//   "click",
//   (event) => {
//     console.log("child clicked");
//   },
//   true
// );
/***************************/
//If u clicked the child div
//Output:
//grandparent clicked

/**********************/
//if u clicked the grandparent div
//output:
//grandparent clicked

/****************/
//if u clicked the parent
//output:
//grandparent clicked
