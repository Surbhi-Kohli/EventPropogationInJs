import "./styles.css";
// document.querySelector("#grandparent").addEventListener(
//   "click",
//   (event) => {
//     console.log("grandparent clicked");
//   },
//   true
// ); //capturing set to true
// document.querySelector("#parent").addEventListener("click", (event) => {
//   console.log("parent clicked");
// }); //capturing not set
// document.querySelector("#child").addEventListener(
//   "click",
//   (event) => {
//     console.log("child clicked");
//     event.stopPropagation();
//   },
//   true
// ); //capturing set to true
/***************************/
//as capturing and bubbling happens in a cycle
//where 1st phase is capturing n second phase
//is bubbling, we will get our outputs
//accordingly

/*********************/
/***************************/
//If u clicked the child div
//Output:
//grandparent clicked
//child clicked /**Capturing phase ends and further
/* propagation to bubbling phase is prevented
because of event.stopPropogation  */

/**********************/
//if u clicked te grandparent div
//output:
//grandparent clicked

/****************/
//if u clicked the parent
//output:
//grandparent clicked /*coz of capturing phase of parent div click*/
//parent clicked /*Bubbling phase of parent div click*/

/****Other scenarios */
document.querySelector("#grandparent").addEventListener(
  "click",
  (event) => {
    console.log("grandparent clicked");
  },
  true
); //capturing set to true
document.querySelector("#parent").addEventListener("click", (event) => {
  console.log("parent clicked");
  event.stopPropagation();
}); //capturing not set
document.querySelector("#child").addEventListener(
  "click",
  (event) => {
    console.log("child clicked");
  },
  true
); //capturing set to true
/***************************/
//If u clicked the child div
//Output:
//grandparent clicked
//child clicked /**Capturing phase ends */
//parent clicked//No further events of bubbling
//phase will be triggered

/**********************/
//if u clicked te grandparent div
//output:
//grandparent clicked

/****************/
//if u clicked the parent
//output:
//grandparent clicked /*coz of capturing phase of parent div click*/
//parent clicked /*Bubbling phase of parent div click*/
