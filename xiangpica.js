class Palette{
    constructor(canvas){
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.history = [];
    }
    line(){
        let that = this;
        that.canvas.onmousedown = function(e){
            let ox = e.offsetX,oy = e.offsetY;
            that.canvas.onmousemove = function(e){
                let mx = e.offsetX,my = e.offsetY;
                that.ctx.clearRect(0,0,800,800);
                if(that.history.length){
                    that.ctx.putImageData(that.history[that.history.length-1],0,0);
                }
                that.ctx.beginPath();
                that.ctx.moveTo(ox,oy);
                that.ctx.lineTo(mx,my);
                that.ctx.stroke();
            };
            that.canvas.onmouseup = function(){
                that.history.push(that.ctx.getImageData(0,0,that.canvas.width,that.canvas.height));
                that.canvas.onmousemove = null;
                that.canvas.onmouseup = null;
            }
        };
        window.onkeydown = function(e){
            if(e.ctrlKey && e.key == 'z'){
                if(that.history.length){
                    if (that.history.length>0){
                        that.ctx.putImageData(that.history[that.history.length-1],0,0);
                    }
                    let date = that.history.pop();
                    that.ctx.putImageData(date,0,0);
                }
            }
        };
    }
    pencil(){
        let that = this;
        that.canvas.onmousedown = function(e){
            let ox = e.offsetX,oy = e.offsetY;
            that.ctx.beginPath();
            that.ctx.moveTo(ox,oy);
            that.canvas.onmousemove = function(e){
                let mx = e.offsetX,my = e.offsetY;
                that.ctx.clearRect(0,0,800,800);
                if(that.history.length){
                    that.ctx.putImageData(that.history[that.history.length-1],0,0);
                }
                that.ctx.lineTo(mx,my);
                that.ctx.stroke();
            };
            that.canvas.onmouseup = function(){
                that.history.push(that.ctx.getImageData(0,0,that.canvas.width,that.canvas.height));
                that.canvas.onmousemove = null;
                that.canvas.onmouseup = null;
            }
        }
    }
    circle(){
        let that = this;
        that.canvas.onmousedown = function(e){
            let ox = e.offsetX,oy = e.offsetY;
            that.canvas.onmousemove = function(e){
                that.ctx.clearRect(0,0,800,800);
                that.ctx.beginPath();
                let mx = e.offsetX,my = e.offsetY;
                let r = Math.sqrt(Math.pow(mx-ox,2) + Math.pow(my-oy,2));
                if(that.history.length){
                    that.ctx.putImageData(that.history[that.history.length-1],0,0);
                }
                that.ctx.arc(mx,my,r,0,Math.PI*2);
                that.ctx.stroke();
            };
            that.canvas.onmouseup = function(){
                that.history.push(that.ctx.getImageData(0,0,that.canvas.width,that.canvas.height));
                that.canvas.onmousemove = null;
                that.canvas.onmouseup = null;
            }
        };
    }
    rectangle(){
        let that = this;
        that.canvas.onmousedown = function(e){
            let ox = e.offsetX,oy = e.offsetY;
            that.canvas.onmousemove = function(e){
                let mx = e.offsetX,my = e.offsetY;
                that.ctx.clearRect(0,0,800,800);
                if(that.history.length){
                    that.ctx.putImageData(that.history[that.history.length-1],0,0);
                }
                that.ctx.beginPath();
                that.ctx.moveTo(ox,oy);
                that.ctx.lineTo(mx,my);
                that.ctx.closePath();
                that.ctx.strokeRect(ox,oy,mx-ox,my-oy);
            };
            that.canvas.onmouseup = function(e){
                that.history.push(that.ctx.getImageData(0,0,that.canvas.width,that.canvas.height));
                that.canvas.onmousemove = null;
                that.canvas.onmouseup = null;
            }
        }
    }
    poly(ang){
        let that = this;
        that.canvas.onmousedown = function(e){
            let ox = e.offsetX,oy = e.offsetY;
            that.canvas.onmousemove = function(e){
                let mx = e.offsetX,my = e.offsetY;
                let r = Math.sqrt(Math.pow(mx-ox,2) + Math.pow(my-oy,2));
                that.ctx.clearRect(0,0,800,800);
                if(that.history.length){
                    that.ctx.putImageData(that.history[that.history.length-1],0,0);
                }
                move(r,ox,oy);
            };
            that.canvas.onmouseup = function(e){
                that.history.push(that.ctx.getImageData(0,0,800,800));
                that.canvas.onmousemove = null;
                that.canvas.onmouseup = null;
            };
            function  move(r,ox,oy,num = ang){
                let jiaodu = Math.PI * 2 / num;
                that.ctx.beginPath();
                that.ctx.moveTo(ox+r,oy);
                for(let i = 0;i < num;i++){
                    let x = ox + r * Math.cos(jiaodu * i);
                    let y = oy + r * Math.sin(jiaodu * i);
                    that.ctx.lineTo(x,y);
                }
                that.ctx.closePath();
                that.ctx.stroke();
            }
        }
    }
    polyJ(ang){
        let that = this;
        that.canvas.onmousedown = function(e){
            let ox = e.offsetX,oy = e.offsetY;
            that.canvas.onmousemove = function(e){
                let mx = e.offsetX,my = e.offsetY;
                let r = Math.sqrt(Math.pow(mx-ox,2) + Math.pow(my-oy,2));
                let r1 = r/3;
                that.ctx.clearRect(0,0,800,800);
                if(that.history.length){
                    that.ctx.putImageData(that.history[that.history.length-1],0,0);
                }
                move(r,r1,ox,oy);
            };
            that.canvas.onmouseup = function(e){
                that.history.push(that.ctx.getImageData(0,0,800,800));
                that.canvas.onmousemove = null;
                that.canvas.onmouseup = null;
            };
            function move(r,r1,ox,oy,num=ang){
                that.ctx.clearRect(0,0,that.cw,that.ch

                )
                let a = Math.PI / num;
                that.ctx.beginPath();
                that.ctx.moveTo(ox+r,oy);
                let x,y;
                for(let i = 0;i < num*2;i++){
                    if(i%2==0){
                        x = ox + r * Math.cos(a * i);
                        y = oy + r * Math.sin(a * i);
                    }else{
                        x = ox + r1 * Math.cos(a * i);
                        y = oy + r1 * Math.sin(a * i);
                    }
                    that.ctx.lineTo(x,y);
                }
                that.ctx.closePath();
                that.ctx.stroke();
            }
        }

    }
}
