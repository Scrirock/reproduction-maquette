<?php

namespace Scri\Shop\Model\Manager;

use Scri\Shop\Model\DB;
use Scri\Shop\Model\Entity\Product;
use Scri\Shop\Model\Manager\Traits\ManagerTrait;

class ProductManager {

    use ManagerTrait;

    public function getAllProduct() {
        $request = DB::getRepresentative()->prepare('SELECT * FROM product');
        if ($request->execute()) {
            return json_encode($request->fetchAll());
        }
    }

    public function getOneProduct(int $id) {
        $request = DB::getRepresentative()->prepare('SELECT * FROM product WHERE id = :id');
        $request->bindParam(':id', $id);
        if ($request->execute()) {
            return json_encode($request->fetch());
        }
    }

    public function addProduct(Product $product) {
        $request = DB::getRepresentative()->prepare('
            INSERT INTO product
                (category, cart, name, description, img, stock, price)
            VALUES (:category, :cart, :name, :description, :img, :stock, :price)
        ');

        $category = $product->getCategory();
        $cart = $product->getCart();
        $name = $product->getName();
        $description = $product->getDescription();
        if (!$description) $description = "Pas de description pour ce produit";
        $img = $product->getImg();
        $stock = $product->getStock();
        $price = $product->getPrice();

        $request->bindParam(':category', $category);
        $request->bindParam(':cart', $cart);
        $request->bindParam(':name', $name);
        $request->bindParam(':description', $description);
        $request->bindParam(':img', $img);
        $request->bindParam(':stock', $stock);
        $request->bindParam(':price', $price);

        $request->execute();
    }

    public function updateProduct(Product $productUpdated) {
        $request = DB::getRepresentative()->prepare('
            UPDATE product
            SET category = :category,
                cart = :cart,
                name = :name,
                description = :description,
                img = :img,
                stock = :stock,
                price = :price
            WHERE id = :id
        ');

        $category = $productUpdated->getCategory();
        $cart = $productUpdated->getCart();
        $name = $productUpdated->getName();
        $description = $productUpdated->getDescription();
        if (!$description) $description = "Pas de description pour ce produit";
        $img = $productUpdated->getImg();
        $stock = $productUpdated->getStock();
        $price = $productUpdated->getPrice();
        $id = $productUpdated->getId();

        $request->bindParam(':category', $category);
        $request->bindParam(':cart', $cart);
        $request->bindParam(':name', $name);
        $request->bindParam(':description', $description);
        $request->bindParam(':img', $img);
        $request->bindParam(':stock', $stock);
        $request->bindParam(':price', $price);
        $request->bindParam(':id', $id);

        $request->execute();
    }

    public function deleteProduct($id) {
        $request = DB::getRepresentative()->prepare('DELETE FROM product WHERE id = :id');
        $request->bindParam(':id', $id);

        $request->execute();
    }

}