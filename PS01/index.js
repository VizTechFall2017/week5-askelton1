var svg = d3.select('svg')
    .append('g')
    .attr('transform','translate(100,100)');

document.body.style.backgroundImage = "url('http://www.raiznerlaw.com/wp-content/uploads/2016/09/bigstock-Black-smoke-cloud-series-26409170.jpg')";

var dataRec;
var dataMed;

var clicked = true;

d3.csv('./dataFinal.csv', function(dataIn) {
    console.log(dataIn);

    svg.selectAll('circle')
        .data(dataIn)
        .enter()
        .append('circle')
        .attr('cx', function(d){
            return scaleX(d.x)
        })
        .attr('cy', function(d){
            return scaleY(d.y)
        })
        .attr('r', 10);

    svg.append('g')
        .attr('transform','translate(0,540)')
        .call(d3.axisBottom(scaleX));

    svg.append('g')
        .call(d3.axisLeft(scaleY));

    svg.append('text')
        .text('The History of')
        .attr('transform','translate(300, -20)')
        .style('text-anchor','middle')
        .style('fill','green');

    svg.append('text')
        .attr('x',150)
        .attr('y',0)
        .attr('font-size',24)
        .text('Marijuana Laws Across the U.S.')
        .style('fill','green');

    svg.append('text')
        .attr('x',515)
        .attr('y',545)
        .attr('font-size',16)
        .text('YEAR')
        .style('fill','green');

    svg.append('text')
        .attr('x',-60)
        .attr('y',-15)
        .attr('font-size',16)
        .text('STATE')
        .style('fill','green');

    svg.selectAll('circles')
        .data(dataRec)
        .enter()
        .append('circle')
        .attr('r', 5)
        .attr('fill', "lime");

    svg.selectAll('circles')
        .data(dataMed)
        .enter()
        .append('circle')
        .attr('r', 5)
        .attr('fill', "green");


});

