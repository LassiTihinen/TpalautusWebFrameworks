import React from 'react'
import styles from './Header.module.css';

export default function Header() {


    return (
        <div className ={styles.headerBackground}>
            <div className={styles.container}>
                <div className={styles.logo}>HELSINGIN SANOMAT</div>
                <div>Etusivu</div>
                <div>Uutiset</div>
                <div>Lehdet</div>
                <div>Asiakaspalvelu</div>
                <div className={styles.tilaaBackGround}>Tilaa</div>
                    Kirjaudu
                <div className={styles.valikkoAlign}>Valikko  ≡</div>
                </div>
        </div>
    )
}



//<div style={{color:'black', backgroundColor: 'white', width: '50px', borderradius: '2px'}}>Tilaa</div>