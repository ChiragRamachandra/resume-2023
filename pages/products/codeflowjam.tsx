import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Globe, Sparkles, ExternalLink, Check } from 'lucide-react';
import Link from 'next/link';
import {
	Code,
	Clock,
	ListTodo,
	Music,
	Focus,
	Zap,
	Brain,
	TimerReset,
	Video,
	CheckCircle,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Layout } from '@/components/Layout';

export default function CodeFlowJamPage() {
	return (
		<Layout>
			<div className='min-h-screen bg-gradient-to-b from-background via-background to-background/50 w-full '>
				{/* Hero Section with animated gradient */}
				<div className='relative overflow-hidden'>
					<div className='absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,black)] dark:bg-grid-dark/10' />
					<div className='absolute inset-0 bg-gradient-to-r from-indigo-800/70 via-purple-700/80 to-indigo-800/30 animate-gradient-xy' />
					<div className='container relative pt-20 pb-32'>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className='max-w-3xl mx-auto text-center'
						>
							<Badge className='mb-6 px-4 py-2 text-base bg-primary/10 hover:bg-primary/20 transition-colors cursor-pointer'>
								<Sparkles className='w-4 h-4 mr-2' />
								Productivity Tool
							</Badge>
							<h1 className='text-5xl md:text-7xl font-bold bg-clip-text text-transparent text-black dark:text-white'>
								CodeFlowJam
							</h1>
							<p className='text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8'>
								Enhance your focus and productivity with customizable ambient
								sounds, pomodoro timer, and task management.
							</p>
							<div className='flex flex-wrap gap-4 justify-center'>
								<Link href='https://www.codeflowjam.com' target='_blank'>
									<Button
										size='lg'
										className='gap-2 bg-gradient-to-r from-indigo-700 to-purple-700 hover:from-indigo-800 hover:to-purple-800 transition-all duration-300'
									>
										Visit Website <Globe className='w-4 h-4' />
									</Button>
								</Link>
								<Button
									variant='outline'
									size='lg'
									className='gap-2 border-purple-700/50 hover:bg-purple-700/10 transition-all duration-300'
								>
									Learn More <ExternalLink className='w-4 h-4' />
								</Button>
							</div>
						</motion.div>
					</div>
				</div>

				{/* How It Works Section */}
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
							<h2 className='text-3xl font-bold mb-4'>How CodeFlowJam Works</h2>
							<p className='text-muted-foreground max-w-2xl mx-auto'>
								We have designed a distraction-free environment to help you
								achieve deep work and maintain focus throughout your day.
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
								<div className='w-12 h-12 rounded-full bg-gradient-to-br from-indigo-700 to-purple-700 flex items-center justify-center text-white font-bold mb-4'>
									1
								</div>
								<h3 className='text-xl font-semibold mb-2'>Set Your Timer</h3>
								<p className='text-muted-foreground'>
									Use the Pomodoro timer to structure your work sessions and
									breaks for optimal productivity.
								</p>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: 0.2 }}
								className='p-6 rounded-xl bg-background border border-primary/10 hover:border-primary/30 transition-all duration-300'
							>
								<div className='w-12 h-12 rounded-full bg-gradient-to-br from-indigo-700 to-purple-700 flex items-center justify-center text-white font-bold mb-4'>
									2
								</div>
								<h3 className='text-xl font-semibold mb-2'>
									Choose Your Ambience
								</h3>
								<p className='text-muted-foreground'>
									Select from various background sounds or add your own videos
									to create your ideal work environment.
								</p>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: 0.3 }}
								className='p-6 rounded-xl bg-background border border-primary/10 hover:border-primary/30 transition-all duration-300'
							>
								<div className='w-12 h-12 rounded-full bg-gradient-to-br from-indigo-700 to-purple-700 flex items-center justify-center text-white font-bold mb-4'>
									3
								</div>
								<h3 className='text-xl font-semibold mb-2'>Track Tasks</h3>
								<p className='text-muted-foreground'>
									Manage your to-do list and stay focused on your priorities
									throughout your work session.
								</p>
							</motion.div>
						</div>
					</div>
				</section>

				{/* Features Section */}
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
							<h2 className='text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-purple-700'>
								Boost your productivity and focus
							</h2>
							<p className='text-muted-foreground max-w-2xl mx-auto'>
								CodeFlowJam combines essential productivity tools in one
								distraction-free interface to help you achieve deep work.
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
									<div className='w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-700/20 to-purple-700/20 flex items-center justify-center mb-4'>
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
					<div className='absolute inset-0 bg-gradient-to-b from-indigo-800/5 to-purple-700/5' />
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
							<h2 className='text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-purple-700'>
								Who Benefits from CodeFlowJam?
							</h2>
							<p className='text-muted-foreground max-w-2xl mx-auto'>
								Designed for anyone who needs to maintain focus in distracting
								environments
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
									className='p-6 rounded-xl bg-background/80 backdrop-blur-sm border border-primary/10 hover:border-indigo-700/30 hover:shadow-md transition-all duration-300'
								>
									<div className='w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-700/20 to-purple-700/20 flex items-center justify-center mb-4'>
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

				{/* Origin Story Section */}
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
									The Story
								</Badge>
								<h2 className='text-3xl font-bold mb-4'>
									Why I Built CodeFlowJam
								</h2>
							</div>

							<div className='p-8 rounded-2xl bg-background/80 backdrop-blur-sm border border-primary/10'>
								<p className='text-lg mb-4 text-left'>
									I created CodeFlowJam to solve a personal challenge. With both
									my wife and I working from home, frequent calls throughout the
									day made it difficult to achieve deep work and maintain focus.
								</p>
								<p className='text-lg mb-4 text-left'>
									I needed a solution that would help me block out distractions,
									manage my time effectively, and stay on task despite
									interruptions. Since building CodeFlowJam, I have been able to
									significantly improve my focus and productivity.
								</p>
								<p className='text-lg text-left'>
									The tool combines ambient sounds, a Pomodoro timer, and task
									management in one distraction-free interface. There is no
									tracking or server calls made beyond counting active users.
									This is done to ensure adequate server capacity is allocated.
								</p>
							</div>
						</motion.div>
					</div>
				</section>

				{/* Interactive CTA Section */}
				<section className='py-20 relative overflow-hidden'>
					<div className='absolute inset-0 bg-gradient-to-t from-indigo-800/5 to-transparent' />
					<div className='container relative'>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className='max-w-3xl mx-auto text-center p-8 rounded-2xl bg-gradient-to-r from-indigo-800/10 via-purple-700/10 to-indigo-800/10 border border-primary/20'
						>
							<h2 className='text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-800'>
								Ready to boost your productivity?
							</h2>
							<p className='text-xl text-muted-foreground mb-8'>
								Start using CodeFlowJam today and experience the difference in
								your focus and work output.
							</p>
							<div className='flex flex-wrap gap-4 justify-center'>
								<Link href='https://www.codeflowjam.com' target='_blank'>
									<Button
										size='lg'
										className='gap-2 bg-gradient-to-r from-indigo-700 to-purple-700 hover:from-indigo-800 hover:to-purple-800 transition-all duration-300 group'
									>
										Try It Now
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
		title: 'Pomodoro Timer',
		description:
			'Structure your work with customizable time intervals for focused work and breaks.',
		icon: <Clock className='w-6 h-6 text-primary' />,
	},
	{
		title: 'Ambient Sounds',
		description:
			'Choose from a variety of background sounds to create your ideal work environment.',
		icon: <Music className='w-6 h-6 text-primary' />,
	},
	{
		title: 'Task Management',
		description:
			'Keep track of your to-do list and priorities right within your workspace.',
		icon: <ListTodo className='w-6 h-6 text-primary' />,
	},
	{
		title: 'Custom Video Background',
		description:
			'Add any YouTube video as your background for personalized ambient visuals and sounds.',
		icon: <Video className='w-6 h-6 text-primary' />,
	},
	{
		title: 'Distraction-Free Interface',
		description:
			'Minimalist design helps you stay focused on your work without unnecessary elements.',
		icon: <Focus className='w-6 h-6 text-primary' />,
	},
	{
		title: 'Privacy-Focused',
		description:
			'No tracking or unnecessary server calls - your data stays private and secure.',
		icon: <CheckCircle className='w-6 h-6 text-primary' />,
	},
];

const useCases = [
	{
		name: 'Remote Workers',
		description:
			'Create a focused environment when working from home with distractions',
		icon: <Code className='w-6 h-6 text-primary' />,
	},
	{
		name: 'Students',
		description:
			'Maintain concentration during study sessions in noisy environments',
		icon: <Brain className='w-6 h-6 text-primary' />,
	},
	{
		name: 'Professionals',
		description:
			'Block out office noise and interruptions to achieve deep work',
		icon: <Focus className='w-6 h-6 text-primary' />,
	},
];
