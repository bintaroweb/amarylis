import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import AmarylisLogo from "@/assets/Amarylis-logo.png";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
			setIsMenuOpen(false);
		}
	};

	return (
		<header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
			<div
				className="mx-auto px-4 md:px-8 lg:px-4 py-4"
				style={{ maxWidth: "1180px", width: "100%" }}
			>
				<div className="flex items-center justify-between">
					{/* Logo */}
					<div className="flex items-center space-x-3">
						<a href="/">
							<img
								src="https://amarylisestatecirendeu.com/wp-content/uploads/2022/10/SMARILYS_Logo_ok_page-0001-removebg-preview.png"
								alt="Amarylis Estate"
								className="h-16 w-48"
							/>
						</a>
						{/* <div>
							<h1 className="text-xl font-bold text-estate-warm">
								Amarylis ESTATE
							</h1>
							<p className="text-sm text-estate-primary font-medium">
								CIRENDEU
							</p>
						</div> */}
					</div>

					{/* Desktop Navigation */}
					<nav className="hidden lg:flex items-center space-x-8">
						<button
							onClick={() => scrollToSection("beranda")}
							className="text-foreground hover:text-estate-primary transition-colors"
						>
							Beranda
						</button>
						<button
							onClick={() => scrollToSection("fasilitas")}
							className="text-foreground hover:text-estate-primary transition-colors"
						>
							Fasilitas
						</button>
						<button
							onClick={() => scrollToSection("lokasi")}
							className="text-foreground hover:text-estate-primary transition-colors"
						>
							Lokasi
						</button>
						<button
							onClick={() => scrollToSection("tipe-rumah")}
							className="text-foreground hover:text-estate-primary transition-colors"
						>
							Tipe Rumah
						</button>
						<button
							onClick={() => scrollToSection("galeri")}
							className="text-foreground hover:text-estate-primary transition-colors"
						>
							Galeri
						</button>
					</nav>

					{/* Contact Info & CTA */}
					<div className="hidden lg:flex items-center space-x-4">
						{/* <div className="flex items-center space-x-2 text-sm text-estate-warm">
							<Phone className="h-4 w-4" />
							<span>62816237189</span>
						</div> */}
						<Button
							onClick={() => scrollToSection("kontak")}
							className="bg-gradient-primary hover:opacity-90 transition-opacity"
						>
							Hubungi Kami
						</Button>
					</div>

					{/* Mobile Menu Button */}
					<button
						className="lg:hidden"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						{isMenuOpen ? (
							<X className="h-6 w-6" />
						) : (
							<Menu className="h-8 w-8" />
						)}
					</button>
				</div>

				{/* Mobile Navigation */}
				{isMenuOpen && (
					<div className="lg:hidden mt-4 pb-4 border-t border-border">
						<div className="flex flex-col space-y-4 pt-4">
							<button
								onClick={() => scrollToSection("beranda")}
								className="text-left text-foreground hover:text-estate-primary transition-colors"
							>
								Beranda
							</button>
							<button
								onClick={() => scrollToSection("fasilitas")}
								className="text-left text-foreground hover:text-estate-primary transition-colors"
							>
								Fasilitas
							</button>
							<button
								onClick={() => scrollToSection("lokasi")}
								className="text-left text-foreground hover:text-estate-primary transition-colors"
							>
								Lokasi
							</button>
							<button
								onClick={() => scrollToSection("tipe-rumah")}
								className="text-left text-foreground hover:text-estate-primary transition-colors"
							>
								Tipe Rumah
							</button>
							<button
								onClick={() => scrollToSection("galeri")}
								className="text-left text-foreground hover:text-estate-primary transition-colors"
							>
								Galeri
							</button>
							<div className="flex flex-col space-y-2 pt-4 border-t border-border">
								<div className="flex items-center space-x-2 text-sm text-estate-warm">
									<Phone className="h-4 w-4" />
									<span>62816237189</span>
								</div>
								<Button
									onClick={() => scrollToSection("kontak")}
									className="bg-gradient-primary hover:opacity-90 transition-opacity w-full"
								>
									Hubungi Kami
								</Button>
							</div>
						</div>
					</div>
				)}
			</div>
		</header>
	);
};

export default Header;
