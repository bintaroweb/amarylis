import { Button } from "@/components/ui/button";
import { MapPin, Star, Sparkles } from "lucide-react";
import heroInterior from "@/assets/hero-interior.jpg";

const HeroSection = () => {
	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<section
			id="beranda"
			className="relative min-h-screen flex items-center bg-gradient-to-br from-estate-neutral to-background"
		>
			<div className="mx-auto px-4 py-14" style={{ width: "1180px" }}>
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					{/* Content */}
					<div className="space-y-6 animate-fade-in">
						<div className="space-y-5">
							<div className="flex items-center space-x-2 text-estate-primary">
								<Sparkles className="h-5 w-5" />
								<span className="font-medium text-sm tracking-wide uppercase">
									Investasi Properti Terbaik
								</span>
							</div>

							<h1 className="text-5xl uppercase lg:text-6xl font-bold text-estate-warm leading-tight">
								Amarylis ESTATE
								<span className="block text-estate-primary">
									CIRENDEU
								</span>
							</h1>

							<p className="text-xl text-estate-primary font-semibold">
								Hunian Nyaman & Asri di Selatan Jakarta
							</p>

							<div className="flex items-center space-x-1 mt-2">
								<Star className="h-4 w-4 fill-estate-secondary text-estate-secondary" />
								<Star className="h-4 w-4 fill-estate-secondary text-estate-secondary" />
								<Star className="h-4 w-4 fill-estate-secondary text-estate-secondary" />
								<Star className="h-4 w-4 fill-estate-secondary text-estate-secondary" />
								<Star className="h-4 w-4 fill-estate-secondary text-estate-secondary" />
								{/* <br />
								<p className="text-sm font-medium ml-2">
									Premium Location
								</p> */}
							</div>

							<p className="text-base text-muted-foreground max-w-xl leading-relaxed">
								Wujudkan impian keluarga dengan hunian premium
								di cluster eksklusif yang menghadirkan
								kenyamanan, keamanan dan kemewahan di Selatan
								Jakarta.
							</p>

							{/* <div className="flex items-center space-x-2 text-estate-warm">
								<MapPin className="h-5 w-5 text-estate-primary" />
								<span className="font-medium">
									Cirendeu, Tangerang Selatan
								</span>
							</div> */}
						</div>

						{/* CTA Buttons */}
						{/* <div className="flex flex-col sm:flex-row gap-4">
							<Button
								size="lg"
								onClick={() => scrollToSection("tipe-rumah")}
								className="bg-secondary text-black hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-medium text-lg px-8 py-6"
							>
								Lihat Tipe Rumah
							</Button>
							<Button
								size="lg"
								variant="outline"
								onClick={() => scrollToSection("kontak")}
								className="border-estate-primary text-estate-primary hover:bg-estate-primary hover:text-primary-foreground transition-all duration-300 text-lg px-8 py-6"
							>
								Konsultasi Gratis
							</Button>
						</div> */}

						{/* Key Features */}
						<div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
							<div className="text-center">
								<div className="text-2xl font-bold text-estate-primary">
									Ready
								</div>
								<div className="text-sm text-muted-foreground">
									Cluster Eksklusif
								</div>
							</div>
							<div className="text-center">
								<div className="text-2xl font-bold text-estate-primary">
									2 Lantai
								</div>
								<div className="text-sm text-muted-foreground">
									Desain Modern
								</div>
							</div>
							<div className="text-center">
								<div className="text-2xl font-bold text-estate-primary">
									24/7
								</div>
								<div className="text-sm text-muted-foreground">
									Keamanan Terjamin
								</div>
							</div>
						</div>
					</div>

					{/* Hero Image */}
					<div className="relative animate-slide-in">
						<div className="relative rounded-3xl overflow-hidden shadow-strong">
							<img
								src="https://amarylisestatecirendeu.com/wp-content/uploads/2022/10/Amarylis-Estate-Cirendeu-New.jpg"
								alt="Amarylis Estate Cirendeu"
								className="w-full h-[600px] object-cover"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-estate-dark/20 to-transparent"></div>

							{/* Floating Badge */}
							<div className="absolute top-6 left-6 bg-estate-secondary text-estate-warm px-4 py-2 rounded-full font-semibold shadow-lg">
								✨ Ready Stock
							</div>

							{/* Price Badge */}
							<div className="absolute bottom-6 left-6 bg-background/95 backdrop-blur-sm rounded-2xl p-4 shadow-medium">
								{/* <div className="text-sm text-muted-foreground">
									Mulai dari
								</div>
								<div className="text-2xl font-bold text-estate-primary">
									Rp 2,8 M
								</div> */}
								<div className="text-sm text-estate-primary">
									*Promo terbatas
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
