// Saves options to chrome.storage.sync.
function save_options() {
    var trollList = document.getElementById('trollList').value;
    var trollArray = trollList.replace(/\s/g, ",").split(/,/);
    var enabled = document.getElementById('blockerEnabled').checked;
    chrome.storage.sync.set({
        trolls: trollArray,
        blockerEnabled: enabled
    }, function () {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.textContent = 'Options saved. troll count:' + trollArray.length;
        setTimeout(function () {
            status.textContent = '';
        }, 750);
    });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
    chrome.storage.sync.get({
        trolls: [
            "Example_Troll_#1",
            "Example_Troll_#2",
            "Example_Troll_#3"
        ],
        blockerEnabled: true
    }, function (items) {
        var thingy = "";
        for (var i = 0, len = items.trolls.length; i < len; i++) {
            if (i != 0) thingy += "\n";
            thingy+= items.trolls[i];
        }
        document.getElementById('trollList').value = thingy;
        document.getElementById('blockerEnabled').checked = items.blockerEnabled;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
