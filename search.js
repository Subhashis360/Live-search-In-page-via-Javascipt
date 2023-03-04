let sarchbtn = document.getElementById("searchbtn");

sarchbtn.addEventListener("click", () => {
    filter_list();
})

let notfound = document.getElementById("notfound");

notfound.style.display = "none";

document.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        sarchbtn.click();
    }
});

function filter_list() {
    // Get the search term entered in the search box
    var searchTerm = document.getElementById("searchbox1").value.toLowerCase();
    notfound.style.display = "none";
    
    // Get all the div elements in the page
    var divs = document.getElementsByClassName("col");
    
    // Loop through each div and hide it if none of its child p elements contain the search term
    for (var i = 0; i < divs.length; i++) {
      var divContainsSearchTerm = false;
      var paragraphs = divs[i].getElementsByTagName("p");
      
      for (var j = 0; j < paragraphs.length; j++) {
        if (paragraphs[j].textContent.toLowerCase().includes(searchTerm)) {
          divContainsSearchTerm = true;
          break;
        }
      }

      
      if (divContainsSearchTerm) {
        notfound.style.display = "none";
        divs[i].style.display = "block";
      } else {
        divs[i].style.display = "none";
        notfound.style.display = "block";
      }
    }
  }