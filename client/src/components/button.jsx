import React from 'react';

/**
 * Proje genelinde kullanılacak yeniden kullanılabilir buton bileşeni.
 * @param {object} props - Bileşen props'ları
 * @param {React.ReactNode} props.children - Butonun içinde görünecek içerik (metin, ikon vb.).
 * @param {Function} props.onClick - Butona tıklandığında çalışacak fonksiyon.
 * @param {string} [props.className=''] - Ekstra Tailwind CSS sınıfları eklemek için.
 * @param {string} [props.type='button'] - Butonun tipi (button, submit, reset).
 */
const Button = ({ children, onClick, className = '', type = 'button', ...props }) => {
    // README'de belirtilen ortak stiller: kırmızı, beyaz yazılı, yuvarlak ve gölgeli.

    const baseStyles = 'bg-red-600 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75 transition-colors duration-200';

    return (
        <button type={type} onClick={onClick} className={`${baseStyles} ${className}`} {...props}>
            {children}
        </button>
    );
};

export default Button;
//  children prop'u ile buton metnini alır.
// onClick prop'u ile tıklama olayını yönetir.
// className prop'u ile gerektiğinde ek stil sınıfları eklemenize olanak tanır.
// ...props sayesinde disabled, type gibi standart HTML <button> özelliklerini de destekler.