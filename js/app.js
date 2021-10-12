if(navigator.serviceWorker){
    navigator.serviceWorker.register("/sw.js");
}
/*
    localhost
        test
        testv2
        cachev1

    josenarvaez.com
        test
        testv2
        cachev1
*/
/*
if(window.caches){
    console.log("You can use cache!");
    caches.open("test");
    caches.open("testv2");

    caches.has('test').then(console.log);

    caches.open('cachev1').then((cache)=>{
        //cache.add('/index.html')
        cache.addAll([
            '/index.html',
            '/css/page.css',
            '/img/nutria.png',
            'https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css'
        ]).then(()=>{
            //cache.delete('/css/page.css')
            //cache.put('index.html', new Response('Updated from cache'));
        });

        cache.match('index.html').then((res)=>{
            res.text().then((txt)=>{
                //console.log(txt);
            })
            
            //console.log(res);

        })



        
    });

    caches.keys().then((keys)=>{
        console.log(keys);
    })
}
*/