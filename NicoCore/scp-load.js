var main_json_file = "https://raw.githubusercontent.com/scp-data/scp-api/main/docs/data/scp/items/content_archived.json"

document.addEventListener('DOMContentLoaded', (main_event) => {
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
            for (const k in dict_) {
                const row = document.createElement('div');
                const v = dict_[k];
                {'creator':'Creador'}.forEach((key,name) => {
                    const kv = document.createElement('p');
                    kv.innerHTML = `<b>${name}</b> ${v[key}`;
                    row.appendChild(kv);
                };
                outputDiv.appendChild(row);
            }
        })
        .catch(error => {
            console.error('Hubo un problema con la solicitud Fetch:', error);
        });
});
