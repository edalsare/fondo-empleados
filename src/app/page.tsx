import Image from "next/image";
import Header from "./componets/header/Header";
import Login from "./componets/register/form-login/Login";
import Slider from "./componets/slider/Slider";
import Card from "./componets/infromacion/card/card";
import Footer from "./componets/Footer/Footer";
import "./globals.css";

export default function Home() {
  return (
    <div>
      <div className="Header">
        <Header />
      </div>
      <div className="Body"></div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
