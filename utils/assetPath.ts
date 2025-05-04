/**
 * Function to construct the correct path to static assets considering the basePath
 * @param path Path to the resource relative to the public folder
 * @returns Full path considering the basePath
 */
export function getAssetPath(path: string): string {
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    
    const prefix = process.env.NODE_ENV === 'production' ? '/portfolio/' : '/';
    
    return `${prefix}${cleanPath}`;
}