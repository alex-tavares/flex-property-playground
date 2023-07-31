import { useEffect, useRef, useState } from "react";
import { useDimensions } from "./hooks";
import produce from "immer";
import styled from "styled-components";

const CSS_TRANSITION_DELAY = 300;

const initialState = {
  a: { name: "A", shrink: 1, grow: 0, basis: "100px" },
  b: { name: "B", shrink: 1, grow: 0, basis: "100px" },
  c: { name: "C", shrink: 1, grow: 0, basis: "100px" }
};

export default function App() {
  const containerRef = useRef(null);
  const [inputsState, setInputsState] = useState(initialState);
  const [dimensions, updateDimensions] = useDimensions(containerRef);
  const { container, elements } = dimensions;

  useEffect(() => {
    setTimeout(() => {
      updateDimensions();
    }, CSS_TRANSITION_DELAY + 100);
  }, [inputsState, updateDimensions]);

  return (
    <div>
      <Container ref={containerRef}>
        <Box
          color="hotpink"
          shrink={inputsState.a.shrink}
          grow={inputsState.a.grow}
          basis={inputsState.a.basis}
        >
          <strong>{inputsState.a.name}</strong>
        </Box>
        <Box
          color="lightsalmon"
          shrink={inputsState.b.shrink}
          grow={inputsState.b.grow}
          basis={inputsState.b.basis}
        >
          <strong>{inputsState.b.name}</strong>
        </Box>
        <Box
          color="lightblue"
          shrink={inputsState.c.shrink}
          grow={inputsState.c.grow}
          basis={inputsState.c.basis}
        >
          <strong>{inputsState.c.name}</strong>
        </Box>
      </Container>
      <div style={{ marginBottom: 20 }}>
        {`Container Width: ${container?.currentWidth}px`}{" "}
      </div>
      <StyledTable>
        <thead>
          <StyledRow>
            <StyledHeader>Element</StyledHeader>
            <StyledHeader>Shrink</StyledHeader>
            <StyledHeader>Grow</StyledHeader>
            <StyledHeader>Basis</StyledHeader>
            <StyledHeader>Current Width</StyledHeader>
            <StyledHeader>Base Width</StyledHeader>
            <StyledHeader>Difference</StyledHeader>
          </StyledRow>
        </thead>
        <tbody>
          <StyledRow>
            <StyledCell align="center">
              <TextInput
                value={inputsState.a.name}
                onChange={({ target }) => {
                  setInputsState(
                    produce(inputsState, (draft) => {
                      draft.a.name = target.value;
                    })
                  );
                }}
              />
            </StyledCell>
            <StyledCell align="center">
              <NumberInput
                value={inputsState.a.shrink}
                onChange={({ target }) => {
                  setInputsState(
                    produce(inputsState, (draft) => {
                      draft.a.shrink = target.value;
                    })
                  );
                }}
              />
            </StyledCell>
            <StyledCell align="center">
              <NumberInput
                value={inputsState.a.grow}
                onChange={({ target }) => {
                  setInputsState(
                    produce(inputsState, (draft) => {
                      draft.a.grow = target.value;
                    })
                  );
                }}
              />
            </StyledCell>
            <StyledCell align="center">
              <BasisSelect
                value={inputsState.a.basis}
                onChange={({ target }) => {
                  setInputsState(
                    produce(inputsState, (draft) => {
                      draft.a.basis = target.value;
                    })
                  );
                }}
              />
            </StyledCell>
            <StyledCell align="right">
              {elements?.dimensions[0].currentWidth}
            </StyledCell>
            <StyledCell align="right">
              {elements?.dimensions[0].initialWidth}
            </StyledCell>
            <StyledCell align="right">
              {elements?.dimensions[0].difference}
            </StyledCell>
          </StyledRow>
          <StyledRow>
            <StyledCell align="center">
              <TextInput
                value={inputsState.b.name}
                onChange={({ target }) => {
                  setInputsState(
                    produce(inputsState, (draft) => {
                      draft.b.name = target.value;
                    })
                  );
                }}
              />
            </StyledCell>
            <StyledCell align="center">
              <NumberInput
                value={inputsState.b.shrink}
                onChange={({ target }) => {
                  setInputsState(
                    produce(inputsState, (draft) => {
                      draft.b.shrink = target.value;
                    })
                  );
                }}
              />
            </StyledCell>
            <StyledCell align="center">
              <NumberInput
                value={inputsState.b.grow}
                onChange={({ target }) => {
                  setInputsState(
                    produce(inputsState, (draft) => {
                      draft.b.grow = target.value;
                    })
                  );
                }}
              />
            </StyledCell>
            <StyledCell align="center">
              <BasisSelect
                value={inputsState.b.basis}
                onChange={({ target }) => {
                  setInputsState(
                    produce(inputsState, (draft) => {
                      draft.b.basis = target.value;
                    })
                  );
                }}
              />
            </StyledCell>
            <StyledCell align="right">
              {elements?.dimensions[1].currentWidth}
            </StyledCell>
            <StyledCell align="right">
              {elements?.dimensions[1].initialWidth}
            </StyledCell>
            <StyledCell align="right">
              {elements?.dimensions[1].difference}
            </StyledCell>
          </StyledRow>
          <StyledRow>
            <StyledCell align="center">
              <TextInput
                value={inputsState.c.name}
                onChange={({ target }) => {
                  setInputsState(
                    produce(inputsState, (draft) => {
                      draft.c.name = target.value;
                    })
                  );
                }}
              />
            </StyledCell>
            <StyledCell align="center">
              <NumberInput
                value={inputsState.c.shrink}
                onChange={({ target }) => {
                  setInputsState(
                    produce(inputsState, (draft) => {
                      draft.c.shrink = target.value;
                    })
                  );
                }}
              />
            </StyledCell>
            <StyledCell align="center">
              <NumberInput
                value={inputsState.c.grow}
                onChange={({ target }) => {
                  setInputsState(
                    produce(inputsState, (draft) => {
                      draft.c.grow = target.value;
                    })
                  );
                }}
              />
            </StyledCell>
            <StyledCell align="center">
              <BasisSelect
                value={inputsState.c.basis}
                onChange={({ target }) => {
                  setInputsState(
                    produce(inputsState, (draft) => {
                      draft.c.basis = target.value;
                    })
                  );
                }}
              />
            </StyledCell>
            <StyledCell align="right">
              {elements?.dimensions[2].currentWidth}
            </StyledCell>
            <StyledCell align="right">
              {elements?.dimensions[2].initialWidth}
            </StyledCell>
            <StyledCell align="right">
              {elements?.dimensions[2].difference}
            </StyledCell>
          </StyledRow>
          <StyledRow>
            <StyledCell>Total</StyledCell>
            <StyledCell align="center">-</StyledCell>
            <StyledCell align="center">-</StyledCell>
            <StyledCell align="center">-</StyledCell>
            <StyledCell align="right">{elements?.currentTotalWidth}</StyledCell>
            <StyledCell align="right">{elements?.initialTotalWidth}</StyledCell>
            <StyledCell align="right">{elements?.difference}</StyledCell>
          </StyledRow>
        </tbody>
      </StyledTable>
    </div>
  );
}

