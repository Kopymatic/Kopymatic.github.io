<template>
    <router-view />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Balsamiq+Sans&family=Press+Start+2P&family=Rock+Salt&display=swap");

/* unvisited link */
a:link {
    color: white;
    text-decoration: underline;
}

/* visited link */
a:visited {
    color: white;
}

/* mouse over link */
a:hover {
    color: rgb(212, 3, 29);
}

/* selected link */
a:active {
    color: rgb(212, 3, 29);
}

a.no-underline {
    text-decoration: none;
}

.invisiblelink {
    text-decoration: none;
}

button {
    font-size: medium;
    font-family: "Balsamiq Sans", cursive;
    border-color: rgb(212, 3, 29);
    border-width: 4px;
    border-style: groove;
    border-radius: 16px;
    width: 90%;
    height: 90%;
    transition-duration: 0.4s;
    background-color: rgb(48, 48, 48);
    color: white;
}

#logo {
    color: rgb(212, 3, 29);
    font-family: "Rock Salt", cursive;
    font-size: 300%;
}

button:hover {
    background-color: black;
    width: 95%;
    height: 95%;
}

#subtitle {
    font-size: 200%;
}

#carin-buttons {
    height: 100%;
    padding: 5px 100px;
    display: grid;
    grid-gap: 20px;
    grid-auto-rows: 1fr;
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
}

.center {
    text-align: center;
}

html {
    font-size: large;
    background-color: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
    font-family: "Balsamiq Sans", cursive;
    /* text-align: center; */
}
</style>
