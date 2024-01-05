import React from 'react';
import s from './style.module.scss'
import logo from '../../assets/Logo.png'
import telegram from '../../assets/telegram.svg'
import whatsup from '../../assets/whatsapp.png'
import instagram from '../../assets/Instagram.png'
import facebook from '../../assets/facebook.png'
const Header = () => {
	return (
		<div className={s.header}>
			<img alt='logo' src={logo}></img>
			<div className={s.contacts}>
			<img alt='telegram' src={telegram}></img>
			<img alt='whatsup' src={whatsup} className={s.header_whatsApp}></img>
			<img alt='instagram' src={instagram}></img>
			<img alt='facebook' src={facebook}></img>
			</div>
			<a href="*">Регистрация</a>
		</div>
	);
};

export default Header;