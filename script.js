function encryptText() {
    const inputText = document.getElementById('IngresarTexto').value;
    const encryptedText = inputText
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    document.getElementById('SalidaTexto').value = encryptedText;
    showOutput();
}

function decryptText() {
    const inputText = document.getElementById('IngresarTexto').value;
    const decryptedText = inputText
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    document.getElementById('SalidaTexto').value = decryptedText;
    showOutput();
}

function copyText() {
    const outputText = document.getElementById('SalidaTexto');
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
}

function showOutput() {
    document.getElementById('mensajeInicial').style.display = 'none';
    document.getElementById('mensajeDescripcion').style.display = 'none';
    document.querySelector('.imgsalida').style.display = 'none';
    document.getElementById('nuevaImagen').style.display = 'block';
    document.querySelector('.botones__salida').style.display = 'flex';
}

function resetEncryptor() {
    document.getElementById('IngresarTexto').value = '';
    document.getElementById('SalidaTexto').value = '';
    document.getElementById('mensajeInicial').style.display = 'block';
    document.getElementById('mensajeDescripcion').style.display = 'block';
    document.querySelector('.imgsalida').style.display = 'block';
    document.getElementById('nuevaImagen').style.display = 'none';
    document.querySelector('.botones__salida').style.display = 'none';
}
