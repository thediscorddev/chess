const img = document.getElementById('image');
img.onload = function() {
    // Get the image dimensions
    const width = img.width;
    const height = img.height;
    // Set the page size to the image size
    document.documentElement.style.width = width + 'px';
    document.documentElement.style.height = height + 'px';
    document.body.style.width = width + 'px';
    document.body.style.height = height + 'px';
  };