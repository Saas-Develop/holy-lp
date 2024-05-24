import styles from './Home.module.css'
import Head from 'next/head'

export default function PoliticaReembolso(){
    return(
        <>
            <Head>
                <title>Holy | Política de Reembolso</title>
            </Head>
            <div className={styles.Content}>
                <div className={styles.Container}>
                    <div className={styles.LeftSide}>
                        <h1 className={styles.title}>Política de Reembolso</h1>
                        <div className={styles.TextContent}>
                            <p className={styles.subtitle}>
                                Nós, do Holy, valorizamos a satisfação de nossos usuários e estamos comprometidos em fornecer um serviço de alta qualidade. Se, por algum motivo, você não estiver satisfeito com o seu plano de assinatura, oferecemos uma política de reembolso com as seguintes diretrizes:
                            </p>

                            <h3 className={styles.sectionTitle}>Reembolso Mensal</h3>
                            <p className={styles.subtitle}>
                                Se você cancelar sua assinatura mensal dentro dos primeiros 7 dias, você será elegível para um reembolso total do valor pago.
                            </p>

                            <h3 className={styles.sectionTitle}>Reembolso Anual</h3>
                            <p className={styles.subtitle}>
                                Se você cancelar sua assinatura anual dentro dos primeiros 30 dias, você será elegível para um reembolso total do valor pago.
                            </p>

                            <h3 className={styles.sectionTitle}>Processo de Reembolso</h3>
                            <p className={styles.subtitle}>
                                Para solicitar um reembolso, entre em contato conosco através do email: financeiro@holy.com, fornecendo detalhes sobre a sua assinatura e o motivo do cancelamento. Faremos o possível para processar o seu reembolso o mais rápido possível.
                            </p>

                            <p className={styles.subtitle}>
                                Atenciosamente,<br/>
                                Equipe Holy
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
