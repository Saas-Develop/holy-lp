import styles from './Home.module.css'
import Head from 'next/head'

export default function Reembolso(){
    return(
        <>
        <Head>
            <title>Eu, Você & Cristo | Quem somos</title>
        </Head>
        <div className={styles.Content}>
                <div className={styles.Container}>
                    <div className={styles.LeftSide}>
                        <h1 className={styles.title}>Quem somos nós</h1>
                        <div className={styles.TextContent}>
                            <p className={styles.subtitle}>
                            O Eu, Você & Cristo é um app evangélico, voltado para o público cristão de todo o mundo.<br/><br/> Em todos lugares do mundo há alguém querendo conhecer um outro alguém, pois ter um parceiro ou parceira ao lado para compartilhar momentos bons e ruins é o desejo de muitas pessoas.<br/><br/>
                            Para iniciar um namoro, uma amizade ou conquistar um amor muitas das vezes encontramos diversas barreiras, e é por isso que Eu,Você&Cristo estamos aqui, derrubando as barreiras e ultrapassando as fronteiras com você.<br/><br/>
                            Sabemos que por diversos motivos nem todos acham isso possível... E é ai que nossa equipe entra em ação.<br/><br/>
                            Nossa missão: Ajudar você a encontrar o amor da sua vida, independente da distância!
                            Embora algumas pessoas achem isso difícil, o que precisamos é crer que o nosso Deus tem propósitos em todas as coisas e que em algum lugar ele tem alguém reservado para nós.<br/><br/>
                            Portanto ao conhecer alguém procure ser sincero em tudo que disser, busque em primeiro lugar o Reino dos céus e com certeza as demais coisas Deus irá acrescentar. 

                            Acreditamos no amor divino, que é firmado em Cristo Jesus, e a bíblia é o nosso manual e nossa base de vida.<br/><br/>

                            <i>O amor é paciente, o amor é bondoso. Não inveja, não se vangloria, não se orgulha.
                            Não maltrata, não procura seus interesses, não se ira facilmente, não guarda rancor.
                            O amor não se alegra com a injustiça, mas se alegra com a verdade.
                            Tudo sofre, tudo crê, tudo espera, tudo suporta.<br/><br/>
                            1 Coríntios 13:4-7</i>                            
                            </p>

                            <p className={styles.subtitle}>
                            Atenciosamente,<br/>
                            Eu, Você & Cristo<br/><br/>
                            © 2024 - G ZARA SOLUCOES E SERVICOS LTDA, Todos os direitos reservados
                            CNPJ: 17.464.290/0001-27
                            </p>
                        </div>
                    </div>
                </div>
        </div>
        </>
    )
}