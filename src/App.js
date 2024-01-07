import s from './App.scss'
import Header from './components/Header/Header';
import About from './components/Main/About/About';
import Comments from './components/Main/Comments/Comments';
import Title from './components/Main/Title/Title';
import Video from './components/Main/Video/Video';
function App() {
  return (
    <div className={s.App}>
		<Header/>
		<Title/>
		<About/>
		<Video />
		<Comments/>
    </div>
  );
}

export default App;
