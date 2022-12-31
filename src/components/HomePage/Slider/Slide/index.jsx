import React, { cloneElement } from 'react';

import { useStyle } from '@magento/venia-ui/lib/classify';
import defaultClasses from '@/components/HomePage/Slider/Slide/styles.module.css';

const Slide = ({ title, icon, ...props }) => {
    const classes = useStyle(defaultClasses, props.classes);

    return (
        <div className={classes.slide}>
            {cloneElement(icon, {
                className: classes.icon
            })}
            <h2 className={classes.title}>{title}</h2>
            <button type="button" className={classes.button}>
                Saiba mais
            </button>
        </div>
    );
};

export default Slide;
