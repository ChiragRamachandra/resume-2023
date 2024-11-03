import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const products = [
	{
		id: 1,
		title: 'StartDev',
		description:
			'An open-source learning platform helping developers kickstart their journey with free resources and curated content.',
		icon: '/icons/startdev-icon.png',
		url: 'https://www.startdev.org',
	},
	{
		id: 2,
		title: 'SplitsBill',
		description:
			'Simplify group expenses and bill splitting with our intuitive expense sharing solution.',
		icon: '/icons/splitsbill-icon.png',
		url: 'https://splitsbill.com',
	},
	{
		id: 3,
		title: 'CodeFlowJam',
		description:
			'Enhance your coding workflow with our developer-focused productivity tools.',
		icon: '/icons/codeflowjam-icon.png',
		url: 'https://www.codeflowjam.com',
	},
	{
		id: 4,
		title: 'Sales Tax Calculator',
		description:
			'Instantly calculate sales tax, income tax, or VAT with our user-friendly calculator app. Features include tip calculation and multiple tax options.',
		icon: '/icons/tax-calculator-icon.png',
		stores: {
			apple: 'https://apps.apple.com/us/app/sales-tax-calculator/id6737439748',
			android:
				'https://play.google.com/store/apps/details?id=com.chiragramachandra.taxcalculator',
		},
	},
];

export default function ProductsPage() {
	return (
		<div className='container mx-auto py-12 px-4'>
			<div className='text-center mb-16'>
				<h1 className='text-4xl font-bold text-primary mb-4'>My Products</h1>
				<p className='text-xl text-muted-foreground'>
					Explore my collection of apps and tools designed to make your life
					easier
				</p>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
				{products.map((product) => (
					<Card
						key={product.id}
						className='group hover:-translate-y-2 transition-transform duration-200'
					>
						<CardHeader>
							<div className='w-16 h-16 mb-4'>
								<Image
									src={product.icon}
									alt={`${product.title} icon`}
									width={64}
									height={64}
									className='object-contain'
								/>
							</div>
							<CardTitle className='text-2xl font-bold text-primary'>
								{product.title}
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p className='text-muted-foreground mb-6'>
								{product.description}
							</p>
							<div className='flex gap-4'>
								{product.url ? (
									<Link href={product.url} target='_blank'>
										<Button>Visit Website</Button>
									</Link>
								) : (
									<div className='flex gap-4'>
										{product.stores && product.stores.apple && (
											<Link href={product.stores.apple} target='_blank'>
												<Image
													src='/images/app-store-badge.png'
													alt='Download on App Store'
													width={120}
													height={40}
													className='h-10 w-auto'
												/>
											</Link>
										)}
										{product.stores && (
											<Link href={product.stores.android} target='_blank'>
												<Image
													src='/images/play-store-badge.png'
													alt='Get it on Google Play'
													width={135}
													height={40}
													className='h-10 w-auto'
												/>
											</Link>
										)}
									</div>
								)}
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
}
