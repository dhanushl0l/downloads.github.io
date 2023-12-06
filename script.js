document.addEventListener('DOMContentLoaded', function () {
    const fileList = document.getElementById('fileList');
    const files = ['file1.txt', 'file2.pdf', 'file3.zip'];

    files.forEach(file => {
        const li = document.createElement('li');
        li.innerHTML = `${file} <a href="files/${file}" download>Download</a>`;
        fileList.appendChild(li);
    });
});
