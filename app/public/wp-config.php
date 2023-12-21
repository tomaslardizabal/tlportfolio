<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'm&^b2hdFw{FLA.J0<EC+X>Gh>ZDVD|rIhYr:%xEQ~fBAv?GXe;6E$;@_fO#r>IrA' );
define( 'SECURE_AUTH_KEY',   'qBj!&ly3M`Ig1}hV>qCLgo%^m$Y4,>D<vAg!TiB(mO%3M4lrF<8a%5.E:~X%iXo_' );
define( 'LOGGED_IN_KEY',     '3x6CF(1H>0{C,k3OdJO>}X0<pf!mWmF!@E&s]k(x&&NrMS]%Y?Kc5w^1qnMn3&%D' );
define( 'NONCE_KEY',         'uu=nhIr%8bnIB@W194EcbO}6kE0<c5*l(0-ey>YV&0nhxCvM+BnR0/@zii4F@o8l' );
define( 'AUTH_SALT',         'g;Ck$96R*t,1q6yDN-Kk%9cwpa|talV52y^Jxdl4Tw+=UmfOX;>C4a+:*4HK)hhx' );
define( 'SECURE_AUTH_SALT',  '1bjSqk.FEe><=P;(X6r}ydo3;{SXC E+7x,L`q kzc/4/?xE[R)`vG:GHh/l$^,;' );
define( 'LOGGED_IN_SALT',    ',dE73FF[CQ4&^pAR+3@&JTmBH.^.Y={ZU1$?<cMy~SgDw3`,0 1V;]8+}YoKN3b ' );
define( 'NONCE_SALT',        '(!$?=*s{y&)y43:)l/E-f`_eC)1Lt?.yzMP;ozQ,]Rg5]rs]&zVngqM4$P?PQD,*' );
define( 'WP_CACHE_KEY_SALT', 'FL|3h_)&J*,ws+N+T^S.Kxb30N]O]>`r+fAP-Q`??%aotZ[dy!9<jD~`b5[gQwo#' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
