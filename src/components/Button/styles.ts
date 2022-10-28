/* eslint-disable eqeqeq */
import styled, { css } from 'styled-components';
import { IButtonStyled } from './types';

export const ButtonContainer = styled.button<IButtonStyled>`
    border-radius: 22px;
    position: relative;

    background: #565656;
    font-size: 1rem;
    color: white;

    padding: 2px 10px;
    min-width: 120px;
    width: 100%;

    cursor: pointer;

    ${({ margin }) => {
        if (margin) {
            return css`
                margin: ${margin};
            `;
        }
    }}

    ${({ variant }) =>
        variant != 'primary' &&
        css`
            min-width: 167px;
            height: 33px;

            background: #e4105d;

            &:hover {
                opacity: 0.5;
                cursor: pointer;
            }

            &&::after {
                content: '';
                position: absolute;
                border: 1px solid #e4105d;
                top: -5px;
                left: -6px;
                width: calc(100% + 10px);
                height: calc(100% + 10px);
                border-radius: 22px;
            }
        `}
`;
