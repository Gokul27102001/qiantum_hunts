$(document).ready(function () {
  // Array of image URLs
  const images = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg'
    // Add other image URLs here
  ];

  // Function to load images and add them to the container
  function loadImages() {
    const container = $('#image-container');
    container.empty();

    images.forEach(function (imageUrl) {
      const image = $('<img>', {
        class: 'img-fluid resized-image',
        src: imageUrl,
      });

      const icon = $('<img>', {
        class: 'icon-overlay',
        src: '5.jpg', // Replace with your icon image URL
      });

      const imageContainer = $('<div>', {
        class: 'col-md-4 mb-4',
        css: {
          position: 'relative',
          overflow: 'hidden',
          height: '100px', // Set your desired height
        },
      });

      imageContainer.append(image);
      imageContainer.append(icon);
      container.append(imageContainer);
    });
  }

  // Call the function to load images on document ready
  loadImages();
});
