import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import heroInterior from "@/assets/hero-interior.jpg";
import galleryKitchen from "@/assets/gallery-kitchen.jpg";
import galleryBedroom from "@/assets/gallery-bedroom.jpg";
import galleryBathroom from "@/assets/gallery-bathroom.jpg";
import galleryExterior from "@/assets/gallery-exterior.jpg";

const GallerySection = () => {
	const [selectedImage, setSelectedImage] = useState<number | null>(null);

	const images = [
		{
			src: "https://amarylisestatecirendeu.com/wp-content/uploads/2025/07/Interior.jpg",
			alt: "Interior ruang tamu Amarylis Estate",
			title: "Interior Rumah",
		},
		{
			src: "https://amarylisestatecirendeu.com/wp-content/uploads/2025/07/Kamar-Mandi.jpg",
			alt: "Kamar mandi modern Amarylis Estate",
			title: "Kamar Mandi Modern",
		},
		{
			src: "https://amarylisestatecirendeu.com/wp-content/uploads/2025/07/Kamar-Rumah.jpg",
			alt: "Kamar tidur utama Amarylis Estate",
			title: "Kamar Tidur Utama",
		},
		{
			src: "https://amarylisestatecirendeu.com/wp-content/uploads/2025/07/Kolam-Renang-Amarylis.jpeg",
			alt: "Kolam renang Amarylis Estate",
			title: "Kolam Renang",
		},
		{
			src: "https://amarylisestatecirendeu.com/wp-content/uploads/2025/07/Taman-Bermain.jpeg",
			alt: "Taman bermain Amarylis Estate",
			title: "Taman Bermain",
		},
		{
			src: "https://amarylisestatecirendeu.com/wp-content/uploads/2025/07/Gerbang-Perumahan-1.jpg",
			alt: "Gerbang perumahan Amarylis Estate",
			title: "Gerbang Perumahan",
		},
	];

	const openLightbox = (index: number) => {
		setSelectedImage(index);
	};

	const closeLightbox = () => {
		setSelectedImage(null);
	};

	const navigateImage = (direction: "prev" | "next") => {
		if (selectedImage === null) return;

		if (direction === "prev") {
			setSelectedImage(
				selectedImage === 0 ? images.length - 1 : selectedImage - 1
			);
		} else {
			setSelectedImage(
				selectedImage === images.length - 1 ? 0 : selectedImage + 1
			);
		}
	};

	return (
		<section id="galeri" className="py-20 bg-background">
			<div
				className="mx-auto px-4 md:px-8 lg:px-4"
				style={{ maxWidth: "1180px", width: "100%" }}
			>
				<div className="text-center mb-16 animate-fade-in">
					<h2 className="text-4xl lg:text-5xl font-bold text-estate-warm mb-6">
						Galeri <span className="text-estate-primary">Foto</span>
					</h2>
					<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
						Lihat keindahan dan kemewahan hunian di Amarylis Estate
						Cirendeu melalui dokumentasi interior dan eksterior yang
						menawan
					</p>
				</div>

				{/* Image Grid */}
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
					{images.map((image, index) => (
						<div
							key={index}
							className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-medium hover:shadow-strong transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
							style={{ animationDelay: `${index * 0.1}s` }}
							onClick={() => openLightbox(index)}
						>
							<img
								src={image.src}
								alt={image.alt}
								className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-estate-dark/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
								<div className="absolute bottom-4 left-4 text-white">
									<h3 className="font-semibold text-lg">
										{image.title}
									</h3>
									<p className="text-sm opacity-90">
										Klik untuk memperbesar
									</p>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Lightbox */}
				{selectedImage !== null && (
					<div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
						<div className="relative max-w-4xl max-h-full">
							<button
								onClick={closeLightbox}
								className="absolute top-4 right-4 text-white hover:text-estate-secondary transition-colors z-10"
							>
								<X className="h-8 w-8" />
							</button>

							<button
								onClick={() => navigateImage("prev")}
								className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-estate-secondary transition-colors z-10"
							>
								<ChevronLeft className="h-8 w-8" />
							</button>

							<button
								onClick={() => navigateImage("next")}
								className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-estate-secondary transition-colors z-10"
							>
								<ChevronRight className="h-8 w-8" />
							</button>

							<img
								src={images[selectedImage].src}
								alt={images[selectedImage].alt}
								className="max-w-full max-h-full object-contain rounded-lg"
							/>

							<div className="absolute bottom-4 left-4 text-white">
								<h3 className="font-semibold text-lg">
									{images[selectedImage].title}
								</h3>
								<p className="text-sm opacity-75">
									{selectedImage + 1} / {images.length}
								</p>
							</div>
						</div>
					</div>
				)}

				{/* Call to Action */}
				<div className="text-center">
					<div className="bg-gradient-primary rounded-3xl p-8 lg:p-12">
						<h3 className="text-3xl font-bold text-primary-foreground mb-4">
							Ingin Melihat Langsung?
						</h3>
						<p className="text-xl text-primary-foreground/90 mb-8">
							Kunjungi show unit kami dan rasakan sendiri
							kemewahan hunian Amarylis Estate
						</p>
						<div className="grid md:grid-cols-3 gap-6 text-primary-foreground">
							<div>
								<div className="text-2xl font-bold mb-2">
									📍
								</div>
								<div className="font-semibold">Show Unit</div>
								<div className="text-sm opacity-90">
									Buka Setiap Hari
								</div>
							</div>
							<div>
								<div className="text-2xl font-bold mb-2">
									🕒
								</div>
								<div className="font-semibold">
									09:00 - 17:00
								</div>
								<div className="text-sm opacity-90">
									Konsultasi Gratis
								</div>
							</div>
							<div>
								<div className="text-2xl font-bold mb-2">
									🏆
								</div>
								<div className="font-semibold">
									Unit Terbatas
								</div>
								<div className="text-sm opacity-90">
									Booking Sekarang
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default GallerySection;
