import React from "react";
import { Header } from "./Header/Header";
import { RecordTable } from "./Table/RecordTable";

export const Home = () => {
    return (
        <div>
            <Header />
            <RecordTable />
        </div>
    );
};
