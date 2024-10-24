import React from 'react';
import { Layout } from '@/components/Layout';
import { Footer } from '@/components/Footer';

const PrivacyPolicy = () => {
	return (
		<>
			<Layout title='Privacy Policy'>
				<div className='max-w-5xl mx-auto px-4 py-8 space-y-8'>
					<div className='text-left space-y-4 mb-12'>
						<h1 className='text-4xl font-bold text-justify'>Privacy Policy</h1>
						<p className='text-justify'>
							<span className='font-semibold'>Effective Date:</span> March 27,
							2023
						</p>
						<p>
							Your privacy is important to us. This privacy policy explains how
							we collect, use, and protect your information when you use our
							applications.
						</p>
					</div>

					<div className='space-y-12'>
						<section>
							<h2 className='text-2xl font-bold mb-4 text-justify'>
								Information We Collect
							</h2>
							<div className='rounded-lg space-y-4'>
								<div>
									<h3 className='font-semibold mb-2 text-justify'>
										Personal Information
									</h3>
									<p className='text-left'>
										This includes your name, email address, and any other
										information you provide when you register or use our apps.
									</p>
								</div>
								<div>
									<h3 className='font-semibold mb-2 text-justify'>
										Usage Data
									</h3>
									<p className='text-left'>
										We may collect information about how you use our apps,
										including the features you use and the time spent on the
										app.
									</p>
								</div>
							</div>
						</section>

						{/* How We Use Your Information */}
						<section>
							<h2 className='text-2xl font-bold mb-4 text-justify'>
								How We Use Your Information
							</h2>
							<div className='rounded-lg '>
								<p className='mb-4 text-justify'>
									We use the information we collect for the following purposes:
								</p>
								<ul className='list-disc list-inside space-y-2 text-justify'>
									<li>To provide and maintain our apps</li>
									<li>To improve, personalize, and expand our apps</li>
									<li>To understand and analyze how you use our apps</li>
									<li>
										To communicate with you, either directly or through one of
										our partners, including for customer service, to provide you
										with updates and other information relating to the app, and
										for marketing and promotional purposes
									</li>
								</ul>
							</div>
						</section>

						{/* Data Security */}
						<section>
							<h2 className='text-2xl font-bold mb-4 text-justify'>
								Data Security
							</h2>
							<div className='rounded-lg'>
								<p className='text-justify'>
									We take the security of your personal information seriously.
									We implement a variety of security measures to maintain the
									safety of your personal information.
								</p>
							</div>
						</section>

						{/* Third-Party Services */}
						<section>
							<h2 className='text-2xl font-bold mb-4 text-justify'>
								Third-Party Services
							</h2>
							<div className='rounded-lg'>
								<p className='text-justify'>
									We may employ third-party companies and services to facilitate
									our apps, provide the service on our behalf, perform
									app-related services, or assist us in analyzing how our apps
									are used. These third parties may have access to your personal
									information only to perform these tasks on our behalf and are
									obligated not to disclose or use it for any other purpose.
								</p>
							</div>
						</section>

						{/* Changes to Privacy Policy */}
						<section>
							<h2 className='text-2xl font-bold mb-4 text-justify'>
								Changes to This Privacy Policy
							</h2>
							<div className='rounded-lg'>
								<p className='text-justify'>
									We may update our privacy policy from time to time. We will
									notify you of any changes by posting the new privacy policy on
									this page.
								</p>
							</div>
						</section>
					</div>
				</div>
			</Layout>
			<Footer />
		</>
	);
};

export default PrivacyPolicy;
