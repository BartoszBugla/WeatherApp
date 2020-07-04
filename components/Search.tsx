import React, { useState } from "react";
import Router from "next/router";
import styled from "styled-components";
import SubmitButton from "./SubmitButton";
import FormItem from "./formItem";
import Menu from "./Menu";
const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
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
        margin: 10px 5px;
    }
    form {
        display: flex;
        flex-direction: row;
        align-items: center;

        * {
            margin: 0 5px;
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
        </Container>
    );
};
export default Search;
