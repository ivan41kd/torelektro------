'use client';

import { OptimizedImage } from '@/shared/ui/optimize-image';
import { ConsultationModal } from '../consultation';
import { useState } from 'react';
import './hero.scss';
import { PolicyModal } from '../policy/policy.modal';

export function Hero() {
	const [show, setShow] = useState(true);
	const [policyOpen, setPolicyOpen] = useState(false);
	const openPolicy = () => {
		setPolicyOpen(true);
	};

	return (
		<>
			<section className='intro'>
				<div className='container'>
					<div className='intro__wrapper'>
						<div className='intro__texts'>
							<h1 className='intro__title'>
								Российские удлинители собственного производства
								<br />
								по международным стандартам
							</h1>
							<h2 className='intro__title mobile'>
								Российские удлинители собственного производства
								<br />
								по всем стандартам
							</h2>
							<p className='intro__subtitle'>
								Производство свыше 20+ видов современных электрических удлинителей,
								с отличительными силовыми и иными характеристиками и преимуществами
							</p>
							<div className='intro__bottom'>
								<ConsultationModal
									trigger={
										<button className='intro__button'>
											Бесплатная консультация
										</button>
									}
									asChild
								/>
								<p className='intro__description'>
									бесплатная доставка от 50000 рублей <br />
									во все населённые пункты нашей страны
								</p>
							</div>
						</div>
						<div className='intro__img-wrapper'>
							<picture>
								<source srcSet={'/intro/main-390.png'} media='(max-width:820px)' />
								<OptimizedImage
									className='intro__img'
									src={'/intro/main2.png'}
									alt='Preview hero'
									height={780}
									width={510}
									priority
								/>
							</picture>
						</div>
					</div>
					{show && (
						<div className='intro__disclaimer'>
							<div className='intro__disclaimer-wrapper'>
								<p className='intro__disclaimer-text'>
									Если вы продолжаете использовать наш интернет-сайт,
									<br />
									<PolicyModal
										trigger={
											<span>
												вы соглашаетесь с условиями политики
												конфиденциальности
											</span>
										}
										className='transparent'
									/>
									, тем самым,
									<br />
									помогаете нам сделать наш интернет-сайт комфортнее и полезнее
									для каждого человека
								</p>
								<p className='intro__disclaimer-text mobile'>
									Если вы продолжаете использовать
									<br /> наш интернет-сайт,{' '}
									<span
										className='intro__disclaimer-political'
										onClick={openPolicy}
									>
										вы соглашаетесь <br /> с условиями политики
										конфиденциальности
									</span>
									, тем самым, помогаете нам сделать
									<br />
									наш интернет-сайт комфортнее и полезнее для каждого человека и
									бизнеса
								</p>
								<div className='intro__disclaimer-button-wrapper'>
									<button
										className='intro__disclaimer-button'
										onClick={() => setShow(false)}
									>
										Подтвердить
									</button>
									<div className='intro__disclaimer-close'>
										<svg
											width='14'
											height='14'
											viewBox='0 0 14 14'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
											className='intro__disclaimer-close-icon'
											onClick={() => setShow(false)}
										>
											<path
												d='M12.9563 12.2938C13.0023 12.3367 13.0393 12.3884 13.0649 12.4459C13.0905 12.5034 13.1043 12.5655 13.1054 12.6285C13.1065 12.6914 13.0949 12.7539 13.0714 12.8123C13.0478 12.8706 13.0127 12.9237 12.9682 12.9682C12.9237 13.0127 12.8706 13.0478 12.8123 13.0714C12.7539 13.0949 12.6914 13.1065 12.6285 13.1054C12.5655 13.1043 12.5034 13.0905 12.4459 13.0649C12.3884 13.0393 12.3367 13.0023 12.2938 12.9563L7.00003 7.66331L1.70628 12.9563C1.61742 13.0391 1.49989 13.0842 1.37845 13.082C1.25701 13.0799 1.14115 13.0307 1.05526 12.9448C0.969379 12.8589 0.920184 12.743 0.918042 12.6216C0.915899 12.5002 0.960976 12.3826 1.04378 12.2938L6.33675 7.00003L1.04378 1.70628C0.960976 1.61742 0.915899 1.49989 0.918042 1.37845C0.920184 1.25701 0.969379 1.14115 1.05526 1.05526C1.14115 0.969379 1.25701 0.920184 1.37845 0.918042C1.49989 0.915899 1.61742 0.960976 1.70628 1.04378L7.00003 6.33675L12.2938 1.04378C12.3826 0.960976 12.5002 0.915899 12.6216 0.918042C12.743 0.920184 12.8589 0.969379 12.9448 1.05526C13.0307 1.14115 13.0799 1.25701 13.082 1.37845C13.0842 1.49989 13.0391 1.61742 12.9563 1.70628L7.66331 7.00003L12.9563 12.2938Z'
												fill='#101010'
											/>
										</svg>
									</div>
								</div>
							</div>
						</div>
					)}
				</div>
			</section>
			<PolicyModal
				className='transparent'
				asChild
				open={policyOpen}
				onOpenChange={setPolicyOpen}
				trigger={null}
			/>
		</>
	);
}
