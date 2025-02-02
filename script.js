function copyEmail() {
    const email = "franciscoagustingarciagarcia@gmail.com"; 
    navigator.clipboard.writeText(email).then(() => {
        alert("Correo copiado al portapapeles.");
    }).catch(err => {
        alert("Error al copiar el correo.");
    });
}

function downloadCV() {
    const cvLink = "/assets/cv.pdf"; 
    const link = document.createElement('a');
    link.href = cvLink;
    link.download = "cv.pdf"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}