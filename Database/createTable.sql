CREATE TABLE `provinces` (
                             `code` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
                             `name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
                             `name_en` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
                             `full_name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
                             `full_name_en` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
                             `code_name` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
                             `side` varchar(45) COLLATE utf8mb4_general_ci DEFAULT NULL,
                             PRIMARY KEY (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `districts` (
                             `code` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
                             `name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
                             `name_en` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
                             `full_name` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
                             `full_name_en` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
                             `code_name` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
                             `province_code` varchar(20) COLLATE utf8mb4_general_ci DEFAULT NULL,
                             PRIMARY KEY (`code`),
                             KEY `districts_province_code_fkey` (`province_code`),
                             CONSTRAINT `districts_province_code_fkey` FOREIGN KEY (`province_code`) REFERENCES `provinces` (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
CREATE TABLE `shipments_point` (
                                   `idShipments_point` int NOT NULL,
                                   `point_province` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
                                   `point_district` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
                                   `point_pos` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
                                   `point_name` varchar(45) COLLATE utf8mb4_general_ci NOT NULL,
                                   `gathering_point_id` int DEFAULT NULL,
                                   PRIMARY KEY (`idShipments_point`),
                                   KEY `FKf8jtwf9lteokq6ycw937ap6y5` (`gathering_point_id`),
                                   KEY `FK_district_code` (`point_district`),
                                   KEY `FK_province_code` (`point_province`),
                                   CONSTRAINT `FK_district_code` FOREIGN KEY (`point_district`) REFERENCES `districts` (`code`),
                                   CONSTRAINT `FK_gathering_point` FOREIGN KEY (`gathering_point_id`) REFERENCES `shipments_point` (`idShipments_point`),
                                   CONSTRAINT `FK_province_code` FOREIGN KEY (`point_province`) REFERENCES `provinces` (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
CREATE TABLE `user` (
                        `idUser` int NOT NULL AUTO_INCREMENT,
                        `username` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
                        `password` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
                        `firstname` varchar(45) COLLATE utf8mb4_general_ci DEFAULT NULL,
                        `lastname` varchar(45) COLLATE utf8mb4_general_ci DEFAULT NULL,
                        `email` varchar(45) COLLATE utf8mb4_general_ci DEFAULT NULL,
                        `dob` date DEFAULT NULL,
                        `address` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
                        `role` enum('manager','customer','staff','leader') COLLATE utf8mb4_general_ci DEFAULT NULL,
                        `isVerified` bit(1) DEFAULT b'0',
                        `usercol` varchar(45) COLLATE utf8mb4_general_ci DEFAULT NULL,
                        `shipments_point_id` int DEFAULT NULL,
                        PRIMARY KEY (`idUser`),
                        UNIQUE KEY `username_UNIQUE` (`username`),
                        UNIQUE KEY `UK_sb8bbouer5wak8vyiiy4pf2bx` (`username`),
                        KEY `FKdf0nqnqspefo9q7efxq2itp9w` (`shipments_point_id`),
                        CONSTRAINT `FK_work_place` FOREIGN KEY (`shipments_point_id`) REFERENCES `shipments_point` (`idShipments_point`),
                        CONSTRAINT `FKdf0nqnqspefo9q7efxq2itp9w` FOREIGN KEY (`shipments_point_id`) REFERENCES `shipments_point` (`idShipments_point`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
CREATE TABLE `order` (
                         `idOrder` int NOT NULL AUTO_INCREMENT,
                         `sender_name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
                         `sender_province` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
                         `sender_district` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
                         `sender_tel` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
                         `sender_pos` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
                         `receiver_name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
                         `receiver_province` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
                         `receiver_district` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
                         `receiver_tel` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
                         `receiver_pos` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
                         `type_order` enum('documents','goods') COLLATE utf8mb4_general_ci DEFAULT NULL,
                         `special_services` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
                         `order_instruction` enum('cancel','send_back_immediately','send_back_inday','call_sender','send_back_expired') COLLATE utf8mb4_general_ci NOT NULL,
                         `receive_date` datetime DEFAULT NULL,
                         `main_charge` float DEFAULT NULL,
                         `extra_charge` float DEFAULT NULL,
                         `GTGT_charge` float DEFAULT NULL,
                         `other_fees` float DEFAULT NULL,
                         `cod` float DEFAULT NULL,
                         `order_weight` float DEFAULT NULL,
                         `business_note` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
                         `order_created_by` int NOT NULL,
                         `sender_transaction` int NOT NULL,
                         `receiver_transaction` int NOT NULL,
                         PRIMARY KEY (`idOrder`),
                         KEY `FK_created_by_staff` (`order_created_by`),
                         KEY `FK_sender_transaction` (`sender_transaction`),
                         KEY `FK_receiver_transaction` (`receiver_transaction`),
                         CONSTRAINT `FK_created_by_staff` FOREIGN KEY (`order_created_by`) REFERENCES `user` (`idUser`),
                         CONSTRAINT `FK_receiver_transaction` FOREIGN KEY (`receiver_transaction`) REFERENCES `shipments_point` (`idShipments_point`),
                         CONSTRAINT `FK_sender_transaction` FOREIGN KEY (`sender_transaction`) REFERENCES `shipments_point` (`idShipments_point`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
CREATE TABLE `order_status` (
                                `order_id` int NOT NULL,
                                `point_id` int NOT NULL,
                                `confirmedAt` datetime(5) DEFAULT NULL,
                                `state` enum('den','chua_den','dang_den') COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'chua_den',
                                `no` int DEFAULT NULL,
                                PRIMARY KEY (`order_id`,`point_id`),
                                KEY `FK_transaction_state_idx` (`point_id`),
                                KEY `FK_belong_to_idx` (`order_id`),
                                CONSTRAINT `FK_belong_to` FOREIGN KEY (`order_id`) REFERENCES `order` (`idOrder`),
                                CONSTRAINT `FK_transaction_state` FOREIGN KEY (`point_id`) REFERENCES `shipments_point` (`idShipments_point`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
CREATE TABLE `confirmation_token` (
                                      `user_id` int NOT NULL,
                                      `confirmedAt` datetime(6) DEFAULT NULL,
                                      `createdAt` datetime(6) NOT NULL,
                                      `expiresAt` datetime(6) NOT NULL,
                                      `id` bigint NOT NULL AUTO_INCREMENT,
                                      `token` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
                                      PRIMARY KEY (`id`),
                                      KEY `FK_token_created_by` (`user_id`),
                                      CONSTRAINT `FK_token_created_by` FOREIGN KEY (`user_id`) REFERENCES `user` (`idUser`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
ALTER TABLE `order`
    CHANGE COLUMN `main_charge` `main_charge` FLOAT NULL DEFAULT 10 ,
    CHANGE COLUMN `extra_charge` `extra_charge` FLOAT NULL DEFAULT 0 ,
    CHANGE COLUMN `GTGT_charge` `GTGT_charge` FLOAT NULL DEFAULT 0 ,
    CHANGE COLUMN `other_fees` `other_fees` FLOAT NULL DEFAULT 0 ,
    CHANGE COLUMN `cod` `cod` FLOAT NULL DEFAULT 0 ,
    CHANGE COLUMN `order_weight` `order_weight` FLOAT NULL DEFAULT 0 ;
ALTER TABLE `order_status`
    CHANGE COLUMN `state` `state` ENUM('den', 'chua_den', 'dang_den', 'dang_den_nguoi_nhan', 'da_den_nguoi_nhan', 'tra_ve', 'chua_den_nguoi_nhan') NOT NULL DEFAULT 'chua_den' ;

ALTER TABLE `user`
    CHANGE COLUMN `isVerified` `isVerified` BIT(1) NULL DEFAULT b'1';

ALTER TABLE `order_status`
    CHANGE COLUMN `no` `no` INT NOT NULL ,
DROP PRIMARY KEY,
ADD PRIMARY KEY (`order_id`, `point_id`, `no`);



