interface ISendOtp {
    userName: string;
}
interface IVerifyOtp {
    otp: string;
}
interface IResetPw {
    password: string;
    cPassword: string;
}



export function sendOtpValidate(value: ISendOtp) {
    const errors = {};

    if (!value.userName) {
        // @ts-ignore
        errors.userName = "Required*";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.userName)) {
        // @ts-ignore
        errors.userName = "enter a valid email address!";
    }
    // console.log(errors)
    return errors;
}

export function verifyOtpValidate(value: IVerifyOtp) {
    const errors = {};
    if (!value.otp) {
        // @ts-ignore
        errors.otp = "Required*";
    } else if (value.otp.length < 6 || value.otp.length > 6) {
        // @ts-ignore
        errors.otp = "Invalid OTP!";
    }
    // console.log(errors)
    return errors;
}

export function resetPasswordValidate(value: IResetPw) {
    const errors = {};
    /***_______  Password    ________**/

    if (!value.password) {
        // @ts-ignore

        errors.password = "Required*";
    } else if (value.password.length < 8) {
        // @ts-ignore

        errors.password = "At-least 8 digit must!";
    }
    /***_______  Confirm password   ________**/

    if (!value.cPassword) {
        // @ts-ignore

        errors.cPassword = "Required*";
    } else if (value.cPassword.length < 8) {
        // @ts-ignore

        errors.cPassword = "At-least 8 digit must!";
    } else if (value.password !== value.cPassword) {
        // errors.password = "both password are not same!";
        // @ts-ignore

        errors.cPassword = "both password are not same!";
    }
    // console.log(errors)
    return errors;
}
