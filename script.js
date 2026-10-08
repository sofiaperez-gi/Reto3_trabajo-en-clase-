let nombres = [];

const input = document.getElementById('nombreInput');
const areaTexto = document.getElementById('listaNombres');

document.getElementById('btnAgregar').addEventListener('click', () => {
  const nombre = input.value.trim();
  if (nombre) {
    nombres.push(nombre);
    nombres.sort((a, b) => a.localeCompare(b, 'es', { sensitivity: 'base' }));
    areaTexto.value = nombres.join('\n');
    input.value = '';
    input.focus();
  }
});

document.getElementById('btnLimpiar').addEventListener('click', () => {
  nombres = [];
  areaTexto.value = '';
  input.value = '';
  input.focus();
});
