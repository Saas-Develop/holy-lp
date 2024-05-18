import styles from './Footer.module.css'
import Image from 'next/image';
import Link from 'next/link';
import {FaInstagram, FaYoutube, FaLinkedin} from "react-icons/fa";
import logo from '../../../public/icon.png'

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <div className={styles.Footer}>
                  <div className={styles.coluna1}>
                      <Image src={logo} width={50} className={styles.logo} alt='logotipe'/>
                      <p className={styles.textAbout}>
                      Eu, Você & Cristo é um aplicativo de relacionamento cristão baseado em apresentar pessoas dispostas a terem um relacionamento baseadas na bíblia uma para outra.
                      </p>
                      
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
                      © 2024 - EU, VOCÊ & CRISTO, Todos os direitos reservados<br/>
                  </p>
              </div>  
      </footer>
    )
}