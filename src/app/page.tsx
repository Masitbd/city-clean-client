import AvailableService from "@/components/AvailableService";
import Banner from "@/components/Banner";
import Blogs from "@/components/Blogs";
import CategorySection from "@/components/CategorySection";
import ClientReview from "@/components/ClientReview";
import FAQ from "@/components/FAQ";
import LatestNews from "@/components/LatestNews";
import Overview from "@/components/Overview";
import UpcomingService from "@/components/UpcomingService";

export default function Home() {
  return (
    <main>
      <Banner />
      <CategorySection />
      <Overview />
      <AvailableService />
      <UpcomingService />
      <ClientReview />
      <LatestNews />
      <Blogs />
      <FAQ />
    </main>
  );
}
