import {
	Phone,
	Mail,
	MapPin,
	Clock,
	Facebook,
	Instagram,
	Youtube,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import amaryllisLogo from "@/assets/amaryllis-logo.png";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<footer className="bg-estate-dark text-background">
			<div
				className="mx-auto px-4 md:px-8 lg:px-4 py-16"
				style={{ maxWidth: "1180px", width: "100%" }}
			>
				<div className="grid lg:grid-cols-4 gap-8 mb-12">
					{/* Company Info */}
					<div className="lg:col-span-2">
						<div className="flex items-center space-x-3 mb-6">
							{/* <img
								src="https://amarylisestatecirendeu.com/wp-content/uploads/2022/10/SMARILYS_Logo_ok_page-0001-removebg-preview.png"
								alt="Amarylis Estate"
								className="h-12 w-12"
							/> */}
							<div>
								<h3 className="text-2xl font-bold text-background">
									AMARYLLIS ESTATE
								</h3>
								<p className="text-estate-secondary font-medium">
									CIRENDEU
								</p>
							</div>
						</div>
						<p className="text-background/80 leading-relaxed mb-6 max-w-md">
							Cluster premium yang menghadirkan hunian nyaman dan
							asri di lokasi strategis Selatan Jakarta. Investasi
							terbaik untuk masa depan keluarga Anda.
						</p>
						<div className="flex space-x-4">
							<a
								href="#"
								className="w-10 h-10 bg-estate-primary rounded-lg flex items-center justify-center hover:bg-estate-primary-light transition-colors"
								aria-label="Facebook"
							>
								<Facebook className="h-5 w-5 text-primary-foreground" />
							</a>
							<a
								href="#"
								className="w-10 h-10 bg-estate-primary rounded-lg flex items-center justify-center hover:bg-estate-primary-light transition-colors"
								aria-label="Instagram"
							>
								<Instagram className="h-5 w-5 text-primary-foreground" />
							</a>
							<a
								href="#"
								className="w-10 h-10 bg-estate-primary rounded-lg flex items-center justify-center hover:bg-estate-primary-light transition-colors"
								aria-label="YouTube"
							>
								<Youtube className="h-5 w-5 text-primary-foreground" />
							</a>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className="text-xl font-bold text-background mb-6">
							Menu Utama
						</h4>
						<nav className="space-y-3">
							<button
								onClick={() => scrollToSection("beranda")}
								className="block text-background/80 hover:text-estate-secondary transition-colors"
							>
								Beranda
							</button>
							<button
								onClick={() => scrollToSection("fasilitas")}
								className="block text-background/80 hover:text-estate-secondary transition-colors"
							>
								Fasilitas
							</button>
							<button
								onClick={() => scrollToSection("lokasi")}
								className="block text-background/80 hover:text-estate-secondary transition-colors"
							>
								Lokasi
							</button>
							<button
								onClick={() => scrollToSection("tipe-rumah")}
								className="block text-background/80 hover:text-estate-secondary transition-colors"
							>
								Tipe Rumah
							</button>
							<button
								onClick={() => scrollToSection("galeri")}
								className="block text-background/80 hover:text-estate-secondary transition-colors"
							>
								Galeri
							</button>
							<button
								onClick={() => scrollToSection("kontak")}
								className="block text-background/80 hover:text-estate-secondary transition-colors"
							>
								Kontak
							</button>
						</nav>
					</div>

					{/* Contact Info */}
					<div>
						<h4 className="text-xl font-bold text-background mb-6">
							Hubungi Kami
						</h4>
						<div className="space-y-4">
							<div className="flex items-start space-x-3">
								<Phone className="h-5 w-5 text-estate-secondary mt-1 flex-shrink-0" />
								<div>
									<p className="text-background font-medium">
										62816237189
									</p>
									<p className="text-background/70 text-sm">
										Marketing Executive
									</p>
								</div>
							</div>
							{/* <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-estate-secondary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-background font-medium">info@amaryllisestate.com</p>
                  <p className="text-background/70 text-sm">Konsultasi Online</p>
                </div>
              </div> */}
							<div className="flex items-start space-x-3">
								<MapPin className="h-5 w-5 text-estate-secondary mt-1 flex-shrink-0" />
								<div>
									<p className="text-background font-medium">
										Cirendeu, Tangerang Selatan
									</p>
									<p className="text-background/70 text-sm">
										Show Unit Location
									</p>
								</div>
							</div>
							<div className="flex items-start space-x-3">
								<Clock className="h-5 w-5 text-estate-secondary mt-1 flex-shrink-0" />
								<div>
									<p className="text-background font-medium">
										09:00 - 17:00
									</p>
									<p className="text-background/70 text-sm">
										Senin - Minggu
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="border-t border-background/20 pt-8">
					<div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
						<div className="text-background/70 text-center lg:text-left">
							<p>
								&copy; {currentYear} Amaryllis Estate Cirendeu.
								All rights reserved.
							</p>
							{/* <p className="text-sm">
								Developed with ❤️ for your Dream ome
							</p> */}
						</div>
						<div className="flex flex-wrap justify-center lg:justify-end space-x-6 text-sm">
							<a
								href="#"
								className="text-background/70 hover:text-estate-secondary transition-colors"
							>
								Privacy Policy
							</a>
							<a
								href="#"
								className="text-background/70 hover:text-estate-secondary transition-colors"
							>
								Terms of Service
							</a>
							<a
								href="#"
								className="text-background/70 hover:text-estate-secondary transition-colors"
							>
								Sitemap
							</a>
						</div>
					</div>
				</div>
			</div>

			{/* WhatsApp Float Button */}
			<a
				href="https://wa.me/62816237189?text=Halo, saya tertarik dengan Amarylis Estate Cirendeu"
				target="_blank"
				rel="noopener noreferrer"
				className="fixed bottom-4 right-4 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-strong transition-all duration-300 transform hover:scale-110 z-40"
				aria-label="Chat WhatsApp"
			>
				<FaWhatsapp className="h-7 w-7 text-white" />
			</a>
		</footer>
	);
};

export default Footer;
