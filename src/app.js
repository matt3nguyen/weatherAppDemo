let express = require('express');
let path = require('path')
let hbs = require('hbs');
let weather = require('./utils/weather');
let app = express();


let publicDirectory = path.join(__dirname, '../public');
console.log(publicDirectory)

let viewsDirectory = path.join(__dirname,'../templates/views')
let partialsDirectory = path.join(__dirname,'../templates/partials')



app.set('view engine', 'hbs');
app.use(express.static(publicDirectory));
app.set('views', viewsDirectory);
hbs.registerPartials(partialsDirectory);



app.get('',(req, res) => {
    res.render("index",
    {
        title: 'Home Page',
        name: 'Nguyen Thai',
        course:'CSC 174'
    }
    );
});
app.get('/about',(req, res) => {
    res.render("about",
    {
        title: 'About Page',
        name: 'Nguyen Thai',
        course:'CSC 174'
    }
    );
});
app.get('/help',(req, res) => {
    res.render("help",
    {
        title: 'Help Page',
        helpText:'FAQs',
        name: 'Nguyen Thai',
        course:'CSC 174'
    }
    );
});

app.get('/weather', (req,res) => {
    if(!req.query.city)
    {
        res.send({
            error:'you must provide a city'
        });
    }
    else
    {
        weather(req.query.city, (error, weatherData) =>
            {
                if(error)
                return res.send({error:error});
                else
                {
                    res.send({weather: weatherData})
                }
            }
        
        )
        // res.send({
        //     forecast: "47",
        //     location: req.query.city
        };
    });

app.get('/products', (req, res) => {
    if(!req.query.search)
    {
        res.send({
            error:'you must provide a search term'
        });
    }
    else
    {
        res.send({
            products: [ ]
        });
    }
    
});

app.get('/help/*', (req,res) => {
    res.render('4042', {
        error: "Page not found",
        errorType: "404 Help Article Error"
    }

    )
})

app.get('*', (req,res) => {
    res.render('4041', {
        error: "Page not found",
        errorType: "404 Error"
    }

    )
})

app.listen(3000,  () => {
    console.log('server is live on port 3000.')
});