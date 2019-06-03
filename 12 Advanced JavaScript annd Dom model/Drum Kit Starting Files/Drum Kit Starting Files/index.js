var n = document.querySelectorAll(".drum").length;
for (var i = 0; i < n; ++i)
    document.querySelectorAll(".drum")[i].addEventListener("click", onclick);

function onclick() {
    alert("I got clicked");
}