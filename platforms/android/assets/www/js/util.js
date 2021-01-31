function scanBarcode() {
    // cordova.plugins.barcodeScanner.encode(BarcodeScanner.Encode.TEXT_TYPE, "http://www.nytimes.com", function(success) {
    //     alert("encode success: " + success);
    //   }, function(fail) {
    //     alert("encoding failed: " + fail);
    //   }
    // );

    cordova.plugins.barcodeScanner.scan(
        function (result) {
           
            localStorage.setItem('data', result.text)
            if(result.text.startsWith("T"))
            {
                openRoutePage('/reciept/')
                localStorage.setItem('userCardCode', result.text)
            }
            else{
                var toast = app.toast.create({
                    text: "Cannot generate receipt from the supplied data!",
                    closeTimeout: 1000,
                });

                toast.open();
            }
        },
        function (error) {
            alert("Scanning failed: " + error);
        }
    );
    $('.openCart').trigger('click');
}

function openCamera() {
    navigator.camera.getPicture(function onSuccess(imageData) {

    }, function onFail(message) {
        alert('Failed because: ' + message);
    }, {
        quality: 25,
        allowEdit: true,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: window.Camera.PictureSourceType.CAMERA,
    });
}

function getProduct(productID) {
    var name;
    $.getJSON('js/data/json/products.json', {}, function (data) {
        var result = data;

        $.each(result, function (i, field) {

            if (field.item_no == productID) {
                app.dialog.confirm("Do you want to add to cart?", field.name, function () {

                    // add popup class //



                    var dynamicPopup = app.popup.create({
                        content: `    <div class="popup car-popup">
                       <div class="page">
                           <div class="navbar om-gradient">
                               <div class="navbar-inner">
                                   <div class="title">Product Details</div>
                                   <div class="right"><a href="#" class="link popup-close"><i class="material-icons">close</i></a>
                                   </div>
                               </div>
                           </div>
                           <div class="page-content">
                               <div class="block-om-block">
                                   <div class="list form-store-data">
                                       <ul id="list">
                                           <li class="item-content item-input om-no-border">
                                               <div class="item-inner pt-1 pb-1">
                                                   <div class="item-title item-floating-label"></div>
               
                                                   <div class="item-input-wrap">
                                                       <input id="motor_qoute_vehicle_make" type="text" name="motor_qoute_vehicle_make"
                                                           placeholder="item name" value="`+ field.name +`" required readonly>
                                                       <span class="input-clear-button"></span>
                                                   </div>
                                               </div>
                                           </li>
                                           <li class="item-content item-input om-no-border">
                                               <div class="item-inner pt-1 pb-1">
                                                   <div class="item-title item-floating-label"></div>
               
                                                   <div class="item-input-wrap">
                                                       <input id="motor_qoute_vehicle_model" type="text"
                                                           name="motor_qoute_vehicle_model" placeholder="Vehicle model" value="category - `+ field.category +`" required readonly>
                                                       <span class="input-clear-button"></span>
                                                   </div>
                                               </div>
                                           </li>
                                           <li class="item-content item-input om-no-border">
                                               <div class="item-inner pt-1 pb-1">
                                                   <div class="item-title item-floating-label"></div>
                                                   <div class="item-input-wrap">
                                                       <input id="motor_qoute_vehicle_reg" type="text" name="motor_qoute_vehicle_reg"
                                                           placeholder="Expiry Date" value="expires - `+ field.created_at +`" required readonly>
                                                       <span class="input-clear-button"></span>
                                                   </div>
                                               </div>
                                           </li>
                                           <li class="item-content item-input om-no-border">
                                               <div class="item-inner pt-1 pb-1">
                                                   <div class="item-title item-floating-label"></div>
               
                                                   <div class="item-input-wrap">
                                                       <input id="motor_quote_vehicle_sum_assured" type="number"
                                                           name="motor_quote_vehicle_sum_assured" placeholder="Item Value" value="`+ field.wholesale_zwl +`" required readonly>
                                                       <span class="input-clear-button"></span>
                                                   </div>
                                               </div>
                                           </li>

                                           <li class="item-content item-input om-no-border">
                                           <div class="item-inner pt-1 pb-1">
                                               <div class="item-title item-floating-label">Item Count</div>
           
                                               <div class="item-input-wrap">
                                                   <input id="itemCount" type="number"
                                                       name="motor_quote_vehicle_sum_assured" placeholder="Item Count" required>
                                                   <span class="input-clear-button"></span>
                                               </div>
                                           </div>
                                       </li>
               
                                           <li class="item-content item-input om-no-border">
                                               <div class="item-inner">
                                                   <div class="item-input-wrap">
                                                       <button onclick="addToCart('`+ field.item_no +`','`+ field.name +`','itemCount')" class="col button button-big button-raised popup-close"
                                                           id="add_motor_button">Add <i
                                                               class="icon material-icons md-only color-info">add</i> </button>
               
                                                   </div>
                                               </div>
                                           </li>
               
                                       </ul>
                                   </div>
                               </div>
                           </div>
               
                       </div>
                   </div>`

                    });

                    dynamicPopup.open();

                })

            }
        })
    });

    return name;
}

