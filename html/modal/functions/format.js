export function formatMoney(value) {
    const amount = Number(value || 0);
    return '$' + amount.toLocaleString();
}

export function setText(selector, value) {
    const element = document.querySelector(selector);

    if (!element) return;

    element.innerText = value;
}

export function setImage(selector, value) {
    const element = document.querySelector(selector);

    if (!element) return;

    element.src = value;
}
