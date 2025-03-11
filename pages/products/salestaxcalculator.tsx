import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Sparkles, ExternalLink, Check } from 'lucide-react';
import Link from 'next/link';
import {
	Calculator,
	Percent,
	CreditCard,
	DollarSign,
	Smartphone,
	ShieldCheck,
	Zap,
	Receipt,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Layout } from '@/components/Layout';
import Image from 'next/image';

export default function SalesTaxCalculatorPage() {
	return (
		<Layout>
			<div className='min-h-screen bg-gradient-to-b from-background via-background to-background/50 w-full '>
				{/* Hero Section with animated gradient */}
				<div className='relative overflow-hidden'>
					<div className='absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,black)] dark:bg-grid-dark/10' />
					<div className='absolute inset-0 bg-gradient-to-r from-emerald-600/70 via-teal-500/80 to-emerald-600/30 animate-gradient-xy' />
					<div className='container relative pt-20 pb-32'>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className='max-w-3xl mx-auto text-center'
						>
							<Badge className='mb-6 px-4 py-2 text-base bg-primary/10 hover:bg-primary/20 transition-colors cursor-pointer'>
								<Sparkles className='w-4 h-4 mr-2' />
								Mobile App
							</Badge>
							<h1 className='text-5xl md:text-7xl font-bold bg-clip-text text-transparent text-black dark:text-white'>
								Sales Tax Calculator
							</h1>
							<p className='text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8'>
								Instantly calculate sales tax, income tax, or VAT with our
								user-friendly calculator app for iOS and Android.
							</p>
							<div className='flex flex-wrap gap-4 justify-center'>
								<Link
									href='https://apps.apple.com/us/app/sales-tax-calculator/id6737439748'
									target='_blank'
								>
									<Image
										src='/icons/apple-store.svg'
										alt='Download on App Store'
										width={130}
										height={44}
										className='h-11 w-auto'
									/>
								</Link>
								<Link
									href='https://play.google.com/store/apps/details?id=com.chiragramachandra.taxcalculator'
									target='_blank'
								>
									<Image
										src='/icons/play-store.png'
										alt='Get it on Google Play'
										width={146}
										height={44}
										className='h-11 w-auto'
									/>
								</Link>
							</div>
						</motion.div>
					</div>
				</div>

				{/* App Screenshots Section */}
				<section className='py-16 bg-gradient-to-b from-background/50 to-background'>
					<div className='container'>
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
							className='text-center mb-12'
						>
							<Badge className='mb-4 px-3 py-1 text-sm bg-primary/10'>
								Simple & Intuitive
							</Badge>
							<h2 className='text-3xl font-bold mb-4'>
								Calculate Your Total with Ease
							</h2>
							<p className='text-muted-foreground max-w-2xl mx-auto'>
								Our user-friendly interface makes tax calculations quick and
								hassle-free for any situation.
							</p>
						</motion.div>

						<div className='flex flex-wrap justify-center gap-8 max-w-5xl mx-auto'>
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: 0.1 }}
								className='relative w-64 h-[500px] rounded-3xl overflow-hidden border-8 border-background shadow-xl'
							>
								<Image
									src='/images/products/salestax.png'
									alt='Sales Tax Calculator Screenshot'
									fill
									className='object-cover'
								/>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: 0.2 }}
								className='relative w-64 h-[500px] rounded-3xl overflow-hidden border-8 border-background shadow-xl'
							>
								<Image
									src='/images/products/salestax-1.webp'
									alt='Sales Tax Calculator Screenshot'
									fill
									className='object-cover'
								/>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, x: 20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: 0.3 }}
								className='relative w-64 h-[500px] rounded-3xl overflow-hidden border-8 border-background shadow-xl'
							>
								<Image
									src='/images/products/salestax-2.webp'
									alt='Sales Tax Calculator Screenshot'
									fill
									className='object-cover'
								/>
							</motion.div>
						</div>
					</div>
				</section>

				{/* Key Features Section */}
				<section className='py-20'>
					<div className='container'>
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
							className='text-center mb-12'
						>
							<Badge className='mb-4 px-3 py-1 text-sm bg-primary/10'>
								App Features
							</Badge>
							<h2 className='text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-500'>
								Everything You Need in a Tax Calculator
							</h2>
							<p className='text-muted-foreground max-w-2xl mx-auto'>
								Our app combines powerful features with a simple interface to
								make tax calculations effortless.
							</p>
						</motion.div>

						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto'>
							{features.map((feature, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									className='p-6 rounded-xl bg-background/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300'
								>
									<div className='w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-600/20 to-teal-500/20 flex items-center justify-center mb-4'>
										{feature.icon}
									</div>
									<h3 className='text-xl font-semibold mb-2'>
										{feature.title}
									</h3>
									<p className='text-muted-foreground'>{feature.description}</p>
								</motion.div>
							))}
						</div>
					</div>
				</section>

				{/* Use Cases Section */}
				<section className='py-20 relative overflow-hidden'>
					<div className='absolute inset-0 bg-gradient-to-b from-emerald-600/5 to-teal-500/5' />
					<div className='container relative'>
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
							className='text-center mb-12'
						>
							<Badge className='mb-4 px-3 py-1 text-sm bg-primary/10'>
								Perfect For
							</Badge>
							<h2 className='text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-500'>
								Who Benefits from Sales Tax Calculator?
							</h2>
							<p className='text-muted-foreground max-w-2xl mx-auto'>
								Our app is designed for anyone who needs quick and accurate tax
								calculations
							</p>
						</motion.div>

						<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto'>
							{useCases.map((useCase, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									className='p-6 rounded-xl bg-background/80 backdrop-blur-sm border border-primary/10 hover:border-emerald-600/30 hover:shadow-md transition-all duration-300'
								>
									<div className='w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-600/20 to-teal-500/20 flex items-center justify-center mb-4'>
										{useCase.icon}
									</div>
									<h3 className='text-xl font-semibold mb-2'>{useCase.name}</h3>
									<p className='text-muted-foreground mb-4'>
										{useCase.description}
									</p>
								</motion.div>
							))}
						</div>
					</div>
				</section>

				{/* Privacy Section */}
				<section className='py-16 bg-gradient-to-b from-background/50 to-background'>
					<div className='container'>
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
							className='max-w-4xl mx-auto'
						>
							<div className='text-center mb-8'>
								<Badge className='mb-4 px-3 py-1 text-sm bg-primary/10'>
									Privacy First
								</Badge>
								<h2 className='text-3xl font-bold mb-4'>
									Your Data Stays on Your Device
								</h2>
							</div>

							<div className='p-8 rounded-2xl bg-background/80 backdrop-blur-sm border border-primary/10'>
								<div className='flex items-center justify-center mb-6'>
									<ShieldCheck className='w-16 h-16 text-emerald-600' />
								</div>
								<p className='text-lg mb-4 text-center'>
									We take your privacy seriously. The Sales Tax Calculator app
									does not collect or store any of your personal data.
								</p>
								<p className='text-lg mb-4 text-center'>
									All calculations are performed locally on your device, and no
									information is sent to external servers. You can use our app
									with complete peace of mind knowing that your financial
									information remains private.
								</p>
								<div className='flex justify-center mt-6'>
									<Link href='/privacy-policy'>
										<Button
											variant='outline'
											className='border-emerald-600/30 hover:bg-emerald-600/10'
										>
											View Privacy Policy
										</Button>
									</Link>
								</div>
							</div>
						</motion.div>
					</div>
				</section>

				{/* Download CTA Section */}
				<section className='py-20 relative overflow-hidden'>
					<div className='absolute inset-0 bg-gradient-to-t from-emerald-600/5 to-transparent' />
					<div className='container relative'>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className='max-w-3xl mx-auto text-center p-8 rounded-2xl bg-gradient-to-r from-emerald-600/10 via-teal-500/10 to-emerald-600/10 border border-primary/20'
						>
							<h2 className='text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600'>
								Download Sales Tax Calculator Today
							</h2>
							<p className='text-xl text-muted-foreground mb-8'>
								Available for free on iOS and Android devices. No ads, no in-app
								purchases, just a simple and effective tool.
							</p>
							<div className='flex flex-wrap gap-4 justify-center'>
								<Link
									href='https://apps.apple.com/us/app/sales-tax-calculator/id6737439748'
									target='_blank'
								>
									<Image
										src='/icons/apple-store.svg'
										alt='Download on App Store'
										width={130}
										height={44}
										className='h-11 w-auto'
									/>
								</Link>
								<Link
									href='https://play.google.com/store/apps/details?id=com.chiragramachandra.taxcalculator'
									target='_blank'
								>
									<Image
										src='/icons/play-store.png'
										alt='Get it on Google Play'
										width={146}
										height={44}
										className='h-11 w-auto'
									/>
								</Link>
							</div>
						</motion.div>
					</div>
				</section>
			</div>
		</Layout>
	);
}

