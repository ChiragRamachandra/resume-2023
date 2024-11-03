import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Github, Globe, Star, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Code, Library, LineChart, Rocket, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function StartDevPage() {
	return (
		<div className='min-h-screen bg-gradient-to-b from-background via-background to-background/50'>
			{/* Hero Section with animated gradient */}
			<div className='relative overflow-hidden'>
				<div className='absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,black)] dark:bg-grid-dark/10' />
				<div className='absolute inset-0 bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30 animate-gradient-xy' />
				<div className='container relative pt-20 pb-32'>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						<Badge className='mb-6 px-4 py-2 text-base bg-primary/10 hover:bg-primary/20 transition-colors cursor-pointer'>
							<Sparkles className='w-4 h-4 mr-2' />
							Open Source Learning Platform
						</Badge>
						<h1 className='text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 mb-6'>
							StartDev
						</h1>
						<p className='text-xl md:text-2xl text-muted-foreground max-w-2xl mb-8'>
							Empowering developers to kickstart their journey with curated
							resources, interactive learning paths, and a supportive community.
						</p>
						<div className='flex flex-wrap gap-4'>
							<Link href='https://www.startdev.org' target='_blank'>
								<Button
									size='lg'
									className='gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition-all duration-300'
								>
									Visit Website <Globe className='w-4 h-4' />
								</Button>
							</Link>
							<Link
								href='https://github.com/yourusername/startdev'
								target='_blank'
							>
								<Button
									size='lg'
									variant='outline'
									className='gap-2 hover:bg-primary/10'
								>
									View Source <Github className='w-4 h-4' />
								</Button>
							</Link>
						</div>
					</motion.div>
				</div>
			</div>

			{/* Interactive Features Section */}
			<section className='py-20'>
				<div className='container'>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className='text-center mb-12'
					>
						<h2 className='text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500'>
							Everything you need to start learning
						</h2>
					</motion.div>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
						{features.map((feature, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
							>
								<div className='p-6 rounded-xl bg-background/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 group'>
									<div className='w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300'>
										{feature.icon}
									</div>
									<h3 className='text-xl font-semibold mb-2'>
										{feature.title}
									</h3>
									<p className='text-muted-foreground'>{feature.description}</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Interactive Stats Section */}
			<section className='py-20 relative overflow-hidden'>
				<div className='absolute inset-0 bg-gradient-to-b from-primary/5 to-primary/10' />
				<div className='container relative'>
					<div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
						{stats.map((stat, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, scale: 0.5 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								whileHover={{ scale: 1.05 }}
								className='text-center p-6 rounded-xl bg-background/50 backdrop-blur-sm border border-primary/10'
							>
								<div className='text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 mb-2'>
									{stat.value}
								</div>
								<div className='text-muted-foreground'>{stat.label}</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Interactive CTA Section */}
			<section className='py-20 relative overflow-hidden'>
				<div className='absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent' />
				<div className='container relative'>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className='max-w-3xl mx-auto text-center'
					>
						<h2 className='text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500'>
							Ready to start your development journey?
						</h2>
						<p className='text-xl text-muted-foreground mb-8'>
							Join thousands of developers learning and growing together on
							StartDev.
						</p>
						<Link href='https://www.startdev.org' target='_blank'>
							<Button
								size='lg'
								className='gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 group'
							>
								Get Started Now
								<ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
							</Button>
						</Link>
					</motion.div>
				</div>
			</section>
		</div>
	);
}

const features = [
	{
		title: 'Curated Learning Paths',
		description:
			'Structured paths for different technologies and skill levels, ensuring a clear progression.',
		icon: <Rocket className='w-6 h-6 text-primary' />,
	},
	{
		title: 'Interactive Tutorials',
		description:
			'Learn by doing with our hands-on tutorials and coding challenges.',
		icon: <Code className='w-6 h-6 text-primary' />,
	},
	{
		title: 'Community Support',
		description:
			'Connect with fellow developers, share knowledge, and grow together.',
		icon: <Users className='w-6 h-6 text-primary' />,
	},
	{
		title: 'Resource Library',
		description:
			'Access a vast collection of articles, videos, and documentation.',
		icon: <Library className='w-6 h-6 text-primary' />,
	},
	{
		title: 'Progress Tracking',
		description:
			'Monitor your learning journey with detailed progress analytics.',
		icon: <LineChart className='w-6 h-6 text-primary' />,
	},
	{
		title: 'Project-Based Learning',
		description: 'Build real-world projects to reinforce your knowledge.',
		icon: <Rocket className='w-6 h-6 text-primary' />,
	},
];

const stats = [
	{
		value: '10K+',
		label: 'Active Learners',
	},
	{
		value: '500+',
		label: 'Tutorials',
	},
	{
		value: '50+',
		label: 'Learning Paths',
	},
	{
		value: '100K+',
		label: 'Resources',
	},
];
