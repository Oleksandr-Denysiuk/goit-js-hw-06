const categories = document.querySelectorAll(".item");
console.log("Number of categories: ", categories.length);

categories.forEach((el) => {
  const item = document.querySelector(".item");

  console.log("Category: ", el.querySelector("h2").textContent);
  console.log("Elements: ", el.querySelectorAll("li").length);
});
