let eStores = {
    init: function () {
        this.sidebar();
        this.dropdowns();
        this.readBarCode();
        this.charts();
    },
    sidebar: function () {
        let navLink = document.querySelectorAll('.nav-menu_item');
        for (let item of navLink) {
            item.addEventListener('click', function (event) {
                event.preventDefault();
                // this.nextElementSibling.classList.remove('active');
                // this.previousElementSibling.classList.remove('active');
                this.classList.toggle('active');
            })
        }
        // toggle sidebar
        const navButton = document.querySelector('.nav-button');
        const sideNav = document.querySelector('.nav');
        navButton.addEventListener('click', (event) => {
            event.preventDefault();
            sideNav.classList.toggle('active');
        });
    },
    dropdowns: function () {
        let dropdownToggle = document.querySelectorAll('.dropdown-toggle');
        let target;
        for (let item of dropdownToggle) {
            item.addEventListener('click', function (event) {
                event.preventDefault();
                target = this.getAttribute('data-toggle');
                this.classList.toggle('active');
                this.nextElementSibling.classList.toggle('show');
                console.log('target', target);
            })

            // window.addEventListener('click',function(event){
            //     if(!event.target.matches('#'+target)){

            //     }
            // })
        }
    },
    readBarCode: function () {
        // Quagga.init({
        //     inputStream : {
        //       name : "Live",
        //       type : "LiveStream",
        //       target: document.querySelector('#scanner')    // Or '#yourElement' (optional)
        //     },
        //     decoder : {
        //       readers : ["code_128_reader"]
        //     }
        //   }, function(err) {
        //       if (err) {
        //           console.log(err);
        //           return
        //       }
        //       console.log("Initialization finished. Ready to start");
        //       Quagga.start();
        //   });

        //   Quagga.onDetected(function(data){
        //       console.log('data',data);
        //   })
    },
    charts: function () {
        var ctx = document.querySelector('#myChart');
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ["1", "5", "10", "15","20","25","30"],
                datasets: [{
                    label: 'Sale', // Name the series
                    data: [500, 50, 430,200,315,150,200], // Specify the data values array
                    fill: false,
                    borderColor: '#2196f3', // Add custom color border (Line)
                    backgroundColor: '#2196f3', // Add custom color background (Points and Fill)
                    borderWidth: 1 // Specify bar border width
                },{
                    label: 'Expense', // Name the series
                    data: [300, 10, 130,300,305,50,60], // Specify the data values array
                    fill: false,
                    borderColor: 'rgba(255, 99, 132, 1)', // Add custom color border (Line)
                    backgroundColor: 'rgba(255, 99, 132, 1)', // Add custom color background (Points and Fill)
                    borderWidth: 1 // Specify bar border width
                },{
                    label: 'Profit', // Name the series
                    data: [120, 50, 70,180,10,150,100], // Specify the data values array
                    fill: false,
                    borderColor: 'rgba(76, 175, 80, 1)', // Add custom color border (Line)
                    backgroundColor: 'rgba(76, 175, 80, 1)', // Add custom color background (Points and Fill)
                    borderWidth: 1 // Specify bar border width
                }]
            }
        });

        // weekly sale
        let weeklySaleChart_ctx = document.querySelector('#weeklySaleChart');
        new Chart(weeklySaleChart_ctx, {
            type: 'line',
            data: {
                labels: ["Mon", "Tue", "Wed", "Thu","Fri","Sat","Sun"],
                datasets: [{
                    label: 'Sale', // Name the series
                    data: [500, 50, 430,200,315,150,450], // Specify the data values array
                    fill: true,
                    borderColor: 'rgba(33, 150, 243,1)', // Add custom color border (Line)
                    backgroundColor: 'rgba(33, 150, 243,0.2)', // Add custom color background (Points and Fill)
                    borderWidth: 1 // Specify bar border width
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    display: false
                 },
                scales: {
                    xAxes: [{
                        display: false,
                        scaleLabel: {
                            display: false,
                            labelString: 'Date'
                        },

                    }],
                    yAxes: [{
                        display: false,
                        scaleLabel: {
                            display: false,
                            labelString: 'Index Returns'
                        },
                        ticks: {
                            min: 0,
                            max: 600,

                            // forces step size to be 5 units
                            stepSize: 200
                        }
                    }]
                }
            }
        }); // sale chart

        // expense chart
        const weeklyExpenseChart_ctx = document.querySelector('#weeklyExpenseChart');
        new Chart(weeklyExpenseChart_ctx, {
            type: 'line',
            data: {
                labels: ["Mon", "Tue", "Wed", "Thu","Fri","Sat","Sun"],
                datasets: [{
                    label: 'Sale', // Name the series
                    data: [300, 10, 200,100,315,30,200], // Specify the data values array
                    fill: true,
                    borderColor: 'rgba(255, 99, 132, 1)', // Add custom color border (Line)
                    backgroundColor: 'rgba(255, 99, 132, 0.2)', // Add custom color background (Points and Fill)
                    borderWidth: 1 // Specify bar border width
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    display: false
                 },
                scales: {
                    xAxes: [{
                        display: false,
                        scaleLabel: {
                            display: false,
                            labelString: 'Date'
                        },

                    }],
                    yAxes: [{
                        display: false,
                        scaleLabel: {
                            display: false,
                            labelString: 'Index Returns'
                        },
                        ticks: {
                            min: 0,
                            max: 600,

                            // forces step size to be 5 units
                            stepSize: 200
                        }
                    }]
                }
            }
        }); // Expense chart

        // purchase chart
        const weeklyPurchaseChart_ctx = document.querySelector('#weeklyPurchaseChart');
        new Chart(weeklyPurchaseChart_ctx, {
            type: 'line',
            data: {
                labels: ["Mon", "Tue", "Wed", "Thu","Fri","Sat","Sun"],
                datasets: [{
                    label: 'Sale', // Name the series
                    data: [490, 210, 230,290,35,90,60], // Specify the data values array
                    fill: true,
                    borderColor: 'rgba(255, 206, 86, 1)', // Add custom color border (Line)
                    backgroundColor: 'rgba(255, 206, 86, 0.2)', // Add custom color background (Points and Fill)
                    borderWidth: 1 // Specify bar border width
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    display: false
                 },
                scales: {
                    xAxes: [{
                        display: false,
                        scaleLabel: {
                            display: false,
                            labelString: 'Date'
                        },

                    }],
                    yAxes: [{
                        display: false,
                        scaleLabel: {
                            display: false,
                            labelString: 'Index Returns'
                        },
                        ticks: {
                            min: 0,
                            max: 600,

                            // forces step size to be 5 units
                            stepSize: 200
                        }
                    }]
                }
            }
        }); // Purchase chart

        // orders chart
        const weeklyOrdersChart_ctx = document.querySelector('#weeklyOrdersChart');
        new Chart(weeklyOrdersChart_ctx, {
            type: 'line',
            data: {
                labels: ["Mon", "Tue", "Wed", "Thu","Fri","Sat","Sun"],
                datasets: [{
                    label: 'Sale', // Name the series
                    data: [100, 210, 130,280,15,250,300], // Specify the data values array
                    fill: true,
                    borderColor: 'rgba(153, 102, 255, 1)', // Add custom color border (Line)
                    backgroundColor: 'rgba(153, 102, 255, 0.2)', // Add custom color background (Points and Fill)
                    borderWidth: 1 // Specify bar border width
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    display: false
                 },
                scales: {
                    xAxes: [{
                        display: false,
                        scaleLabel: {
                            display: false,
                            labelString: 'Date'
                        },

                    }],
                    yAxes: [{
                        display: false,
                        scaleLabel: {
                            display: false,
                            labelString: 'Index Returns'
                        },
                        ticks: {
                            min: 0,
                            max: 600,

                            // forces step size to be 5 units
                            stepSize: 200
                        }
                    }]
                }
            }
        }); // orders chart
    }


}

eStores.init();
