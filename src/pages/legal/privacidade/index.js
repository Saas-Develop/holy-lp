import styles from './Home.module.css'
import Head from 'next/head'

export default function Privacidade(){
    return(
        <>
            <Head>
                <title>Holy | Política de Privacidade</title>
            </Head>
            <div className={styles.Content}>
                <div className={styles.Container}>
                    <div className={styles.LeftSide}>
                        <h1 className={styles.title}>Política de Privacidade</h1>
                        <div className={styles.TextContent}>
                            <h3 className={styles.sectionTitle}>Introdução</h3>
                            <p className={styles.subtitle}>
                                No Holy, comprometemo-nos a proteger a privacidade dos nossos usuários enquanto fornecemos uma plataforma segura para a gestão financeira e de membros para igrejas. Esta política descreve como coletamos, usamos e protegemos as informações pessoais dos nossos usuários.
                            </p>

                            <h3 className={styles.sectionTitle}>Coleta de Informações</h3>
                            <p className={styles.subtitle}>
                                Ao utilizar o aplicativo Holy, coletamos informações pessoais dos usuários, incluindo nome, idade, localização, informações de contato e dados financeiros. Além disso, podemos coletar informações geradas pelo uso do aplicativo, como histórico de transações, doações e interações com outros membros.
                            </p>

                            <h3 className={styles.sectionTitle}>Uso das Informações</h3>
                            <p className={styles.subtitle}>
                                Utilizamos as informações coletadas para fornecer os serviços do aplicativo, incluindo a gestão financeira, acompanhamento de doações, gerenciamento de membros e comunicação interna. Também podemos usar as informações para melhorar e desenvolver novos recursos do aplicativo.
                            </p>

                            <h3 className={styles.sectionTitle}>Compartilhamento de Informações</h3>
                            <p className={styles.subtitle}>
                                As informações dos usuários podem ser compartilhadas com outros membros da igreja para facilitar a comunicação e a gestão de atividades. Além disso, podemos compartilhar informações com prestadores de serviços terceirizados que nos ajudam a operar o aplicativo, como provedores de hospedagem, processadores de pagamento e serviços de suporte técnico.
                            </p>

                            <h3 className={styles.sectionTitle}>Segurança de Dados</h3>
                            <p className={styles.subtitle}>
                                Implementamos medidas de segurança adequadas para proteger as informações dos usuários contra acesso não autorizado, uso indevido ou alteração. Isso inclui o uso de criptografia, firewalls e restrições de acesso aos dados.
                            </p>

                            <h3 className={styles.sectionTitle}>Cookies e Tecnologias de Rastreamento</h3>
                            <p className={styles.subtitle}>
                                Podemos usar cookies e outras tecnologias de rastreamento para melhorar a funcionalidade do aplicativo, personalizar a experiência do usuário e analisar o uso do aplicativo. Os usuários podem controlar as configurações de cookies em seus dispositivos.
                            </p>

                            <h3 className={styles.sectionTitle}>Acesso e Controle de Informações</h3>
                            <p className={styles.subtitle}>
                                Os usuários têm o direito de acessar, corrigir ou excluir suas informações pessoais armazenadas no aplicativo. Eles também podem controlar as configurações de privacidade e notificações dentro do aplicativo.
                            </p>

                            <h3 className={styles.sectionTitle}>Alterações na Política de Privacidade</h3>
                            <p className={styles.subtitle}>
                                Reservamo-nos o direito de atualizar ou modificar esta política de privacidade a qualquer momento. Quaisquer alterações serão comunicadas aos usuários por meio do aplicativo ou por outros meios apropriados.
                            </p>

                            <h3 className={styles.sectionTitle}>Contato</h3>
                            <p className={styles.subtitle}>
                                Se você tiver dúvidas, preocupações ou solicitações relacionadas à nossa política de privacidade, entre em contato conosco através do email: contato@holy.com.
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
