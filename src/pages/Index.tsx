import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import LocationSection from "@/components/LocationSection";
import HouseTypesSection from "@/components/HouseTypesSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
	return (
		<div className="min-h-screen bg-background">
			<Header />
			<main>
				<HeroSection />
				<FacilitiesSection />
				<LocationSection />
				<HouseTypesSection />
				<GallerySection />
				<ContactSection />
			</main>
			<Footer />
		</div>
	);
};

export default Index;
