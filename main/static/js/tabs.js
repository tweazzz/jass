const tabsBtn = document.querySelectorAll('.tabs__nav-btn');
const tabsItems = document.querySelectorAll('.tabs__content');


tabsBtn.forEach(function(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);
        
        if( !currentBtn.classList.contains('active')) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('active');
            });

            tabsItems.forEach(function(item) {
                item.classList.remove('active');
            });

            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    });
});

const orderbtn = document.querySelectorAll('.my_order');
        const orders = document.querySelectorAll('.order-item');

        orderbtn.forEach(function(item) {
            item.addEventListener("click", function() {
                let curr = item;
                let tabIdd = curr.getAttribute("data-order");
                console.log(tabIdd);
                let currentOrder = document.querySelector(tabIdd);
                
                if( !curr.classList.contains('active')) {
                    orderbtn.forEach(function(item) {
                        item.classList.remove('active');
                    });

                    orders.forEach(function(item) {
                        item.classList.remove('active');
                    });

                    curr.classList.add('active');
                    currentOrder.classList.add('active');
                }
            });
        });

        const colorbtn = document.querySelectorAll('.change-color div');
        const color_items = document.querySelectorAll('.content_img');


        colorbtn.forEach(function(item) {
            item.addEventListener("click", function() {
                let currentBtn = item;
                let tabId = currentBtn.getAttribute("data-tab");
                let currentTab = document.querySelector(tabId);
                
                if( !currentBtn.classList.contains('active')) {
                    colorbtn.forEach(function(item) {
                        item.classList.remove('active');
                    });

                    color_items.forEach(function(item) {
                        item.classList.remove('active');
                    });

                    currentBtn.classList.add('active');
                    currentTab.classList.add('active');
                }
            });
        });



        const sizebtn = document.querySelectorAll('.change-size div');
        sizebtn.forEach(function(item) {
        item.addEventListener("click", function() {
          let currentBtn = item;
          
          if( !currentBtn.classList.contains('active')) {
              sizebtn.forEach(function(item) {
                  item.classList.remove('active');
              });
              currentBtn.classList.add('active');
          }
            });
        });