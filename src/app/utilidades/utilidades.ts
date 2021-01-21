export function archivoABase64(archivo: File) {
    return new Promise((resolver, rechazar) => {
        const lector = new FileReader();
        lector.readAsDataURL(archivo);
        lector.onload = () => resolver(lector.result);
        lector.onerror = (error) => rechazar(error);
    })
}

export function parsearErroresApi(respuesta: any): string[] {
    const resultado: string[] = [];

    if (respuesta.error) {
        if (typeof respuesta.error === 'string') {
            resultado.push(respuesta.error);

        } else {
            const mapaErrores = respuesta.error.errors;
            const entradas = Object.entries(mapaErrores);

            entradas.forEach((array: any[]) => {
                const campo = array[0];

                array[1].forEach((mensajeError: any) => {
                    resultado.push(`${campo}: ${mensajeError}`);
                });
            });
        }
    }

    return resultado;
}