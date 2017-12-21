window.addEventListener('load',function(){
    let canvas = document.querySelector('canvas');
    let ctx = canvas.getContext('2d');
    let right = document.querySelectorAll('.right>li');
    let palette = new Palette(canvas);

    right.forEach(e =>{
        let type = e.id;
        e.onclick = function(){
            right.forEach(obj=>{
                obj.classList.remove('hot');
            });
            e.classList.add('hot');
            if(type == 'poly' || type == 'polyJ'){
                let ang = prompt('请输入变数或角数');
                palette[type](ang);
            }else{
                palette[type]();
            }
        }
    });
    palette.line();
    palette.pencil();
    palette.circle();
    palette.rectangle();
    palette.poly();
    palette.polyJ();
});
/*直线 虚线 铅笔 圆形 矩形 多边形 多角形 */