const features = [
	{
		title: 'Instant Calculations',
		description:
			'Get immediate results as you input values, with no delay or complicated steps.',
		icon: <Zap className='w-6 h-6 text-primary' />,
	},
	{
		title: 'Multiple Tax Types',
		description:
			'Support for sales tax, income tax, and VAT to handle any calculation need.',
		icon: <Percent className='w-6 h-6 text-primary' />,
	},
	{
		title: 'Tip Calculator',
		description:
			'Add a tip to your bill and see the final total with both tax and gratuity included.',
		icon: <CreditCard className='w-6 h-6 text-primary' />,
	},
	{
		title: 'User-Friendly Interface',
		description:
			'Clean, intuitive design makes calculations quick and easy for anyone to use.',
		icon: <Smartphone className='w-6 h-6 text-primary' />,
	},
	{
		title: 'No Ads or In-App Purchases',
		description:
			'Completely free to use with no distracting advertisements or hidden costs.',
		icon: <DollarSign className='w-6 h-6 text-primary' />,
	},
	{
		title: 'Privacy Focused',
		description:
			'No data collection or tracking - all calculations stay on your device.',
		icon: <ShieldCheck className='w-6 h-6 text-primary' />,
	},
];

const useCases = [
	{
		name: 'Shoppers',
		description:
			'Quickly calculate the final price of items including sales tax before checkout',
		icon: <Calculator className='w-6 h-6 text-primary' />,
	},
	{
		name: 'Small Business Owners',
		description:
			'Easily determine tax amounts for invoices, receipts, and financial planning',
		icon: <Receipt className='w-6 h-6 text-primary' />,
	},
	{
		name: 'Travelers',
		description:
			'Calculate different tax rates when shopping in various states or countries',
		icon: <DollarSign className='w-6 h-6 text-primary' />,
	},
];
