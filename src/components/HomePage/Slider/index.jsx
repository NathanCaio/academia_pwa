import React from 'react';

import { useStyle } from '@magento/venia-ui/lib/classify';
import defaultClasses from '@/components/HomePage/Slider/styles.module.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/swiper-bundle.css';

import Slide from '@/components/HomePage/Slider/Slide';

import { AiOutlineGlobal } from 'react-icons/ai';
import { IoRibbonOutline } from 'react-icons/io5';
import { BsTruck, BsTools } from 'react-icons/bs';

const Slider = props => {
    const classes = useStyle(defaultClasses, props.classes);

    const slides = [
        {
            title: 'Garantia no mundo inteiro',
            icon: <AiOutlineGlobal />
        },
        {
            title: 'Qualidade superior',
            icon: <IoRibbonOutline />
        },
        {
            title: 'Entrega rápida global',
            icon: <BsTruck />
        },
        {
            title: 'Programas de manutenção',
            icon: <BsTools />
        }
    ];

    const pagination = {
        clickable: true,
        renderBullet: function(index, className) {
            return `<div class="${className}"><span>${
                slides[index].title
            }</span></div>`;
        }
    };

    return (
        <div className={classes.container}>
            <Swiper
                className={classes.slider}
                modules={[Pagination, Navigation]}
                navigation
                pagination={pagination}
                loop
            >
                {slides.map(item => (
                    <SwiperSlide key={item.title}>
                        <Slide title={item.title} icon={item.icon} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Slider;
