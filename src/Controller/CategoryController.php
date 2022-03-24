<?php

namespace Scri\Shop\Controller;

use Scri\Shop\Model\Entity\Category;
use Scri\Shop\Model\Manager\CategoryManager;

class CategoryController {

    public function add() {
        $category = new Category(null, 'test');
        (new CategoryManager())->addCategory($category);
    }

    public function edit() {
        $category = new Category(9, 'test-edit');
        (new CategoryManager())->updateCategory($category);
    }

    public function delete() {
        (new CategoryManager())->deleteCategory(9);
    }

}