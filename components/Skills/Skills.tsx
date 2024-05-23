import React from 'react';
import { Skill } from '../Skill';
import getSkillsData from 'data/skills';
import { SubHeading } from '../SubHeading';

type Props = {};

const Skills = (props: Props) => {
	const skills = getSkillsData();
	return (
		<>
			<div className='flex relative flex-col text-center md:text-left max-w-7xl justify-evenly mx-auto items-center p-5 font-bold'>
				<SubHeading>Skills</SubHeading>

				<div className='px-4 md:px-10 mt-12'>
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
