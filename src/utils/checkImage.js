// utils/checkImage.js
export const checkImage = (url) => {
    return new Promise((resolve) => {
        if (!url) return resolve(false); // لو مفيش url

        const img = new Image();
        img.src = url;

        img.onload = () => resolve(true); // الصورة شغالة
        img.onerror = () => resolve(false); // الصورة فشلت
    });
};