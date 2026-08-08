const premiumLogo = "https://static.wikia.nocookie.net/logopedia/images/d/df/YouTube_Premium_white.svg";

function isiBitir() {
    let logoKutusu = document.querySelector('ytd-topbar-logo-renderer #logo-icon');
    if (logoKutusu && !logoKutusu.classList.contains('premium-cakilmis')) {
        logoKutusu.innerHTML = `<img src="${premiumLogo}" style="height: 20px; padding-left: 10px;">`;
        logoKutusu.classList.add('premium-cakilmis');
    }

    // TR ibaresini yok et
    let ulkeKodu = document.querySelector('#country-code');
    if (ulkeKodu) {
        ulkeKodu.remove();
    }
}

const observer = new MutationObserver(() => {
    isiBitir();
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});

window.addEventListener('DOMContentLoaded', isiBitir);
