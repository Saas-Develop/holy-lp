import styles from './Home.module.css'
import Head from 'next/head'
import Link from 'next/link'

export default function Terms(){
    return(
        <>
            <Head>
                <title>Holy | Termos de uso</title>
            </Head>
            <div className={styles.Content}>
                <div className={styles.Container}>
                    <div className={styles.LeftSide}>
                        <h1 className={styles.title}>Termos de uso</h1>
                        <div className={styles.TextContent}>
                            <p className={styles.subtitle}>
                                Bem-vindo ao aplicativo Holy! Ao utilizar nossos serviços, você concorda com estes Termos de Uso. Leia atentamente este documento, pois ele estabelece os termos e condições que regem o uso do nosso aplicativo.
                            </p>

                            <h3 className={styles.sectionTitle}>
                                Registro e Conta de Usuário:
                            </h3>
                            <p className={styles.subtitle}>
                                Para utilizar o aplicativo, você deve criar uma conta de usuário fornecendo informações verdadeiras, precisas e atualizadas. Você é responsável por manter a confidencialidade de sua conta e por todas as atividades que ocorrerem sob sua conta.
                            </p>

                            <h3 className={styles.sectionTitle}>
                                Uso do Aplicativo:
                            </h3>
                            <p className={styles.subtitle}>
                                Ao utilizar o aplicativo Holy, você concorda em:
                            </p>
                            <p className={styles.subtitle}>
                                1. Respeitar os direitos de propriedade intelectual do aplicativo e de outros usuários.<br/>
                                2. Não utilizar o aplicativo para atividades ilegais, ofensivas, difamatórias ou que violem os direitos de privacidade de terceiros.<br/>
                                3. Não compartilhar informações falsas ou enganosas.<br/>
                            </p>

                            <h3 className={styles.sectionTitle}>
                                Funcionalidades do Aplicativo:
                            </h3>
                            <p className={styles.subtitle}>
                                O aplicativo Holy oferece funcionalidades como gestão financeira, acompanhamento de doações, gerenciamento de membros e comunicação interna. Ao utilizar essas funcionalidades, você concorda em respeitar os direitos dos outros usuários e utilizar o aplicativo de forma responsável.
                            </p>

                            <h3 className={styles.sectionTitle}>
                                Cancelamento e Reembolso:
                            </h3>
                            <p className={styles.subtitle}>
                                Os cancelamentos e reembolsos estão sujeitos às políticas estabelecidas pela Holy Solutions. Consulte nossa Política de Reembolso para obter mais informações.
                            </p>

                            <h3 className={styles.sectionTitle}>
                                Alterações nos Termos de Uso:
                            </h3>
                            <p className={styles.subtitle}>
                                Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. É responsabilidade do usuário revisar regularmente estes termos.
                            </p>

                            <p className={styles.subtitle}>
                                Ao utilizar nosso aplicativo, você concorda em cumprir estes Termos de Uso. Se você tiver alguma dúvida ou preocupação, entre em contato com nossa equipe de suporte ao usuário.
                            </p>

                            <p className={styles.subtitle}>
                                Atenciosamente,<br/>
                                Holy<br/><br/>
                                © 2024 - Holy Solutions, Todos os direitos reservados<br/>
                                CNPJ: 12.345.678/0001-90
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
