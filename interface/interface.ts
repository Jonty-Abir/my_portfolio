import React from "react";

export interface IuserProps {
    _id: string;
    firstName: string;
    lastName: string;
    number: string;
    email: string;
    role: string;
    avatar: string;
    isValid: boolean;
    createdAt: Date,
    updatedAt: Date
};

export interface IProps {
    name?: string;
    user: IuserProps
    accessToken: string;
    refreshToken: string;
    isAuthenticate: boolean;
};
export interface IComponentProps {
    setCount: React.Dispatch<React.SetStateAction<number>>;

};
export interface ISendOtpPayload {
    userName: string;
}

export interface I_InitialValues {
    firstName: string;
    lastName: string;
    number: string;
    email: string;
}

interface IAuthor {
    id: number;
    name: string;
    img: string;
    designation: string;

}
export interface IPost {
    _id: string
    title: string;
    subtitle: string;
    category: string;
    img: string;
    description: string;
    published: string;
    author: IAuthor;
}

export enum UserRole {
    USER = "user",
    ADMIN = "admin",

};



export interface IBlog_payload {
    title: string;
    subtitle: string;
    category: string;
    description: string;
    published: string;
    authorName: string;
};