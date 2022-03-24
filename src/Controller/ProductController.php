<?php

namespace Scri\Shop\Controller;

use Scri\Shop\Model\Entity\Product;
use Scri\Shop\Model\Manager\ProductManager;

class ProductController {

    public function add() {
        $product = new Product(null, 1, 0, 'test', 'test', 'test', 15, 65);
        (new ProductManager())->addProduct($product);
    }

    public function edit() {
        $product = new Product(24, 1, 0, 'test-edit', 'test-edit', 'test', 15, 65);
        (new ProductManager())->updateProduct($product);
    }

    public function delete() {
        (new ProductManager())->deleteProduct(24);
    }
}