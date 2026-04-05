const WHATSAPP_NUMBER = "6281234567890"; // Replace with actual WhatsApp number

/**
 * Generate a WhatsApp URL with a pre-filled message
 */
export function getWhatsAppUrl(message = "") {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

/**
 * Generate WhatsApp URL for a product order
 */
export function getOrderWhatsAppUrl(productName, quantity = 1) {
  const message = `Hi! I'd like to order:\n\n` +
    `📦 Product: ${productName}\n` +
    `📊 Quantity: ${quantity}\n\n` +
    `Could you please confirm availability and price? Thank you! 😊`;
  return getWhatsAppUrl(message);
}

/**
 * Generate WhatsApp URL from a full order form
 */
export function getFormOrderWhatsAppUrl(formData) {
  const message = `Hi! I'd like to place an order:\n\n` +
    `👤 Name: ${formData.name}\n` +
    `📱 Phone: ${formData.phone}\n` +
    `📦 Product: ${formData.product}\n` +
    `📊 Quantity: ${formData.quantity}\n` +
    `📅 Delivery Date: ${formData.date}\n` +
    (formData.notes ? `📝 Special Notes: ${formData.notes}\n` : '') +
    `\nThank you! 😊`;
  return getWhatsAppUrl(message);
}

/**
 * Generate WhatsApp URL from contact form
 */
export function getContactWhatsAppUrl(formData) {
  const message = `Hi! I'd like to inquire:\n\n` +
    `👤 Name: ${formData.name}\n` +
    `📧 Email: ${formData.email}\n` +
    `📋 Subject: ${formData.subject}\n` +
    `💬 Message: ${formData.message}\n\n` +
    `Thank you! 😊`;
  return getWhatsAppUrl(message);
}

export default {
  getWhatsAppUrl,
  getOrderWhatsAppUrl,
  getFormOrderWhatsAppUrl,
  getContactWhatsAppUrl,
};
