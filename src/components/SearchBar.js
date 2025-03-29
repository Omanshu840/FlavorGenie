import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import * as Colors from "../css/colors";

const SearchBar = (props) => {

    const {
        placeholder = "Search by food name",
        onSearch = () => {},
        value,
        onChange = () => {}
    } = props;

    return (
        <InputGroup
            style={{
                backgroundColor: Colors.WHITE,
                boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "20px",
                padding: "5px 10px",
                maxWidth: "400px",
                margin: "20px 0px",
            }}
        >
            <FormControl
                type="text"
                placeholder={placeholder}
                style={{
                    border: "none",
                    outline: "none",
                    boxShadow: "none",
                    color: Colors.PR1,
                    background: "none",
                }}
                value={value}
                onChange={onChange}
            />
            <InputGroup.Text style={{ background: "none", border: "none" }} onClick={onSearch}>
                <Search color={Colors.PR1} size={20} />
            </InputGroup.Text>
        </InputGroup>
    );
};

export default SearchBar;
