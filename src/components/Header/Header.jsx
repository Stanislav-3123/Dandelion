import React from 'react';
import s from './style.module.scss'
import logo from '../../assets/Logo.png'
import telegram from '../../assets/telegram.svg'
import whatsup from '../../assets/whatsapp.png'
import instagram from '../../assets/Instagram.png'
import facebook from '../../assets/facebook.png'
import vk from '../../assets/vk.png'
const Header = () => {
	return (
		<div className={s.header}>
			<img alt='logo' src={logo} className='w-[120px]'></img>
			<div className={s.contacts}>
			<a href='https://t.me/RuslanP8'> <img alt='telegram' src={telegram}></img></a>
			<a href='https://wa.me/+79061833930'> <img alt='whatsup' src={whatsup} className={s.header_whatsApp}></img></a>
			<a href='https://www.instagram.com/ruslan_pshedzyal?igsh=MTNnbGNzZzFuaDhoZQ=='><img alt='instagram' src={instagram}></img></a>
			<a href='https://vk.com/id742796589'><img alt='vk' src={vk}></img></a>
			<a href='https://www.facebook.com/profile.php?id=100017317458868&mibextid=ZbWKwL'><img alt='facebook' src={facebook}></img></a>
			</div>
			<a className={s.header_a} href="https://office.dandelion.club/signup?ref=YHR4MldjvT">Регистрация</a>
		</div>
	);
};

export default Header;