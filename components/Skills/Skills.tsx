import React from 'react';
import { Skill } from '../Skill';
import getSkillsData from 'data/skills';

type Props = {};

const Skills = (props: Props) => {
	const skills = getSkillsData();
	return (
		<>
			<div className='my-32 flex relative flex-col text-center md:text-left max-w-7xl justify-evenly mx-auto items-center p-5'>
				<div className='my-6 '>
					<h3 className='uppercase tracking-[20px] text-gray-500 text-2xl '>
						Skills
					</h3>
				</div>

				<div className='space-y-10 px-4 md:px-10 mt-20'>
					<div className='grid grid-cols-3 md:grid-cols-4 gap-6 p-2 md:gap-16'>
						{skills.map((skill) => (
							<Skill key={skill.id} name={skill.name} url={skill.url} />
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Skills;
