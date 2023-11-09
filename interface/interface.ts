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
  createdAt: string;
  updatedAt: string;
}

export interface IProps {
  name?: string;
  user: IuserProps;
  accessToken: string;
  refreshToken: string;
  isAuthenticate: boolean;
}
export interface IComponentProps {
  setCount: React.Dispatch<React.SetStateAction<number>>;
}
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
  _id: string;
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
}

export interface IBlog_payload {
  title: string;
  subtitle: string;
  category: string;
  description: string;
  published: string;
  authorName: string;
}

export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

interface ICommentUser {
  likedBlog: [string];
  likedComment: [string];
  likedReply: [string];
  _id: string;
  avatar: string;
  firstName: string;
  lastName: string;
  email: string;
  number: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  __v: 0;
  blogIds: string[];
  id: string;
}
export interface IComment {
  _id: string;
  likes: number;
  body: string;
  userId: ICommentUser;
  blogId: {
    _id: string;
    commentIds: string[];
    likes: number;
    title: string;
    subtitle: string;
    category: string;
    img: string;
    description: string;
    published: string;
    author: {
      name: string;
      img: string;
      designation: string;
      _id: string;
    };
    userId: string;
  };
  replyIds: [
    {
      _id: string;
      body: string;
      commentId: string;
      userId: ICommentUser;
      likes: number;
      createdAt: string;
      updatedAt: string;
    }
  ];
  createdAt: string;
  updatedAt: string;
}
