import s from './App.scss'
import Header from './components/Header/Header';
import About from './components/Main/About/About';
import Title from './components/Main/Title/Title';
function App() {
  return (
    <div className={s.App}>
		<Header/>
		<Title/>
		<About/>
    </div>
  );
}

export default App;