const BasisSelect = (props) => (
  <select {...props}>
    <option value="auto">auto</option>
    <option value="0px">0px</option>
    <option value="50px">50px</option>
    <option value="100px">100px</option>
    <option value="150px">150px</option>
    <option value="200px">200px</option>
    <option value="250px">250px</option>
    <option value="300px">300px</option>
  </select>
);

const Container = styled.div`
  display: flex;
  height: 200px;
  width: 500px;
  /* background-color: lightgray; */
  border: 5px dashed #aaa;
  resize: horizontal;
  overflow: auto;
  margin-bottom: 10px;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ color }) => color};
  flex-grow: ${({ grow }) => grow};
  flex-shrink: ${({ shrink }) => shrink};
  flex-basis: ${({ basis }) => basis};
  transition: all ${CSS_TRANSITION_DELAY}ms;
`;

const StyledTable = styled.table`
  width: calc(100vw - 50px);
  max-width: 700px;
`;

const StyledRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }

  &:last-child {
    background-color: #115f9a;
    color: white;
  }
`;

const StyledHeader = styled.th`
  padding: 5px;
  text-align: left;
  background-color: lightblue;
  color: white;

  &:nth-child(n + 2):nth-child(-n + 4) {
    background-color: #48b5c4;
  }

  &:nth-child(n + 5) {
    background-color: #22a7f0;
  }

  &:last-child {
    background-color: #1984c5;
  }
`;

const StyledCell = styled.td`
  text-align: ${({ align }) => align};
`;

const Input = styled.input``;

const TextInput = styled(Input).attrs(() => ({
  type: "text"
}))`
  font-weight: bold;
  width: 80px;
`;

const NumberInput = styled(Input).attrs(() => ({
  type: "number",
  min: 0
}))`
  text-align: right;
  width: 40px;
`;
