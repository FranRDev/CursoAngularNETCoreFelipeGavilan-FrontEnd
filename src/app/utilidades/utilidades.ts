export function archivoABase64(archivo: File) {
    return new Promise((resolver, rechazar) => {
        const lector = new FileReader();
        lector.readAsDataURL(archivo);
        lector.onload = () => resolver(lector.result);
        lector.onerror = (error) => rechazar(error);
    })
}