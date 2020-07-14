import React from "react";
import styled from "styled-components";
import SVG from "../static/svg/svg";
const Container = styled.footer`
    width: 100%;
    /* background-color: grey; */
    font-size: calc(0.3vw + 13px);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.5vw 0;
    color: #bc5a5a;
    text-align: center;
    * {
        margin: 5px 2px;
    }
    a:hover {
        text-shadow: 0px 0px 5px #bc5a5a;
    }
    a:focus {
        svg {
            -webkit-filter: brightness(80%);
            transform: scale(1.1);
            transition: all 0.5s ease;
        }
        outline: none;
        text-shadow: 0px 0px 5px #bc5a5a;
    }
    svg {
        width: 40px;
        height: 40px;
        margin: 0 10px;
        * {
            fill: #bc5a5a;
        }
        &:hover {
            -webkit-filter: brightness(80%);
            transform: scale(1.1);

            transition: all 0.5s ease;
        }
    }
`;
const Footer = () => {
    return (
        <Container>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <p>
                    Website Made by
                    <a href="#">
                        <b> Bartosz Bugla </b>
                    </a>
                    Copyright© 2020
                </p>
                <a href="#">
                    <SVG type="instagram"></SVG>
                </a>
                <a href="#">
                    <SVG type="facebook"></SVG>
                </a>
                <a href="https://github.com/BartoszBugla">
                    <SVG type="github"></SVG>
                </a>
            </div>
            <div style={{ fontSize: "0.9rem" }}>
                Icons made by
                <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
                    <b>Freepik</b>
                </a>
                from
                <a href="https://www.flaticon.com/" title="Flaticon">
                    <b> www.flaticon.com</b>
                </a>
            </div>
        </Container>
    );
};
export default Footer;
