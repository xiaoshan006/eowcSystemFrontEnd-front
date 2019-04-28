document.writeln("<!-- Javascript -->");
document.writeln("    <script type=\'text/javascript\' src=\'javascript/bootstrap.min.js\'></script>");
document.writeln("    <script type=\'text/javascript\' src=\'javascript/owl.carousel.js\'></script>");
document.writeln("    <script type=\'text/javascript\' src=\'javascript/jquery.flexslider-min.js\'></script>");
document.writeln("    <script type=\'text/javascript\' src=\'javascript/jquery.magnific-popup.min.js\'></script>");
document.writeln("    <script type=\'text/javascript\' src=\'javascript/jquery.sticky.js\'></script>");
document.writeln("    <script type=\'text/javascript\' src=\'javascript/jquery.easing.js\'></script>");
document.writeln("    <script type=\'text/javascript\' src=\'javascript/parallax.js\'></script>");
document.writeln("    <script type=\'text/javascript\' src=\'javascript/imagesloaded.min.js\'></script>");
document.writeln("    <script type=\'text/javascript\' src=\'javascript/jquery.isotope.min.js\'></script>");
document.writeln("    <script type=\'text/javascript\' src=\'javascript/jquery-waypoints.js\'></script>");
document.writeln("    <script type=\'text/javascript\' src=\'javascript/jquery.cookie.js\'></script>");
document.writeln("    <script type=\'text/javascript\' src=\'javascript/main.js\'></script>");
document.writeln("");
document.writeln("    <!-- Revolution Slider -->");
document.writeln("    <script type=\'text/javascript\' src=\'javascript/jquery.themepunch.tools.min.js\'></script>");
document.writeln("    <script type=\'text/javascript\' src=\'javascript/jquery.themepunch.revolution.min.js\'></script>");
document.writeln("    <script type=\'text/javascript\' src=\'javascript/slider.js\'></script>");
document.writeln("    <!-- 自定义 -->");

var href = window.location.href;
if (href.indexOf("index.html") != -1) {
    document.writeln("<script src=\'javascript/indexVue.js\'></script>");
}
if (href.indexOf("about.html") != -1) {
    document.writeln("<script src=\'javascript/aboutVue.js\'></script>");
}
if (href.indexOf("services.html") != -1) {
    document.writeln("<script src=\'javascript/servicesVue.js\'></script>");
}
if (href.indexOf("services-inspection.html") != -1) {
    document.writeln("<script src=\'javascript/serviceItemVue.js\'></script>");
}
if (href.indexOf("gallery.html") != -1) {
    document.writeln("<script src=\'javascript/galleryVue.js\'></script>");
}
if (href.indexOf("contact.html") != -1) {
    document.writeln("<script src=\'javascript/contactVue.js\'></script>");
}
if (href.indexOf("news.html") != -1) {
    document.writeln("<script src=\'javascript/newsVue.js\'></script>");
}

