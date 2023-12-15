import Header from "./header/Header";
import Footer from "./Footer/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div lang="en">
      <div>
        <div className="Header">
          <Header />
        </div>
        {children}
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}
