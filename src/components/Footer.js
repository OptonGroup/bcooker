import React from "react";
import {ReactComponent as Home} from "../temp/home.svg";
import {ReactComponent as Saved} from "../temp/saved.svg";
import {ReactComponent as Profile} from "../temp/profile.svg";

export const Footer = () => {
    return (
        <div id="footer" className="d-flex justify-content-evenly">
            <a href="/"><Home/></a>
            <a href="/save"><Saved/></a>
            <a href="/profile"><Profile/></a>
        </div>
    )
};