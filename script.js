var clickedTime; var createdTime; var reactionTime;
        
        function makeBox() {
                   
            var time=Math.random();
            time=time*5000;
            
            setTimeout(function() {
                if (Math.random()>0.5) {
                    document.getElementById("boxOne").style.borderRadius="50px";
                } else {
                    document.getElementById("boxOne").style.borderRadius="0px";
                }
                var top=Math.random();
                top=top*300;
                var left=Math.random();
                left=left*300; 
                
                document.getElementById("boxOne").style.top=top+"px";
                document.getElementById("boxOne").style.left=left+"px";
                document.getElementById("boxOne").style.backgroundColor=getRandomColor();
                document.getElementById("boxOne").style.display="block";
                createdTime=Date.now();
            }, time);
        }
        
        function getRandomColor() {
            var letters="0123456789ABCDEF".split("");
            var color="#";
            for (var i=0; i<6; i++) {
                color+=letters[Math.round(Math.random()*15)];
            }
            return color;
        }
        
        document.getElementById("boxOne").onclick=function() {
            clickedTime=Date.now();
            reactionTime=(clickedTime-createdTime)/1000;         
            this.style.display="none";
            document.getElementById("time").innerHTML=reactionTime;
            makeBox();
        };
        
        makeBox();