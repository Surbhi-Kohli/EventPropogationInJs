import "./styles.css";
document.querySelector("#grandparent").addEventListener("click", () => {
  console.log("grandparent clicked");
});
document.querySelector("#parent").addEventListener("click", () => {
  console.log("parent clicked");
});
document.querySelector("#child").addEventListener("click", () => {
  console.log("child clicked");
});
/***************************/
//If u clicked the child div
//Output:
//child clicked
//parent clicked
//grandparent clicked

/**********************/
//if u clicked te grandparent div
//output:
//grandparent clicked

/****************/
//if u clicked the parent
//output:
//parent clicked
//grandparent clicked
