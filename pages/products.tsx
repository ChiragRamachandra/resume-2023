import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import products from '@/data/products';
import { Layout } from '@/components/Layout';
import { motion } from 'framer-motion';

export default function ProductsPage() {
	return (
		<Layout>
			<div className='relative min-h-screen bg-gradient-to-b from-background to-background/80'>
				{/* Colorful background elements */}
				<div className='absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none' />
				<div className='absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full filter blur-[120px] opacity-30' />
				<div className='absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/10 rounded-full filter blur-[120px] opacity-30' />

				<div className='container relative z-10 mx-auto py-20 px-4 max-w-6xl'>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className='text-center mb-16'
					>
						<div className='inline-block mb-6'>
							<span className='bg-clip-text bg-gradient-to-r from-primary to-secondary text-4xl md:text-6xl font-bold'>
								My Products
							</span>
						</div>
						<p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
							Explore my collection of apps and tools designed to make life
							easier
						</p>
					</motion.div>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
						{products.map((product, index) => {
							// Generate a unique gradient for each product
							const gradients = [
								'from-blue-500/80 to-purple-500/80',
								'from-emerald-500/80 to-cyan-500/80',
								'from-orange-500/80 to-pink-500/80',
								'from-indigo-500/80 to-sky-500/80',
							];
							const gradient = gradients[index % gradients.length];

							return (
								<motion.div
									key={product.id}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
								>
									<Card
										className='group relative h-full flex flex-col overflow-hidden bg-background/50 border border-border/5
									dark:border-border/10 dark:border-gray-700
									hover:border-border/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 '
									>
										{/* Colorful top border */}
										<div
											className={`h-4 w-full bg-gradient-to-r ${gradient}`}
										/>

										<CardHeader className='pb-6'>
											<div className='flex flex-col items-center text-center'>
												<div
													className={`mb-5 p-4 rounded-2xl bg-gradient-to-br ${gradient} backdrop-blur-sm`}
												>
													<Image
														src={product.icon}
														alt={`${product.title} icon`}
														width={56}
														height={56}
														className='rounded-xl'
													/>
												</div>
												<CardTitle className='text-2xl font-semibold mb-2'>
													{product.title}
												</CardTitle>
												<p className='text-muted-foreground text-sm'>
													{product.description}
												</p>
											</div>
										</CardHeader>

										<CardContent className='pt-6 mt-auto border-t border-border/20 dark:border-border/10 dark:border-gray-700'>
											<div className='flex flex-col gap-4'>
												<div
													className={`${
														product.stores
															? 'flex justify-center'
															: 'grid grid-cols-2 gap-3'
													}`}
												>
													<Link href={`/products/${product.productUrl}`}>
														<Button
															variant='default'
															className={`${
																product.stores ? 'w-auto px-6' : 'w-full'
															} font-medium transform transition-transform hover:translate-y-[-2px] heroButton`}
														>
															Learn More
															<ArrowRight className='w-4 h-4 ml-2 opacity-70' />
														</Button>
													</Link>
													{!product.stores && product.url && (
														<Link href={product.url} target='_blank'>
															<Button
																variant='outline'
																className='w-full font-medium border-border/80 hover:bg-accent/5'
															>
																Website
																<ExternalLink className='w-4 h-4 ml-2 opacity-70' />
															</Button>
														</Link>
													)}
												</div>

												{product.stores && (
													<div className='flex items-center gap-4 justify-center pt-2'>
														{product.stores.apple && (
															<Link
																href={product.stores.apple}
																target='_blank'
																className='transition-transform hover:scale-105'
															>
																<Image
																	src='/icons/apple-store.svg'
																	alt='Download on App Store'
																	width={130}
																	height={44}
																	className='h-11 w-auto'
																/>
															</Link>
														)}
														{product.stores.android && (
															<Link
																href={product.stores.android}
																target='_blank'
																className='transition-transform hover:scale-105'
															>
																<Image
																	src='/icons/play-store.png'
																	alt='Get it on Google Play'
																	width={146}
																	height={44}
																	className='h-11 w-auto'
																/>
															</Link>
														)}
													</div>
												)}
											</div>
										</CardContent>
									</Card>
								</motion.div>
							);
						})}
					</div>
				</div>
			</div>

			<style jsx global>{`
				.bg-grid-pattern {
					background-image: linear-gradient(
							to right,
							rgb(var(--foreground) / 0.05) 1px,
							transparent 1px
						),
						linear-gradient(
							to bottom,
							rgb(var(--foreground) / 0.05) 1px,
							transparent 1px
						);
					background-size: 24px 24px;
				}
			`}</style>
		</Layout>
	);
}
