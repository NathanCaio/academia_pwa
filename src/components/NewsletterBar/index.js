import React from 'react';
import { useStyle } from '@magento/venia-ui/lib/classify';

import defaultClasses from './styles.module.css';

const NewsletterBar = props => {
    const classes = useStyle(defaultClasses, props.classes);

    const handleSubmit = e => {
        e.preventDefault();
    };

    return (
        <section className={classes.newsletterBarContainer}>
            <h2 className={classes.newsletterBarTitle}>
                Receba ofertas e novidades
            </h2>
            <form onSubmit={handleSubmit} className={classes.newsletterBarForm}>
                <input
                    type="text"
                    placeholder="Nome completo"
                    className={classes.newsletterBarInput}
                />
                <input
                    type="email"
                    placeholder="Email"
                    className={classes.newsletterBarInput}
                />
                <button type="submit" className={classes.newsletterBarButton}>
                    Enviar
                </button>
            </form>
        </section>
    );
};

export default NewsletterBar;
