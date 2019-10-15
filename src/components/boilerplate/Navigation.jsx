import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const Navigation = () => {
    const [activeItem, setActiveItem] = useState('home');
    const handleItemClick = (e, { name }) => {
        setActiveItem(name)
    }
    return (
        <Menu>
            <Menu.Item
                as={Link}
                to="/"
                name='home'
                active={activeItem === 'home'}
                onClick={handleItemClick}
            > Home
            </Menu.Item>
            <Menu.Item
                as={Link}
                to="/treemap"
                name='treemap'
                active={activeItem === 'treemap'}
                onClick={handleItemClick}
            > Treemap
            </Menu.Item>
      </Menu>
    )
}

export default Navigation;