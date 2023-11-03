import styled from "styled-components";

export const SortStyle = styled.div`
    .sort-asc span,
    .sort-desc span {
        position: relative;
        margin-left: 5px;
    }

    .sort-asc span::before {
        content: "🔼";
    }

    .sort-desc span::before {
        content: "🔽";
    }
`;
