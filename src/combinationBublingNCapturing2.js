import "./styles.css";
document.querySelector("#grandparent").addEventListener(
  "click",
  () => {
    console.log("grandparent clicked");
  },
  true
); //capturing set to true
document.querySelector("#parent").addEventListener(
  "click",
  () => {
    console.log("parent clicked");
  },
  true
); //capturing  set to true

document.querySelector("#child").addEventListener("click", () => {
  console.log("child clicked");
}); //capturing set to false
/***************************/

// when we trigger an event for an element,
//capturing and bubbling always happens and it
//happen relative
//to the element and its parents.
//First phase of cycle=Capturing
//propogation grom element's parents
//to element
//Second phase=Bubbling
//propogation from element to its parents
//So we will get our outputs
//accordingly

/*********************/
/***************************/
//If u clicked the child div
//Output:
//grandparent clicked
//parent clicked /**Capturing phase ends */
//child clicked/**bubbling phase */

/**********************/
//if u clicked te grandparent div
//output:
//grandparent clicked

/****************/
//if u clicked the parent
//output:
//grandparent clicked /*coz of capturing */
//parent clicked /*phase of parent div click*/
