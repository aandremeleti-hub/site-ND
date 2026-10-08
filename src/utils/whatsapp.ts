export function openWhatsApp(message: string) {
  const phoneNumber = '5511975202330';
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank', 'noopener,noreferrer');
}
