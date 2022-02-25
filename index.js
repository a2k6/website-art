function fitDimensions(oldWidth, oldHeight) {
    let windowWidth = document.documentElement.clientWidth;
    let windowHeight = document.documentElement.clientHeight;
    let sizing_factor = 0.60; // Smaller this is, smaller the image
    
    if (oldWidth > oldHeight) { // If the picture is lands vcape
        let ratio = windowWidth/oldWidth;
        alert(`Landscape, Ratio: ${ratio}, sizing_factor: ${sizing_factor}, ratio_factor = ${ratio * sizing_factor}`);
        return {
            width: (oldWidth * (ratio * sizing_factor)),
            height: (oldHeight * (ratio * sizing_factor))
        };
    } else if (oldWidth < oldHeight) { // If the picture is portrait
        let ratio = windowHeight/oldHeight;
        alert(`Portrait, Ratio: ${ratio}, sizing_factor: ${sizing_factor}, ratio_factor = ${ratio * sizing_factor}`);
        return {
            width: (oldWidth * (ratio * sizing_factor)),
            height: (oldHeight * (ratio * sizing_factor))
        };
    } else {
        let ratio = (windowHeight/oldHeight) * (windowWidth/oldWidth);
        alert(`Square, Ratio: ${ratio}, sizing_factor: ${sizing_factor}, ratio_factor = ${ratio * sizing_factor}`);
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
    imageDimensions = fitDimensions(image.naturalWidth, image.naturalHeight);
    image.width = imageDimensions.width;
    image.height = imageDimensions.height;
    modal.style.display = "block";
    title.innerHTML = name;

    // Apply modal styling now that everything is set
    modal.style.display = "flex"
    modal.style.justifyContent = "center"
    modal.style.flexDirection = "column"
    modal.style.alignItems = "center"

    // Handle closing the dialog
    window.onclick = function(event) {
        // The modal div itself, not containing the elements inside it
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
}