// window.onload = () => {
    function show_hide(a) {
        let element = document.getElementById(a);
        
        if(this.innerHTML === 'Show more') {
            $(element).show(500);
            this.innerHTML = 'Show less';
        } else {
            $(element).hide(500);
            this.innerHTML = 'Show more';
        }
    }
    

    
    function barclick() {
        var baricon = document.getElementById("icon");
        var closebtn = document.getElementById("close");
        var navbar = document.getElementById('nav-bar');
        navbar.style.width = '100%';
        baricon.style.display = 'none';
        closebtn.style.display = 'block';
    }
    function closeclick() {
        var baricon = document.getElementById("icon");
        var closebtn = document.getElementById("close");
        var navbar = document.getElementById('nav-bar');
        navbar.style.width = '0';
        baricon.style.display = 'block';
        closebtn.style.display = 'none';
    }

// }




    
