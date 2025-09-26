window.addEventListener('load', () => {
  const client = window.supabase.createClient(
    'https://TU_PROYECTO.supabase.co', // ← Reemplazá con tu URL real
    'TU_CLAVE_PUBLICA'                 // ← Reemplazá con tu clave anon
  );

  const form = document.getElementById('formUsuario');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const datos = {
      nombreusuario: document.getElementById('nombreUsuario').value,
      clave: document.getElementById('clave').value,
      nivelacceso: document.getElementById('nivelAcceso').value,
      activo: document.getElementById('activo').value === 'true'
    };

    try {
      const { data, error } = await client
        .from('usuario') // ← Asegurate que el nombre coincida con tu tabla
        .insert([datos]);

      if (error) {
        alert("Error al registrar usuario: " + error.message);
      } else {
        alert("Usuario registrado correctamente");
        form.reset();
      }
    } catch (err) {
      alert("Error inesperado: " + err.message);
    }
  });
});