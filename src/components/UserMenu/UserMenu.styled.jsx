import styled from '@emotion/styled';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

export const Username = styled.p`
    font-weight: 700;
`;

export const ButtonLogOut = styled.button`
    padding: 4px 8px;
    border-radius: 2px;
    background-color: #3f51b5;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    text-align: center;
    display: block;
    margin-left: 10px;
    margin-right: 15px;
    color: #fff;
    border: 0;
    border-radius: 8px;
    text-decoration: none;
    cursor: pointer;
    font-family: inherit;
    font-size: 18px;
    line-height: 24px;
    font-style: normal;
    font-weight: 400;
    min-width: 80px;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

        :hover,
        :focus {
            background-color: #303f9f;
        }
`;
