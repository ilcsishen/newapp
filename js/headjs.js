document.writeln("<div class=\"head\" id=\"head\">");
document.writeln("        <div class=\"head_inner\">");
document.writeln("                <div class=\"logo\" id=\"logo\">");
document.writeln("                        <a href=\"index.html\">");
document.writeln("                                <img src=\"css/image/logo.svg\" alt=\"回首頁\">");
document.writeln("                        </a>");
document.writeln("                </div>");
document.writeln("                <div class=\"menu_all\">");
document.writeln("                        <ul class=\"menu\">");
document.writeln("                                <li><a href=\"aboutme.html\">About me</a> </li>");
document.writeln("                                <li><a href=\"webworks.html\">Website Works</a> </li>");
document.writeln("                                <li><a href=\"logoworks.html\">Logo Works</a> </li>");
document.writeln("                                <li><a href=\"project.html\">Project Works</a> </li>");
document.writeln("                                <li><a href=\"page3.html\">User Flow</a></li>");
document.writeln("                                <li><a href=\"page3.html\">HTML WOrks</a></li>");
document.writeln("                        </ul>");
document.writeln("                        <a href=\"#\" class=\"showmenu\">");
document.writeln("                                <i class=\"fas fa-bars\"></i>");
document.writeln("                        </a>");
document.writeln("                </div>");
document.writeln("        </div>");
document.writeln("</div>");
document.writeln("");
document.writeln("");


$( document ).ready(function() {

$('.showmenu').on('click',  function(e){
    e.preventDefault();
    $('body').toggleClass('menu-show');
});


});