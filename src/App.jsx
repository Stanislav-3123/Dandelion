import Header from "./components/Header/Header";
import About from "./components/Main/About/About";
import Comments from "./components/Main/Comments/Comments";
import Title from "./components/Main/Title/Title";
import Video from "./components/Main/Video/Video";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="min-h-screen flex mx-auto flex-col flex-wrap items-center content-center max-w-[1440px]">
      <Header />
      <Title />
      <About />
      <Video />
      <Comments />
      <Footer />
    </div>
  );
}

export default App;
