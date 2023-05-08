class Usuario {
	constructor(nombre, apellidos, pregunta, respuesta, email, password) {
		this.nombre = nombre;
		this.apellidos = apellidos;
		this.pregunta = pregunta;
		this.respuesta = respuesta;
		this.email = email;
		this.password = password;
	}
}

function registro(form) {
	//Comprobación de que las contraseñas coincidan
	if (form.password1.value != form.password2.value)
		alert("[Error] Las contraseñas no coinciden.");
	//Comprobación de que los campos no estén vacios
	else if (form.nombre.value == "" || form.apellidos.value == "" || form.pregunta.value == "" || form.respuesta.value == "" || form.email.value == "" || form.password1.value == "" || form.password2.value == "")
		alert("[Error] Rellena los campos vacios.");
	else {
		//Se guardan los usuarios en localStorage para su posterior uso
		let user = new Usuario(form.nombre.value, form.apellidos.value, form.pregunta.value, form.respuesta.value, form.email.value, form.password1.value);
		localStorage.setItem(user.email, JSON.stringify(user));
		alert("El usuario se ha creado exitosamente.");
	}
}


function inicioSesion(form) {
	//Se obtiene el usuario según el email dado y se comprueba que existe y si la contraseña coincide
	let user = JSON.parse(localStorage.getItem(form.email.value));
	if (!user) {
		alert("[Error] El usuario no existe");
	} else
		if (form.password.value != user.password) {
			alert("[Error] La contraseña no es correcta.")
		} else window.open("bienvenido.html");
}

function recuperacion(form) {
	//Encuentra la pregunta del usuario y la añade a un elemento
	let user = JSON.parse(localStorage.getItem(form.email.value));
	if (form.email.value != user.email) {
		alert("[Error] Introduzca su email correctamente para recuperar su contraseña.");
	} else {
		document.getElementById("pregunta").innerHTML = user.pregunta;
		window.open("recuperacion.html");
		//Se debe comprobar que la respuesta sea correcta
	}
}