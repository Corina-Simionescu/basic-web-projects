function changeImage()
{
    const button = document.querySelector("button");
    const image = document.querySelector("img");
    let currentImageIndex = 1;

    button.addEventListener("click", () =>
    {
        if (currentImageIndex <= 6)
        {
            image.src = `pufuletPictures/${currentImageIndex}.png`;
            ++currentImageIndex;
        }
        else
        {
            image.src = "pufuletPictures/mainPicture.png";
            currentImageIndex = 1;
        }
    })

}

changeImage();