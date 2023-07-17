const peliculas = [
    { titulo: "El padrino", genero: "Drama", anio: 1972 },
    { titulo: "Pulp Fiction", genero: "Crimen", anio: 1994 },
    { titulo: "El señor de los anillos: La comunidad del anillo", genero: "Fantasia", anio: 2001 },
    { titulo: "Matrix", genero: "Ciencia ficción", anio: 1999 },
    { titulo: "El gran Lebowski", genero: "Comedia", anio: 1998 },
    { titulo: "Forrest Gump", genero: "Drama", anio: 1994 },
    { titulo: "La vida es bella", genero: "Comedia", anio: 1997 },
    { titulo: "Titanic", genero: "Drama", anio: 1997 },  
    { titulo: "El rey león", genero: "Animación", anio: 1994 },
    { titulo: "Reservoir Dogs", genero: "Crimen", anio: 1992 },
    { titulo: "El caballero de la noche", genero: "Acción", anio: 2008 },
    { titulo: "Blade Runner", genero: "Ciencia ficción", anio: 1982 },
    { titulo: "Volver al futuro", genero: "Ciencia ficción", anio: 1985 },
    { titulo: "Jurassic Park", genero: "Aventura", anio: 1993 },
    { titulo: "La lista de Schindler", genero: "Drama", anio: 1993 },
    { titulo: "Eterno resplandor de una mente sin recuerdos", genero: "Drama", anio: 2004 },
    { titulo: "El sexto sentido", genero: "Drama", anio: 1999 },
    { titulo: "El club de la pelea", genero: "Drama", anio: 1999 },
    { titulo: "Star Wars: Episodio IV - Una nueva esperanza", genero: "Ciencia ficción", anio: 1977 },
    { titulo: "El resplandor", genero: "Terror", anio: 1980 }
  ]
  // Variable para almacenar las películas en la lista
  let peliculasEnLista = []
  // Función para mostrar u ocultar la lista de películas seleccionadas
  function toggleLista() {
    const listaContainer = document.getElementById('lista');
    listaContainer.classList.toggle('oculto');
  }
  // Selección de elementos del DOM
  const opcionMenu = document.getElementById('opcion-menu')
  const opcionTitulo = document.getElementById('opcion-titulo')
  const opcionAnio = document.getElementById('opcion-anio')
  const opcionGenero = document.getElementById('opcion-genero')
  const tituloBusqueda = document.getElementById('titulo-busqueda')
  const anioBusqueda = document.getElementById('anio-busqueda')
  const generoBusqueda = document.getElementById('genero-busqueda')
  const resultado = document.getElementById('resultado')
  const lista = document.getElementById('lista')
  const amigo1Btn = document.getElementById('amigo1')
  
  
  
  // Manejador de eventos para el cambio de opción en el menú
  opcionMenu.addEventListener('change', mostrarOpcion)
  //EVENTO PARA MOSTRAR TODO
  document.addEventListener('DOMContentLoaded', function () {
    mostrarPeliculasDisponibles()
  })
  //FUNCION PARA MOSTRAR TODO
  function mostrarPeliculasDisponibles() {
    const peliculasDisponiblesContainer = document.getElementById('peliculasDisponibles')
    peliculasDisponiblesContainer.innerHTML = ''
  
    if (peliculas.length === 0) {
      const mensaje = document.createElement('p')
      mensaje.textContent = 'No hay películas disponibles.'
      peliculasDisponiblesContainer.appendChild(mensaje)
    } else {
      const filtro = document.getElementById('filtro').value.toLowerCase()
      const peliculasFiltradas = peliculas.filter(pelicula =>
        pelicula.titulo.toLowerCase().includes(filtro)
      )
  
      if (peliculasFiltradas.length === 0) {
        const mensaje = document.createElement('p')
        mensaje.textContent = 'No se encontraron películas.'
        peliculasDisponiblesContainer.appendChild(mensaje)
      } else {
        peliculasFiltradas.forEach(pelicula => {
          const peliculaElement = document.createElement('div')
          peliculaElement.className = 'pelicula-card'
  
          const titulo = document.createElement('h3')
          titulo.textContent = pelicula.titulo
  
          const imagen = document.createElement('img')
          imagen.src = pelicula.imagen
          imagen.alt = pelicula.titulo
  
          const agregarBtn = document.createElement('button')
          agregarBtn.textContent = 'Agregar'
          agregarBtn.addEventListener('click', function() {
            agregarPeliculaALista(pelicula)
          })
  
          peliculaElement.appendChild(imagen)
          peliculaElement.appendChild(titulo)
          peliculaElement.appendChild(agregarBtn)
          peliculasDisponiblesContainer.appendChild(peliculaElement)
        })
      }
    }
  }
  
  // Función para mostrar la opción seleccionada en el menú
  function mostrarOpcion() {
    const opcionSeleccionada = opcionMenu.value
    opcionTitulo.style.display = 'none'
    opcionAnio.style.display = 'none'
    opcionGenero.style.display = 'none'
  
    if (opcionSeleccionada === '1') {
      opcionTitulo.style.display = 'block'
    } else if (opcionSeleccionada === '2') {
      opcionAnio.style.display = 'block'
    } else if (opcionSeleccionada === '3') {
      opcionGenero.style.display = 'block'
    }
  }
  
  // Función para buscar películas por título
  function buscarPeliculasPorTitulo() {
    const titulo = tituloBusqueda.value
    const peliculasFiltradas = peliculas.filter(pelicula =>
      pelicula.titulo.toLowerCase().includes(titulo.toLowerCase())
    )
  
    mostrarResultados(peliculasFiltradas)
  }
  
  // Función para buscar películas por año
  function buscarPeliculasPorAnio() {
    const anio = parseInt(anioBusqueda.value, 10)
    const peliculasFiltradas = peliculas.filter(pelicula => pelicula.anio === anio)
  
    mostrarResultados(peliculasFiltradas)
  }
  
  // Función para buscar películas por género
  function buscarPeliculasPorGenero() {
    const genero = generoBusqueda.value
    const peliculasFiltradas = peliculas.filter(pelicula =>
      pelicula.genero.toLowerCase().includes(genero.toLowerCase())
    )
  
    mostrarResultados(peliculasFiltradas)
  }
  
  // Función para mostrar los resultados de búsqueda
  function mostrarResultados(peliculas) {
    resultado.innerHTML = ''
  
    if (peliculas.length === 0) {
      resultado.textContent = 'No se encontraron películas.'
    } else {
      peliculas.forEach(pelicula => {
        const peliculaElement = document.createElement('li')
        peliculaElement.textContent = pelicula.titulo
        resultado.appendChild(peliculaElement)
  
        const agregarListaBtn = document.createElement('button')
        agregarListaBtn.textContent = 'Agregar a la lista'
        peliculaElement.appendChild(agregarListaBtn)
  
        agregarListaBtn.addEventListener('click', () => agregarLista(pelicula))
      })
    }
  }
  
  // Función para agregar una película a la lista
  function agregarLista(pelicula) {
    if (peliculasEnLista.includes(pelicula)) {
      mostrarMensaje(`La película "${pelicula.titulo}" ya está en la lista.`)
    } else {
      peliculasEnLista.push(pelicula)
      mostrarMensaje(`La película "${pelicula.titulo}" ha sido añadida a la lista.`)
      mostrarLista()
    }
  }
  
    
  
  // Función para mostrar el contenido de la lista
  function mostrarLista() {
    const listaContainer = document.getElementById('lista');
    listaContainer.innerHTML = '';
  
    if (peliculasEnLista.length === 0) {
      const mensaje = document.createElement('p');
      mensaje.textContent = 'La lista está vacía.';
      listaContainer.appendChild(mensaje);
    } else {
      peliculasEnLista.forEach((pelicula, index) => {
        const peliculaElement = document.createElement('li');
        peliculaElement.textContent = pelicula.titulo;
  
        const eliminarBtn = document.createElement('button');
        eliminarBtn.textContent = 'Eliminar';
        eliminarBtn.addEventListener('click', function() {
          eliminarPeliculaDeLista(index);
        });
  
        peliculaElement.appendChild(eliminarBtn);
        listaContainer.appendChild(peliculaElement);
      });
    }
  }
  
  // Función para agregar una película a la lista
  function agregarPeliculaALista(pelicula) {
    peliculasEnLista.push(pelicula);
  }
  
  // Función para cargar la lista de películas desde el almacenamiento local
  function cargarListaDesdeLocalStorage() {
    const peliculasEnListaString = localStorage.getItem('peliculasEnLista');
    if (peliculasEnListaString) {
      peliculasEnLista = JSON.parse(peliculasEnListaString);
    }
  }
  
  // Evento click en el botón "Ver Lista"
  const verListaBtn = document.getElementById('verLista');
  verListaBtn.addEventListener('click', function() {
    mostrarLista();
    const listaContainer = document.getElementById('lista');
    listaContainer.classList.toggle('oculto');
  });
  
  // Cargar la lista desde el almacenamiento local al cargar la página
  cargarListaDesdeLocalStorage();
  
  
  //FUNCION PARA ELIMINAR DE LA LISTA
  // Función para eliminar una película de la lista
  function eliminarPeliculaDeLista(index) {
    peliculasEnLista.splice(index, 1)
  }
  
  
  // Evento click en el botón "Agregar a Lista"
  const agregarBtns = document.querySelectorAll('.agregarBtn');
  agregarBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const peliculaIndex = this.dataset.index;
      const pelicula = peliculas[peliculaIndex];
      agregarPeliculaALista(pelicula);
    });
  });
  
  // Event listeners para los botones de envío a amigos
  amigo1Btn.addEventListener('click', () => enviarLista('Amigo 1'))
  
  // Función para enviar la lista a un amigo
  function enviarLista() {
    const peliculasEnviadas = peliculasEnLista.map(pelicula => pelicula.titulo)
  
    if (peliculasEnviadas.length === 0) {
      mostrarMensaje('La lista está vacía.')
      return
    }
  
    const formulario = document.createElement('form')
    const inputAmigo = document.createElement('input')
    inputAmigo.type = 'text'
    inputAmigo.placeholder = 'Nombre del amigo'
    const botonEnviar = document.createElement('button')
    botonEnviar.textContent = 'Enviar'
    botonEnviar.addEventListener('click', function(event) {
      event.preventDefault()
      const amigo = inputAmigo.value
      if (amigo) {
        const mensaje = `Se ha enviado la lista a ${amigo} con las siguientes películas:\n${peliculasEnviadas.join('\n')}`
        mostrarMensaje(mensaje)
        formulario.remove()
      } else {
        mostrarMensaje('Por favor, ingrese el nombre del amigo.')
      }
    })
  
    formulario.appendChild(inputAmigo)
    formulario.appendChild(botonEnviar)
    document.getElementById('formulario').appendChild(formulario)
  }
  function vaciarLista() {
    peliculasEnLista = []
    mostrarLista()
    mostrarMensaje('La lista ha sido vaciada.')
  }
  function mostrarMensaje(mensaje) {
    const mensajeElement = document.getElementById('mensaje')
    mensajeElement.textContent = mensaje
  }
  // Event listeners para los botones de búsqueda
  document.getElementById('buscar-titulo').addEventListener('click', buscarPeliculasPorTitulo)
  document.getElementById('buscar-anio').addEventListener('click', buscarPeliculasPorAnio)
  document.getElementById('buscar-genero').addEventListener('click', buscarPeliculasPorGenero)