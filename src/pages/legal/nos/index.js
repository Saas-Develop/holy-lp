import styles from './Home.module.css'
import Head from 'next/head'

export default function QuemSomos(){
    return(
        <>
            <Head>
                <title>Holy | Quem somos</title>
            </Head>
            <div className={styles.Content}>
                <div className={styles.Container}>
                    <div className={styles.LeftSide}>
                        <h1 className={styles.title}>Quem somos nós</h1>
                        <div className={styles.TextContent}>
                            <p className={styles.subtitle}>
                                O Holy é um aplicativo de gestão financeira e de membros para igrejas, dedicado a servir o público cristão em todo o mundo.<br/><br/>
                                Nosso objetivo é fornecer ferramentas modernas e eficientes que ajudem as igrejas e seus membros a administrarem suas finanças e se conectarem de maneira significativa.<br/><br/>
                                Entendemos que as igrejas desempenham um papel vital na vida de seus membros, e é por isso que estamos comprometidos em fornecer soluções que simplifiquem processos e promovam um maior engajamento na comunidade.<br/><br/>
                                Nossa missão: Capacitar as igrejas a crescerem espiritualmente e financeiramente, promovendo uma administração eficaz e um relacionamento próximo entre líderes e membros.<br/><br/>
                                Acreditamos que ao apoiar as igrejas, estamos contribuindo para o fortalecimento da fé cristã e para o crescimento espiritual das comunidades em todo o mundo.<br/><br/>
                                Portanto, estamos dedicados a oferecer as melhores soluções tecnológicas para as necessidades específicas das igrejas, mantendo sempre nossa fé e valores cristãos como guias de nossas ações.<br/><br/>
                                Juntos, estamos construindo um futuro onde as igrejas prosperam e seus membros são capacitados a viverem vidas abundantes e significativas em Cristo.<br/><br/>
                            </p>

                            <p className={styles.subtitle}>
                                Atenciosamente,<br/>
                                Equipe Holy<br/><br/>
                                © 2024 - Alexandre Saints, Todos os direitos reservados<br/>
                                CNPJ: 44.031.553/0001-87
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
