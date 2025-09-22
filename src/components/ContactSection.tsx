import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
	const [formData, setFormData] = useState({
		name: "",
		phone: "",
		email: "",
		message: "",
	});
	const { toast } = useToast();

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		// Basic validation
		if (!formData.name || !formData.phone) {
			toast({
				title: "Mohon lengkapi data",
				description: "Nama dan nomor telepon wajib diisi",
				variant: "destructive",
			});
			return;
		}

		// WhatsApp message
		const message = `Halo, saya tertarik dengan Amarylis Estate Cirendeu.

Nama: ${formData.name}
Telepon: ${formData.phone}
Email: ${formData.email}
Pesan: ${
			formData.message ||
			"Saya ingin mendapatkan informasi lebih lanjut tentang unit yang tersedia."
		}`;

		const whatsappUrl = `https://wa.me/62816237189?text=${encodeURIComponent(
			message
		)}`;
		window.open(whatsappUrl, "_blank");

		toast({
			title: "Pesan terkirim!",
			description:
				"Anda akan diarahkan ke WhatsApp untuk melanjutkan percakapan",
		});

		// Reset form
		setFormData({
			name: "",
			phone: "",
			email: "",
			message: "",
		});
	};

	const contactInfo = [
		{
			icon: Phone,
			title: "Telepon",
			value: "62816237189",
			description: "Marketing Executive",
			action: "tel:62816237189",
		},
		{
			icon: MessageCircle,
			title: "WhatsApp",
			value: "62816237189",
			description: "Chat Langsung",
			action: "https://wa.me/62816237189",
		},
		// {
		// 	icon: Mail,
		// 	title: "Email",
		// 	value: "info@Amarylisestate.com",
		// 	description: "Konsultasi Online",
		// 	action: "mailto:info@Amarylisestate.com",
		// },
		// {
		// 	icon: MapPin,
		// 	title: "Lokasi",
		// 	value: "Cirendeu, Jakarta Selatan",
		// 	description: "Show Unit",
		// 	action: "#",
		// },
	];

	return (
		<section id="kontak" className="py-20 bg-estate-neutral">
			<div
				className="mx-auto px-4 md:px-8 lg:px-4"
				style={{ maxWidth: "1180px", width: "100%" }}
			>
				<div className="text-center mb-16 animate-fade-in">
					<h2 className="text-4xl lg:text-5xl font-bold text-estate-warm mb-6">
						Hubungi{" "}
						<span className="text-estate-primary">Kami</span>
					</h2>
					<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
						Dapatkan konsultasi gratis dan informasi lengkap tentang
						Amarylis Estate Cirendeu. Tim professional kami siap
						membantu mewujudkan hunian impian keluarga Anda.
					</p>
				</div>

				<div className="grid lg:grid-cols-2 gap-12">
					{/* Contact Form */}
					<div className="animate-slide-in">
						<Card className="shadow-medium border-0">
							<CardHeader className="text-center pb-6">
								<CardTitle className="text-2xl font-bold text-estate-warm mb-2">
									Konsultasi Gratis
								</CardTitle>
								<p className="text-muted-foreground">
									Isi form di bawah ini dan kami akan
									menghubungi Anda segera
								</p>
							</CardHeader>
							<CardContent>
								<form
									onSubmit={handleSubmit}
									className="space-y-6"
								>
									<div>
										<label
											htmlFor="name"
											className="block text-sm font-medium text-estate-warm mb-2"
										>
											Nama Lengkap *
										</label>
										<Input
											id="name"
											name="name"
											type="text"
											placeholder="Masukkan nama lengkap Anda"
											value={formData.name}
											onChange={handleInputChange}
											required
											className="border-estate-primary/20 focus:border-estate-primary"
										/>
									</div>

									<div>
										<label
											htmlFor="phone"
											className="block text-sm font-medium text-estate-warm mb-2"
										>
											Nomor Telepon/WhatsApp *
										</label>
										<Input
											id="phone"
											name="phone"
											type="tel"
											placeholder="Contoh: 62816237189"
											value={formData.phone}
											onChange={handleInputChange}
											required
											className="border-estate-primary/20 focus:border-estate-primary"
										/>
									</div>

									{/* <div>
                    <label htmlFor="email" className="block text-sm font-medium text-estate-warm mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="nama@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="border-estate-primary/20 focus:border-estate-primary"
                    />
                  </div> */}

									<div>
										<label
											htmlFor="message"
											className="block text-sm font-medium text-estate-warm mb-2"
										>
											Pesan (Opsional)
										</label>
										<Textarea
											id="message"
											name="message"
											placeholder="Tipe rumah yang diminati, budget, atau pertanyaan lainnya..."
											value={formData.message}
											onChange={handleInputChange}
											rows={4}
											className="border-estate-primary/20 focus:border-estate-primary resize-none"
										/>
									</div>

									<Button
										type="submit"
										className="w-full bg-gradient-primary hover:opacity-90 transition-all duration-300 transform hover:scale-105 text-lg py-6"
										disabled={
											!formData.name || !formData.phone
										}
									>
										<Send className="h-5 w-5 mr-2" />
										Kirim via WhatsApp
									</Button>
								</form>
							</CardContent>
						</Card>
					</div>

					{/* Contact Information */}
					<div className="space-y-8 animate-fade-in">
						<div>
							<h3 className="text-3xl font-bold text-estate-warm mb-6">
								Informasi Kontak
							</h3>
							<p className="text-lg text-muted-foreground mb-8">
								Hubungi tim professional kami untuk mendapatkan
								informasi lengkap dan konsultasi gratis seputar
								hunian impian Anda.
							</p>
						</div>

						<div className="grid gap-6">
							{contactInfo.map((contact, index) => (
								<Card
									key={index}
									className="hover:shadow-medium transition-all duration-300 transform hover:-translate-y-1 cursor-pointer border-0"
									onClick={() => {
										if (
											contact.action.startsWith("http") ||
											contact.action.startsWith("tel:") ||
											contact.action.startsWith("mailto:")
										) {
											window.open(
												contact.action,
												"_blank"
											);
										}
									}}
								>
									<CardContent className="p-6">
										<div className="flex items-start space-x-4">
											<div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
												<contact.icon className="h-6 w-6 text-primary-foreground" />
											</div>
											<div>
												<h4 className="font-semibold text-estate-warm text-lg mb-1">
													{contact.title}
												</h4>
												<p className="font-medium text-estate-primary mb-1">
													{contact.value}
												</p>
												<p className="text-sm text-muted-foreground">
													{contact.description}
												</p>
											</div>
										</div>
									</CardContent>
								</Card>
							))}
						</div>

						{/* Operating Hours */}
						<Card className="bg-gradient-gold border-0">
							<CardContent className="p-6">
								<div className="flex items-start space-x-4">
									<div className="w-12 h-12 bg-estate-warm rounded-xl flex items-center justify-center flex-shrink-0">
										<Clock className="h-6 w-6 text-estate-secondary" />
									</div>
									<div>
										<h4 className="font-semibold text-estate-warm text-lg mb-2">
											Jam Operasional
										</h4>
										<div className="space-y-1 text-estate-warm">
											<p>
												<span className="font-medium">
													Senin - Jumat:
												</span>{" "}
												09:00 - 17:00
											</p>
											<p>
												<span className="font-medium">
													Sabtu - Minggu:
												</span>{" "}
												09:00 - 14:00
											</p>
											<p className="text-sm mt-2 opacity-90">
												*WhatsApp 24 jam siap melayani
												Anda
											</p>
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
