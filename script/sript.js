function showbar(){
    const labelsinputs = document.getElementById('barlabels').value;
    const valuesinputs = document.getElementById('barvalues').value;
    const myArray1 = labelsinputs.split(",");
    const myArray2 = valuesinputs.split(",");
    const numberArray = [];
    if(myArray1.length==myArray2.length)
    {
        length = myArray2.length;
        for (var i = 0; i < length; i++)
            numberArray.push(parseInt(myArray2[i]));
        document.getElementById("barchartdiv").style.display = "block";
        showplot(myArray1,numberArray,'bar','barchart');
    }
    else{
        alert("Number of labels must be equal to number of values");
    }
}

function showdoughnut(){
    const labelsinputs = document.getElementById('doughnutlabels').value;
    const valuesinputs = document.getElementById('doughnutvalues').value;
    const myArray1 = labelsinputs.split(",");
    const myArray2 = valuesinputs.split(",");
    const numberArray = [];
    if(myArray1.length==myArray2.length)
    {
        length = myArray2.length;
        for (var i = 0; i < length; i++)
            numberArray.push(parseInt(myArray2[i]));
        document.getElementById("doughnutchartdiv").style.display = "block";
        showplot(myArray1,numberArray,'doughnut','doughnutchart');
    }
    else{
        alert("Number of labels must be equal to number of values");
    }
}

function showpie(){
    const labelsinputs = document.getElementById('pielabels').value;
    const valuesinputs = document.getElementById('pievalues').value;
    const myArray1 = labelsinputs.split(",");
    const myArray2 = valuesinputs.split(",");
    const numberArray = [];
    if(myArray1.length==myArray2.length)
    {
        length = myArray2.length;
        for (var i = 0; i < length; i++)
            numberArray.push(parseInt(myArray2[i]));
        document.getElementById("piechartdiv").style.display = "block";
        showplot(myArray1,numberArray,'pie','piechart');
    }
    else{
        alert("Number of labels must be equal to number of values");
    }
}

function showline(){
    const labelsinputs = document.getElementById('linelabels').value;
    const valuesinputs = document.getElementById('linevalues').value;
    const myArray1 = labelsinputs.split(",");
    const myArray2 = valuesinputs.split(",");
    const numberArray = [];
    if(myArray1.length==myArray2.length)
    {
        length = myArray2.length;
        for (var i = 0; i < length; i++)
            numberArray.push(parseInt(myArray2[i]));
        document.getElementById("linechartdiv").style.display = "block";
        showplot(myArray1,numberArray,'line','linechart');
    }
    else{
        alert("Number of labels must be equal to number of values");
    }
}

function showpolar(){
    const labelsinputs = document.getElementById('polarlabels').value;
    const valuesinputs = document.getElementById('polarvalues').value;
    const myArray1 = labelsinputs.split(",");
    const myArray2 = valuesinputs.split(",");
    const numberArray = [];
    if(myArray1.length==myArray2.length)
    {
        length = myArray2.length;
        for (var i = 0; i < length; i++)
            numberArray.push(parseInt(myArray2[i]));
        document.getElementById("polarchartdiv").style.display = "block";
        showplot(myArray1,numberArray,'polarArea','polarchart');
    }
    else{
        alert("Number of labels must be equal to number of values");
    }
}

function showradar(){
    const labelsinputs = document.getElementById('radarlabels').value;
    const valuesinputs = document.getElementById('radarvalues').value;
    const myArray1 = labelsinputs.split(",");
    const myArray2 = valuesinputs.split(",");
    const numberArray = [];
    if(myArray1.length==myArray2.length)
    {
        length = myArray2.length;
        for (var i = 0; i < length; i++)
            numberArray.push(parseInt(myArray2[i]));
        document.getElementById("radarchartdiv").style.display = "block";
        showplot(myArray1,numberArray,'radar','radarchart');
    }
    else{
        alert("Number of labels must be equal to number of values");
    }
}

function showplot(lab,value,typeofplot,id) {
    const ctx = document.getElementById(id);
    new Chart(ctx, {
        type: typeofplot,
        data: {
        labels: lab,
        datasets: [{
            label: typeofplot+' Chart By VEDANT',
            data: value,
            backgroundColor:[
                '#FF0000',
                '#00FF00',
                '#FF69B4',
                '#FFA500',
                '#0000FF',
            ],
            borderWidth: 1
        }]
        },
        options: {
            scales: {
                y: {
                beginAtZero: true
                }
            }
            }
    });
}