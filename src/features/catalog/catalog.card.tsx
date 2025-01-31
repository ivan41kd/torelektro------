import { OptimizedImage } from '@/shared/ui/optimize-image';
import { ProductModal } from './catalog.card-modal';
import type { TProduct } from './catalog.type';
import React from 'react';

export function CatalogCard({
	product,
	items,
	index,
}: {
	product: TProduct['items'][0];
	items: TProduct['items'];
	index: number;
}) {
	const renderArticle = (product: TProduct['items'][0]) => {
		const firstIndex = product.variants[0].options[0].article;
		const lastIndexLength = product.variants[product.variants.length - 1].options.length - 1;
		const lastIndex =
			product.variants[product.variants.length - 1].options[lastIndexLength].article;

		return (
			<div className='catalog__card-articles'>
				{firstIndex}-{lastIndex}
			</div>
		);
	};

	return (
		<div className='catalog__card swiper-slide'>
			<div className='catalog__card-wrapper'>
				<div className='catalog__card-img-wrapper'>
					<OptimizedImage
						src={product.images.main}
						alt={`ТОРЕЛЕКТРО. КАРТОЧКА ТОВАРА ${product.title}-${index}`}
						className='catalog__card-img'
						width={340}
						height={340}
					/>
				</div>
				<div className='catalog__card-info'>
					<p className='catalog__card-name'>{product.title} </p>
					<div className='catalog__card-chars'>
						<div className='catalog__char'>
							<p className='catalog__char-name'>
								сечение кабеля: <br />
							</p>
							<p className='catalog__char-value'>
								{' '}
								{product.variants.map((item, index) => (
									<React.Fragment key={index}>
										{item.options[0].plugs}
										{index < product.variants.length - 1 && <span> · </span>}
									</React.Fragment>
								))}
							</p>
						</div>
						<div className='catalog__char'>
							<p className='catalog__char-name'>
								длина кабеля: <br />
							</p>
							<p className='catalog__char-value'>
								{' '}
								от {product.variants[0].options[0].length} до{' '}
								{
									product.variants[0].options[
										product.variants[0].options.length - 1
									].length
								}
							</p>
						</div>
						<div className='catalog__char'>
							<p className='catalog__char-name'> защита кабеля:</p>
							<p className='catalog__char-value'>
								{' '}
								{product.variants[0].options[0].security} <span> · </span>
								{product.grounding == true ? 'с заземлением' : 'без заземления'}
							</p>
						</div>
					</div>
					<ProductModal products={items} index={index} />
				</div>
				{renderArticle(product)}
			</div>
		</div>
	);
}
