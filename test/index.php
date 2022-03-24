<?php

use Scri\Shop\Controller\CategoryController;
use Scri\Shop\Controller\ProductController;
use Scri\Shop\Model\Manager\CategoryManager;
use Scri\Shop\Model\Manager\ProductManager;

require dirname(__FILE__) . '/../vendor/autoload.php';

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

if(isset($_GET['product'])) {
    switch ($_GET['product']) {
        case 'add':
            (new ProductController())->add();
            break;
        case 'edit':
            (new ProductController())->edit();
            break;
        case 'delete':
            (new ProductController())->delete();
            break;
    }
}

if(isset($_GET['category'])) {
    switch ($_GET['category']) {
        case 'add':
            (new CategoryController())->add();
            break;
        case 'edit':
            (new CategoryController())->edit();
            break;
        case 'delete':
            (new CategoryController())->delete();
            break;
    }
}

?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>test</title>
</head>
<body>

<h1>test</h1>

<a href="?product=add">add product</a>
<a href="?product=edit">edit product</a>
<a href="?product=delete">delete product</a>

<a href="?category=add">add category</a>
<a href="?category=edit">edit category</a>
<a href="?category=delete">delete category</a>

<?php

$allCategory = (new CategoryManager())->getAllCategory();
$oneCategory = (new CategoryManager())->getOneCategory(1);
$allProduct = (new ProductManager())->getAllProduct();
$oneProduct = (new ProductManager())->getOneProduct(1);

echo '<pre>';
print_r($allProduct);
echo '</pre>';

?>

</body>
</html>
