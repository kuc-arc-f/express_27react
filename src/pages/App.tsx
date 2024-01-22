import * as React from 'react';

console.log("env=", process.env.NODE_ENV)
//
export function Csr() { 
    return (
    <html>
        <head>
            <title>welcome</title>
            {(process.env.NODE_ENV === "develop") ? (
                <link href="/static/style.css" rel="stylesheet" /> 
            ): (
                <link href="/public/static/style.css" rel="stylesheet" /> 
            )} 
        </head>
        <div id="root"></div>
        {(process.env.NODE_ENV === "develop") ? (
            <script type="module" src="/static/main.js"></script>
        ): (
            <script type="module" src="/public/static/main.js"></script>
        )}
    </html>
    );
}
/*
        <script type="module" src="/public/static/main.js"></script>
        {(process.env.NODE_ENV === "develop") ? (
            <link href="/static/style.css" rel="stylesheet" /> 
        ): (
            <link href="/public/static/style.css" rel="stylesheet" /> 
        )}
*/
