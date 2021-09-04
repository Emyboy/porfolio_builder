import React from "react";
export interface JumbotronType {
  _id: string;
  type: string;
  css: string;
  markup: string;
  index: number;
  display_name: string;
  container_style: React.CSSProperties | null;
  heading: string;
  sub_heading: string;
  heading_style: React.CSSProperties | null;
  sub_heading_style: React.CSSProperties | null;
  has_avatar: boolean;
  avatar_style: React.CSSProperties | null;
  body_style: React.CSSProperties | null;
  description: string;
  avatar_container_style: React.CSSProperties | null;
  avatar_url: string,
  linkedin?: string;
  twitter?: string;
  facebook?: string;
  skype?: string;
  github?: string;
  dribble?: string;
  instagram?: string;
  website?: string;
  social_icon_size?: number | string;
}