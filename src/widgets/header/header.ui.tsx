import { Phone } from '@phosphor-icons/react/dist/ssr';
import { OptimizedImage } from '@/shared/ui/optimize-image';
import { OptimizedLink } from '@/shared/ui/optimize-link';
import { DocumentationModal } from '../documentation';
import { ContactModal } from '../contact';
import './header.scss';

export function Header() {
	return (
		<header className='header'>
			<div className='header__wrapper container'>
				<div className='header__logo-wrapper'>
					<picture>
						<source srcSet={'/logo/header/index-390.png'} media='(max-width:820px)' />

						<OptimizedImage
							src={'/logo/header/index.png'}
							height={40}
							width={212}
							priority
							alt=''
							className='header__logo'
						/>
					</picture>
				</div>
				<div className='header__info'>
					<OptimizedLink href='tel:+7 916 083 39 30'>
						<button className='header__phone'>
							<div className='header__phone-icon-wrapper'>
								<Phone
									size={50}
									className='header__phone-icon'
									weight='fill'
									color='#fff'
								/>
							</div>
							+7 916 083 39 30
						</button>
					</OptimizedLink>
					<div className='header__more-nav-wrapper'>
						<button className='header__more'>
							<svg
								width='18'
								height='6'
								viewBox='0 0 18 6'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								className='header__more-icon'
							>
								<path
									d='M11.1875 3C11.1875 3.43265 11.0592 3.85558 10.8188 4.21531C10.5785 4.57504 10.2368 4.85542 9.83712 5.02099C9.43741 5.18655 8.99757 5.22987 8.57324 5.14547C8.14891 5.06106 7.75913 4.85272 7.45321 4.5468C7.14728 4.24087 6.93894 3.85109 6.85453 3.42676C6.77013 3.00243 6.81345 2.56259 6.97901 2.16288C7.14458 1.76317 7.42496 1.42153 7.78469 1.18116C8.14442 0.940795 8.56735 0.8125 9 0.8125C9.58016 0.8125 10.1366 1.04297 10.5468 1.4532C10.957 1.86344 11.1875 2.41984 11.1875 3ZM2.75 0.8125C2.31735 0.8125 1.89442 0.940795 1.53469 1.18116C1.17496 1.42153 0.894581 1.76317 0.729015 2.16288C0.563448 2.56259 0.520128 3.00243 0.604533 3.42676C0.688938 3.85109 0.897278 4.24087 1.2032 4.5468C1.50913 4.85272 1.89891 5.06106 2.32324 5.14547C2.74757 5.22987 3.18741 5.18655 3.58712 5.02099C3.98683 4.85542 4.32848 4.57504 4.56884 4.21531C4.80921 3.85558 4.9375 3.43265 4.9375 3C4.9375 2.41984 4.70703 1.86344 4.2968 1.4532C3.88656 1.04297 3.33016 0.8125 2.75 0.8125ZM15.25 0.8125C14.8174 0.8125 14.3944 0.940795 14.0347 1.18116C13.675 1.42153 13.3946 1.76317 13.229 2.16288C13.0634 2.56259 13.0201 3.00243 13.1045 3.42676C13.1889 3.85109 13.3973 4.24087 13.7032 4.5468C14.0091 4.85272 14.3989 5.06106 14.8232 5.14547C15.2476 5.22987 15.6874 5.18655 16.0871 5.02099C16.4868 4.85542 16.8285 4.57504 17.0688 4.21531C17.3092 3.85558 17.4375 3.43265 17.4375 3C17.4375 2.71273 17.3809 2.42828 17.271 2.16288C17.1611 1.89748 16.9999 1.65633 16.7968 1.4532C16.5937 1.25008 16.3525 1.08895 16.0871 0.979013C15.8217 0.869081 15.5373 0.8125 15.25 0.8125Z'
									fill='#F0F0F0'
								/>
							</svg>
						</button>
						<nav className='header__nav'>
							<div className='header__nav-wrapper'>
								<ul className='header__nav-items-list'>
									<li className='header__nav-item'>
										<OptimizedLink href='#catalog'>
											Каталог всего ассортимента компании
										</OptimizedLink>
									</li>
									<li className='header__nav-item'>
										<OptimizedLink href='#presentation'>
											Презентация для сотрудничества
										</OptimizedLink>
									</li>
									<li className='header__nav-item'>
										<OptimizedLink href='#information'>
											Информация о компании
										</OptimizedLink>
									</li>
								</ul>
								<ul className='header__nav-items-list'>
									<DocumentationModal
										trigger={
											<li className='header__nav-item header-doc'>
												Документация
											</li>
										}
									/>
									<ContactModal
										trigger={
											<li className='header__nav-item header-contact'>
												Контактная информация
											</li>
										}
									/>
								</ul>
							</div>
						</nav>
					</div>
				</div>
			</div>
		</header>
	);
}
