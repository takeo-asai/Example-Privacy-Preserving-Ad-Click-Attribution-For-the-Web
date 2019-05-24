# Example: Privacy Preserving Ad Click Attribution For the Web

https://webkit.org/blog/8943/privacy-preserving-ad-click-attribution-for-the-web/

1. Apply hosts
2. `yarn start` to start server:443
3. `log stream -info | grep AdClickAttribution` to see log
4. Open Safari Preview 82+
5. Set 'Ad Click Attribution' & 'Ad Click Attribution Debug Mode' enabled
6. Go to "https://partner.com/
7. Click a link 'Click here'
8. Then, click a link 'Go to CV'
9. Check the grep log & the server log
