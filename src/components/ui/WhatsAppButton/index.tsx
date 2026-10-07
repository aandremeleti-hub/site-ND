import styles from './WhatsAppButton.module.css';
import iconWhatsApp from '../../../assets/iconWhatsApp.svg';

export function WhatsAppButton() {
  const phoneNumber = '5511975202330';
  const message = 'Olá! Gostaria de saber mais sobre os serviços da Nova Dimensão Engenharia e Construtora.';
  const encodedMessage = encodeURIComponent(message);

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappButton}
      aria-label="Fale conosco pelo WhatsApp"
    >
      <img src={iconWhatsApp} alt="Ícone do WhatsApp" />
    </a>
  );
}
