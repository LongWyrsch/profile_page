import React, { forwardRef, Ref } from 'react'
import Title from './Title'
import { Icon } from '@iconify/react'
import { useTranslation } from 'next-i18next'
import styles from 'styles/Profile.module.css'
import { ScriptProps } from 'next/script'

const Profile = () => {
	const { t } = useTranslation()

	return (
		<div>
			<Title title={t('profile')} ></Title>
			<ul className={styles.list}>
				<li>
					<div className={styles.row}>
						<Icon icon="material-symbols:alternate-email" className={styles.icon} /> {t('email')}
					</div>
				</li>
				<li>
					<div className={styles.row}>
						<Icon icon="material-symbols:location-on" className={styles.icon} /> {t('location')}
					</div>
				</li>
				<li>
					<div className={styles.row}>
						<Icon icon="fontisto:passport" className={styles.icon} /> {t('citizenship')}
					</div>
				</li>
				<li>
					<div className={styles.row}>
						<Icon icon="fa6-solid:id-card" className={styles.icon} /> {t('born')}
					</div>
				</li>
			</ul>
		</div>
	)
}


export default Profile