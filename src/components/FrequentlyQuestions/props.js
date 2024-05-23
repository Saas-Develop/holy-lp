'use client'

import {useState} from 'react';
import styles from './List.module.css'
import { AnimatePresence, motion } from 'framer-motion';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';


export default function DuvidaItem({pergunta, resposta}){

  const [mostrarResposta, setMostrarResposta] = useState(false);

  const toggleResposta = () => {
    setMostrarResposta(!mostrarResposta);
  }

  return (
    <div className={styles.duvidaItem}>
      <div className={styles.pergunta} onClick={toggleResposta}>
        {pergunta}
        <BsChevronDown size={14}/>
      </div>
      <AnimatePresence>
        {mostrarResposta && (
          <motion.div
            className={styles.resposta}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <p className={styles.p}>{resposta}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
