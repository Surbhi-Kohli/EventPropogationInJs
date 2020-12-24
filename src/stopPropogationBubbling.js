import "./styles.css";
document.querySelector("#grandparent").addEventListener("click", (event) => {
  console.log("grandparent clicked");
});
document.querySelector("#parent").addEventListener("click", (event) => {
  console.log("parent clicked");
  event.stopPropagation();
});
document.querySelector("#child").addEventListener("click", (event) => {
  console.log("child clicked");
});

/***************************/
//Event propogation in capturing is
//from me  to my parents
//where i am the element where event
// was triggered
/*********************/
/***************************/
//If u clicked the child div
//Output:
//child clicked
//parent clicked

/**********************/
//if u clicked the grandparent div
//output:
//grandparent clicked

/****************/
//if u clicked the parent
//output:
//parent clicked

/****Other scenarios */
// document.querySelector("#grandparent").addEventListener("click", (event) => {
//   console.log("grandparent clicked");
// });
// document.querySelector("#parent").addEventListener("click", (event) => {
//   console.log("parent clicked");

// });
// document.querySelector("#child").addEventListener("click", (event) => {
//   console.log("child clicked");
//   event.stopPropagation();
// });

/***************************/
//If u clicked the child div
//Output:
//child clicked

/**********************/
//if u clicked the grandparent div
//output:
//grandparent clicked

/****************/
//if u clicked the parent
//output:
//parent clicked
//grandparent clicked

/****Other scenario*/
// document.querySelector("#grandparent").addEventListener("click", (event) => {
//   console.log("grandparent clicked");
//   event.stopPropagation();
// });
// document.querySelector("#parent").addEventListener("click", (event) => {
//   console.log("parent clicked");
// });
// document.querySelector("#child").addEventListener("click", (event) => {
//   console.log("child clicked");
// });
/***************************/
//If u clicked the child div
//Output:
//child clicked
//parent clicked
//grandparent clicked

/**********************/
//if u clicked the grandparent div
//output:
//grandparent clicked

/****************/
//if u clicked the parent
//output:
//parent clicked
//grandparent clicked
