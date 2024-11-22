# ReactivePractica

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
Para anidar dos formularios, tener dos en uno. Vamos a hacer esto, declaramos dos variables una para numerosFijos y otra para numerosMovil, mediante un formBuilder.group vamos a agregar los valores que queremos usar tanto movil como fijos, vamos a tener el prefijo y el numero, dos variables. Ahora para simplificar y tener esas dos en una vamos a llamar a la variable donde inicialice el formBuilder que fue miFormularioAnidado, lo llamamos this.miformularioAnidado y llamamos al formBuilder group lo igualamos = y dentro de ese ponemos valores del mismos tipo de las const que declaramos al principio de tipo telefonoFijo y telefonoMovil

en el html dentro de un formgroup vamos a llamar a esa variable que inicializamos para el formGroup, que fue miFormularioAnidado, para vincular el pipe, esa variable.value tipo json para mostrar en pantalla los valores que vamos a poner, ese pipe lo ponemos dentro de una interpolacion con la variable.value. Para entrar a esos valores y asi detallarlos lo hacemos mediante un formGroupName agregamos las dos variables donde declaramos esos dos valores anidados (fijo: numeroFijo) llamamos fijo, como con el movil (numero: numeroMovil) llamamos fijo y movil lo ponemos dentro del formGroupName.
tambien hay que poner esos valores donde declaramos las dos const que dentro tenian esos dos valores, el prefijo y numero, hay que llamarlos mediante un formControlName, esto tiene que estar dentro de inputs encerrados por un div que contiene el formGroupName.

Tuve problemas al querer probar el codigo, tuve errores en enlazar los vinculos, tienen que coincidir con el de los ts.

FORMULARIO ARRAY
Para hacer uso del array fue como crear una interface en ts, a que me refiero que declaramos cosas con el tipo de dato y hacer uso de datos dentro de un array [].
Es parecido a lo que venia haciendo, lo que cambia es que creamos un group con valores el cual aca vamos hacer uso del FormArray.
Para empezar la variable la igualamos al formbuilder para crear un group con valores vacios, sin embargo telefonos, porque, porque en este caso vamos hacer uso de igualarlo formBuilder.array([]) que inicia vacia. Fuera del oninit vamos a tener varias funciones la primera para obtener la lista de telefonos en forma array, otra para anadir telefonos y otra para eliminar.
La primera, mediante un get vamos a crear una funcion de tipo FormArray para que nos devuelva los 'telefonos' mediante un get as array.
Luego una funcion para anadir un telefono declaramos un const igualada a un group donde va a tener los valores de prefijo y numero. como se agrega? va a estar dentro de la variable que hicimos para el get mediante un push dentro del push iria la const que elegimos para el prefijo y el numero como mencionamos anteriormente.
Para eliminar creamos una funcion la cual va a ser el valor index de tipo number, utilizamos la variable del get e utilizamos removeAt y el index.

en el html hacemos uso del formGroup en un form, para luego hacer uso de pipe mediante la interpolacion y ver el value mediante el json, mediante un input llamamos al formControlName de los valores que pusimos en el group pero el array no, porque? porque vamos por medio de un div donde vamos a iterrar sobre el array pero ese div primero va a contener el formArrayName y traemos ese dato que nos falto declarar, telefonos, pusimos nombre y apellido pero no telefonos, bueno lo usamos aca.
Dentro de el usamos otra etiqueta div para iterar sobre los diversos datos que podria agregar otro numero con su prefijo las veces que crea necesarias. Vamos a iterar sobre el telefonosFormulario.controls que es donde se guardan los telefonos as formArray. vamos a declarar un i = index y usar el [formGroupName]= i para que, de donde sale eso, eso nos va a servir porque es para eliminar el contacto porque en la funcion para eliminar le pusimos tipo index: number, despues luego vamos a hacer un evento de click eliminar y hacemos llamamo del (i) para saber que tiene que borrar.
Fuera de esos div para anadir telefono, hacemos lo mismo mediante evento de click el anadir telefono.

  <pre> {{ mi.valueChanges | async | json  }}</pre>.

tip para ver un poco mejor el json.

FORMULARIO VALIDADO
para empezar hacemos uso del formGroup, formBuilder, y validators para este caso, hacemos lo de siempre implementamos oninit, declaramos en el constructor el formBuilder y declaramos una instancia de tipo new formGroup para luego agregar los valores. Luego dentro del oninit empezamos a armar el contenido del group con valores las cuales pueden tener validators.required pero tambien vamos a poder tener compose que puede tener varios requisitos, si es mayor si es menor, tipo email, pattern como tambien booleanas, true o false con un validators.requiredTrue.
Luego de eso mediante get vamos a armar funciones para obtener los datos del group que definimos dentro del group, cada uno de ellos, para luego hacer uso de ellos mediante el html, ya voy a explicar eso...
Y generamos un metodo submit para el formulario mediante una funcion, enviarFormulario la cual si a obtener mediante una instancia de submit en el html, la funcion que creamos si el nombre de la formGroup para saber que es lo que tiene que ser valido mediante la funcion.valid, de ser asi se resetean los valores luego.

traemos todo esos inputs al html como venia haciendo mediante formControlName, bien sabiendo eso mediante ngif tenemos que aplicar los requisitos de los validators que hicimos referencia, que tenia que se mayor de, menor de, que se cumplan condiciones, con el required, <div \*ngIf="edad?.errors?.['required'] && edad?.touched"> edad que esta dentro de esta etiqueta viene de todas esos get que le hicimos a cada uno de los valores dentro del formGroup para hacer condiciones si se cumple bien pero en el caso de que no sea asi, se va mostrar un mensaje. Podriamos mostrar dos mensajes, dos if diferentes separados, el cual si no es min muestra un mensaje, si no es max otro, pattern otro, segun lo que hayamos especificado en los validators.

Para terminar el boton type submit donde se van a mandar todo, [disabled]="miFormularioValidado.invalid generamos esto que para hasta que no se cumpla todas las condiciones del formulario se cumpla o todo lo que yo haga hecho un required voy a poder enviar el formulario.

---

PIPES
Como habiamos visto acerca de los pipes donde llamamos dentro de una interpolacion donde viene un valor de ts y lo pasamos, los valores a json {{ olaola | json }}.
Basicamente un pipe genera transformaciones de datos los cuales se van a ver reflejados en el html, donde se podrian poner datos de tipo fecha, donde tambien se puede hacer uso de lowercase/uppercase, con dateFormat es algo que cree para cambiar mediante un boton los datos cambian de fullDate puede pasar a shortDate es un ejemplo, no llegue a cosas muy complejas como para probar.
Lo mejor, lo principal podriamos decir, el crear pipes | ng g p pipes/multiplicar | dentro de ese pipe generamos dentro del transform la multiplicacion, para asi luego usar el name: multiplica la llamamos en el html <p>Resultado: {{ 2 | multiplica: 10 }} puntos</p> , podria hacer otro pipe para generar un foreach, de resultados de un jugador y obtener la suma de todos los puntos que haya.
Podemos tener tambien cambios signos de las diversas monedas, mostrar decimales y enteros, agregar el porcentaje.