function addToCart(item_no, description, quantity) {

    var jsonOBJ = [];

    var cart = `[{"id":"1",
            "items":[
                {


                },
                {
                    'id': 3,
                    'item_no': '6007652000055',
                    'description': 'Belgian Vac Pack 500g',
                    'quantity': 7,
                    'price': 217.00
                }            
            ]
        }
    ]`;

    var result = JSON.parse(localStorage.getItem('savedCart'));
    result[0].items.push({
        "id": 1,
        "item_no":  item_no,
        "description": description,
        "quantity": $('#' + quantity + '').val(),
        'price': 217.00
    })
    //localStorage.setItem('savedCart', cart);
    localStorage.setItem('savedCart', JSON.stringify(result));

    console.log(localStorage.getItem('savedCart'));
}

function getCart()
{
    var output;

    console.log(JSON.parse(localStorage.getItem('savedCart')))

    
    // $.getJSON('js/data/json/cart.json',{}, function(data){
        $('#cartSummary').empty();
        var result = JSON.parse(localStorage.getItem('savedCart'));
        $.each(result[0].items, function(i, field){
            output = `                    <div id="cart_item_` + (i + 1) + `" class="p-1 items row item-content min-height-1 kf-border-top-solid" style="padding-right: 16px !important;">
            <div class = "col color-om-light-gray" style="width: 55% !important; padding-right: 16px !important;">
            ` + field.description + `
            </div>
            <input class="text-right" id="cart_code_`+ (i + 1) + `" type="hidden" value="` + field.item_no + `"/>

            
            <input class="col text-right color-om-light-gray" style="width: 15% !important; vertical-align: top !important;" id="cart_quantity_`+ (i + 1) + `" oninput="calculateOrderTotal(); resetInput('cart_quantity_` + (i + 1) + `'); editCartValues('` + (i + 1) + `')" placeholder="0" type="number" value="` + field.quantity + `"/>

           
            <div id="cart_price_`+ (i + 1) + `" class="color-om-light-gray col text-right" style="width: 20% !important; vertical-align: text-top !important;">
                
            `+ field.price +`
            </div>

            <i style="width: 10% !important;" onclick="removeCartItem(` + field.id + `)" class="text-right col color-red icon material-icons md-only">delete</i>


            <input class="text-right kf-small" id="cart_subtotal_`+ (i + 1) + `" onchage="" type="hidden" value="` + parseFloat(field.quantity * parseFloat(field.retail_zwl).toFixed(2)).toFixed(2) + `"/>
            <input class="text-right kf-small" id="cart_price_raw_`+ (i + 1) + `" onchage="" type="hidden" value="` + parseFloat(field.retail_zwl).toFixed(2) + `"/>
            

            
            
        </div>`

            $('#cartSummary').append(output);
        })
    // });
}

function processOrders() {

    if(localStorage.getItem('orderNumber') && !isNaN(parseInt(localStorage.getItem('orderNumber'))))
    {
        var orderNumber = parseInt(localStorage.getItem('orderNumber'));
    }
    else
    {
        localStorage.setItem('orderNumber', '10010009');
        var orderNumber = parseInt(localStorage.getItem('orderNumber'));

    }

    orderNumber += 1;
    localStorage.setItem('orderNumber', orderNumber);


}

function processOrder(data)
{
    // $("#qr-gn").click(function () {
        $("#qrcode").html("");
        var txt = data;
        if (txt == '') {
            alert("Please enter text you want to embed in OR Code");
            return false;
        }
        var size = "200x200";
        var sizeSplit = size.split('x');
        var width = sizeSplit[0];
        var height = sizeSplit[1];
        generateQRcode(width, height, txt);
        return false;
    // });
}

function generateQRcode(width, height, text) {
    $('#qrcode').qrcode({ width: width, height: height, text: text });
}

