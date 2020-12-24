import "./styles.css";
// document.querySelector("#grandparent").addEventListener(
//   "click",
//   () => {
//     console.log("grandparent clicked");
//   },
//   false
// ); //capturing not set to true
// document.querySelector("#parent").addEventListener(
//   "click",
//   (event) => {
//     console.log("parent clicked");
//     event.stopPropagation();
//   },
//   false
// ); //capturing not set to true

// document.querySelector("#child").addEventListener(
//   "click",
//   () => {
//     console.log("child clicked");
//   },
//   true
// );
//If u click child div
//ouput:
//child clicked
//parent clicked

//If u click parent div
//parent clicked

document.querySelector("#grandparent").addEventListener(
  "click",
  () => {
    console.log("grandparent clicked");
  },
  false
); //capturing not set to true
document.querySelector("#parent").addEventListener(
  "click",
  (event) => {
    console.log("parent clicked");
  },
  false
); //capturing not set to true

document.querySelector("#child").addEventListener(
  "click",
  (event) => {
    console.log("child clicked");
    event.stopPropagation();
  },
  true
);
//If u click child
//Output:
//child clicked

//If u click parent div
//Output:
//parent clicked
//grandparent clicked