var scaleX = d3.scaleOrdinal().domain(["1930","1950", "1970", "1990", "2010","2030"]).range([0, 100, 200, 300, 400, 500]);
var scaleY = d3.scaleOrdinal().domain(["AL, Montgomery", "AK, Juneau", "AZ, Phoenix","AR, Little Rock",
    "CA, Sacramento", "CO, Denver", "CT, Hartford", "DE, Dover", "FL, Tallahassee",
    "GA, Atlanta", "HI, Honolulu", "ID, Boise", "IL, Springfield", "IN, Indianapolis",
    "IA, Des Moines", "KS, Topeka", "KY, Frankfort", "LA, Baton Rouge", "ME, Augusta",
    "MD, Annapolis", "MA, Boston", "MI, Lansing", "MN, St. Paul", "MS, Jackson",
    "MO, Jefferson City", "MT, Helena", "NE, Lincoln", "NV, Carson City", "NH, Concord",
    "NJ, Trenton", "NM, Santa Fe", "NY, Albany", "NC, Raleigh", "ND, Bismarck",
    "OH, Columbus", "OK, Oklahoma City", "OR, Salem", "PA, Harrisburg", "RI, Providence",
    "SC, Columbia", "SD, Sioux*", "SD, Pierre", "TN, Nashville", "TX, Austin",
    "UT, Salt Lake City", "VT, Montpelier", "VA, Richmond", "Washington DC", "WA, Olympia",
    "WA, Squaxin Island*", "WA, Suquamish*", "WV, Charleston", "WI, Madison",
    "WY, Cheyenne"]).range([0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200,
    210, 220, 230, 240, 250, 260, 270, 280, 290, 300, 310, 320, 330, 340, 350, 360, 370, 380, 390, 400, 410, 420, 430,
    440, 450, 460, 470, 480, 490, 500, 510, 520, 530, 540]);

    svg.selectAll('circles')
        .data(dataIn)
        .enter()
        .append('circle')
        .attr('class','Recreational')
        .attr('r', 5)
        .attr('fill', "green");

    svg.selectAll('circles')
        .data(dataIn)
        .enter()
        .append('circle')
        .attr('class','Medical')
        .attr('r', 5)
        .attr('fill', "lime");

    svg.selectAll('.Recreational')
        .data(pointsData)
        .attr('cx',function(d){
            return scaleX(d.state);
        })
        .attr('cy', function(d){
            return scaleY(d.state);
});




    //call the drawPoints function below, and hand it the data2016 variable with the 2016 object array in it
    /*drawPoints(state);

//this function draws the actual data points as circles. It's split from the enter() command because we want to run it many times
//without adding more circles each time.
function drawPoints(pointData){

    svg.selectAll('.w_dataPoints')  //select all of the circles with dataPoints class that we made using the enter() commmand above
        .data(pointData)          //re-attach them to data (necessary for when the data changes from 2016 to 2017)
        .attr('cx',function(d){   //look up values for all the attributes that might have changed, and draw the new circles
            return scaleX(d.age);
        })
        .attr('cy',function(d){
            return scaleY(d.women);
        });

    svg.selectAll('.m_dataPoints')  //do the same for the men's data series
        .data(pointData)
        .attr('cx',function(d){
            return scaleX(d.age);
        })
        .attr('cy',function(d){
            return scaleY(d.men);
        });
}

//this function runs when the HTML button is clicked.
function buttonClicked() {

    //check to see whether the tracker variable is true. If it is, use the 2017 data set
    if (clicked == true) {
        drawPoints(data2000);  //call the draw function again, to redraw the circles
        clicked = false;       //reset the value of the tracker variable
    }
    else {   //if the tracker variable is not true, use the 2016 data set
        drawPoints(data2016);
        clicked = true;
    }
}






/*var svg = d3.select('svg').append('g').attr('transform','translate(100,100)');

//set up variables to hold two versions of the data, one for each year
var dataRec;
var dataMed;

//set up a tracker variable to watch the button click state
var clicked = true;

//set up scales to position circles using the data

var scaleX = d3.scaleOrdinal().domain(["1930","1950", "1970", "1990", "2010","2030"]).range([0, 100, 200, 300, 400, 500]);
var scaleY = d3.scaleOrdinal().domain(["AL, Montgomery", "AK, Juneau", "AZ, Phoenix","AR, Little Rock",
    "CA, Sacramento", "CO, Denver", "CT, Hartford", "DE, Dover", "FL, Tallahassee",
    "GA, Atlanta", "HI, Honolulu", "ID, Boise", "IL, Springfield", "IN, Indianapolis",
    "IA, Des Moines", "KS, Topeka", "KY, Frankfort", "LA, Baton Rouge", "ME, Augusta",
    "MD, Annapolis", "MA, Boston", "MI, Lansing", "MN, St. Paul", "MS, Jackson",
    "MO, Jefferson City", "MT, Helena", "NE, Lincoln", "NV, Carson City", "NH, Concord",
    "NJ, Trenton", "NM, Santa Fe", "NY, Albany", "NC, Raleigh", "ND, Bismarck",
    "OH, Columbus", "OK, Oklahoma City", "OR, Salem", "PA, Harrisburg", "RI, Providence",
    "SC, Columbia", "SD, Sioux*", "SD, Pierre", "TN, Nashville", "TX, Austin",
    "UT, Salt Lake City", "VT, Montpelier", "VA, Richmond", "Washington DC", "WA, Olympia",
    "WA, Squaxin Island*", "WA, Suquamish*", "WV, Charleston", "WI, Madison",
    "WY, Cheyenne"]).range([0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200,
    210, 220, 230, 240, 250, 260, 270, 280, 290, 300, 310, 320, 330, 340, 350, 360, 370, 380, 390, 400, 410, 420, 430,
    440, 450, 460, 470, 480, 490, 500, 510, 520, 530, 540]);  //remember that 0,0 is at the top of the screen! 300 is the lowest value on the y axis


// Add the x Axis
svg.append("g")
    .attr('transform','translate(0,400)')  //move the x axis from the top of the y axis to the bottom
    .call(d3.axisBottom(scaleX));

svg.append("g")
    .call(d3.axisLeft(scaleY));


//import the data from the .csv file
d3.csv('./dataFinal.csv', function(dataIn){

    data2016 = dataIn.filter(function(d){
        return d.year == 2016;
    });

    data2000 = dataIn.filter(function(d){
        return d.year == 2000;
    });


    /*nestedData = d3.nest()
        .key(function(d){return d.year})
        .entries(dataIn);

    console.log(nestedData.filter(function(d){return d.key == "2016"})[0].values);
    */


/*svg.append('text')
    .text('The History of')
    .attr('transform','translate(300, -20)')
    .style('text-anchor','middle');

//bind the data to the d3 selection, but don't draw it yet*/






