async function connectFTP() {
    let host = document.getElementById('ftpHost').value;
    let user = document.getElementById('ftpUser').value;
    let pass = document.getElementById('ftpPass').value;

    let response = await fetch('/connect', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ host, user, pass })
    });

    let files = await response.json();
    displayFiles(files);
}

function displayFiles(files) {
    let fileList = document.getElementById('fileList');
    fileList.innerHTML = '';

    files.forEach(file => {
        let div = document.createElement('div');
        div.textContent = file;
        fileList.appendChild(div);
    });
      }
