self.addEventListener('install', (event)=>{
    console.log('SW: Instalado');
});

self.addEventListener('fetch', (event)=>{
    console.log('SW: Fetch');
    console.log(event.request.url);

    // const resOff = new Response(`
    //     <!DOCTYPE html>
    //     <html lang="en">
    //     <head>
    //         <meta charset="UTF-8">
    //         <meta http-equiv="X-UA-Compatible" content="IE=edge">
    //         <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //         <title>PWA Application</title>
    //     </head>
    //     <body>
    //         <h1>Welcome to offline page!</h1>
    //         <p>You have to be online to use the page.</p>
    //     </body>
    //     </html>
    // `,{headers:{'Content-Type':'text/html'}})

    // No carga porque no está en línea
    const resOffFile = fetch('pages/view-offline.html');

    const res = fetch(event.request).catch(()=>{
        console.log("There is an error in the request")
        return resOffFile;
    })


    
    event.respondWith(res)
});