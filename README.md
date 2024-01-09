# ReactivePracitca

REACTIVE FORMS
Antes de empezar a que importar en el modulo principal el ReactiveFormsModule, para reaccionar a eventos o cambios del usuario

FORMULARIO
para empezar importamos FormBuilder, FormGroup en nuestro ts y llamamos al FormBuilder en el constructor, lo inyectamos, lo llamamos en el constructor. Iniciamos con los campos dentro del ngOnInit mediante un group y para mostrar los datos en consola, ver los cambios, nos suscribimos.
Nos vamos a suscribir al valuechanges para ver los cambios en consola.
Llamamos al formgroup mediante la variable que obtiene los datos que inicialice vacios, estos con el form se mostraran en pantalla y generamos un pipe con la variable.value de tipo json para obtener esos datos y con el changesvalue que habia puesto en el ts para mostrar los datos segun los cambios que haya.

Bueno que hicimos? importamos el reactive forms en el modulo principal para usarlo en todo el proyecto, luego en el FORMULARIO, en el ts importamos FormsBuilder para hacer uso del formulario y FormsGroup el cual va a tener los datos tipo string como para completar. Creamos una variable la cual va a tener FormGroup donde van a estar guardados los datos y el FormsBuilder lo declaramos en el constructor para traerlo y usarlo.
Al hacer esto creamos un formGroup con la variable la cual nos va a dar margen a usar las propiedades de datos nombre, apellido... y los inputs los asociamos a eso que declaramos en el ts con las propiedades vacias, lo hacemos con el mismo nombre que pusimos en el ts dentro de un formControlName que tiene que coincidir como lo declare en el ts.
Despues nos vamos a suscribir para detectar los cambios por medio del console.log, principal para mostrar estos datos tambien creamos un pipe el cual nos va mostrar el valor como un json, con los valores misFormularios.value | json

FORMULARIO ANIDADO
Realizamos las importaciones del FormBuilder y del FormGroup, implementamos el OnInit, en el constructor declaramos el formBuilder y tambien definimos una variable de tipo FormGroup para inicializarla vacia y despues ponerle los valores vacios.
