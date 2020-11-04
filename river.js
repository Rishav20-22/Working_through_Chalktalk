function() {
    this.xvar=0
    this.speed=0.05
    this.label = 'river';   
    this.onSwipe[0] = ["Swipe right", function() {
        this.flowingRight = ! this.flowingRight;
        
    }];
    this.onSwipe[4] = ["", function() {
        this.flowingLeft = ! this.flowingLeft;
        
    }];
    
     this.render = function() 
    {
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
        
    }
    }
}