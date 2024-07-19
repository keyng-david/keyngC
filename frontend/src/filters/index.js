// src/filters/index.js
export function numberFormat(value) {
    return new Intl.NumberFormat().format(value);
}

export function serverLinkFormat(link) {
    return `${process.env.VUE_APP_SERVER_URL}/${link}`;
}

export function truncate(text, length) {
    return text.length > length ? text.substring(0, length - 3) + '...' : text;
}