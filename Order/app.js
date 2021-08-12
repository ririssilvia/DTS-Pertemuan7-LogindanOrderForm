function hasClass(el, className) {
    if (el.classList)
    return el.classList.contains(className);
    return !!el.className.match(new rexExp('(\\s|^)' + className +'(\\s|^)'));
}
function addClass(el,className) {
    if (el.classList)
    return el.classList.add(className);
    else if (!hasClass(el, className))
    el.className += ' ' + className;
}
function removeClass(el, className) {
    if(el.classList)
    el.classList.remove(className);
    else if (hasClass(el, className)) {
        var reg = new new rexExp('(\\s|^)' + className +'(\\s|^)');
        el.className = el.className.replace(reg,' ');
    }
}

function currency(amount) {
    return 'Rp ' + amount;
}

var products = [
    {
        id :1,
        name:'Norimaki',
        price: 50000,
        active :true,
    },
    {
        id :2,
        name:'Oshizushi',
        price: 65000,
        active :true,
    },
    {
        id :3,
        name:'Inarizushi',
        price: 70000,
        active :true,
    },
    {
        id :4,
        name:'Nigiri',
        price: 90000,
        active :true,
    },
    {
        id :5,
        name:'Sashimi',
        price: 50000,
        active :true,
    },
    {
        id :6,
        name:'Nigimahi',
        price: 100000,
        active :true,
    },
];

var total = 0;
var $app = document.querySelector('.app');

//Render title
function reanderTitle(container) {
    var $title = document.createElement('h1');
    $title.innerHTML = 'Order Form';
    container.appendChild($title);
}

function addTotal(product, total, isAdd) {
    if (isAdd) {
        total += product.price;
    }
    else {
        total -= product.price;
    }
   return total;
}

//Render List

function renderList(container, products){
    var $orderList = document.createElement('ul');
    products.forEach(function(product){
    var $product = document.createElement('li');
    var $productPrice = document.createElement('span');
    $productPrice.innerHTML = currency(product.price);
    $product.innerHTML = product.name;
    $product.appendChild($productPrice);
    $orderList.appendChild($product);

    //tambah event hendler krika produk di klik
    $product.addEventListener('click', function(event) {
    var isAdd = !hasClass($product , 'is-active');
    if (isAdd) {
        addClass($product , 'is-active');
    }
    else {
        removeClass($product , 'is-active');
    }
    total = addTotal(product, total, isAdd);
    var $total = document.querySelector('.total span');
    $total.innerHTML = currency(total);
    });
 });
 container.appendChild($orderList);
}

//Render Total
function renderTotalContainer(container, total){
    var $totalContainer = document.createElement('div');
    addClass($totalContainer, 'total');
    $totalContainer.innerHTML = 'Total: ';
    var $total = document.createElement('span');
    $total.innerHTML =currency(total);
    $totalContainer.appendChild($total);
    container.appendChild($totalContainer);
}

//render title,list dan total container
reanderTitle($app);
renderList($app, products)

renderTotalContainer($app, total);
var $products = document.querySelectorAll('li');
$products.forEach(function($product, index){
    if (index < 2){
        $product.dispatchEvent(new Event('click'));
    }
});

