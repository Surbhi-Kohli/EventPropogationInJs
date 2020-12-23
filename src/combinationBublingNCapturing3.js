import "./styles.css";
document.querySelector("#grandparent").addEventListener(
  "click",
  () => {
    console.log("grandparent clicked");
  },
  false
); //capturing not set to true
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
//parent clicked /**Capturing phase ends */
//child clicked/**bubbling phase */
//grandparent clicked/* bubbling phase ends*/

/**********************/
//if u clicked te grandparent div
//output:
//grandparent clicked//in bubling phase

/****************/
//if u clicked the parent
//output:
//parent clicked /*capturing phase of parent div click*/
//grandparent clicked /*bubbling phase
/* of parent div click  */
