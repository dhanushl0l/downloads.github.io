// Array of file names
var files = ['w1.png', 'w2.jpg', 'example.txt'];

// Generate download links dynamically
var downloadLinksContainer = document.getElementById('downloadLinks');

files.forEach(function(file) {
    var link = document.createElement('a');
    link.href = 'files/' + file;
    link.download = file;
    link.textContent = 'Download ' + file;

    var lineBreak = document.createElement('br');

    downloadLinksContainer.appendChild(link);
    downloadLinksContainer.appendChild(lineBreak);
});
