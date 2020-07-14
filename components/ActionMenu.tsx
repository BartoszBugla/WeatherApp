import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SVG from "../static/svg/svg";
import Burger from "./Burger";

const Container = styled.div`
    width: 100vw;
    height: 50px;
    display: flex;

    align-items: center;
    /* justify-content: center; */
    a:focus {
        svg {
            transform: scale(1.1);
            transition: all 0.5s ease;
        }
        outline: none;
    }
    svg {
        width: 40px;
        height: 40px;
        margin: 0 10px;
        path {
            transition: 0.5s ease-in;
            fill: ${(props) => (props.liked ? "#bc5a5a" : "white")};
        }
        * {
            fill: #bc5a5a;
        }
        &:hover {
            -webkit-filter: brightness(100%);
            transform: scale(1.1);
            transition: all 0.5s ease;
        }
    }
    p {
        padding: 2px;
    }
`;
const ActionMenu = ({ city }) => {
    const [isLiked, setIsLiked] = useState(false);
    let existing;
    useEffect(() => {
        existing = localStorage.getItem("likedCities");
        existing = existing ? existing.split(",") : [];
        existing.find((element) => {
            return element == city;
        })
            ? setIsLiked(true)
            : setIsLiked(false);
    }, [isLiked]);

    const like = () => {
        for (let item of existing) {
            if (item == city) {
                const index = existing.indexOf(city);
                if (index > -1) {
                    existing.splice(index, 1);
                }
                setIsLiked(!isLiked);
                localStorage.setItem("likedCities", existing.toString());
                return;
            }
        }
        existing.push(city);
        setIsLiked(!isLiked);

        localStorage.setItem("likedCities", existing.toString());
    };
    return (
        <Container liked={isLiked}>
            <a onClick={like} href="#">
                {" "}
                <SVG type="heart" />
            </a>

            <p>Like it </p>
        </Container>
    );
};

export default ActionMenu;
