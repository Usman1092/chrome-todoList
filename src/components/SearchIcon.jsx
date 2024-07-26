import React from "react";
import CleanForm from "./CleanForm";
import { Icon } from "react-icons-kit";
import { trash } from "react-icons-kit/feather/trash";
import { FaSearch } from "react-icons/fa";

const SearchIcon = () => {
  return (
    <CleanForm rightData={ <FaSearch   className="  mt-6"/>}>
    </CleanForm>
  );
};

export default SearchIcon;
