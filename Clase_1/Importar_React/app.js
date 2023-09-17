// Importamos React
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client";

// Recuperamos el elemento app
const appDomElement = document.getElementById('app');

// Creamos el root en nuestro elemento
const root = ReactDOM.createRoom(appDomElement)
// Le decimos que es lo que quiero que renderice 
root.render('Hola React');
