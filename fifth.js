// This is a simple game about choices(or questions) and consequences (or answers) 
var live = prompt("Do you live for LOVE, PIECE or FIGHT?").toUpperCase();

switch (live) {

    case 'LOVE':
        var loveSomeone = prompt("Do you love someone? YES or NO?").toUpperCase();

        var loveDie = prompt("Do you think you die for this person? YES or NO?").toUpperCase();

        if (loveSomeone && loveDie === "YES") {
            console.log("yeah, me too... we can talk about love!")
        } else {
            console.log("so, how you can talk about love if you don't really love someone?")
        }
        break;

    case 'PIECE':
        var pieceGood = prompt("Piece is like the good for everybody, right? Answer YES or NO").toUpperCase();
        var pieceFight = prompt("Do you fight for piece?").toUpperCase();
        if (pieceGood || pieceFight === "YES") {
            console.log("so, this is a contradition. piece is a lie!")
        } else {
            console.log("so, if there's piece, it will be relative!")
        }
        break;

    case 'FIGHT':
        console.log("fight for what? LOVE or PIECE?");
        break;

    default:
        console.log("It's ok, people just pretend that they know...")

}