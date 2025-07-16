const isoTimeFormat = (isoTime) => {
    // "14:30" gibi bir zaman dizesi bekliyoruz.
    if (!isoTime || typeof isoTime !== 'string' || !isoTime.includes(':')) {
        // Geçersiz veya beklenmedik format için boş bir dize döndür.
        return '';
    }

    const [hour, minute] = isoTime.split(':');
    const hourInt = parseInt(hour, 10);

    const ampm = hourInt >= 12 ? 'PM' : 'AM';
    let formattedHour = hourInt % 12;
    if (formattedHour === 0) {
        formattedHour = 12; // 00:xx (gece yarısı) ve 12:xx (öğlen) durumlarını ele al
    }

    const paddedHour = formattedHour < 10 ? `0${formattedHour}` : formattedHour;

    return `${paddedHour}:${minute} ${ampm}`;
};

export default isoTimeFormat;

