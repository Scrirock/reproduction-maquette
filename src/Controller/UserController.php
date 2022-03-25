<?php

namespace Scri\Shop\Controller;

use Scri\Shop\Model\Entity\User;
use Scri\Shop\Model\Manager\UserManager;

class UserController {

    public function add() {
        $user = new User(null, 'Scri', 'email@gmail.com', 'azerty');
        (new UserManager())->addUser($user);
    }

    public function edit() {
        $user = new User(null, 'Scri-edit', 'email-edit@gmail.com', 'azerty-edit');
        (new UserManager())->updateUser($user);
    }

    public function delete() {
        (new UserManager())->deleteUser(2);
    }

}