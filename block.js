trolls = [
    "WorldwideStatement",
    "5pcChikenDnnr",
    "Lions_in_Snowjob",

];

function block() {
    nodes = document.getElementsByClassName("hnd");

    for (var i = 0; i < nodes.length; i++) {
        isTroll = trolls.filter(function (item) {  return item == nodes[i].innerText}).length > 0;
        if (isTroll) {
            who = nodes[i].innerText;
            nodes[i].parentElement.parentElement.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : . . : . . : <i> troll (" + who + ") blocked</i>";

        }

    }
}

block();