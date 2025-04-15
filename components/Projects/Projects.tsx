import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { getProjectData } from 'data';
import Link from 'next/link';
import { SubHeading } from '../SubHeading';

type Props = {};

const Projects = (props: Props) => {
	const allProjects = getProjectData();
	const [selectedProject, setSelectedProject] = useState(allProjects[0]);
	const [isLoaded, setIsLoaded] = useState(false);

	// Primary accent color
	const accentColor = '#F7AB0A';

	useEffect(() => {
		setIsLoaded(true);
	}, []);

	return (
		<div className='py-14 px-4 md:px-8 '>
			<div className='max-w-full mx-auto'>
				<SubHeading>Projects</SubHeading>

				{/* Project tabs - clean and minimal */}
				<div className='mt-10 mb-8'>
					<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2'>
						{allProjects.map((project) => (
							<button
								onClick={() => setSelectedProject(project)}
								key={project.id}
								className={`py-3 px-4 rounded-md text-center font-medium transition-colors duration-200 ${
									selectedProject.id === project.id
										? 'text-black'
										: 'bg-gray-900 text-gray-100 hover:bg-gray-700'
								}`}
								style={{
									backgroundColor:
										selectedProject.id === project.id ? accentColor : '',
								}}
							>
								{project.name}
							</button>
						))}
					</div>
				</div>

				{/* Project content - clean layout */}
				<div
					className={`transition-opacity duration-300 ${
						isLoaded ? 'opacity-100' : 'opacity-0'
					}`}
				>
					<div className='rounded-lg overflow-hidden'>
						<div className='grid grid-cols-1 lg:grid-cols-12 gap-6 p-6'>
							{/* Project image - spans 5 cols on large screens */}
							<div className='lg:col-span-5 h-full'>
								<div className='relative h-full rounded-lg overflow-hidden'>
									<Image
										src={selectedProject.imageURL}
										alt={selectedProject.name}
										width={800}
										height={600}
										className='w-full h-full object-cover'
									/>

									<div className='absolute bottom-0 left-0 right-0 p-4 z-10'>
										<Link
											href={selectedProject.projectURL}
											target='_blank'
											className='inline-flex items-center gap-2  px-4 py-2 rounded font-medium text-sm transition-colors'
											style={{ backgroundColor: accentColor }}
										>
											Visit Project
											<svg
												className='w-4 h-4'
												fill='currentColor'
												viewBox='0 0 20 20'
											>
												<path
													fillRule='evenodd'
													d='M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z'
													clipRule='evenodd'
												></path>
											</svg>
										</Link>
									</div>
								</div>
							</div>

							{/* Project details - spans 7 cols on large screens */}
							<div className='lg:col-span-7 flex flex-col justify-center p-2 sm:p-4 md:p-6'>
								<Link
									href={selectedProject.projectURL}
									target='_blank'
									className='inline-block mb-4'
								>
									<h3
										className='text-2xl md:text-3xl font-bold'
										style={{ color: accentColor }}
									>
										{selectedProject.name}
									</h3>
								</Link>

								<p className=' text-base leading-relaxed md:text-lg'>
									{selectedProject.summary}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
