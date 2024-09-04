var main_json_file = "https://raw.githubusercontent.com/scp-data/scp-api/main/docs/data/scp/items/content_archived.json"

fetch(main_json_file)
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al cargar el archivo JSON');
        }
        return response.json(); // Convertir a JSON
    })
    .then(data => {
        // Aquí puedes usar los datos cargados
        const outputDiv = document.getElementById('output');
        outputDiv.innerHTML = `
            <p>Nombre: ${data.name}</p>
            <p>Edad: ${data.age}</p>
            <p>Ciudad: ${data.city}</p>
        `;
    })
    .catch(error => {
        console.error('Hubo un problema con la solicitud Fetch:', error);
    });
