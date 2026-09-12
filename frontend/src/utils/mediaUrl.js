/**
 * Resolves media URLs uploaded to the backend or hosted statically.
 *
 * @param {string} url - The URL or relative path of the media asset.
 * @returns {string} Fully resolved media URL.
 */
export const getMediaUrl = (url) => {
  if (!url || typeof url !== 'string') return '';
  const trimmed = url.trim();
  if (
    trimmed.startsWith('http://') ||
    trimmed.startsWith('https://') ||
    trimmed.startsWith('blob:') ||
    trimmed.startsWith('data:')
  ) {
    return trimmed;
  }
  if (trimmed.startsWith('/uploads/') || trimmed.startsWith('uploads/')) {
    const backendBase = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';
    const cleanUrl = trimmed.startsWith('/') ? trimmed : `/${trimmed}`;
    return `${backendBase.replace(/\/$/, '')}${cleanUrl}`;
  }
  return trimmed;
};

export default getMediaUrl;
