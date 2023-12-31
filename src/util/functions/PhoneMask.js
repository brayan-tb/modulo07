function PhoneMask(value) {
    if (!value) return "";
    value = value.substring(0, 15);
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d{2})(\d)/, "($1) $2");
    value = value.replace(/(\d)(\d{4})$/, "$1-$2");
    return value;
}

export default PhoneMask;