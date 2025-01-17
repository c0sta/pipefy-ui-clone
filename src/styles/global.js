import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap'); 

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        // Faz com que padding e margin nao ultrapassem o elemento
        box-sizing: border-box;
    }

    html, body, #root{
        height: 100%;
    }

    body{
        font: 14px 'Roboto', sans-serif;
        color: #333;
        background: #ecf1f8;

        //Deixa a font mais detalhada
        -webkit-font-smoothing: antialiased !important;
    }

    ul{
        list-style: none; 
    }
`;