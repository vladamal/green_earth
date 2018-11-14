var tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");

selectDefaultTab('regularBtn');
function selectDefaultTab (tab) {
    evt = document.createEvent('Events');
    evt.initEvent('click', true, false);
    document.getElementById(tab).dispatchEvent(evt);
    return;
}

checkTabsResponsivenes();
function checkTabsResponsivenes () {
  tabcontent = document.getElementsByClassName("tabcontent");
  if (window.innerWidth < 600) {
    for (var i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "flex";
      if (tabcontent[i].className.includes('active') !== true) {
        tabcontent[i].className += ' active';
      }
    }
  } else {
    tabcontents = document.getElementsByClassName("tabcontent active");
    if (tabcontent.length > 1) {
      tablinks = document.getElementsByClassName("tablinks active");
      selectDefaultTab(tablinks[0].id);
    }
  }
}
window.onresize = function(event) {
  checkTabsResponsivenes();
};

function openTab(evt, tab) {  
  for (var i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    tabcontent[i].className = tabcontent[i].className.replace("active", "");
  }
  document.getElementById(tab).style.display = "flex";
  document.getElementById(tab).style.alignItems = "center";
  document.getElementById(tab).className += " active";
  
  tablinks = document.getElementsByClassName("tablinks");
  for (var i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  evt.currentTarget.className += " active";
}