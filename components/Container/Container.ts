import styled from "@emotion/styled";

export const ContainerWrapper = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    width: 100%;
`

export const Container = styled('div')({
    padding: '0 30px',
    width: '100%',
    height: '100%',

    "@media (max-width: 1024)": {
        padding: '0 20px',
    },

    "@media (min-width: 1510)": {
        padding: '0',
    },
})