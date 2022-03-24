<?php

namespace Scri\Shop\Model\Manager;

use Scri\Shop\Model\DB;
use Scri\Shop\Model\Entity\Category;
use Scri\Shop\Model\Manager\Traits\ManagerTrait;

class CategoryManager {

    use ManagerTrait;

    public function getAllCategory() {
        $request = DB::getRepresentative()->prepare('SELECT * FROM category');
        if ($request->execute()) {
            return json_encode($request->fetchAll());
        }
    }

    public function getOneCategory($id) {
        $request = DB::getRepresentative()->prepare('SELECT * FROM category WHERE id = :id');
        $request->bindParam(':id', $id);
        if ($request->execute()) {
            return json_encode($request->fetch());
        }
    }

    public function addCategory(Category $category) {
        $request = DB::getRepresentative()->prepare('
            INSERT INTO category (name)
            VALUES (:name)
        ');

        $name = $category->getName();

        $request->bindParam(':name', $name);

        $request->execute();
    }

    public function updateCategory(Category $categoryUpdated) {
        $request = DB::getRepresentative()->prepare('
            UPDATE category
            SET name = :name
            WHERE id = :id
        ');

        $name = $categoryUpdated->getName();
        $id = $categoryUpdated->getId();

        $request->bindParam(':name', $name);
        $request->bindParam(':id', $id);

        $request->execute();
    }

    public function deleteCategory($id) {
        $request = DB::getRepresentative()->prepare('DELETE FROM category WHERE id = :id');
        $request->bindParam(':id', $id);

        $request->execute();
    }

}