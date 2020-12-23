import "./styles.css";
document.querySelector("#grandparent").addEventListener(
  "click",
  () => {
    console.log("grandparent clicked");
  },
  true
); //capturing set to true
document.querySelector("#parent").addEventListener("click", () => {
  console.log("parent clicked");
}); //capturing not set
document.querySelector("#child").addEventListener(
  "click",
  () => {
    console.log("child clicked");
  },
  true
); //capturing set to true
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
//child clicked /**Capturing phase ends */

//parent clicked/**bubbling phase */

/**********************/
//if u clicked te grandparent div
//output:
//grandparent clicked

/****************/
//if u clicked the parent
//output:
//grandparent clicked /*coz of capturing phase of parent div click*/
//parent clicked /*Bubbling phase of parent div click*/
