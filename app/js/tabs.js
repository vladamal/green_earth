var tabcontent, tablinks;
tabcontent = document.getElementsByClassName("tab-content-wrapper");

selectDefaultTab("regularBtn");

function selectDefaultTab(tab) {
    var myevent = document.createEvent("Events");
    myevent.initEvent("click", true, false);
    document.getElementById(tab).dispatchEvent(myevent);
    return true;
}

checkTabsResponsivenes();

function checkTabsResponsivenes() {
    tabcontent = document.getElementsByClassName("tab-content-wrapper");
    if (window.innerWidth < 600) {
        for (var i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "flex";
            if (tabcontent[i].className.includes("active") !== true) {
                tabcontent[i].className += " active";
            }
        }
    } else {
        tabcontent = document.getElementsByClassName("tab-content-wrapper active");
        if (tabcontent.length > 1) {
            tablinks = document.getElementsByClassName("tablinks active");
            selectDefaultTab(tablinks[0].id);
        }
    }
}

window.onresize = function (event) {
    checkTabsResponsivenes();
};

function openTab(evt, tab) {
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tabcontent[i].className = tabcontent[i].className.replace("active", "");
    }
    document.getElementById(tab).style.display = "flex";
    // document.getElementById(tab).style.alignItems = "center";
    document.getElementById(tab).className += " active";

    tablinks = document.getElementsByClassName("tablinks");
    for (var j = 0; j < tablinks.length; j++) {
        tablinks[j].className = tablinks[j].className.replace(" active", "");
    }
    evt.currentTarget.className += " active";
}