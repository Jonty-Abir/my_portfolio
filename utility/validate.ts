
interface obj {
    firstName: string;
    lastName: string;
    number: string;
    email: string;
    password: string;
    cPassword: string;
}



export function formikValidateHandlerSignUp(value: obj) {
    const errors = {};
    /***_______  firstName    ________**/
    if (!value.firstName) {
        // @ts-ignore
        errors.firstName = "Required*";
    }
    /***_______  lastName    ________**/
    if (!value.lastName) {
        // @ts-ignore

        errors.lastName = "Required*";
    }
    /***_______  Mobile    ________**/
    if (!value.number) {
        // @ts-ignore

        errors.number = "Required*";
    } else if (!/^(\+\d{1,3}[- ]?)?\d{10}$/.test(value.number)) {
        // @ts-ignore

        errors.number = "invalid mobile no!";
    }
    /***_______  email   ________**/

    if (!value.email) {
        // @ts-ignore

        errors.email = "Required*";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.email)) {
        // @ts-ignore

        errors.email = "enter a valid email address!";
    }
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

/***_______     ________**/

interface loginPayload {
    userName: string;
    pw: string;
}


export function formikValidateHandlerSignIn(value: loginPayload) {
    const errors = {};


    /***_______  userName    ________**/

    if (!value.userName) {
        // @ts-ignore
        errors.userName = "Required*";
    }

    /***_______  Password    ________**/

    if (!value.pw) {
        // @ts-ignore

        errors.pw = "Required*";
    }
    // else if (value.pw.length < 8) {
    //     // @ts-ignore

    //     errors.pw = "At-least 8 digit must!";
    // }
    // console.log(errors);
    return errors;
};

interface IUpdateClientPayload {
    firstName: string;
    lastName: string;
    number: string;
    email: string;
}

export function clientUpdateValidate(value: IUpdateClientPayload) {
    const errors = {};
    /***_______  firstName    ________**/

    if (!value.firstName) {
        // @ts-ignore
        errors.firstName = "Required*";
    }
    /***_______  lastName    ________**/

    if (!value.lastName) {
        // @ts-ignore

        errors.lastName = "Required*";
    }
    /***_______  Mobile    ________**/

    if (!value.number) {
        // @ts-ignore

        errors.number = "Required*";
    } else if (!/^(\+\d{1,3}[- ]?)?\d{10}$/.test(value.number)) {
        // @ts-ignore

        errors.number = "invalid mobile no!";
    }
    /***_______  email   ________**/

    if (!value.email) {
        // @ts-ignore

        errors.email = "Required*";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.email)) {
        // @ts-ignore

        errors.email = "enter a valid email address!";
    }

    // console.log(errors)
    return errors;
}


interface formikObj {
    firstName: string;
    lastName: string;
    contactNumber: string;
    contactEmail: string;
    message: string;
}

export function contactUsFromValidation(value: formikObj) {
    const errors = {};
    /***_______  firstName    ________**/

    if (!value.firstName) {
        // @ts-ignore
        errors.firstName = "Required*";
    }
    /***_______  lastName    ________**/

    if (!value.lastName) {
        // @ts-ignore

        errors.lastName = "Required*";
    }
    /***_______  Mobile    ________**/

    if (!value.contactNumber) {
        // @ts-ignore

        errors.contactNumber = "Required*";
    } else if (!/^(\+\d{1,3}[- ]?)?\d{10}$/.test(value.contactNumber)) {
        // @ts-ignore

        errors.contactNumber = "invalid mobile no!";
    }
    /***_______  email   ________**/

    if (!value.contactEmail) {
        // @ts-ignore

        errors.contactEmail = "Required*";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.contactEmail)) {
        // @ts-ignore

        errors.contactEmail = "enter a valid email address!";
    }
    if (!value.message) {
        // @ts-ignore

        errors.message = "Required*";
    }

    // console.log(errors)
    return errors;
};