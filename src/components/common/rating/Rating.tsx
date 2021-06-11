import React from "react";
import s from "./Rating.module.scss";
import Star from "../star/Star";

export const Rating = () => {

    return (
        <div className={s.rating}>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
        </div>
    );
};

export default Rating;