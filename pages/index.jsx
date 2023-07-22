import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import Carousel from "@/components/ui/Carousel";

export default function Home() {
  return (
    <>
      <Header />

      <Carousel />

      <div className="mt-32">
        <h1>Slider2</h1>
      </div>
      <Footer />
    </>
  );
}
