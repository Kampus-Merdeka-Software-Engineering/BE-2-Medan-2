# Security Policy

## Content Security Policy

Our application uses a Content Security Policy (CSP) to help prevent Cross-Site Scripting (XSS) attacks and other cross-site injections.

Here's a brief explanation of our CSP:

- `defaultSrc: ["'self'"]`: This directive restricts where resources can be loaded from. We've set it to `'self'`, which means resources can only be loaded from the same origin as the page.

- `scriptSrc: ["'self'", "'unsafe-inline'"]`: This directive restricts where scripts can be loaded from. We've set it to `'self'` and `'unsafe-inline'`. `'self'` means scripts can only be loaded from the same origin as the page. `'unsafe-inline'` allows the use of inline resources, like inline `<script>` elements and `javascript:` URLs.

Please note that `'unsafe-inline'` can increase the risk of XSS attacks and should be avoided if possible. We're using it in this example for simplicity, but in a real-world application, you should consider using safer alternatives, like nonces or hashes.
