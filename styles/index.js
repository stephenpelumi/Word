function toggleBold() {
  let textarea = document.querySelector(".textarea");
  textarea.classList.toggle("bold");
}

// Function to toggle italic formatting
function toggleItalic() {
  let textarea = document.querySelector(".textarea");
  textarea.classList.toggle("italic");
}

// Function to change font
function changeFont(font) {
  let textarea = document.querySelector(".textarea");
  textarea.style.fontFamily = font;
}

// Function to change background color
function changeBackgroundColor(color) {
  let body = document.querySelector(".textarea");
  body.style.backgroundColor = color;
}

// Event listeners for the header buttons

if (typeof document !== "undefined") {
  document.querySelector(".Bold").addEventListener("click", toggleBold);
  document.querySelector(".italics").addEventListener("click", toggleItalic);
  document.querySelector(".fonts_type").addEventListener("change", function () {
    changeFont(this.value);
  });
  document
    .querySelector(".backgroundline")
    .addEventListener("click", function () {
      let color = prompt("Enter background color:");
      changeBackgroundColor(color);

      if (color !== "white") {
        let body = document.querySelector(".textarea");
        body.style.color = "white";
      } else {
        body.style.color = "black";
      }
    });
}
// Function to toggle underline formatting
function toggleUnderline() {
  let textarea = document.querySelector(".textarea");
  textarea.classList.toggle("underline");
}

// Function to insert image at cursor position
function insertImage() {
  let input = document.createElement("input");
  input.type = "file";
  input.accept = "image/*";

  input.addEventListener("change", function () {
    let file = this.files[0];
    let reader = new FileReader();

    reader.onload = function (e) {
      let imgElement = document.createElement("img");
      imgElement.src = e.target.result;
      // imgElement.style.display = "block";
      imgElement.style.marginLeft = "auto";
      imgElement.style.textAlign = "center";
      imgElement.style.width = "200px";
      imgElement.style.height = "200px";

      // Insert the image at the current cursor position
      let selection = window.getSelection();
      if (selection.rangeCount > 0) {
        let range = selection.getRangeAt(0);
        range.insertNode(imgElement);
      }
    };

    reader.readAsDataURL(file);
  });

  input.click();
}

// Event listeners for the header buttons
if (typeof document !== "undefined") {
  document
    .querySelector(".underline")
    .addEventListener("click", toggleUnderline);
  document.querySelector(".picture").addEventListener("click", insertImage);
}
