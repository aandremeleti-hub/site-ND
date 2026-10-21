import { useState, useEffect } from 'react';
import { Container } from '../../../../components/layout/Container';
import { ScrollReveal } from '../../../../components/ui/ScrollReveal';
import styles from './Journey.module.css';

import iconConhecer from '../../../../assets/iconConhecer.svg';
import iconCompatibilizar from '../../../../assets/iconCompatibilizar.svg';
import iconPlanejar from '../../../../assets/iconPlanejar.svg';
import iconSuprir from '../../../../assets/iconSuprir.svg';
import iconExecutar from '../../../../assets/iconExecutar.svg';
import iconControlar from '../../../../assets/iconControlar.svg';
import iconEntregar from '../../../../assets/iconEntregar.svg';

const steps = [
  { id: 1, icon: iconConhecer, title: 'DIAGNOSTICAR', desc: 'Briefing técnico e levantamento do imóvel: requisitos e restrições.' },
  { id: 2, icon: iconCompatibilizar, title: 'COMPATIBILIZAR', desc: 'Unificação dos projetos complementares e resolução de interferências no papel.' },
  { id: 3, icon: iconPlanejar, title: 'PLANEJAR', desc: 'Cronograma, orçamento e plano de ataque construídos sobre projeto já resolvido e mapeamento dos riscos.' },
  { id: 4, icon: iconSuprir, title: 'SUPRIR', desc: 'Seleção, contratação e cobrança de fornecedores dentro do padrão aprovado.' },
  { id: 5, icon: iconExecutar, title: 'EXECUTAR', desc: 'Mão de obra especializada sob supervisão técnica e medições periódicas.' },
  { id: 6, icon: iconEntregar, title: 'ENTREGAR', desc: 'Vistoria assistida, manual do proprietário e entrega do termo de recebimento de obra' },
  { id: 7, icon: iconControlar, title: 'MANTER', desc: 'Plano de manutenção preventiva com a periodicidade de cada sistema. A execução no primeiro ano pode ser contratada.' },
];

export function Journey() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [litIndex, setLitIndex] = useState(-1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        if (prev >= steps.length) {
          return -1;
        }
        return prev + 1;
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  // Sincroniza o acendimento do trio com a chegada do círculo
  useEffect(() => {
    if (activeIndex === -1) {
      setLitIndex(-1); // Apaga tudo imediatamente no reset
    } else if (activeIndex === 0) {
      setLitIndex(0); // O primeiro trio acende imediatamente pois o círculo não viaja (já está lá)
    } else {
      // Para os próximos, espera o tempo de transição do círculo (1s) para acender
      const timer = setTimeout(() => {
        setLitIndex(activeIndex);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [activeIndex]);

  const clampedIndex = Math.max(0, Math.min(activeIndex, steps.length - 1));
  const dotPosition = (clampedIndex / (steps.length - 1)) * 100;

  return (
    <section className={styles.journeySection}>
      <ScrollReveal>
        <Container>
          {/* Grupo 1: Header */}
          <div className={styles.headerGroup}>
            <div className={styles.titleWrapper}>
              <h2 className={styles.subtitle}>Padrão Dimensão</h2>
            </div>
          </div>
        </Container>
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <Container>
          {/* Grupo 2: Steps */}
          <div className={styles.stepsContainer}>
            <div className={styles.connectingLine}>
              <div
                className={styles.dot}
                style={{
                  left: `${dotPosition}%`,
                  opacity: activeIndex === -1 ? 0 : 1
                }}
              />
            </div>

            <div className={styles.stepsGrid}>
              {steps.map((step, index) => {
                const isActive = index <= litIndex;
                return (
                  <div key={step.id} className={`${styles.stepCard} ${isActive ? styles.active : ''}`}>
                    <div className={styles.iconWrapper}>
                      <img
                        src={step.icon}
                        alt=""
                        aria-hidden="true"
                        className={styles.iconImg}
                        loading="lazy"
                      />
                    </div>
                    <div className={styles.textContent}>
                      <h3 className={styles.stepTitle}>{step.title}</h3>
                      <p className={styles.stepDesc}>{step.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </ScrollReveal>
    </section>
  );
}
