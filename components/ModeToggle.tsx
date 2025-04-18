'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

export function ModeToggle() {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = React.useState(false);

	React.useEffect(() => {
		setMounted(true);
	}, []);

	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};

	if (!mounted) return null; // Prevents hydration errors

	return (
		<Button variant='link' size='icon' onClick={toggleTheme}>
			{theme === 'light' ? (
				<Sun className='h-[1.2rem] w-[1.2rem]  transition-all' />
			) : (
				<Moon className='h-[1.2rem] w-[1.2rem]  transition-all' />
			)}

			<span className='sr-only'>Toggle theme</span>
		</Button>
	);
}
