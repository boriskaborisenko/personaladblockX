const url = window.location.href.split('/')[2]
const color = '#1d1d1d'
const pic = 'http://s1.picswalls.com/wallpapers/2015/09/27/latest-naruto-wallpaper_104041951_274.jpg'

if(url === 'animego.org'){
    document.querySelector('main').style.display = "none";
    document.querySelector('nav').style.display = "none";
    document.querySelector('footer').style.display = "none";
    document.querySelector('#wrap').style.cssText = `background:transparent; width:100%; position:relative;`;
    document.querySelector('.text-player-gray').style.visibility = 'hidden';
    document.querySelector('.social-likes').style.display = 'none';
    document.querySelector('.text-white').innerHTML = '«Naruto»'
    document.querySelector('.text-white').style.cssText = 'color:rgba(255,255,255,0.8)!important;'
    

    setTimeout(()=>{
        document.querySelector('.video-player-bg').style.cssText = `background:transparent;`
        document.querySelector('.video-player-side').style.cssText = `opacity:0.4;`
        document.querySelector('.video-player-bar').style.cssText = `opacity:0.6; background:${color};`
        document.querySelector('.video-player-main').style.cssText = `position:relative;`
        document.querySelector('.video-player-online').style.cssText = `background:${color}`
        document.querySelector('.video-player').style.cssText = `background:transparent`
        document.querySelector('body').style.cssText = `background:${color} url(${pic}) center center no-repeat fixed; background-size:cover; `;


        const styles = document.querySelectorAll('style')
        styles.forEach((s,index)=>{
            if(index === 2){
                s.innerHTML = `
                
    #video-watch {
        position: relative;
        background: transparent;
    }
    #video-watch:before,
    #video-watch:after {
        content: '';
        position: absolute;
        background: transparent;
        width: 100%;
        height: 100%;
        top: 0;
    }
    #video-watch:before {
        left: -100%;
    }
    #video-watch:after {
        left: 100%;
    }
                `
            }
            
        })

        const rows = document.querySelectorAll('.row')
        rows.forEach((row,index) => {
            if(index === 6){
                row.style.display='none'
            }
        })
    
    },1500)
    
    
    const junk = document.querySelectorAll('.content')
    junk.forEach((j, index)=>{
       j.style.display = 'none'
    })
}
