const {createProxyMiddleware}=require('http-proxy-middleware')

module.exports=function(app){
    app.use(
        createProxyMiddleware('https://newsapi.org/v2/top-headlines?',{
          target:"http://127.0.0.1:3000",
          secure:false
            
        })
    );
};