const container = document.getElementById("container");
const size = document.getElementById("size");
const btn = document.getElementById("value");
const customSizing = document.querySelector(".custom-sizing");

btn.addEventListener("click", () => {
  const usrInpt = size.value;

  if (Number.isInteger(Number(usrInpt))) {
    let changeVal = parseInt(usrInpt);

    if (changeVal < 1) {
        clearContent();
        alert("Please enter a value more than 0");
    } 
    
    else if (changeVal > 100) {
        clearContent();
        alert("Please enter a value less than 100");
    } 

    else {
        clearContent()
        customSizing.textContent =`${changeVal} x ${changeVal}`
        createDivs(changeVal);
    }
  } 
  
  else {
        clearContent();
        createDivs(16);
        document.querySelector(".default-value").style.cssText = "display: block;";
        document.querySelector(".default-value").innerHTML =
        "Please enter a valid Numeric Value. <br> Defaulting to a <strong>16x16</strong> Grid";
        customSizing.textContent = `16x16`;
  }
});

const createDivs = (val) => {
    container.style.cssText = "display:block;"
  for (let i = 0; i < val; i++) {
    const row = document.createElement("div");
    row.classList.add("flex");

    for (let j = 0; j < val; j++) {
      const column = document.createElement("div");
      column.classList.add("column");
      column.style.cssText = "width: 10px; height: 10px;";

      row.appendChild(column);
    }
    container.appendChild(row);
  }
};

const clearContent = () => {
    size.value =""; //resets the text fields value
    document.querySelector(".default-value").style.cssText = "display: none;";
    while(container.firstChild){
        container.firstChild.remove();
    }
}