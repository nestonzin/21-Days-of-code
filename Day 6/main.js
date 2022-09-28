var count = 0;

const value = document.getElementById("valor");
const btns = document.querySelectorAll(".btn");

// console.log(btns)

btns.forEach(function (btn) {
  // console.log(btn)
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("subtrai")) {
      count--;
    } else if (styles.contains("soma")) {
      count++;
    } else {
      count = 0;
    }

    value.textContent = count;
  });
});
