import menu_data from '@data/menu-data';
import Link from 'next/link';
import React from 'react';

const Menus = () => {
    return (
      <ul>
        {menu_data.map((menu, i) => (
          <li
            key={i}
            className={` ${
              menu.megaMenu ? "menu-item-has-children has-mega-menu" : ""
            } ${menu.hasDropdown ? "menu-item-has-children" : ""}`}
          >
            <Link href={menu.link}>{menu.title}</Link>
            {menu.hasDropdown && (
              <ul className="sub-menu">
                {menu.submenus.map((sub, i) => (
                  <li key={i}>
                    <Link href={sub.link}>{sub.title}</Link>
                  </li>
                ))}
              </ul>
            )}

            {menu.mega_menus && (
              <ul className="sub-menu">
                {menu.mega_menus && menu?.mega_menus?.map((mega, i) => (
                  <li key={i}>
                    <Link href={mega.link} className="mega-menu-title">
                      {mega.title}
                    </Link>
                    {mega.submenus && <ul className='sub-menu'>
                      {mega?.submenus?.map((sub_mega, i) => (
                        <li key={i}>
                          <Link href={sub_mega.link}>{sub_mega.title}</Link>
                        </li>
                      ))}
                    </ul>}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    );
};

export default Menus;