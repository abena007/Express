const express = require ('express');   
const app = express ();                   
const port = 8080;                       
const d = new Date( Date.now());


app.use(
    function condition(req,res,next) {
        const day =d.getDay();
        const hour =d.getHours();
        if (((day >=2 && day<=6 )  && (hour >=9 && hour<=17 ) ) === false) {
        console.log ("close");
        
        res.sendFile(__dirname + '/project/closed.html');      
    
    }  
    
    else {
    next();
    }
    }  
); 
app.use(express.static('project'))


    app.listen(8080,(err)=>{
        err? console.log(err) : console.log(`Server running at:http://localhost:${port}/`)
    });     