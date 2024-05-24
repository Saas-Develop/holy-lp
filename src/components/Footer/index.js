import styles from './Footer.module.css'
import Image from 'next/image';
import Link from 'next/link';
import {FaInstagram, FaYoutube, FaLinkedin} from "react-icons/fa";
import logo from '../../../public/holy.png'

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <div className={styles.Footer}>
                  <div className={styles.coluna1}>
                      <Image src={logo} width={70} className={styles.logo} alt='logotipe'/>
                      <p className={styles.textAbout}>
                      Com o Holy você pode facilmente organizar as finanças da igreja, gerenciar membros e promover o crescimento da sua comunidade. Torne a administração mais eficiente e foque no que realmente importa: fortalecer a fé e unir as pessoas.                      </p>
                      
                  </div>
                  <div className={styles.coluna2}>
                      <h3 className={styles.textColumn}>Atendimento</h3>
                      <nav>
                          <p className={styles.li}>contato@euvoceecristo.com</p>
                          {/* <p className={styles.li}>(21) 98370-2618</p> */}
                      </nav>
                  </div>
                  <div className={styles.coluna3}>
                      <h3 className={styles.textColumn}>Suporte</h3>
                      <nav>
                              <li className={styles.li}><Link href='/legal/termos' target='_blank'>Termos de uso</Link></li>
                              <li className={styles.li}><Link href='/legal/privacidade' target='_blank'>Política de privacidade</Link></li>
                              <li className={styles.li}><Link href='/legal/reembolso' target='_blank'>Política de reembolso</Link></li>
                              <li className={styles.li}><Link href='/legal/nos' target='_blank'>Quem somos</Link></li>
                      </nav>
                  </div>
                  <div className={styles.coluna4}>
                      {/* <h3 className={styles.textColumn}>Pacotes</h3>
                      <nav>
                          <li className={styles.li}><Link href='#' target="_blank" className={styles.li}>Plano anual</Link></li>
                          <li className={styles.li}><Link href='#' className={styles.li}>Plano mensal</Link></li>
                          <li className={styles.li}><Link href='#' className={styles.li}>Plano semestral</Link></li>
                      </nav> */}
                      <h3  className={styles.textColumn}>Redes sociais</h3>
                      <div className={styles.redes}>
                          <Link href="#" target="_blank"><FaInstagram size={38} className={styles.bola}/></Link>
                          <Link href="#" target="_blank"><FaYoutube size={38} className={styles.bola}/></Link>
                          <Link href="#" target="_blank"><FaLinkedin size={38} className={styles.bola}/></Link>
                      </div>
                  </div>
              </div>
              <div className={styles.SecondFooter}>
                  <p className={styles.Copyright}>
                      © 2024 - Alexandre Saints, Todos os direitos reservados<br/>
                  </p>
              </div>  
      </footer>
    )
}