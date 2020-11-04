import React, { useState } from "react";
import styled from "styled-components";

import Filter from "./filter.jsx";
import HeaderButtons from "./header-buttons.jsx";
import IssuesList from "./issues-list-section.jsx";

const StyledListDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: absolute;
    top: 180px;
`;

const StyledListHeader = styled.div`
    display: flex;
    justify-content: space-between;
    height: 30px;
    width: 1200px;
    margin-top: 20px;
`;

const IssueList = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        // TODO
        <StyledListDiv>
            <StyledListHeader>
                <Filter setIsOpen={setIsOpen}/>
                <HeaderButtons />
            </StyledListHeader>
            <IssuesList />
        </StyledListDiv>
    );
};

export default IssueList;
