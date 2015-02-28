trollDefaults = [
    "Example_Troll_#1",
    "Example_Troll_#2",
    "Example_Troll_#3"
];

function block() {
    chrome.storage.sync.get({
        trolls: trollDefaults,
        blockerEnabled: true
    }, function (items) {
        block2(items.trolls, items.blockerEnabled);
    });
}

function block2(trolls, enabled) {
    console.log("foo" + trolls);
    if (!enabled) {
        return;
    }
    nodes = document.getElementsByClassName("hnd");

    for (var i = 0; i < nodes.length; i++) {
        isTroll = trolls.filter(function (item) {
            return item == nodes[i].innerText
        }).length > 0;
        if (isTroll && btoa(nodes[i].innerText) != "Ul9GX0Y=") {
            who = nodes[i].innerText;
            indent = nodes[i].parentElement.parentElement.innerText.match(/(: \. \. )+/);
            if (indent == null) {
                indent = "&nbsp;";
                padding = "<a class=\"areaselector\"><span title=\"A troll is pwned.\">PWN</span></a>"
            } else {
                indent = indent[0];
                padding = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ";
            }
            nodes[i].parentElement.parentElement.innerHTML = padding + indent + "<i> troll (" + who + ") blocked</i>";

        }

    }
}

function setTrolls(trollArray) {
    trolls = trollArray;
}

function load_settings() {

}

block();
