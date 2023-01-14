const input_place= document.querySelectorAll("input"),
button = document.querySelector("button");
submit=document.getElementById("submit")
submit.addEventListener("click",verification)
    function verification(){
 
            alert("Success")
            window.location.href="index.html";
          
        }

    

        input_place.forEach((input, index1) => {
input.addEventListener("keyup", (e) => {
   const new_Input = input,
    nextInput = input.nextElementSibling,
    prevInput = input.previousElementSibling;

  if (new_Input.value.length > 1) {
    new_Input.value = "";
    return;
  }
   if (nextInput && nextInput.hasAttribute("disabled") && new_Input.value !== "") {
    nextInput.removeAttribute("disabled");
    nextInput.focus();
  }

   if (e.key === "Backspace") {
    input_place.forEach((input, index2) => {
          if (index1 <= index2 && prevInput) {
        input.setAttribute("disabled", true);
        input.value = "";
        prevInput.focus();
      }
    });
  }
  if (!input_place[3].disabled && input_place[3].value !== "") {
    button.classList.add("active");
    return;
  }
  button.classList.remove("active");
});
});

window.addEventListener("load", () => inputs[0].focus());
