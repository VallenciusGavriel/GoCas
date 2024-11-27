<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- SEO -->
        <title inertia>{{ $page['props']['meta']['title'] ?? 'GoCas - Sewa Powerbank Terbaik' }}</title>
        <meta name="description" content="{{ $page['props']['meta']['description'] ?? 'GoCas menyediakan layanan sewa powerbank terbaik untuk kebutuhan Anda. Pengiriman cepat dan harga terjangkau.' }}">
        <meta name="keywords" content="sewa powerbank, rental powerbank, powerbank murah, GoCas, powerbank Indonesia">
        <meta name="author" content="GoCas">
        <meta property="og:title" content="{{ $page['props']['meta']['title'] ?? 'GoCas - Sewa Powerbank Terbaik' }}">
        <meta property="og:description" content="{{ $page['props']['meta']['description'] ?? 'GoCas menyediakan layanan sewa powerbank terbaik untuk kebutuhan Anda.' }}">
        <meta property="og:image" content="{{ asset('images/navbar/gocas-logo.png') }}">
        <meta property="og:url" content="{{ url()->current() }}">

        <!-- JSON-LD Structured Data -->
        <script type="application/ld+json">
            {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "GoCas",
                "url": "https://gocas.id",
                "logo": "https://gocas.id/images/navbar/gocas-logo.png",
                "sameAs": [
                    "https://www.instagram.com/gocasindonesia",
                    "https://www.tiktok.com/@gocasindonesia?_t=8qdW7ChFe3r&_r=1",
                    "https://x.com/gocasindonesia?t=Bf5ybbiFLpMNoDciaBXiVw&s=09",
                    "https://www.linkedin.com/company/gocasindonesia/",
                    "https://www.facebook.com/profile.php?id=61567799393691&mibextid=ZbWKwL"
                ],
                "description": "GoCas menyediakan layanan sewa powerbank terbaik di Indonesia. Pilihan ideal untuk acara, perjalanan, dan kebutuhan lainnya."
            }
        </script>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
        <link rel="canonical" href="{{ url()->current() }}" />
        <link rel="icon" href="{{ asset('images/navbar/gocas-logo.png') }}" type="image/x-icon">

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>

    <script type="text/javascript">
        function googleTranslateElementInit() {
            new google.translate.TranslateElement({pageLanguage: 'id'}, 'google_translate_element');
        }
    </script>

    <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>

</html>
