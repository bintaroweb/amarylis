import { Button } from "@/components/ui/button";
import { Home, Maximize, Car, TreePine, Check } from "lucide-react";

const HouseTypesSection = () => {
	const houseTypes = [
		{
			type: "Tipe 8",
			price: "Rp 3,5 M",
			originalPrice: "Rp 3,9 M",
			landSize: "96 m²",
			buildingSize: "115 m²",
			floors: "2 Lantai",
			bedrooms: "4",
			bathrooms: "3",
			features: ["Ukuran 8 x 12m", "Carport 2 Mobil"],
			isPopular: true,
		},
		{
			type: "Tipe 7",
			price: "Rp 2,8 M",
			originalPrice: "Rp 3,2 M",
			landSize: "84 m²",
			buildingSize: "105 m²",
			floors: "2 Lantai",
			bedrooms: "3",
			bathrooms: "2",
			features: ["Ukuran 7 x 12m", "Carport 1 Mobil"],
			isPopular: false,
		},
	];

	const scrollToContact = () => {
		const element = document.getElementById("kontak");
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<section id="tipe-rumah" className="py-20 bg-estate-neutral">
			<div
				className="mx-auto px-4 md:px-8 lg:px-4"
				style={{ maxWidth: "1180px", width: "100%" }}
			>
				<div className="text-center mb-16 animate-fade-in">
					<h2 className="text-4xl lg:text-5xl font-bold text-estate-warm mb-6">
						Pilihan{" "}
						<span className="text-estate-primary">Tipe Rumah</span>
					</h2>
					<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
						Dapatkan rumah impian dengan berbagai pilihan tipe yang
						sesuai dengan kebutuhan dan budget keluarga Anda. Semua
						dengan kualitas premium dan harga terjangkau.
					</p>
				</div>

				<div className="grid lg:grid-cols-2 gap-8 justify-center">
					{houseTypes.map((house, index) => (
						<div
							key={index}
							className={`relative bg-background rounded-3xl overflow-hidden shadow-medium hover:shadow-strong transition-all duration-300 transform hover:-translate-y-2 animate-fade-in ${
								house.isPopular
									? "ring-2 ring-estate-primary"
									: ""
							}`}
							style={{ animationDelay: `${index * 0.2}s` }}
						>
							<div
								className={`absolute top-6 left-6 px-4 py-2 rounded-full text-sm font-bold z-10 ${
									house.isPopular
										? "bg-estate-secondary text-estate-warm"
										: "bg-estate-neutral text-estate-warm"
								}`}
							>
								{house.isPopular
									? "🌟 Paling Populer"
									: "🌟 Paling Murah"}
							</div>

							{/* House Image Placeholder */}
							<div className="relative h-64 bg-gradient-primary">
								<div className="absolute inset-0 flex items-center justify-center">
									{house.type === "Tipe 8" ? (
										<img
											src="https://amarylisestatecirendeu.com/wp-content/uploads/2022/10/Tipe-Rumah-Amarylis8-1.jpg"
											alt="Tipe Rumah Amarylis 8"
											className="h-40 w-auto object-contain"
										/>
									) : (
										<img
											src="https://amarylisestatecirendeu.com/wp-content/uploads/2022/10/denah-layout-scaled-1.jpg"
											alt="Tipe Rumah 7"
											className="h-40 w-auto object-contain"
										/>
									)}
								</div>
								{/* <div className="absolute bottom-4 left-4 bg-background/95 backdrop-blur-sm rounded-xl px-3 py-2">
									<div className="text-sm text-muted-foreground">
										Harga Spesial
									</div>
									<div className="text-xl font-bold text-estate-primary">
										{house.price}
									</div>
									<div className="text-xs text-muted-foreground line-through">
										{house.originalPrice}
									</div>
								</div> */}
							</div>

							<div className="p-8">
								<h3 className="text-2xl font-bold text-estate-warm mb-4">
									{house.type}
								</h3>

								{/* Specifications */}
								<div className="grid grid-cols-2 gap-4 mb-6">
									<div className="flex items-center space-x-2">
										<Maximize className="h-4 w-4 text-estate-primary" />
										<div>
											<div className="text-sm text-muted-foreground">
												Luas Tanah
											</div>
											<div className="font-semibold text-estate-warm">
												{house.landSize}
											</div>
										</div>
									</div>
									<div className="flex items-center space-x-2">
										<Home className="h-4 w-4 text-estate-primary" />
										<div>
											<div className="text-sm text-muted-foreground">
												Luas Bangunan
											</div>
											<div className="font-semibold text-estate-warm">
												{house.buildingSize}
											</div>
										</div>
									</div>
									<div className="flex items-center space-x-2">
										<div className="w-4 h-4 bg-estate-primary rounded text-xs text-primary-foreground flex items-center justify-center font-bold">
											{house.bedrooms}
										</div>
										<div>
											<div className="text-sm text-muted-foreground">
												Kamar Tidur
											</div>
											<div className="font-semibold text-estate-warm">
												{house.bedrooms} Kamar
											</div>
										</div>
									</div>
									<div className="flex items-center space-x-2">
										<div className="w-4 h-4 bg-estate-primary rounded text-xs text-primary-foreground flex items-center justify-center font-bold">
											{house.bathrooms}
										</div>
										<div>
											<div className="text-sm text-muted-foreground">
												Kamar Mandi
											</div>
											<div className="font-semibold text-estate-warm">
												{house.bathrooms} Kamar
											</div>
										</div>
									</div>
								</div>

								{/* Features */}
								<div className="mb-6">
									<h4 className="font-semibold text-estate-warm mb-3">
										Fasilitas Termasuk:
									</h4>
									<div className="space-y-2">
										{house.features.map(
											(feature, featureIndex) => (
												<div
													key={featureIndex}
													className="flex items-center space-x-2"
												>
													<Check className="h-4 w-4 text-estate-primary" />
													<span className="text-sm text-muted-foreground">
														{feature}
													</span>
												</div>
											)
										)}
									</div>
								</div>

								{/* CTA Button */}
								<Button
									onClick={scrollToContact}
									className={`w-full ${
										house.isPopular
											? "bg-gradient-primary hover:opacity-90"
											: "bg-estate-warm hover:bg-estate-dark text-background"
									} transition-all duration-300`}
								>
									Konsultasi Tipe Ini
								</Button>
							</div>
						</div>
					))}
				</div>

				{/* Additional Info */}
				{/* <div className="mt-16 text-center">
					<div className="bg-gradient-warm rounded-3xl p-8 lg:p-12 text-primary-foreground">
						<h3 className="text-3xl font-bold mb-4">
							Promo Spesial Terbatas!
						</h3>
						<p className="text-xl mb-6 opacity-90">
							Dapatkan discount hingga 15% untuk pembelian bulan
							ini
						</p>
						<div className="grid md:grid-cols-3 gap-6 text-center">
							<div>
								<div className="text-2xl font-bold">💰</div>
								<div className="font-semibold">DP 5%</div>
								<div className="text-sm opacity-80">
									Cicilan ringan
								</div>
							</div>
							<div>
								<div className="text-2xl font-bold">🏠</div>
								<div className="font-semibold">
									Cash Hard 10%
								</div>
								<div className="text-sm opacity-80">
									Discount tambahan
								</div>
							</div>
							<div>
								<div className="text-2xl font-bold">⚡</div>
								<div className="font-semibold">Siap Huni</div>
								<div className="text-sm opacity-80">
									Ready stock
								</div>
							</div>
						</div>
					</div>
				</div> */}
			</div>
		</section>
	);
};

export default HouseTypesSection;