function generateReceipt()
{

    $('#product_items').empty();
    var output;

    $.ajax({
        url: SERVER('cart/read') + '?cardCode=' + localStorage.getItem('data') + '&shop_id=' + localStorage.getItem('shop'),
        type: 'GET',
        dataType: 'json',
        async: true,
        complete: function () {
            app.preloader.hide();
        },
        success: function (result) {
           
            $.each(result.records, function(i, field)
            {
                if(field.customer_invoice_status == "1")
                {
                   
                       var  _output = `<div class="row">
                       <div class="col text-left">
                            <span id="cartTotalOrder"
                            class="kf-color-black">`+ field.name +`</span>
                        </div>

                        <div class="col text-right">
                            <span id="cartTotalOrder"
                            class="kf-color-black kf-text-bold">*3.00</span>
                        </div>
                    </div>`;
                
                    $('#product_items').append(_output);
                
                   
                }
            });
    
        },
        error: function(result)
        {
            //alert(result);
        }

});
    
}

function loginToAccount() {
    var username = $('#username').val();
    var password = $('#password').val();
    $.ajax({
        url: SERVER('user/read_one') + '?email=' + username + '&password=' + password,
        type: 'POST',
        data: {},
        dataType: 'json',
       
        async: true,
        success: function (response) {
            localStorage.setItem('user_name', response.name)
            localStorage.setItem('user_surname', response.surname)
            localStorage.setItem('user_email', response.email)
            localStorage.setItem('cardCode', response.cardCode)

            openRoutePage('/my_shop/');

            console.log(response);

        },

        error: function (response) {

            var toast = app.toast.create({
                text: response.statusText,
                closeTimeout: 1000,
            });

            toast.open();

            console.log(response);

        }
    });
}

function SERVER(url) {
    //return 'https://api.protendai.com/' + url +'.php';
    //return 'http://localhost:8440/Open_Space/saga/api/' + url + '.php';
    return 'http://api.southpolenerd.co.zw/' + url + '.php';
}

function generateOrder()
{
    $('#product_items').empty();
    var output;

    $.ajax({
        url: SERVER('orders/readOrder') + '?cardCode=' + localStorage.getItem('cardCode'),
        type: 'GET',
        dataType: 'json',
        async: true,
        complete: function () {
            app.preloader.hide();
        },
        success: function (result) {
           
            $.each(result, function(i, field)
            {
                if(field.cardCode == localStorage.getItem('cardCode'))
                {
                   
                       var  _output = `<div class="row">
                       <div class="col text-left">
                            <span id="cartTotalOrder"
                            class="kf-color-black">`+ field.name +`</span>
                        </div>

                        <div class="col text-right">
                            <span id="cartTotalOrder"
                            class="kf-color-black kf-text-bold">*3.00</span>
                        </div>
                    </div>`;
                
                    $('#product_items').append(_output);
                
                   
                }
            });
    
        },
        error: function(result)
        {
            alert(result);
        }

});
    
}

function processOrder() {
    app.preloader.show();
    $('#product_items').empty();
    var output;

    var data = `{
        "approved_by" : "`+ localStorage.getItem('userCardCode') +`",
        "shop_id":"`+ localStorage.getItem('shop') +`",
        "id":"`+ localStorage.getItem('userCardCode') +`",
        "admin_approval_status":"1"
    }`;

    $.ajax({
        url: SERVER('orders/process'),
        type: 'GET',
        dataType: 'json',
        data: data,
        async: true,
        complete: function () {
            app.preloader.hide();
        },
        success: function (result) {

            var toast = app.toast.create({
                text: result.message,
                closeTimeout: 1000,
            });

            toast.open();

        },
        error: function (result) {
            alert(result);
        }

    });

}

function selectShop() {
    localStorage.setItem('shop', $('#_shop').val());
    openRoutePage('/home_page/');
}

function getShops()
{
    $('#_shop').empty();
    $.ajax({
        url: SERVER('shop/read'),
        type: 'GET',
        dataType: 'json',
        async: true,
        complete: function (result) {
            app.preloader.hide();
        },
        success: function (result) {
            
            console.log(result.records)
            $.each(result.records, function(i, field){
                var output = `<option value="`+ field.id +`">`+ field.name +`</option>`
                $('#_shop').append(output);
            })
        },
        error: function (result) {



        }

    });
}

