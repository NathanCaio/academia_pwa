import React from 'react';

import CmsBlock from '@magento/venia-ui/lib/components/CmsBlock';

import { useStyle } from '@magento/venia-ui/lib/classify';
import defaultClasses from './aboutPage.module.css';

const AboutPage = props => {
    const classes = useStyle(defaultClasses, props.classes);

    return (
        <div className={classes.aboutPageContainer}>
            <CmsBlock identifiers={'about-page'} />
        </div>
    );
};

export default AboutPage;
