function () {
    this.label = 'boat';
    this.xtopleft = 0;
    this.xtopright = 5;
    this.xbottomleft = 0.5;
    this.xbottomright = 4.5;
    this.mast=2.5;
    this.xaxisspeed=0;
    this.yaxisspeed=0;
    this.ytopleft=3;
    this.ytopright=3;
    this.ybottomright=2;
    this.ybottomleft=2;
    this.ytopmast=5;
    this.ymast=3;
    this.ytext=3.5
    this.ytext2=4;
    this.riverspeed=0;
    this.onSwipe[0] = ["Float right", function() {
        
        this.xaxisspeed+=0.01
        
    }];

    this.onSwipe[4] = ["Float left", function() {
        
        this.xaxisspeed-=0.01
        
    }];
    this.onSwipe[2] = ["Float up", function() {
        
        this.yaxisspeed+=0.01
    }];
   this.onSwipe[6] = ["Float down", function() {
        
       this.yaxisspeed-=0.01
    }];

	this.render = function () {
            this.xaxisspeed+=this.riverspeed
            this.xtopleft += this.xaxisspeed
            this.xtopright += this.xaxisspeed
            this.xbottomleft += this.xaxisspeed
            this.xbottomright += this.xaxisspeed
            this.mast +=this.xaxisspeed
            this.ytopleft+=this.yaxisspeed
            this.ytopright+=this.yaxisspeed
            this.ybottomleft+=this.yaxisspeed
            this.ybottomright+=this.yaxisspeed
            this.ymast+=this.yaxisspeed
            this.ytopmast+=this.yaxisspeed
            this.ytext+=this.yaxisspeed
            this.ytext2+=this.yaxisspeed
            mText(("X-Axis Speed:"+Math.round(this.xaxisspeed*100)).toString(),[this.xtopleft,this.ytext])
            mText(("Y-Axis Speed:"+Math.round(this.yaxisspeed*100)).toString(),[this.xtopleft,this.ytext2])
            var finalboatspeed= Math.sqrt((this.xaxisspeed-this.riverspeed)*(this.xaxisspeed-this.riverspeed)+(this.yaxisspeed)*(this.yaxisspeed))
            mText("Boat Speed:"+((finalboatspeed)*100).toFixed(2),[this.xtopleft,this.ytext2+0.5])
            mLine([this.xtopleft,this.ytopleft],[this.xtopright,this.ytopleft]); 
            mLine([this.xbottomleft,this.ybottomleft],[this.xbottomright,this.ybottomleft]);
            mLine([this.xtopleft,this.ytopleft],[this.xbottomleft,this.ybottomleft]);
            mLine([this.xtopright,this.ytopright],[this.xbottomright,this.ybottomright]);
            mLine([this.mast,this.ymast],[this.mast,this.ytopmast])
            this.xaxisspeed-=this.riverspeed
        
    }
    this.onIntersect = function(otherSketch) {
      
       
        if(otherSketch.flowingRight)
        {
            this.riverspeed=otherSketch.speed;
        }
        if(otherSketch.flowingLeft)
        {
            this.riverspeed= -(otherSketch.speed)
        }
    
      }
}  