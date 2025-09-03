export default defineNuxtPlugin(() => {
    const { GTM } = useRuntimeConfig().public;

    if (process.env.NODE_ENV !== 'production') {
        return;
    }

    if (typeof GTM?.id !== 'string' || GTM?.id === '') {
        return;
    }

    useHead({
        script: [{
            innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM.id}');`
        }]
    });

    if (typeof document !== 'undefined') {
        const noscriptTag = document.createElement('noscript');
        noscriptTag.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM.id}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
        document.body.prepend(noscriptTag);
    }
});