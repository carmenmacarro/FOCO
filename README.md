# FOCO
Web de gestión del tiempo del día: temporizador por actividades, puntos, penalización por pantallas, ánimo, estadísticas y exportar/importar Excel.

Cada persona se crea su cuenta (correo + contraseña, o Google) y tiene **sus propios datos**, guardados en la nube y sincronizados entre dispositivos. Nadie ve los datos de los demás.

Es una web estática (`index.html`) que usa **Firebase** (gratis) para las cuentas y la base de datos, y se puede publicar gratis con **GitHub Pages**.

## Puesta en marcha (una sola vez, ~10 minutos)

### 1. Crear el proyecto de Firebase
1. Entra en <https://console.firebase.google.com> con tu cuenta de Google y pulsa **Crear un proyecto** (puedes desactivar Google Analytics).
2. En la página del proyecto pulsa el icono **Web `</>`** para registrar una app. Ponle un nombre (p. ej. `foco`). No hace falta Firebase Hosting.
3. Te mostrará un bloque `const firebaseConfig = { ... }`. Copia esos valores en **`firebase-config.js`** de este repositorio, sustituyendo los de ejemplo.

### 2. Activar las cuentas
1. Menú lateral → **Compilación → Authentication → Comenzar**.
2. Pestaña **Método de inicio de sesión**: activa **Correo electrónico/contraseña** y (opcional) **Google**.
3. Pestaña **Configuración → Dominios autorizados**: añade el dominio donde publiques la web, p. ej. `carmenmacarro.github.io`.

### 3. Crear la base de datos
1. Menú lateral → **Compilación → Firestore Database → Crear base de datos** (ubicación `eur3` o la que prefieras, modo producción).
2. Pestaña **Reglas**: borra lo que haya, pega el contenido de **`firestore.rules`** y pulsa **Publicar**. Esto hace que cada usuario solo pueda acceder a sus propios datos.

### 4. Publicar la web con GitHub Pages
1. Sube los cambios (con `firebase-config.js` ya rellenado) a la rama `main`.
2. En GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, rama `main`, carpeta `/ (root)` → **Save**.
3. En un par de minutos estará en `https://carmenmacarro.github.io/FOCO/`. Comparte ese enlace: cada persona entra, pulsa **Crear cuenta** y empieza.

## Probarla en tu ordenador
Abre una terminal en la carpeta y ejecuta:

```bash
python3 -m http.server 8000
```

y entra en <http://localhost:8000> (`localhost` ya está autorizado en Firebase por defecto).

## Archivos
- `index.html` — toda la aplicación.
- `firebase-config.js` — la configuración de tu proyecto de Firebase.
- `firestore.rules` — reglas de seguridad de la base de datos.

## Cambios que ha realizado a mi petición:
- logo de FOCO más redondeado (Tipografia -> Fredoka)
- apartado Universidad: asignaturas, clases/estudio/tareas y cierre de cuatrimestre
- amigos (código de amistad y comparativa semanal), descanso ganado por metas, insignias y avatares

> ⚠️ Desde que existe el apartado **Amigos**, las reglas de Firestore han cambiado. Cada vez que se modifique `firestore.rules`, copia su contenido en Firebase → **Firestore Database → Reglas** y pulsa **Publicar**.

## Límites del plan gratuito de Firebase
El plan Spark (gratis) permite 50.000 lecturas y 20.000 escrituras al día y 1 GB de datos: de sobra para decenas de personas usándolo a diario.
