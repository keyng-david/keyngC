// src/filters.js

export function numberFormat(value) {
    return new Intl.NumberFormat().format(value);
}

export function serverLinkFormat(url) {
    return `https://your-server-url/${url}`;
}

export function truncate(text, length) {
    if (text.length > length) {
        return text.substring(0, length) + '...';
    }
    return text;
}