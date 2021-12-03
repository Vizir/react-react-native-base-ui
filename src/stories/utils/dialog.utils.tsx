import React from "react";
import styled from "styled-components";
import {
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@naturacosmeticos/natds-web";

export const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-end;
  justify-content: center !important;
`;

export const ActionContentSample = (): JSX.Element => {
  return (
    <ContainerWrapper>
      <Button color="primary" variant="text">
        Disagree
      </Button>
      <Button color="primary" variant="text">
        Agree
      </Button>
    </ContainerWrapper>
  );
};

export const DialogContentSample = (): JSX.Element => {
  return (
    <RadioGroup>
      <FormControlLabel control={<Radio />} label="Option 1" value="option-1" />
      <FormControlLabel control={<Radio />} label="Option 2" value="option-2" />
    </RadioGroup>
  );
};
