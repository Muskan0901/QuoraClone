function change() { 
        document.getElementById("BlackHouse").src='./Assets/RedHouse.png';
        document.getElementById("BlackHouse").style.border
        document.getElementById("BlackBell").src='./Assets/BlackBell.png';
        document.getElementById("BlackSpaces").src='./Assets/BlackSpaces.png';
        document.getElementById("BlackFollowing").src='./Assets/BlackFollowing.png';
        document.getElementById("BlackAns").src='./Assets/BlackAns.png';
        document.getElementById("BlackHouse").style.borderBottom = "1px solid red";
        document.getElementById("BlackBell").style.borderBottom = "none";
        document.getElementById("BlackSpaces").style.borderBottom = "none";
        document.getElementById("BlackFollowing").style.borderBottom = "none";
        document.getElementById("BlackAns").style.borderBottom = "none";
} 
function changeBell() { 
        document.getElementById("BlackBell").src='./Assets/RedBell.png';
        document.getElementById("BlackHouse").src='./Assets/BlackHouse.png';
        document.getElementById("BlackSpaces").src='./Assets/BlackSpaces.png';
        document.getElementById("BlackFollowing").src='./Assets/BlackFollowing.png';
        document.getElementById("BlackAns").src='./Assets/BlackAns.png';
        document.getElementById("BlackBell").style.borderBottom = "1px solid red";
        document.getElementById("BlackHouse").style.borderBottom = "none";
        document.getElementById("BlackSpaces").style.borderBottom = "none";
        document.getElementById("BlackFollowing").style.borderBottom = "none";
        document.getElementById("BlackAns").style.borderBottom = "none";
} 
function changeSpaces() { 
    document.getElementById("BlackSpaces").src='./Assets/RedSapces.png';
    document.getElementById("BlackBell").src='./Assets/BlackBell.png';
    document.getElementById("BlackHouse").src='./Assets/BlackHouse.png';
    document.getElementById("BlackFollowing").src='./Assets/BlackFollowing.png';
    document.getElementById("BlackAns").src='./Assets/BlackAns.png';
    document.getElementById("BlackSpaces").style.borderBottom = "1px solid red";
    document.getElementById("BlackHouse").style.borderBottom = "none";
    document.getElementById("BlackBell").style.borderBottom = "none";
    document.getElementById("BlackFollowing").style.borderBottom = "none";
    document.getElementById("BlackAns").style.borderBottom = "none";
} 
function changeFollowing() { 
    document.getElementById("BlackFollowing").src='./Assets/RedFollowing.png';
    document.getElementById("BlackBell").src='./Assets/BlackBell.png';
    document.getElementById("BlackSpaces").src='./Assets/BlackSpaces.png';
    document.getElementById("BlackHouse").src='./Assets/BlackHouse.png';
    document.getElementById("BlackAns").src='./Assets/BlackAns.png';
    document.getElementById("BlackFollowing").style.borderBottom = "1px solid red";
    document.getElementById("BlackHouse").style.borderBottom = "none";
    document.getElementById("BlackSpaces").style.borderBottom = "none";
    document.getElementById("BlackBell").style.borderBottom = "none";
    document.getElementById("BlackAns").style.borderBottom = "none";
} 
function changeAnswering() { 
    document.getElementById("BlackAns").src='./Assets/RedAnswer.png';
    document.getElementById("BlackBell").src='./Assets/BlackBell.png';
    document.getElementById("BlackSpaces").src='./Assets/BlackSpaces.png';
    document.getElementById("BlackFollowing").src='./Assets/BlackFollowing.png';
    document.getElementById("BlackHouse").src='./Assets/BlackHouse.png';
    document.getElementById("BlackAns").style.borderBottom = "1px solid red";
    document.getElementById("BlackHouse").style.borderBottom = "none";
    document.getElementById("BlackSpaces").style.borderBottom = "none";
    document.getElementById("BlackFollowing").style.borderBottom = "none";
    document.getElementById("BlackBell").style.borderBottom = "none";
} 

function nochange()
{
    document.getElementById("inputNochange").style.outline="none";
}