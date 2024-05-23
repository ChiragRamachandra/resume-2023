import React, { useState } from 'react';
import Image from 'next/image';
import { getProjectData } from 'data';
import Link from 'next/link';
import { SubHeading } from '../SubHeading';

type Props = {};

const Projects = (props: Props) => {
	const allProjects = getProjectData();
	const [selectedProject, setSelectedProject] = useState(allProjects[0]);

	return (
		<div className='flex flex-col items-center justify-start p-4'>
			<SubHeading>Projects</SubHeading>
			<div className='w-full flex flex-col md:flex-row items-center justify-center mt-12'>
				<div className='w-full md:w-1/2 flex flex-wrap md:flex-col flex-row md:pl-6 md:ml-4 md:items-start items-center md:justify-start justify-center overscroll-x-auto my-6'>
					{allProjects.map((project) => (
						<button
							onClick={() => setSelectedProject(project)}
							key={project.id}
							className='uppercase font-bold heroButton text-gray-500 text-sm md:text-xl md:mb-10 mb-2 cursor-pointer m-2 '
						>
							{project.name}
						</button>
					))}
				</div>
				<div className='flex md:w-1/2 flex-col  md:justify-start justify-center items-center md:items-start'>
					<Link href={selectedProject.projectURL} target='_blank'>
						<h4 className='my-2 p-2 text-2xl md:text-2xl font-bold text-start uppercase tracking-[5px] text-[#F7AB0A]/75 ease-in duration-300 hover:underline'>
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
