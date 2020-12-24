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

document.querySelector("#child").addEventListener("click", (event) => {
  console.log("child clicked");
  event.stopPropagation();
}); //capturing set to false

//If u clicked child div
//Output:
//parent clicked /Capturing phase
//child clicked //ends bubbling phase coz
//of stopPropagation

//If u clciked parent div
//Output:
//parent clicked
//grandparent clicked
