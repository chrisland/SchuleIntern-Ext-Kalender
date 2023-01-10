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


CREATE TABLE `ext_kalender_events`
(
    `id`           int(11) NOT NULL AUTO_INCREMENT,
    `kalender_id`  int(11) NOT NULL,
    `titel`        varchar(255) NOT NULL,
    `dateStart`    date         NOT NULL,
    `timeStart`    time         NOT NULL,
    `dateEnd`      date         NOT NULL,
    `timeEnd`      time         NOT NULL,
    `place`        varchar(255) NOT NULL,
    `comment`      tinytext     NOT NULL,
    `user_id`      int(11) NOT NULL,
    `createdTime`  datetime     NOT NULL,
    `modifiedTime` datetime     NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;