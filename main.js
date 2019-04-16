

document.getElementById('getData').addEventListener('click', getTheData)

function getTheData() {
    console.log('This button was pressed.. here is your data')


let routes;
let results = fetch('https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=37.727839&lon=-83.635396&maxDistance=100&minDiff=5.6&maxDiff=5.14&key=200424196-5fdf40349774a101d0c0d762b625f5b1');
    results.then(
        function(x) {
        return x.json();
        }
    )
    .then(function(data){
        //routes = y;
        let routes =
        ` `
        console.log(data.routes);
        data.routes.map(function(n){
            routes += `
                <li>${n.strRoute}</li>
            `
        })
        
            
        console.log(routes.length);
        //console.log(count);
        document.getElementById('myRoutes').innerHTML = routes

    })

}