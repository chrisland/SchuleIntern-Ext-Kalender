CREATE TABLE `ext_kalender`
(
    `id`        int(11) unsigned NOT NULL AUTO_INCREMENT,
    `title`     varchar(255) NOT NULL DEFAULT '',
    `state`     tinyint(1) DEFAULT '1',
    `color`     varchar(7)            DEFAULT NULL,
    `sort`      tinyint(1) DEFAULT NULL,
    `preSelect` tinyint(1) DEFAULT NULL,
    `acl`       int(11) DEFAULT NULL,
    `ferien`    tinyint(1) DEFAULT '0',
    `public`    tinyint(1) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;