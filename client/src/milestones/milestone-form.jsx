import React from "react";
import styled from "styled-components";

const NewMilestoneDiv = styled.div`
  float: left;
`;

const StyledTitleInput = styled.input`
    width: 440px;
    height: 20px;
`;

const StyledDueDateInput = styled.input`
    width: 440px;
    height: 20px;
`;

const StyledDescriptionTextarea = styled.textarea`
    width: 50%;
    height: 200px
`;

export default function MilestoneForm(props) {
    const titleChangeHandler = (event) => {
        props.setTitle(event.target.value);
    }

    const dateChangeHandler = (event) => {
        props.setDate(event.target.value);
    }

    const descChangeHandler = (event) => {
        props.setDescription(event.target.value);
    }

    return (
        <NewMilestoneDiv className="App">
            <h5 style={{ marginBlockEnd: "5px" }}>Title</h5>
            <StyledTitleInput placeholder="Title" onChange={titleChangeHandler} value={props.title}></StyledTitleInput>
            <h5 style={{ marginBlockEnd: "5px" }}>Due Date (optional)</h5>
            <StyledDueDateInput type="date" onChange={dateChangeHandler} value={props.date}></StyledDueDateInput>
            <h5 style={{ marginBlockEnd: "5px" }}>Description (optional)</h5>
            <StyledDescriptionTextarea
                cols="30"
                rows="10"
                value={props.description}
                onChange={descChangeHandler}
            ></StyledDescriptionTextarea>
        </NewMilestoneDiv>
    );
}
