import Image from "next/image";
import Header from "./componants/Header";
import Footer from "./componants/Footer";
import Slider from "./componants/Slider";

export default function Home() {
  return (
    <>
     <Header/>
     <Slider/>

     <div className="slate-900">
      <h3>Hello</h3> 

     </div>

     <Footer/>
    </>
  );
}