function getOrders() {
    var output = '';
    $.ajax({
        url: SERVER('cart/check_out') + '?cardCode=' + localStorage.getItem('cardCode') + '&shop_id='+ localStorage.getItem('shop'),
        type: 'GET',
        dataType: 'json',

        async: true,
        success: function (response) {

            console.log(response)

            $('#prdt_lst').empty();

            $.each(response, function (i, field) {

                if(field.approved_by == localStorage.getItem('cardCode'))
                {
                    output = `<li onclick="getProduct(` + field.item_no + `)">
                    <a class="item-content item-link popup-open" data-popup=".product-popup">
                        <div class="item-media"><img width="40px" src="`+ field.file_path + `"/></i>
                        </div>
                        <div class="item-inner">
                            <div class="item-title">
                                <h3 class="mb-0 om-home-menu-text">` + field.itemCode + `</h3>
        
                                <p class="small mb-0 text-muted"> itemGroup - `+ field.name + `</p>
                            </div>
        
        
                        </div>
                    </a>
                </li>`
                    $('#order_lst').append(output);
                }
            });

            console.log(response);

        },

        error: function (response) {

            console.log(response);

        }
    });
}

function getOrders() {
    var output = '';
    $.ajax({
        url: SERVER('cart/check_out') + '?cardCode=' + localStorage.getItem('cardCode') + '&shop_id='+ localStorage.getItem('shop'),
        type: 'GET',
        dataType: 'json',

        async: true,
        success: function (response) {

            console.log(response)

            $('#prdt_lst').empty();

            $.each(response, function (i, field) {

                if(field.approved_by == localStorage.getItem('cardCode'))
                {
                    output = `<li onclick="getProduct(` + field.item_no + `)">
                    <a class="item-content item-link popup-open" data-popup=".product-popup">
                        <div class="item-media"><img width="40px" src="`+ field.file_path + `"/></i>
                        </div>
                        <div class="item-inner">
                            <div class="item-title">
                                <h3 class="mb-0 om-home-menu-text">` + field.itemCode + `</h3>
        
                                <p class="small mb-0 text-muted"> itemGroup - `+ field.name + `</p>
                            </div>
        
        
                        </div>
                    </a>
                </li>`
                    $('#order_lst').append(output);
                }
            });

            console.log(response);

        },

        error: function (response) {

            console.log(response);

        }
    });
}
function readOrders() {
    $('#product_items').empty();
    var output;

    var bg = '';
    var status = '';

    $.ajax({
        url: SERVER('orders/readOrders') + '?shop_id=' + localStorage.getItem('shop'),
        type: 'GET',
        dataType: 'json',
        async: true,
        complete: function () {
            app.preloader.hide();
        },
        success: function (result) {

            console.log(result)

            $.each(result, function (i, field) {

                if (field.admin_approval_status == 1 ) {
                    bg = "bg-color-success";
                    status = 'approved'
                }

                else if (result[i].admin_approval_status == 0) {
                    bg = "bg-color-gray";
                    status = 'pending';
                }
                if (field.approved_by == localStorage.getItem('cardCode')) {

                    var _output = `<li id="item_` + field.id + `" onclick="setOrderRef('` + field.id + `', '` + status + `', '` + field.order_ref_number + `', '` + field.order_date + `', '` + field.delivery_date + `'); openRoutePage('/view_order/')" class="mb-2 kf-border-0" style="padding-left: 16px !important; padding-right: 16px !important; border-radius: 0; border: 1px solid black;">
                    <div class="row item-content  kf-no-padding min-height-2 kf-border-dotted"
                        id="product_item_`+ field.id + `">
                        <div id="`+ field.id + `" class="col kf-text-bold search-text">
                            `+ field.id + `
                        </div>
                        <div class="col text-right">
                            <span class="social kf-badge `+ bg + ` kf-small search-text">` + status + `</span>
            
                        </div>
                    </div>
                    <div class="row item-content  kf-no-padding min-height-1">
                        <div class="col kf-small">
                             Order Date
                        </div>
            
            
                        <div class="text-right col search-text kf-small">
                        `+ field.created + `
            
                        </div>
            
            
                    </div>
            
                    <div class="row item-content  kf-no-padding min-height-1">
                        <div class="col kf-small">
                            Order Total
            
                        </div>
            
            
                        <div class="text-right col kf-small kf-text-bold">
                        ZWL $1000
            
                        </div>
            
            
                    </div>
                </li>`;

                    $('#order_lst').append(_output);


                }
            });

        },
        error: function (result) {
            var toast = app.toast.create({
                text: result.message,
                closeTimeout: 1000
            })

            //toast.open();
        }

    });

}





