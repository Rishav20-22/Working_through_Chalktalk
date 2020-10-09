function() {
    this.label = 'sadface';
    this.onSwipe[6] = ['cry', function() { this.isCry = ! this.isCry; }];
    
    this.render = function() {
       mDrawOval([-1,-1],[1,1],32,PI/2,PI/2-TAU);//drawing the facial outline
       mDrawOval([.6,-0.6],[-.6,-0.6],32,TAU*6/10,TAU*9/10);// drawing the mouth
       this.afterSketch(function() {
         
          if (this.isCry)
             {
               mDrawOval([-.8,-.2],[.2,.5],1,PI*.8,PI*.5);//left brow
               mDrawOval([-.5,.2],[-.3,.4],32,-PI,PI); //left eye
               mDrawOval([-.2,-.2],[.8,.5],1,PI*.5,PI*.2);//right brow
               mDrawOval([ .5,.2],[ .3,.4],32,-PI,PI);//right eye
               
               mLine([0.4,-.1],[0.4,-0.3]);//a simple crying animation
               mLine([-0.4,-.1],[-0.4,-0.3]);//a simple crying animation

             }
          else {
             mDrawOval([-.8,-.2],[.2,.5],1,PI*.8,PI*.5);//left brow
             mDrawOval([-.5,.2],[-.3,.4],32,-PI,PI); //left eye
             mDrawOval([-.2,-.2],[.8,.5],1,PI*.5,PI*.2);//right brow
             mDrawOval([ .5,.2],[ .3,.4],32,-PI,PI);//right eye
          }
       });
    }
 }
 
 