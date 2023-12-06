// Array of file details including file name and type
var files = [
    { name: 'w1.png', type: 'image/png' },
    { name: 'w2.jpg', type: 'image/jpeg' },
    { name: 'example.txt', type: 'text/plain' }
];

// Generate download links dynamically
var downloadLinksContainer = document.getElementById('downloadLinks');

files.forEach(function (file) {
    var link = document.createElement('a');
    link.href = 'files/' + file.name;
    link.download = file.name;

    // If the file is an image, create an image element for preview
    if (file.type.startsWith('image/')) {
        var img = document.createElement('img');
        img.src = 'files/' + file.name;
        img.alt = file.name;
        img.style.maxWidth = '100px'; // Set the maximum width for preview

        // Append the image to the downloadLinksContainer
        downloadLinksContainer.appendChild(img);
    }

    link.textContent = 'Download ' + file.name;

    var lineBreak = document.createElement('br');

    // Append the link and line break to the downloadLinksContainer
    downloadLinksContainer.appendChild(link);
    downloadLinksContainer.appendChild(lineBreak);
});
