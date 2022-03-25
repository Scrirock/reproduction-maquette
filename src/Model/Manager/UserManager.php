<?php

namespace Scri\Shop\Model\Manager;

use Scri\Shop\Model\DB;
use Scri\Shop\Model\Entity\User;
use Scri\Shop\Model\Manager\Traits\ManagerTrait;

class UserManager {

    use ManagerTrait;

    function getAllUser() {
        $request = DB::getRepresentative()->prepare("SELECT id, username, email FROM user");

        if ($request->execute()) {
            return json_encode($request->fetchAll());
        }
        else return false;
    }

    function getOneUser($id) {
        $request = DB::getRepresentative()->prepare("SELECT * FROM user WHERE id = :id");

        $request->bindParam(':id', $id);

        if ($request->execute()) {
            return json_encode($request->fetchAll());
        }
        else return false;
    }

    function addUser(User $user) {
        $request = DB::getRepresentative()->prepare('
            INSERT INTO user
                (username, email, password)
            VALUES (:username, :email, :password)
        ');

        $username = $user->getUsername();
        $email = $user->getEmail();
        $password = $user->getPassword();

        $request->bindParam(':username', $username);
        $request->bindParam(':email', $email);
        $request->bindParam(':password', $password);

        $request->execute();
    }

    function updateUser(User $userUpdated) {
        $request = DB::getRepresentative()->prepare('
            UPDATE user
            SET username = :username,
                email = :email,
                password = :password,
            WHERE id = :id
        ');

        $username = $userUpdated->getUsername();
        $email = $userUpdated->getEmail();
        $password = $userUpdated->getPassword();
        $id = $userUpdated->getId();

        $request->bindParam(':username', $username);
        $request->bindParam(':email', $email);
        $request->bindParam(':password', $password);
        $request->bindParam(':id', $id);

        $request->execute();
    }

    function deleteUser($id) {
        $request = DB::getRepresentative()->prepare('DELETE FROM user WHERE id = :id');
        $request->bindParam(':id', $id);

        $request->execute();
    }

}