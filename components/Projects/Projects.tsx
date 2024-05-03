import React, { useState } from 'react';
import Image from 'next/image';
import { getProjectData } from 'data';
import Link from 'next/link';

type Props = {};

const Projects = (props: Props) => {
	const allProjects = getProjectData();
	const [selectedProject, setSelectedProject] = useState(allProjects[0]);

	return (
		<div className='flex flex-col items-center justify-start p-4 lg:mt-16'>
			<h3 className='uppercase font-bold tracking-[20px] text-gray-500 text-3xl mb-20'>
				Projects
			</h3>
			<div className='w-full flex flex-col md:flex-row items-center justify-center'>
				<div className='w-full md:w-1/2 flex flex-wrap md:flex-col flex-row md:pl-6 md:ml-4 items-start justify-start overscroll-x-auto my-6'>
					{allProjects.map((project) => (
						<p
							onClick={() => setSelectedProject(project)}
							key={project.id}
							className='uppercase font-bold md:tracking-[4px] text-gray-500 text-sm md:text-xl md:mb-12 mb-2 cursor-pointer m-2 underline hover:text-[#1ecbe1]'
						>
							{project.name}
						</p>
					))}
				</div>
				<div className='flex md:w-1/2 flex-col  md:justify-start justify-center items-center md:items-start'>
					<Link href={selectedProject.projectURL} target='_blank'>
						<h4 className='my-2 p-2 text-2xl md:text-2xl font-bold text-start uppercase tracking-[5px] text-[#F7AB0A]/75 ease-in duration-300'>
							{selectedProject.name}
						</h4>
					</Link>

					<div className='max-w-[600px] my-4 ease-in duration-300'>
						<Image
							className='p-2 rounded-lg ease-in duration-300'
							width={600}
							height={600}
							src={selectedProject.imageURL}
							alt={selectedProject.name}
						/>
						<p className='p-2 text-base text-justify ease-in duration-300'>
							{selectedProject.summary}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
