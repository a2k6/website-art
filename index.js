function fitDimensions(oldWidth, oldHeight) {
    let windowWidth = document.documentElement.clientWidth;
    let windowHeight = document.documentElement.clientHeight;
    let sizing_factor = 0.75; // Smaller this is, smaller the image

    if (oldWidth > oldHeight) { // If the picture is landscape
        let ratio = windowHeight/oldHeight;
        alert(ratio)
        return {
            width: (oldWidth * (ratio * sizing_factor)),
            height: (oldHeight * (ratio * sizing_factor))
        };
    } else if (oldWidth < oldHeight) { // If the picture is portrait
        let ratio = windowWidth/oldWidth;
        return {
            width: (oldWidth * (ratio * sizing_factor)),
            height: (oldHeight * (ratio * sizing_factor))
        };
    }
}

function displayImage(pathToImage, name) {
    // Retrieve all the elements
    let modal = document.getElementById("modal");
    let title = document.getElementById("piece-title");
    let image = document.getElementById("piece");

    // Get the image and fit it to the screen
    image.src = pathToImage;
    image.alt = name;
    imageDimensions = fitDimensions(image.width, image.height);
    image.width = imageDimensions.width;
    image.height = imageDimensions.height;
    modal.style.display = "block";
    title.innerHTML = name;

    // Apply modal styling now that everything is set
    modal.style.display = "flex"
    modal.style.justifyContent = "center"
    modal.style.flexDirection = "column-reverse"
    modal.style.alignItems = "center"

    // Handle closing the dialog
    window.onclick = function(event) {
        // The modal div itself, not containing the elements inside it
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
}