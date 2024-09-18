import i18n from "../i18n";

export const isValidPhoneNumber = (phoneNumber) => {
    const regex = /^(1-?)?(\([0-9]\d{2}\)|[0-9]\d{2})-?[0-9]\d{2}-?\d{4}$/;
    if (typeof phoneNumber === 'string') {

        if (phoneNumber.length === 0) {
            return {
                valid: false,
                message: i18n.t("Validation.ValidPhoneNumber"),
            };
        }

        else if (phoneNumber.length < 10) {
            return {
                valid: false,
                message: i18n.t("Validation.Digits"),
            };
        }
        else if (!regex.test(phoneNumber)) {
            return {
                valid: false,
                message: i18n.t("Validation.ValidPhoneNumber"),
            }
        } else {
            return {
                valid: true,
                message: "",
            };
        }
    } else {
        return {
            valid: false,
            message: i18n.t("Validation.Format"),
        };
    }
};
export const isValidEmail = (email) => {
    const regex = /^[A-Za-z0-9+_.-]+@(.+)$/;
    if (typeof email === 'string') {
        if (email.length === 0) {
            return {
                valid: false,
                message: "Please enter an email address",
            };
        } else if (!regex.test(email)) {
            return {
                valid: false,
                message: "Please enter a valid email address",
            };
        } else {
            return {
                valid: true,
                message: "",
            };
        }
    } else {
        return {
            valid: false,
            message: "Invalid Format",
        };
    }
};