const accor = document.querySelectorAll(".accordian");

accor.forEach(atom => {
  const ques = atom.querySelector(".item");
  const ans = atom.querySelector(".content");

  ques.addEventListener("click", function () {
    ans.classList.toggle("active");

    const plus = this.querySelector(".plus-icon");
    const minus = this.querySelector(".minus-icon");

    if (ans.classList.contains("active")) {
      plus.style.display = "none";
      minus.style.display = "block";
    } else {
      plus.style.display = "block";
      minus.style.display = "none";
    }
  });
});