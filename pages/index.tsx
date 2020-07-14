import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import FavouriteCities from "../components/FavouriteCities";

const index = ({ popular = [] }) => {
    const [liked, setLiked] = useState([]);
    useEffect(() => {
        let existing = localStorage.getItem("likedCities");
        setLiked(existing ? existing.split(",") : []);
        console.log(liked);
    }, []);

    popular = ["Berlin", "New York ", "Los Angeles ", "Amsterdam", "Warszawa"];
    return (
        <Layout title="Welcome to Weather App">
            <div style={{ flex: 1 }}>
                <FavouriteCities text="Cities You liked" data={liked} />
                <FavouriteCities text="Some popular cities" data={popular} />
            </div>
        </Layout>
    );
};

export default index;
