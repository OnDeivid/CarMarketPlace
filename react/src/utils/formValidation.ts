
const regexPatterns: Record<string, RegExp> = {
    phoneNumber: /^\d{9}$/,
    number: /^\d{9}$/,
    year: /^(19[0-9]{2}|20[0-9]{2})$/,
    mileage: /^\d{1,7}(?:,\d{3})?\s?(?:km|mi)?$/,
    price: /^(?:[$€£]?[\d]{1,3}(?:,\d{3})*|\d+)(?:\.\d{1,2})?\s?(?:USD|EUR|GBP|BGN|JPY)?$/,
    currency: /^(USD|EUR|BGN|)$/
};
const errorMessages: Record<string, string> = {
    phoneNumber: "Invalid Bulgarian phone number",
    username: "Invalid username. It must contain at least 2 characters.",
    number: "Invalid Bulgarian phone number",
    year: "Invalid year. Must be between 1900 and 2099.",
    mileage: "Invalid mileage. Example: '12000'",
    price: "Invalid price.",
    currency: "Invalid currency."
}


const validateField = (fieldName: string, errorMessage: string, initialValue: any, errors: Record<string, string>): void => {
    const value = initialValue[fieldName];

    if (regexPatterns[fieldName] && typeof value === 'string' && value.trim() !== '') {
        if (typeof initialValue[fieldName] == 'string' && !regexPatterns[fieldName]?.test(initialValue[fieldName])) {
            errors[fieldName] = errorMessage
        } else {
            delete errors[fieldName];
        }
    }
    if (initialValue[fieldName]?.trim().length < 2) {
        errors[fieldName] = errorMessage
    }
}
const validatePassword = (values: Record<string, string>, errors: Record<string, string>) => {
    const { password, rePassword } = values;
    if (password && rePassword) {
        if (password !== rePassword && rePassword.trim()) {
            errors.rePassword = 'Password mismatch';
        } else {
            delete errors.rePassword;
        }
    } else {
        delete errors.rePassword;
    }
}
export default function formValidation<T>(initialValue: T) {
    var errors: Record<string, string> = {};

    for (const key in initialValue) {
        
        key != 'profileIcon' ?
            validateField(key, errorMessages[key], initialValue, errors) : null
    }
    validatePassword(initialValue as Record<string, string>, errors)
    let error = { ...errors }
    return error
}