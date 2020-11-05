function openNav(evt, navName) {
    // Declare all variables
    var i, navcontent, navlink;
  
    // Get all elements with class="tabcontent" and hide them
    navcontent = document.getElementsByClassName("navcontent");
    for (i = 0; i < navcontent.length; i++) {
        navcontent[i].style.display = "show";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    navlink = document.getElementsByClassName("navlink");
    for (i = 0; i < navlink.length; i++) {
        navlink[i].className = navlink[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(navName).style.display = "block";
    evt.currentTarget.className += " active";
  }