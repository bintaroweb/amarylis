import { Shield, Car, TreePine, Waves, Users, Zap } from "lucide-react";

const FacilitiesSection = () => {
	const facilities = [
		{
			icon: Shield,
			title: "Keamanan 24 Jam",
			description:
				"Sistem keamanan terpadu dengan security dan CCTV untuk kenyamanan keluarga",
		},
		{
			icon: Car,
			title: "Tempat Parkir Luas",
			description:
				"Carport untuk 2 mobil dan area parkir tamu yang memadai",
		},
		{
			icon: TreePine,
			title: "Taman & Landscape",
			description:
				"Area hijau yang asri dengan taman yang terawat dan landscape indah",
		},
		{
			icon: Waves,
			title: "Kolam Renang",
			description:
				"Kolam renang komunal dengan desain modern untuk keluarga",
		},
		{
			icon: Users,
			title: "One Gate System",
			description:
				"Sistem satu pintu untuk keamanan dan kenyamanan penghuni",
		},
		{
			icon: Zap,
			title: "IPL Terjangkau",
			description: "Biaya IPL yang kompetitif untuk fasilitas premium",
		},
	];

	return (
		<section id="fasilitas" className="py-20 bg-estate-neutral">
			<div
				className="mx-auto px-4 md:px-8 lg:px-4"
				style={{ maxWidth: "1180px", width: "100%" }}
			>
				<div className="text-center mb-16 animate-fade-in">
					<h2 className="text-4xl lg:text-5xl font-bold text-estate-warm mb-6">
						Fasilitas{" "}
						<span className="text-estate-primary">Unggulan</span>
					</h2>
					<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
						Nikmati kemudahan hidup dengan fasilitas premium yang
						dirancang khusus untuk kenyamanan dan keamanan keluarga
						Anda
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{facilities.map((facility, index) => (
						<div
							key={index}
							className="bg-background rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
							style={{ animationDelay: `${index * 0.1}s` }}
						>
							<div className="flex items-center space-x-4 mb-6">
								<div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center flex-shrink-0">
									<facility.icon className="h-7 w-7 text-primary-foreground" />
								</div>
								<h3 className="text-xl font-bold text-estate-warm">
									{facility.title}
								</h3>
							</div>
							<p className="text-muted-foreground leading-relaxed">
								{facility.description}
							</p>
						</div>
					))}
				</div>

				{/* Additional Features */}
				<div className="mt-16 bg-gradient-primary rounded-3xl p-8 lg:p-12 text-center">
					<h3 className="text-3xl font-bold text-primary-foreground mb-6">
						Mengapa Memilih Amarylis Estate?
					</h3>
					<div className="grid md:grid-cols-3 gap-8 text-primary-foreground">
						<div>
							<div className="text-4xl font-bold mb-2">100%</div>
							<div className="text-lg">Legal & Aman</div>
							<div className="text-sm opacity-90 mt-1">
								SHM & IMB Lengkap
							</div>
						</div>
						<div>
							<div className="text-4xl font-bold mb-2">
								± 10 Menit
							</div>
							<div className="text-lg">Ke Stasiun MRT</div>
							<div className="text-sm opacity-90 mt-1">
								Akses Transportasi Mudah
							</div>
						</div>
						<div>
							<div className="text-4xl font-bold mb-2">Dekat</div>
							<div className="text-lg">Fasilitas Umum</div>
							<div className="text-sm opacity-90 mt-1">
								Sekolah, RS, Mall
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FacilitiesSection;
