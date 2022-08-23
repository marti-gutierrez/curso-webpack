import Template from '@templates/Template.js';
import '@styles/main.css';
import '@styles/app.scss'

(async function App() {
  const main = null || document.getElementById('main');
  main.innerHTML = await Template();
})();
