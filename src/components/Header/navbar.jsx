import React from 'react';
import { useStyle } from '@magento/venia-ui/lib/classify';

import defaultClasses from '@/components/Header/navbar.module.css';

const Navbar = props => {
    const classes = useStyle(defaultClasses, props.classes);

    return (
        <nav className={classes.root}>
            <ul className={classes.linkList}>
                <li className={classes.linkItem}>Peças</li>
                <li className={classes.linkItem}>Serviços</li>
                <li className={classes.linkItem}>Manutenção</li>
                <li className={classes.linkItem}>Sistema de trocas</li>
            </ul>
        </nav>
    );
};

export default Navbar;
