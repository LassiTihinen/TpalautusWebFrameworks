import styles from './BothContained.module.css';
import React from 'react'
import elokapina from './elokapina.jpg';
import sauber from './sauber.jpg';

export default function BothContained() {
    return (
        <div className={ styles.background }>
            <div className={ styles.container }>
                <div>
                    <img src={elokapina} width='600' height='300' />
                </div>
                <div className={styles.imageSubText}>
                    <h3>Kotimaa | Elokapina on tukkinut jälleen Helsingin tiet - Poliisi on paikalla hallitsemassa 
                        tilannetta </h3> 
                </div>
                <div className={styles.smallSubText}>
                    Yli 100 ihmistä on jo pidätetty, HS seuraa tilanteen kehitystä
                </div>
                <div>
                    ______________________________________________________________________________________
                </div>
                <div className={styles.news}>
                   Formula 1
                </div>
                <img src={sauber} width="600" height="265" />
                <div className={styles.imageSubText}> Räikkösen Alfa Romeo riistäytyi jälleen käsistä </div>
            </div>

            <div className={styles.sideSectionContainer}>
                <div className={styles.sideSectionTitle}>
                    Luetuimmat
                </div>
                <div>
                    ___________________________________________________
                </div>
                <div>
                    1 Kolumni | "Miksi nykyään kaikki maksaa liikaa?" Kysyy Antti
                    Giganttia mainostaen
                </div>
                <div>
                    ___________________________________________________
                </div>
                <div>
                    2 Sponsorointi | Kärkkäinen ja Kärpät.
                    Jalkapallo ja Yhdistyneet Arabiemiraatit - 
                    Kauanko moraalitonta toimintaa pitää kestää?
                </div>
                <div>
                    ___________________________________________________
                </div>
                <div>
                    3 Terveys| Tiesitkö, että Nutella-pohjaisessa leivässä on usein vähempikalorinen
                    kuin sama leipä avokadoleivitteellä?
                </div>
                <div>
                    ___________________________________________________
                </div>
                <div>
                    4 Mielenosoitukset | Elokapina aikoo tukkia 
                    tiet viidettä kertaa kuukauteen:
                    "Ilmastolle on joskus tehtävä jotain"
                     
                </div>
                <div>
                    ___________________________________________________
                </div>
                <div>
                    5 Maalaisihmettely | Hesa, Hese tai jopa Hesburger -
                    Mikä on oikeasti maalaisten nimitys Helsingille?
                </div>
                <div>
                    ___________________________________________________
                </div>
                <div>
                    6 Ravintola-arvio | Neljän Michelin-tähden katukiska palaa toimintaan -
                    Ole ensimmäinen jonossa Paten Kiskalla!
                </div>
                <div>
                    ___________________________________________________
                </div>
                <div>
                    7 Viihde | BB-talossa taas tärskyy - BB-Andy sekosi aivan täysin!
                    KATSO KUVAT!
                </div>
            </div>
            



        </div>
    )
}



















































/*export default function MainSection() {
    return (
        <div className={styles.background}>
            <div classname={styles.pääikkunanuutinen}>
                <div>
                Tiede | Uusi pippuri mullistaa kotikikat ja makunystyräsi
                



                </div>



            </div>
            <div classname={styles.sivuikkunanuutinen}>
            <div> 

            Side Section´daskafhuiahpufiauisfuhahifbpoalujshfdasiludhasiduias


            </div>

            <div>
            ____________________________________
            </div>



            </div>




        </div>
    )
}
*/