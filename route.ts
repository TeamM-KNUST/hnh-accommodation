/**
 * An array of rotue that are accessible to the public
 * These routes are accessible to the public and do not require authentication
 * @type {string[]}
 *
 */

export const publicRoutes = [
    "/",
    "/auth/confirm",
    "/dashboard",
    "/map"
    
];

/**
 * An Array of routes that are protected and require authentication
 * These routes will redirect to the /setting
 * @type {string[]}
 */

export const authRoutes = [
    "/auth/login",
    "/auth/register",
    "/auth/reset",
    "/auth/new-password",
    "/auth/error",
   
];


/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 * @type {string}
 */

export const apiAuthPrefix = "/api/auth";

/** 
 * The default redirect apth  after a successful login
 * @type {string}
 */

export const DEFAULT_LOGIN_REDIRECT = "/dashboard";