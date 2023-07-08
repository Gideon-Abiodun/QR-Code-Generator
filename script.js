let imgBox = document.getElementById("imgBox");
let codeImage = document.getElementById("qrImage");
let codeText = document.getElementById("qrText");
const button = document.querySelector(".btn");

button.addEventListener('click', ()=>{

    if (codeText.value.length > 0) {
      codeImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${codeText.value}`;
      imgBox.classList.add("show-img");
    } else {
      codeText.classList.add("error");
      setTimeout(() => {
        codeText.classList.remove("error");
      }, 1000);
    }
});
