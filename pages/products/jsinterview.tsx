import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Globe, Sparkles, ExternalLink, Check } from 'lucide-react';
import Link from 'next/link';
import { Code, BookOpen, Layers, MessageSquare, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function JSInterviewPage() {
	return (
		<Layout>
			<div className='min-h-screen bg-gradient-to-b from-background via-background to-background/50 w-full '>
				{/* Hero Section with animated gradient */}
				<div className='relative overflow-hidden'>
					<div className='absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,black)] dark:bg-grid-dark/10' />
					<div className='absolute inset-0 bg-gradient-to-r from-amber-600/70 via-yellow-500/80 to-amber-600/30 animate-gradient-xy' />
					<div className='container relative pt-20 pb-32'>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className='max-w-3xl mx-auto text-center'
						>
							<Badge className='mb-6 px-4 py-2 text-base bg-primary/10 hover:bg-primary/20 transition-colors cursor-pointer'>
								<Sparkles className='w-4 h-4 mr-2' />
								Interview Preparation
							</Badge>
							<h1 className='text-5xl md:text-7xl font-bold bg-clip-text text-transparent text-black dark:text-white'>
								JS Interview Prep
							</h1>
							<p className='text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8'>
								Master JavaScript concepts with hands-on practice and
								interactive challenges to ace your technical interviews.
							</p>
							<div className='flex flex-wrap gap-4 justify-center'>
								<Link href='https://jsinterview.tech' target='_blank'>
									<Button
										size='lg'
										className='gap-2 bg-gradient-to-r from-amber-600 to-yellow-500 hover:from-amber-700 hover:to-yellow-600 transition-all duration-300'
									>
										Visit Website <Globe className='w-4 h-4' />
									</Button>
								</Link>
								<Button
									variant='outline'
									size='lg'
									className='gap-2 border-amber-600/50 hover:bg-amber-600/10 transition-all duration-300'
								>
									Explore Features <ExternalLink className='w-4 h-4' />
								</Button>
							</div>
						</motion.div>
					</div>
				</div>

				{/* Key Features Section */}
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
								Comprehensive Learning
							</Badge>
							<h2 className='text-3xl font-bold mb-4'>
								Everything You Need to Succeed
							</h2>
							<p className='text-muted-foreground max-w-2xl mx-auto'>
								JSInterview.tech provides all the tools and resources you need
								to prepare for JavaScript technical interviews.
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
								<div className='w-12 h-12 rounded-full bg-gradient-to-br from-amber-600 to-yellow-500 flex items-center justify-center text-white font-bold mb-4'>
									<Code className='w-6 h-6' />
								</div>
								<h3 className='text-xl font-semibold mb-2'>
									Interactive Coding
								</h3>
								<p className='text-muted-foreground'>
									Practice with our live code editor featuring instant feedback
									and detailed explanations.
								</p>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: 0.2 }}
								className='p-6 rounded-xl bg-background border border-primary/10 hover:border-primary/30 transition-all duration-300'
							>
								<div className='w-12 h-12 rounded-full bg-gradient-to-br from-amber-600 to-yellow-500 flex items-center justify-center text-white font-bold mb-4'>
									<Layers className='w-6 h-6' />
								</div>
								<h3 className='text-xl font-semibold mb-2'>
									Structured Learning
								</h3>
								<p className='text-muted-foreground'>
									Follow our curated curriculum from fundamentals to advanced
									concepts and algorithms.
								</p>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: 0.3 }}
								className='p-6 rounded-xl bg-background border border-primary/10 hover:border-primary/30 transition-all duration-300'
							>
								<div className='w-12 h-12 rounded-full bg-gradient-to-br from-amber-600 to-yellow-500 flex items-center justify-center text-white font-bold mb-4'>
									<MessageSquare className='w-6 h-6' />
								</div>
								<h3 className='text-xl font-semibold mb-2'>
									Interview Simulation
								</h3>
								<p className='text-muted-foreground'>
									Practice with real interview questions and timed challenges
									from top tech companies.
								</p>
							</motion.div>
						</div>
					</div>
				</section>

				{/* Content Tabs Section */}
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
								Comprehensive Content
							</Badge>
							<h2 className='text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-yellow-500'>
								Master Every Aspect of JS Interviews
							</h2>
							<p className='text-muted-foreground max-w-2xl mx-auto'>
								Our platform covers all the essential topics you need to succeed
								in JavaScript technical interviews.
							</p>
						</motion.div>

						<div className='max-w-4xl mx-auto'>
							<Tabs defaultValue='concepts' className='w-full'>
								<TabsList className='grid w-full grid-cols-4'>
									<TabsTrigger value='concepts'>Core Concepts</TabsTrigger>
									<TabsTrigger value='datastructures'>
										Data Structures
									</TabsTrigger>
									<TabsTrigger value='algorithms'>Algorithms</TabsTrigger>
									<TabsTrigger value='system'>System Design</TabsTrigger>
								</TabsList>
								<TabsContent
									value='concepts'
									className='mt-6 p-6 rounded-xl bg-background/50 backdrop-blur-sm border border-primary/10'
								>
									<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
										<div>
											<h3 className='text-xl font-semibold mb-4'>
												JavaScript Fundamentals
											</h3>
											<ul className='space-y-2'>
												{jsConceptsList.map((item, index) => (
													<li
														key={index}
														className='flex items-center gap-2 text-muted-foreground'
													>
														<Check className='w-5 h-5 text-amber-500' />
														{item}
													</li>
												))}
											</ul>
										</div>
										<div className='bg-gradient-to-br from-amber-600/10 to-yellow-500/10 p-6 rounded-xl'>
											<h4 className='font-semibold mb-2'>Why This Matters:</h4>
											<p className='text-muted-foreground'>
												Strong fundamentals are the foundation of any successful
												JavaScript interview. Our comprehensive coverage ensures
												you understand the language at a deep level, allowing
												you to tackle complex problems with confidence.
											</p>
										</div>
									</div>
								</TabsContent>
								<TabsContent
									value='datastructures'
									className='mt-6 p-6 rounded-xl bg-background/50 backdrop-blur-sm border border-primary/10'
								>
									<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
										<div>
											<h3 className='text-xl font-semibold mb-4'>
												Essential Data Structures
											</h3>
											<ul className='space-y-2'>
												{dataStructuresList.map((item, index) => (
													<li
														key={index}
														className='flex items-center gap-2 text-muted-foreground'
													>
														<Check className='w-5 h-5 text-amber-500' />
														{item}
													</li>
												))}
											</ul>
										</div>
										<div className='bg-gradient-to-br from-amber-600/10 to-yellow-500/10 p-6 rounded-xl'>
											<h4 className='font-semibold mb-2'>
												Implementation Focus:
											</h4>
											<p className='text-muted-foreground'>
												Learn how to implement and use these data structures in
												JavaScript. Our interactive code editor allows you to
												practice building these structures from scratch and
												understand their time/space complexity.
											</p>
										</div>
									</div>
								</TabsContent>
								<TabsContent
									value='algorithms'
									className='mt-6 p-6 rounded-xl bg-background/50 backdrop-blur-sm border border-primary/10'
								>
									<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
										<div>
											<h3 className='text-xl font-semibold mb-4'>
												Algorithm Techniques
											</h3>
											<ul className='space-y-2'>
												{algorithmsList.map((item, index) => (
													<li
														key={index}
														className='flex items-center gap-2 text-muted-foreground'
													>
														<Check className='w-5 h-5 text-amber-500' />
														{item}
													</li>
												))}
											</ul>
										</div>
										<div className='bg-gradient-to-br from-amber-600/10 to-yellow-500/10 p-6 rounded-xl'>
											<h4 className='font-semibold mb-2'>
												Problem-Solving Approach:
											</h4>
											<p className='text-muted-foreground'>
												We teach you how to recognize problem patterns and apply
												the right algorithmic techniques. Practice with our
												curated collection of problems that mirror real
												interview questions from top tech companies.
											</p>
										</div>
									</div>
								</TabsContent>
								<TabsContent
									value='system'
									className='mt-6 p-6 rounded-xl bg-background/50 backdrop-blur-sm border border-primary/10'
								>
									<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
										<div>
											<h3 className='text-xl font-semibold mb-4'>
												System Design & Architecture
											</h3>
											<ul className='space-y-2'>
												{systemDesignList.map((item, index) => (
													<li
														key={index}
														className='flex items-center gap-2 text-muted-foreground'
													>
														<Check className='w-5 h-5 text-amber-500' />
														{item}
													</li>
												))}
											</ul>
										</div>
										<div className='bg-gradient-to-br from-amber-600/10 to-yellow-500/10 p-6 rounded-xl'>
											<h4 className='font-semibold mb-2'>
												Frontend Architecture:
											</h4>
											<p className='text-muted-foreground'>
												Learn how to design scalable frontend applications and
												discuss architectural decisions confidently. Our system
												design section focuses on JavaScript-specific
												considerations for building robust web applications.
											</p>
										</div>
									</div>
								</TabsContent>
							</Tabs>
						</div>
					</div>
				</section>

				{/* Features Grid Section */}
				<section className='py-20 relative overflow-hidden'>
					<div className='absolute inset-0 bg-gradient-to-b from-amber-600/5 to-yellow-500/5' />
					<div className='container relative'>
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
							<h2 className='text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-yellow-500'>
								Tools to Accelerate Your Learning
							</h2>
							<p className='text-muted-foreground max-w-2xl mx-auto'>
								Our platform offers everything you need to prepare effectively
								for JavaScript interviews
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
									<div className='w-12 h-12 rounded-lg bg-gradient-to-br from-amber-600/20 to-yellow-500/20 flex items-center justify-center mb-4'>
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

				{/* Testimonial/Success Stories Section */}
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
									Why jsinterview.tech?
								</Badge>
								<h2 className='text-3xl font-bold mb-4'>
									From Practice to Job Offers
								</h2>
							</div>

							<div className='p-8 rounded-2xl bg-background/80 backdrop-blur-sm border border-primary/10'>
								<p className='text-lg mb-4 text-left'>
									jsinterview.tech was created to address a common challenge:
									the gap between theoretical JavaScript knowledge and the
									practical application skills needed in technical interviews.
								</p>
								<p className='text-lg mb-4 text-left'>
									Our platform combines structured learning paths with hands-on
									practice, allowing you to not just memorize concepts but truly
									understand them. The interactive code editor lets you
									implement solutions in real-time, reinforcing your learning
									through practical application.
								</p>
								<p className='text-lg text-left'>
									Whether you are preparing for your first developer role or
									aiming for a position at a top tech company, our comprehensive
									curriculum covers everything from JavaScript fundamentals to
									advanced algorithms and system design concepts.
								</p>
							</div>
						</motion.div>
					</div>
				</section>

				{/* Interactive CTA Section */}
				<section className='py-20 relative overflow-hidden'>
					<div className='absolute inset-0 bg-gradient-to-t from-amber-600/5 to-transparent' />
					<div className='container relative'>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className='max-w-3xl mx-auto text-center p-8 rounded-2xl bg-gradient-to-r from-amber-600/10 via-yellow-500/10 to-amber-600/10 border border-primary/20'
						>
							<h2 className='text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600'>
								Ready to ace your JavaScript interview?
							</h2>
							<p className='text-xl text-muted-foreground mb-8'>
								Start practicing today and build the confidence you need to
								succeed in your next technical interview.
							</p>
							<div className='flex flex-wrap gap-4 justify-center'>
								<Link href='https://jsinterview.tech' target='_blank'>
									<Button
										size='lg'
										className='gap-2 bg-gradient-to-r from-amber-600 to-yellow-500 hover:from-amber-700 hover:to-yellow-600 transition-all duration-300 group'
									>
										Start Practicing Now
										<ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
									</Button>
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
		title: 'Interactive Code Editor',
		description:
			'Practice coding in our live JavaScript editor WITHOUT syntax highlighting and real-time execution.',
		icon: <Terminal className='w-6 h-6 text-primary' />,
	},
	{
		title: 'Concept Explanations',
		description:
			'Clear, concise explanations of JavaScript concepts with practical examples and use cases.',
		icon: <BookOpen className='w-6 h-6 text-primary' />,
	},

	{
		title: 'Interview Strategies',
		description:
			'Learn effective communication techniques and problem-solving approaches for technical interviews.',
		icon: <MessageSquare className='w-6 h-6 text-primary' />,
	},
];

const jsConceptsList = [
	'Closures & Scope',
	'Prototypes & Inheritance',
	'Async JavaScript (Promises, async/await)',
	'Event Loop & Execution Context',
	'ES6+ Features',
	'Functional Programming Concepts',
];

const dataStructuresList = [
	'Arrays & Objects',
	'Maps & Sets',
	'Linked Lists',
	'Stacks & Queues',
	'Trees & Graphs',
	'Hash Tables',
];

const algorithmsList = [
	'Searching & Sorting',
	'Dynamic Programming',
	'Recursion',
	'Greedy Algorithms',
	'Backtracking',
	'Graph Traversal',
];

const systemDesignList = [
	'Frontend Architecture',
	'State Management',
	'Component Design',
	'Performance Optimization',
	'API Design',
	'Scalability Considerations',
];
