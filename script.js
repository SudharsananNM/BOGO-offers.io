function expandOption(selectedOption, amount) {
    document.getElementById("total-price").innerText = "$" + amount.toFixed(2) + " USD";
    
    let options = document.querySelectorAll(".option");
    options.forEach(option => {
        option.classList.remove("expanded");
        option.querySelector("input").checked = false;
    });
    
    selectedOption.classList.add("expanded");
    selectedOption.querySelector("input").checked = true;
}