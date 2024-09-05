# <-- Este es el botón de play [Estoy obligado a usar #, pero el botón es el (>)]

print('Importando requests...')
import requests
print('Hecho')
print('Importando json...')
import json
print('Hecho')
print('Importando ipywidgets...')
import ipywidgets as widgets
print('Hecho')
print('Importando clear_output, display desde IPython.display...')
from IPython.display import clear_output,display
print('Hecho')
print('Importando time...')
import time
print('Hecho')
print('Importando rich...')
import rich
print('Hecho')

print('Cargando archivo...')
request = requests.get('https://raw.githubusercontent.com/scp-data/scp-api/main/docs/data/scp/items/index.json')

if request.status_code == 200:
  print('El archivo ha respondido, parseando JSON (esto puede tardar un poco)...')
  response = json.loads(request.text)
  print('El archivo se ha parseado correctamente')
  clear_output()
  for v in response.values():
    print(v['creator'])
