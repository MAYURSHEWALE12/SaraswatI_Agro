// Contact Numbers
export const WA_NUMBER_RAW = "9552398974";
export const WA_NUMBER_FULL = "919552398974"; // format: country_code + number
export const PHONE_PRIMARY = "+919552398974";
export const PHONE_SECONDARY = "+919921937353";
export const PHONE_PRIMARY_DISPLAY = "9552398974";
export const PHONE_SECONDARY_DISPLAY = "9921937353";

// Contact Details
export const CONTACT_EMAIL = "saraswatiargofeeds@gmail.com";
export const ADDRESS_TAKALKARWADI_MR = "टाकळकरवाडी, राजगुरूनगर, जि. पुणे – 410505";
export const ADDRESS_TAKALKARWADI_EN = "Takalkarwadi, Rajgurunagar, Dist. Pune – 410505";

// Common Pexels Image URLs
export const PEXELS_COW_PORTRAIT = "https://images.pexels.com/photos/735968/pexels-photo-735968.jpeg?auto=compress&cs=tinysrgb&w=900&h=900&fit=crop";
export const PEXELS_COW_GRAZING = "https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&fit=crop";

// Common pre-filled WhatsApp texts
export const WA_PREFILLED_INQUIRY_TEXT = "नमस्कार, मला सरस्वती ॲग्रो फीड्सच्या पशुखाद्य उत्पादनांबद्दल अधिक माहिती हवी आहे.";
export const WA_PREFILLED_INQUIRY_TEXT_EN = "Hello, I want to know more about Saraswati Agro Feeds cattle feed products.";

// Shared WhatsApp inquiry link generator
export const getWhatsAppInquiryUrl = (textMr = WA_PREFILLED_INQUIRY_TEXT, textEn = WA_PREFILLED_INQUIRY_TEXT_EN) => {
  return `https://wa.me/${WA_NUMBER_FULL}?text=${encodeURIComponent(textMr)}`;
};
