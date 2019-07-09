
// Obtain the value from the search input and have it perform an action upon keyup

let searchInput = document.getElementById("searchInput");
searchInput.addEventListener("keyup", filterImages);

// Call the filterImages function to atually make it run.

function filterImages() {
  let searchResult = document.getElementById("searchInput").value.toLowerCase(); // Give the searchInput result a value of "searchResult" in all lowercase

// Loop through photos and captions to find the text that matches the search

  let imageResult = document.querySelectorAll(".photo-wrapper"); // creates new variable called "imageResult" that stores all of the photo-wrapper classes (which contain the images in <a> tags)

  for (let i = 0; i < imageResult.length; i++) {
    let a = document.querySelectorAll(".image-link"); // cycles through all of the elements with a class of photo-wrapper (imageResult) and targets the image-link classes, stores that value in "a"
    for (let i = 0; i < a.length; i++) {
        let imageCaption = a[i].getAttribute("data-title"); // for each class it comes across (and it's index number, i) it finds the data-title (caption) of the image and stores it in the value "imageCaption"
          if (imageCaption.toLowerCase().indexOf(searchResult) > -1) { // checks to see if the data from the caption matches the search (which would return an index value > -1 because at least one of the images with an index value of 0 or higher contain the text)
            imageResult[i].style.display = "block"; // if it matches, display the images in a block style format
          } else {
            imageResult[i].style.display = "none"; // if it doesn't match, hide the image
      }
    }
  }
}
