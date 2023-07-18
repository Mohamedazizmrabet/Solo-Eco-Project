-- CreateTable
CREATE TABLE `items` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(100) NOT NULL,
    `description` TEXT NOT NULL,
    `price` VARCHAR(25) NOT NULL,
    `gategorie` VARCHAR(45) NOT NULL,
    `img` JSON NOT NULL,
    `user_user_id` INTEGER NOT NULL,

    INDEX `fk_items_user1_idx`(`user_user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `review` (
    `rev_id` INTEGER NOT NULL AUTO_INCREMENT,
    `revRating` INTEGER NOT NULL,
    `comments` VARCHAR(255) NULL,
    `user_user_id` INTEGER NOT NULL,

    INDEX `fk_review_user1_idx`(`user_user_id`),
    PRIMARY KEY (`rev_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `username` VARCHAR(16) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `phoneN` VARCHAR(8) NOT NULL,
    `user_id` INTEGER NOT NULL AUTO_INCREMENT,
    `profile` VARCHAR(255) NULL,

    UNIQUE INDEX `username_UNIQUE`(`username`),
    UNIQUE INDEX `email_UNIQUE`(`email`),
    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user-items` (
    `iduser-Items` INTEGER NOT NULL,
    `items_id` INTEGER NOT NULL,
    `user_user_id` INTEGER NOT NULL,

    INDEX `fk_user-Items_items1_idx`(`items_id`),
    INDEX `fk_user-Items_user1_idx`(`user_user_id`),
    PRIMARY KEY (`iduser-Items`, `items_id`, `user_user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wishlists` (
    `user_user_id` INTEGER NOT NULL,
    `item_id` INTEGER NOT NULL,

    INDEX `fk_item_idx`(`item_id`),
    INDEX `fk_wishlists_user1_idx`(`user_user_id`),
    PRIMARY KEY (`user_user_id`, `item_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `items` ADD CONSTRAINT `fk_items_user1` FOREIGN KEY (`user_user_id`) REFERENCES `user`(`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `review` ADD CONSTRAINT `fk_review_user1` FOREIGN KEY (`user_user_id`) REFERENCES `user`(`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `user-items` ADD CONSTRAINT `fk_user-Items_items1` FOREIGN KEY (`items_id`) REFERENCES `items`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `user-items` ADD CONSTRAINT `fk_user-Items_user1` FOREIGN KEY (`user_user_id`) REFERENCES `user`(`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `wishlists` ADD CONSTRAINT `fk_item` FOREIGN KEY (`item_id`) REFERENCES `items`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `wishlists` ADD CONSTRAINT `fk_wishlists_user1` FOREIGN KEY (`user_user_id`) REFERENCES `user`(`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;
