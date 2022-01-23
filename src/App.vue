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

#subtitle {
    font-size: 200%;
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
