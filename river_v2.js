function() 
{
    this.xvar=0
    this.speed=0.05 //units

    this.label = 'river';   
    this.onSwipe[0] = ["Swipe Right", function() {
        this.flowingRight = ! this.flowingRight;
        if(this.flowingLeft)
        {
            this.flowingLeft = false
        }
        
    }];
    this.onSwipe[4] = ["Swipe Left", function() {
        this.flowingLeft = ! this.flowingLeft;
        if(this.flowingRight)
        {
            this.flowingRight = false
        }
        this.xvar= 3
    }];
    this.onSwipe[2] = ["Increase Speed", function() {
        this.speed+=0.01
        
    }];
    this.onSwipe[6] = ["Decrease Speed", function() {
        this.speed-=0.01
        
    }];


     this.render = function() 
    {
    mText("Speed="+(Math.round(this.speed*100)).toString()+"m/sec",[1,2])
    mLine([0,0],[3,0]) 
    mLine([0,1],[3,1]);
    
    if(this.flowingRight)
    {
       this.xvar+=this.speed
       if(this.xvar>2)
       {
           this.xvar= -0.4
       }
       for(var b=0.2;b<1;b+=0.2)
       {
           
            
        mLine([this.xvar+0.2,b],[this.xvar+0.6,b])
        mLine([this.xvar+0.8,b],[this.xvar+1.2,b])
        mLine([this.xvar+1.4,b],[this.xvar+1.8,b])
         
         
       }

       
    }
    
    if(this.flowingLeft)
    {

        this.xvar-=this.speed
        if(this.xvar<-1)
       {
           this.xvar= 3
       }
        for(var b=0.8;b>0.2;b-=0.2)
       {
           
            
        mLine([this.xvar+0.2,b],[this.xvar+0.6,b])
        mLine([this.xvar+0.8,b],[this.xvar+1.2,b])
        mLine([this.xvar+1.4,b],[this.xvar+1.8,b])
         
         
       }
        
    }
    }
}