import Image from 'next/image';
import styles from './Carousel.module.scss';
import TioNicoLogo from '../../../../../../../public/Assets/images/TioNico.png';
// SWIPER
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper';

export default function Carousel() {
	return (
		<div className={styles.carouselContainer}>
			<Swiper
				slidesPerView={4}
				spaceBetween={30}
				slidesPerGroup={3}
				autoplay={{
					delay: 3500,
					disableOnInteraction: false,
				}}
				loop={true}
				loopFillGroupWithBlank={true}
				modules={[Autoplay, Pagination, Navigation]}
			>
				<SwiperSlide>
					<Image src={TioNicoLogo} />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={TioNicoLogo} />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={TioNicoLogo} />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={TioNicoLogo} />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={TioNicoLogo} />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={TioNicoLogo} />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={TioNicoLogo} />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={TioNicoLogo} />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={TioNicoLogo} />
				</SwiperSlide>
			</Swiper>
		</div>
	);
}
