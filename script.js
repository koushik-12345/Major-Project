function showHome() {
    document.getElementById('home-container').style.display = 'block';
    document.getElementById('about-container').style.display = 'none';
    document.getElementById('upload-container').style.display = 'none';
}

function showAbout() {
    document.getElementById('home-container').style.display = 'none';
    document.getElementById('about-container').style.display = 'block';
    document.getElementById('upload-container').style.display = 'none';
}

function showUpload() {
    document.getElementById('home-container').style.display = 'none';
    document.getElementById('about-container').style.display = 'none';
    document.getElementById('upload-container').style.display = 'block';
}

function generateCaption() {
    var imageFile = document.getElementById('image-input').files[0];
    var outputContainer = document.getElementById('output-container');
    var outputText = document.getElementById('output-text');

    if (!imageFile) {
        alert('Please select an image.');
        return;
    }

    // Call your caption generation API here and update the outputText accordingly
    outputText.innerText = 'Generating caption...';

    // For example:
     var formData = new FormData();
     formData.append('image', imageFile);
    fetch('your-caption-generation-api-url', {
         method: 'POST',
         body: formData
     })
     .then(response => response.json())
     .then(data => {
        outputText.innerText = data.caption;
         outputContainer.style.display = 'block';
     })
     .catch(error => {
         console.error('Error:', error);
         outputText.innerText = 'Error generating caption.';
        outputContainer.style.display = 'block';
    });
}
