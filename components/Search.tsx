import React, { useState, useEffect } from "react";
import Router from "next/router";
import styled from "styled-components";
import SubmitButton from "./SubmitButton";
import FormItem from "./formItem";
import Menu from "./Menu";
import Burger from "./Burger";

const Container = styled.div`
    width: 100%;
    display: flex;

    align-items: center;
    padding-bottom: 20px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
    flex-wrap: wrap;
    justify-content: center;
    z-index: 5;
    header {
        text-align: center;
    }
    * {
        margin: 3px 5px;
    }
    form {
        display: flex;
        flex-direction: row;
        align-items: center;

        * {
            margin: 2px 10px;
        }
    }
    @media (max-width: 800px) {
        flex-direction: column;
        * {
            margin: 2px 0px;
        }
        header {
            font-size: 0.8rem;
        }
    }
    @media (max-width: 800px) {
        header {
            font-size: 0.6rem;
        }
    }
`;

const Search = () => {
    const [search, setSearch] = useState();
    const handleSubmit = (e) => {
        e.preventDefault();
        e.persist();
        Router.push({
            pathname: `/result`,
            query: { cityName: search },
        });
    };

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    return (
        <Container>
            <header>
                <h1>Weather App with External API</h1>
            </header>
            <Menu />
            <form onSubmit={handleSubmit}>
                <FormItem value={search} onChange={handleChange} />

                <SubmitButton>Search</SubmitButton>
            </form>
            <Burger />
        </Container>
    );
};
export default Search;
