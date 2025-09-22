import {
	MapPin,
	Clock,
	Car,
	Train,
	Hospital,
	ShoppingBag,
	School,
} from "lucide-react";

const LocationSection = () => {
	let nearbyPlaces = [
		{
			name: "Stasiun MRT Lebak Bulus",
			distance: "10 menit",
			icon: Train,
			type: "Transportasi",
		},
		{
			name: "Mall Pondok Indah",
			distance: "17 menit",
			icon: ShoppingBag,
			type: "Pusat Belanja",
		},
		{
			name: "RS Pondok Indah",
			distance: "13 menit",
			icon: Hospital,
			type: "Kesehatan",
		},
		// {
		//   name: "Universitas Indonesia",
		//   distance: "3 menit",
		//   icon: MapPin,
		//   type: "Pendidikan",
		// },
		{
			name: "Tol Jakarta Outer Ring Road (JORR)",
			distance: "10 menit",
			icon: Car,
			type: "Akses Tol",
		},
		{
			name: "Sekolah Internasional",
			distance: "12 menit",
			icon: School,
			type: "Pendidikan",
		},
	];

	// Sort by fastest (shortest time)
	nearbyPlaces = nearbyPlaces.sort((a, b) => {
		const getMinutes = (str) => {
			const match = str.match(/(\d+)/);
			return match ? parseInt(match[1], 10) : 999;
		};
		return getMinutes(a.distance) - getMinutes(b.distance);
	});

	return (
		<section id="lokasi" className="py-20 bg-background">
			<div
				className="mx-auto px-4 md:px-8 lg:px-4"
				style={{ maxWidth: "1180px", width: "100%" }}
			>
				<div className="text-center mb-16 animate-fade-in">
					<h2 className="text-4xl lg:text-5xl font-bold text-estate-warm mb-6">
						Lokasi{" "}
						<span className="text-estate-primary">Strategis</span>
					</h2>
					<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
						Berlokasi strategis di perbatasan Jakarta Selatan dan
						Tangerang Selatan dengan akses mudah ke berbagai
						fasilitas penting dan transportasi publik yang
						memudahkan mobilitas harian
					</p>
				</div>

				<div className="grid lg:grid-cols-2 gap-12 items-center">
					{/* Map Placeholder */}
					<div className="relative animate-slide-in">
						<div className="bg-estate-neutral rounded-3xl p-8 h-96 flex items-center justify-center shadow-medium">
							<div className="text-center">
								<MapPin className="h-16 w-16 text-estate-primary mx-auto mb-4" />
								<h3 className="text-2xl font-bold text-estate-warm mb-2">
									Peta Lokasi
								</h3>
								<p className="text-muted-foreground">
									Cirendeu, Tangerang Selatan
								</p>
								<div className="mt-6 bg-gradient-primary text-primary-foreground px-6 py-3 rounded-xl inline-block font-semibold">
									<a
										href="https://maps.app.goo.gl/AKqz4CvPDCj46QFp6"
										target="_blank"
										rel="noopener noreferrer"
										className="hover:underline flex items-center gap-2"
									>
										<MapPin className="h-5 w-5 text-estate-primary text-white" />
										<span>Amarylis Estate Cirendeu</span>
									</a>
								</div>
							</div>
						</div>
					</div>

					{/* Nearby Places */}
					<div className="space-y-6 animate-fade-in">
						<div className="mb-8">
							<h3 className="text-3xl font-bold text-estate-warm mb-4">
								Area Sekitar
							</h3>
							<p className="text-lg text-muted-foreground">
								Nikmati kemudahan akses ke berbagai fasilitas
								penting dalam radius yang sangat dekat
							</p>
						</div>

						<div className="grid gap-4">
							{nearbyPlaces.map((place, index) => (
								<div
									key={index}
									className="flex items-center space-x-4 bg-estate-neutral rounded-2xl p-4 hover:shadow-soft transition-all duration-300 transform hover:-translate-y-1"
									style={{
										animationDelay: `${index * 0.1}s`,
									}}
								>
									<div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
										<place.icon className="h-6 w-6 text-primary-foreground" />
									</div>
									<div className="flex-1">
										<h4 className="font-semibold text-estate-warm">
											{place.name}
										</h4>
										<p className="text-sm text-muted-foreground">
											{place.type}
										</p>
									</div>
									<div className="flex items-center space-x-2 text-estate-primary">
										<Clock className="h-4 w-4" />
										<span className="font-medium">
											{place.distance}
										</span>
									</div>
								</div>
							))}
						</div>

						{/* Transportation Access */}
						<div className="bg-gradient-gold rounded-2xl p-6 mt-8">
							<h4 className="text-xl font-bold text-estate-warm mb-4">
								Akses Transportasi
							</h4>
							<div className="grid md:grid-cols-2 gap-4">
								<div className="flex items-center space-x-3">
									<Train className="h-5 w-5 text-estate-warm" />
									<span className="text-estate-warm">
										Stasiun MRT
									</span>
								</div>
								<div className="flex items-center space-x-3">
									<Car className="h-5 w-5 text-estate-warm" />
									<span className="text-estate-warm">
										Tol JORR
									</span>
								</div>
								<div className="flex items-center space-x-3">
									<MapPin className="h-5 w-5 text-estate-warm" />
									<span className="text-estate-warm">
										Trans Jakarta
									</span>
								</div>
								<div className="flex items-center space-x-3">
									<Car className="h-5 w-5 text-estate-warm" />
									<span className="text-estate-warm">
										Akses Tol Bandara
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default LocationSection;
