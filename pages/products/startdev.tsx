import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Globe, Sparkles, ExternalLink, Check } from 'lucide-react';
import Link from 'next/link';
import {
	Code,
	Library,
	LineChart,
	Rocket,
	Brain,
	BookOpen,
	Zap,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Layout } from '@/components/Layout';

export default function StartDevPage() {
	return (
		<Layout>
			<div className='min-h-screen bg-gradient-to-b from-background via-background to-background/50 w-full '>
				{/* Hero Section with animated gradient */}
				<div className='relative overflow-hidden'>
					<div className='absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,black)] dark:bg-grid-dark/10' />
					<div className='absolute inset-0 bg-gradient-to-r from-purple-600/70 via-pink-500/80 to-purple-600/30 animate-gradient-xy' />
					<div className='container relative pt-20 pb-32'>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className='max-w-3xl mx-auto text-center'
						>
							<Badge className='mb-6 px-4 py-2 text-base bg-primary/10 hover:bg-primary/20 transition-colors cursor-pointer'>
								<Sparkles className='w-4 h-4 mr-2' />
								Video-Based Learning Platform
							</Badge>
							<h1 className='text-5xl md:text-7xl font-bold bg-clip-text text-transparent text-black dark:text-white'>
								StartDev
							</h1>
							<p className='text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8'>
								Curated video lessons from YouTube, organized into structured
								learning paths to help you master development skills
								efficiently.
							</p>
							<div className='flex flex-wrap gap-4 justify-center'>
								<Link href='https://www.startdev.org' target='_blank'>
									<Button
										size='lg'
										className='gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300'
									>
										Visit Website <Globe className='w-4 h-4' />
									</Button>
								</Link>
								<Button
									variant='outline'
									size='lg'
									className='gap-2 border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300'
								>
									Explore Lessons <ExternalLink className='w-4 h-4' />
								</Button>
							</div>
						</motion.div>
					</div>
				</div>

				{/* Testimonials Section */}
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
								Simple & Effective
							</Badge>
							<h2 className='text-3xl font-bold mb-4'>How StartDev Works</h2>
							<p className='text-muted-foreground max-w-2xl mx-auto'>
								We have simplified the learning process by curating the best
								educational videos from YouTube into structured lessons.
							</p>
						</motion.div>

						<div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto'>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: 0.1 }}
								className='p-6 rounded-xl bg-background border border-primary/10 hover:border-primary/30 transition-all duration-300'
							>
								<div className='w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold mb-4'>
									1
								</div>
								<h3 className='text-xl font-semibold mb-2'>Browse Topics</h3>
								<p className='text-muted-foreground'>
									Explore our collection of curated topics across various
									programming languages and technologies.
								</p>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: 0.2 }}
								className='p-6 rounded-xl bg-background border border-primary/10 hover:border-primary/30 transition-all duration-300'
							>
								<div className='w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold mb-4'>
									2
								</div>
								<h3 className='text-xl font-semibold mb-2'>Watch Lessons</h3>
								<p className='text-muted-foreground'>
									Learn from carefully selected video tutorials that provide
									clear explanations and practical examples.
								</p>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: 0.3 }}
								className='p-6 rounded-xl bg-background border border-primary/10 hover:border-primary/30 transition-all duration-300'
							>
								<div className='w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold mb-4'>
									3
								</div>
								<h3 className='text-xl font-semibold mb-2'>Track Progress</h3>
								<p className='text-muted-foreground'>
									Keep track of your learning journey as you complete lessons
									and master new skills.
								</p>
							</motion.div>
						</div>
					</div>
				</section>

				{/* Features Tabs Section */}
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
								Platform Features
							</Badge>
							<h2 className='text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500'>
								Learn development skills efficiently
							</h2>
							<p className='text-muted-foreground max-w-2xl mx-auto'>
								Our platform organizes the best educational content from YouTube
								into a structured learning experience.
							</p>
						</motion.div>

						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto'>
							{actualFeatures.map((feature, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									className='p-6 rounded-xl bg-background/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300'
								>
									<div className='w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-4'>
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

				{/* Pricing Section */}
				<section className='py-20 relative overflow-hidden'>
					<div className='absolute inset-0 bg-gradient-to-b from-purple-500/5 to-pink-500/5' />
					<div className='container relative'>
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
							className='text-center mb-12'
						>
							<Badge className='mb-4 px-3 py-1 text-sm bg-primary/10'>
								Free Learning Resources
							</Badge>
							<h2 className='text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500'>
								Popular Topics to Explore
							</h2>
							<p className='text-muted-foreground max-w-2xl mx-auto'>
								Dive into these popular development topics with our curated
								video lessons
							</p>
						</motion.div>

						<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto'>
							{popularTopics.map((topic, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									className='p-6 rounded-xl bg-background/80 backdrop-blur-sm border border-primary/10 hover:border-purple-500/30 hover:shadow-md transition-all duration-300'
								>
									<div className='w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-4'>
										{topic.icon}
									</div>
									<h3 className='text-xl font-semibold mb-2'>{topic.name}</h3>
									<p className='text-muted-foreground mb-4'>
										{topic.description}
									</p>
									<div className='text-sm text-purple-500'>
										{topic.videoCount} videos
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</section>

				{/* Interactive CTA Section */}
				<section className='py-20 relative overflow-hidden'>
					<div className='absolute inset-0 bg-gradient-to-t from-purple-500/5 to-transparent' />
					<div className='container relative'>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className='max-w-3xl mx-auto text-center p-8 rounded-2xl bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-600/10 border border-primary/20'
						>
							<h2 className='text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600'>
								Start learning today - completely free!
							</h2>
							<p className='text-xl text-muted-foreground mb-8'>
								Access our curated collection of video lessons and begin your
								development journey.
							</p>
							<div className='flex flex-wrap gap-4 justify-center'>
								<Link href='https://www.startdev.org' target='_blank'>
									<Button
										size='lg'
										className='gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 group'
									>
										Get Started Now
										<ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
									</Button>
								</Link>
								<Button
									variant='outline'
									size='lg'
									className='gap-2 border-purple-500/50 hover:bg-purple-500/10'
								>
									Browse Topics
								</Button>
							</div>
						</motion.div>
					</div>
				</section>
			</div>
		</Layout>
	);
}

const actualFeatures = [
	{
		title: 'Curated Video Lessons',
		description:
			'Handpicked educational videos from YouTube, organized into structured learning paths.',
		icon: <BookOpen className='w-6 h-6 text-primary' />,
	},
	{
		title: 'Multiple Technologies',
		description:
			'Learn web development, mobile apps, data science, and more through our diverse topic selection.',
		icon: <Code className='w-6 h-6 text-primary' />,
	},
	{
		title: 'Progress Tracking',
		description:
			'Keep track of completed lessons and monitor your learning journey.',
		icon: <LineChart className='w-6 h-6 text-primary' />,
	},
	{
		title: 'Beginner Friendly',
		description:
			'Start from the basics and progress at your own pace with our accessible content.',
		icon: <Rocket className='w-6 h-6 text-primary' />,
	},
	{
		title: 'Completely Free',
		description:
			'Access all content without any payment or subscription required.',
		icon: <Zap className='w-6 h-6 text-primary' />,
	},
	{
		title: 'Regular Updates',
		description:
			'New content and topics are added regularly to keep up with the latest technologies.',
		icon: <Library className='w-6 h-6 text-primary' />,
	},
];

const popularTopics = [
	{
		name: 'JavaScript Fundamentals',
		description: 'Master the basics of JavaScript programming',
		videoCount: '24',
		icon: <Code className='w-6 h-6 text-primary' />,
	},
	{
		name: 'Web Development',
		description: 'Create responsive websites with HTML, CSS & JS',
		videoCount: '36',
		icon: <Library className='w-6 h-6 text-primary' />,
	},
	{
		name: 'Interview Questions',
		description: 'Prepare for technical interviews with our curated questions',
		videoCount: '100',
		icon: <Brain className='w-6 h-6 text-primary' />,
	},
];
