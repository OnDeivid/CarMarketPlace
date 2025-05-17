function dateNormalization(dateString: string): string {
    const dateTimePattern = /^(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2})/;
    const match = dateString.match(dateTimePattern);

    if (match) {
        return match[2] + "h / " + match[1];
    }
    return dateString
}
export default dateNormalization