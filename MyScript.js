const gambitGalleryIsInView = el => {
    const scroll = window.scrollY || window.pageYOffset
    
    const boundsTop = el.getBoundingClientRect().top + scroll

    const viewport = {
        top: scroll,
        bottom: scroll + window.innerHeight,
    }
    
    const bounds = {
        top: boundsTop+220,
        bottom: boundsTop + el.clientHeight,
    }
    
    return ( bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom ) 
        || ( bounds.top <= viewport.bottom && bounds.top >= viewport.top );
}


// Usage.
    document.addEventListener( 'DOMContentLoaded', () => {
        var box = document.getElementsByClassName('img'); 
        const handler = () => raf( () => {
            var i;
            var x = document.getElementById("C-L");
            for (i = 0; i < box.length; i++) {
                box[i].style.transform=gambitGalleryIsInView(box[i]) ? "scale(1.1)":"scale(0.8)";
                if (window.getComputedStyle(x).display != "none") {
                    box[i].style.opacity =gambitGalleryIsInView(box[i]) ? "1":"0.3";   
                }
            }
        } )
        
        handler()
        window.addEventListener( 'scroll', handler )
    } )

// requestAnimationFrame
const raf = 
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function( callback ) {
        window.setTimeout( callback, 1000 / 60 )
    }