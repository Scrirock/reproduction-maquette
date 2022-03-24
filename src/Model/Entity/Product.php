<?php

namespace Scri\Shop\Model\Entity;

class Product {

    private ?int $id;
    private int $category;
    private int $cart;
    private string $name;
    private ?string $description;
    private string $img;
    private int $stock;
    private int $price;

    /**
     * Product constructor.
     * @param int|null $id
     * @param int $category
     * @param int $cart
     * @param string $name
     * @param string|null $description
     * @param string $img
     * @param int $stock
     * @param int $price
     */
    public function __construct(?int $id, int $category, int $cart, string $name, ?string $description, string $img, int $stock, int $price) {
        $this->id = $id;
        $this->category = $category;
        $this->cart = $cart;
        $this->name = $name;
        $this->description = $description;
        $this->img = $img;
        $this->stock = $stock;
        $this->price = $price;
    }

    /**
     * @return int|null
     */
    public function getId(): ?int {
        return $this->id;
    }

    /**
     * @return int
     */
    public function getCategory(): int {
        return $this->category;
    }

    /**
     * @param int $category
     * @return Product
     */
    public function setCategory(int $category): Product {
        $this->category = $category;
        return $this;
    }

    /**
     * @return int
     */
    public function getCart(): int {
        return $this->cart;
    }

    /**
     * @param int $cart
     * @return Product
     */
    public function setCart(int $cart): Product {
        $this->cart = $cart;
        return $this;
    }

    /**
     * @return string
     */
    public function getName(): string {
        return $this->name;
    }

    /**
     * @param string $name
     * @return Product
     */
    public function setName(string $name): Product {
        $this->name = $name;
        return $this;
    }

    /**
     * @return string|null
     */
    public function getDescription(): ?string {
        return $this->description;
    }

    /**
     * @param string|null $description
     * @return Product
     */
    public function setDescription(?string $description): Product {
        $this->description = $description;
        return $this;
    }

    /**
     * @return string
     */
    public function getImg(): string {
        return $this->img;
    }

    /**
     * @param string $img
     * @return Product
     */
    public function setImg(string $img): Product {
        $this->img = $img;
        return $this;
    }

    /**
     * @return int
     */
    public function getStock(): int {
        return $this->stock;
    }

    /**
     * @param int $stock
     * @return Product
     */
    public function setStock(int $stock): Product {
        $this->stock = $stock;
        return $this;
    }

    /**
     * @return int
     */
    public function getPrice(): int {
        return $this->price;
    }

    /**
     * @param int $price
     * @return Product
     */
    public function setPrice(int $price): Product {
        $this->price = $price;
        return $this;
    }

}