import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import WhyCloudHRLabs from "../sections/WhyCloudHRLabs";
import CareerJourney from "../sections/CareerJourney";
import WhyDifferent from "../components/WhyDifferent";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyCloudHRLabs />
      <CareerJourney />
      <WhyDifferent />
      
    </>
  );
}