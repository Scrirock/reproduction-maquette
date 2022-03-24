<?php

namespace Scri\Shop\Model\Entity;

class Category {

    private ?int $id;
    private string $name;

    /**
     * Category constructor.
     * @param int|null $id
     * @param string $name
     */
    public function __construct(?int $id, string $name) {
        $this->id = $id;
        $this->name = $name;
    }

    /**
     * @return int|null
     */
    public function getId(): ?int {
        return $this->id;
    }

    /**
     * @return string
     */
    public function getName(): string {
        return $this->name;
    }

    /**
     * @param string $name
     * @return Category
     */
    public function setName(string $name): Category {
        $this->name = $name;
        return $this;
    }

}