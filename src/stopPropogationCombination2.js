import "./styles.css";
// document.querySelector("#grandparent").addEventListener(
//   "click",
//   (event) => {
//     console.log("grandparent clicked");
//   },
//   true
// ); //capturing set to true
// document.querySelector("#parent").addEventListener(
//   "click",
//   (event) => {
//     console.log("parent clicked");
//     event.stopPropagation();
//   },
//   true
// ); //capturing  set to true

// document.querySelector("#child").addEventListener("click", (event) => {
//   // console.log(event.currentTarget);
//   console.log("child clicked");
// }); //capturing set to false
/***************************/

// when we trigger an event for an element,
//capturing and bubbling always happens and it
//happen relative
//to the element and its parents.
//First phase of cycle=Capturing
//propogation from element's parents
//to element
//Second phase=Bubbling
//propogation from element to its parents
//So we will get our outputs
//accordingly

/*********************/
/***************************/
//If u clicked the child div-IMPORTANT
//Output:
// grandparent clicked
//parent clicked /*stopPropagation prevents the cycle
//so bubbling phase doesn't happen

/********* */
//If u click the parent div
//grandparent clicked
//parent clicked

//Other Scenario
document.querySelector("#grandparent").addEventListener(
  "click",
  (event) => {
    console.log("grandparent clicked");
  },
  true
); //capturing set to true
document.querySelector("#parent").addEventListener(
  "click",
  (event) => {
    console.log("parent clicked");
  },
  true
); //capturing  set to true

document.querySelector("#child").addEventListener("click", (event) => {
  // console.log(event.currentTarget);
  console.log("child clicked");
  event.stopPropagation();
});

//If u clicked child
//Output:
//grandparent clicked
//parent clicked
//child clicked

//If u clicked parent div
//Output:
////grandparent clicked
//parent clicked
