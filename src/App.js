import "./App.css";
import AosFeatures from "./components/feautures";
import Footer from "./components/footer";
import Header from "./components/header";
import Middle from "./components/middle";
import Top from "./components/top";
import middle1img from "./images/ssd.svg";
import middle2img from "./images/odc.svg";
import middle3img from "./images/rtdd.svg";
import firstbg from "./images/mid1.svg";
import secondbg from "./images/middle2.svg";


function App() {
  const writeups = [
    {
      src: middle1img,
      title: "Future Ready",
      body: "Change is inevitable. Hence, we ensure that irrespective of the nature of the changes be a statutory or technological, we always bring you the latest updates. So that your business keeps functioning as smooth always.",
      bg: firstbg,
      id: 1,
    },
    {
      src: middle2img,
      title: "Flexible Workflow Model",
      body: " AOS flexible workflow model gives you the ability to define automated workflow rules that match your business practices. The system conforms to general agricultural practices",
      bg: secondbg,
      id: 2,
    },
    {
      src: middle3img,
      title: "Highly Adaptable,Enterprise-Class Applications",
      body: "AOS delivers a broad set of integrated Agriculture business functionality on a highly adaptable platform.Role-based management dashboard with drill-down capability allow you to effectively monitor and analyse your operators and pre-built charts and graph can be easily expanded to meet your specific needs",
      bg: firstbg,
      id: 3,
    },
  ];
  return (
    <>
      <Header />
      <Top />
      <Middle
        src={writeups[0].src}
        title={writeups[0].title}
        body={writeups[0].body}
        bg={writeups[0].bg}
        className='mid1'
      />
      <Middle
        src={writeups[1].src}
        title={writeups[1].title}
        body={writeups[1].body}
        bg={writeups[1].bg}
        className='mid2'
      />
      <Middle
        src={writeups[2].src}
        title={writeups[2].title}
        body={writeups[2].body}
        bg={writeups[2].bg}
        className='mid1'
      />
      <AosFeatures />
      <Footer/>
    </>
  );
}

export default App;
