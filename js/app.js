let eStores = {
    init: function(){
        this.sidebar();
        this.dropdowns();
        this.readBarCode();
    },
    sidebar: function(){
        let navLink = document.querySelectorAll('.nav-menu_item');
        for (let item of navLink) {
            item.addEventListener('click', function(event) {
                event.preventDefault();
                // this.nextElementSibling.classList.remove('active');
                // this.previousElementSibling.classList.remove('active');
                this.classList.toggle('active');
            })
        }
        // toggle sidebar
        const navButton = document.querySelector('.nav-button');
        const sideNav = document.querySelector('.nav');
        navButton.addEventListener('click',(event) => {
            event.preventDefault();
            sideNav.classList.toggle('active');
        });
    },
    dropdowns: function(){
        let dropdownToggle = document.querySelectorAll('.dropdown-toggle');
        let target;
        for (let item of dropdownToggle) {
            item.addEventListener('click', function(event){
                event.preventDefault();
                target = this.getAttribute('data-toggle');
                this.classList.toggle('active');
                this.nextElementSibling.classList.toggle('show');
                console.log('target',target);
            })

            // window.addEventListener('click',function(event){
            //     if(!event.target.matches('#'+target)){

            //     }
            // })
        }
    },
    readBarCode: function() {
        Quagga.init({
            inputStream : {
              name : "Live",
              type : "LiveStream",
              target: document.querySelector('#scanner')    // Or '#yourElement' (optional)
            },
            decoder : {
              readers : ["code_128_reader"]
            }
          }, function(err) {
              if (err) {
                  console.log(err);
                  return
              }
              console.log("Initialization finished. Ready to start");
              Quagga.start();
          });

          Quagga.onDetected(function(data){
              console.log(data)
          })
    }
}

eStores.init();
