const navLinks = document.querySelectorAll('.topnav a');
const sections = document.querySelectorAll('main .section[id]');
const langButton = document.querySelector('.lang-button');
const langMenu = document.getElementById('langMenu');
const langOptions = document.querySelectorAll('[data-lang]');
const translatable = document.querySelectorAll('[data-i18n]');
const ariaLabelTargets = document.querySelectorAll('[data-i18n-aria-label]');
const placeholderTargets = document.querySelectorAll('[data-i18n-placeholder]');
const topbar = document.querySelector('.topbar');
const progressBar = document.querySelector('.scroll-progress, .legal-progress');
const loadingScreen = document.querySelector('.loading-screen');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const lightboxCaption = document.querySelector('.lightbox-caption');
const galleryItems = document.querySelectorAll('.gallery-item');
const form = document.getElementById('contactForm');
const bookingForm = document.getElementById('bookingForm');
const formStatus = document.querySelector('.form-status');

const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.getElementById('siteNav');
let currentLanguage = 'ro';

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    siteNav.classList.toggle('open');

    navToggle.setAttribute(
      'aria-expanded',
      siteNav.classList.contains('open') ? 'true' : 'false'
    );
  });
}

const translations = {
  ro: {
    logo: 'Hotel Iaki',
    langButton: 'RO',
    loading: 'Pregătim experiența ta de lux',
    'nav.language': 'Schimbă limba',
    'nav.toggle': 'Deschide navigarea',
    'nav.home': 'Acasă',
    'nav.about': 'Despre',
    'nav.rooms': 'Camere',
    'nav.facilities': 'Facilități',
    'nav.gallery': 'Galerie',
    'nav.reviews': 'Recenzii',
    'nav.contact': 'Contact',
    'nav.book': 'Rezervă acum',
    'hero.eyebrow': 'HOTEL IAKI ★★★★★',
    'hero.title': 'Descoperă luxul de pe litoralul românesc',
    'hero.text': 'Camere premium, vedere spectaculoasă la mare, servicii de 5 stele și o experiență memorabilă în fiecare moment.',
    'hero.tag.sea': '🌊 Vedere la mare',
    'hero.tag.breakfast': '🍽 Mic dejun inclus',
    'hero.tag.beach': '🏖 Plajă privată',
    'hero.tag.suites': '💎 Suite de lux',
    'hero.cta.book': 'Rezervă acum',
    'hero.cta.explore': 'Vezi camerele',
    'hero.metric.satisfaction': 'satisfacție oaspeți',
    'hero.metric.service': 'serviciu concierge',
    'hero.metric.luxury': 'lux de 5 stele',
    'hero.panel.pill': 'Concierge privat',
    'hero.panel.text': 'Sosirea, wellness-ul și dining-ul sunt organizate fără efort în jurul sejurului dumneavoastră.',
    'hero.panel.checkin': 'Check-in',
    'hero.panel.transfers': 'Transferuri',
    'hero.panel.airport': 'Aeroport & marina',
    'hero.panel.dining': 'Dining',
    'hero.panel.table': 'Masa chef-ului',
    'about.eyebrow': 'Despre retreat',
    'about.title': 'Un sejur liniștit, orientat spre design, modelat după ritmul mării.',
    'about.text': 'De la suite panoramice la dining cu lumini calde, fiecare detaliu este curat pentru a părea natural și profund revitalizant.',
    'about.card.suites': 'Suite signature',
    'about.card.suites.text': 'Interioare spațioase, terase private și vedere panoramică la coastă.',
    'about.card.wellness': 'Ritualuri de wellness',
    'about.card.wellness.text': 'Terapii inspirate de ocean, tratamente restorative și yoga la răsărit.',
    'about.card.concierge': 'Sejururi conduse de concierge',
    'about.card.concierge.text': 'Excursii personalizate, dining privat și ghidare locală atentă.',
    'rooms.eyebrow': 'Camere recomandate',
    'rooms.title': 'Spații create pentru indulgență liniștită și confort complet.',
    'rooms.ocean.title': 'Ocean View Room',
    'rooms.ocean.text': 'Retreat cu o cameră, ferestre de la podea la tavan, baie din marmură și terasă privată.',
    'rooms.ocean.link': 'Rezervă camera',
    'rooms.garden.title': 'Garden camera',
    'rooms.garden.text': 'Curte privată, lounge în aer liber și acces direct la pavilionul de wellness.',
    'rooms.garden.link': 'Rezervă camera',
    'rooms.sky.title': 'Sky Balcony',
    'rooms.sky.text': 'Spațiu panoramic de living cu mic dejun la răsărit și balcon în formă de inel.',
    'rooms.sky.link': 'Rezervă camera',
    'facilities.eyebrow': 'Facilități signature',
    'facilities.title': 'Experiențe elevate care fac fiecare oră să pară bine gândită.',
    'facilities.spa.title': 'Spa privat',
    'facilities.spa.text': 'Confort termal, aromaterapie și ritualuri personalizate într-un cadru liniștit, la mare.',
    'facilities.rooftop.title': 'Lounge pe acoperiș',
    'facilities.rooftop.text': 'Cocktailuri signature, priveliști de apus și un scenariu social cu lumină caldă deasupra coastelor.',
    'facilities.dining.title': 'Dining elegant',
    'facilities.dining.text': 'Meniuri sezoniere, ingrediente locale și o experiență culinară rafinată pentru orice ocazie.',
    'awards.eyebrow': 'Premii și certificări',
    'awards.title': 'Recunoscut pentru excelență în ospitalitate și sustenabilitate.',
    'awards.text': 'Suntem mândri să menținem standardele care contează cel mai mult pentru călătorii moderni și gazde responsabile.',
    'awards.forbes.title': 'Forbes Travel Guide',
    'awards.forbes.text': 'Recunoaștere pentru proprietăți de lux, serviciu și design extraordinar.',
    'awards.tourism.title': 'Excelență în turism',
    'awards.tourism.text': 'Certificare națională pentru experiența premium a oaspeților și calitatea operațională.',
    'awards.eco.title': 'Certificare ecologică',
    'awards.eco.text': 'Gestionare responsabilă a resurselor, reducerea deșeurilor și operațiuni sustenabile pentru oaspeți.',
    'awards.quality.title': 'Standard de calitate',
    'awards.quality.text': 'Standardele de serviciu, curățenie și confort sunt verificate pentru excelență constantă.',
    'privacy.eyebrow': 'Confidențialitate și GDPR',
    'privacy.title': 'Confidențialitatea dumneavoastră este protejată cu grijă și transparentă.',
    'privacy.text': 'Procesăm informațiile oaspeților într-un mod responsabil, clar și în conformitate cu standardele europene de protecție a datelor.',
    'privacy.data.title': 'Protecția datelor',
    'privacy.data.text': 'Informațiile personale sunt stocate în siguranță și folosite doar pentru rezervări, comunicare cu oaspeții și îmbunătățirea calității serviciilor.',
    'privacy.cookies.title': 'Cookie-uri și analize',
    'privacy.cookies.text': 'Folosim cookie-uri esențiale pentru performanța site-ului și analize opționale pentru a îmbunătăți experiența de navigare.',
    'privacy.rights.title': 'Drepturile oaspeților',
    'privacy.rights.text': 'Puteți accesa, corecta, șterge sau limita utilizarea datelor dumneavoastră în orice moment prin contactarea echipei noastre de confidențialitate.',
    'policies.eyebrow': 'Politici hotel',
    'policies.title': 'Informații clare pentru o sosire și un sejur fără probleme.',
    'policies.checkin.title': 'Check-in',
    'policies.checkin.text': 'De la ora 15:00, cu sosiri timpurii organizate la cerere.',
    'policies.checkout.title': 'Check-out',
    'policies.checkout.text': 'Până la ora 12:00, cu plecări târzii disponibile în funcție de disponibilitate.',
    'policies.cancel.title': 'Anulare',
    'policies.cancel.text': 'Anulare gratuită până la 72 de ore înainte de sosire pentru majoritatea rezervărilor.',
    'policies.children.title': 'Copiii',
    'policies.children.text': 'Copiii cu vârsta de 12 ani și sub stay free atunci când împart lenjeria existentă.',
    'policies.pets.title': 'Animale de companie',
    'policies.pets.text': 'Animalele de companie bine educate sunt binevenite în camere selecte, cu o taxă mică.',
    'policies.smoking.title': 'Fumatul',
    'policies.smoking.text': 'Fumatul este permis doar în zonele exterioare designate.',
    'policies.parking.title': 'Parcare',
    'policies.parking.text': 'Parcare subterană securizată este disponibilă pentru toți oaspeții.',
    'policies.accessibility.title': 'Accesibilitate',
    'policies.accessibility.text': 'Camere accesibile, lifturi și facilități adaptate sunt disponibile la cerere.',
    'gallery.eyebrow': 'Galerie interactivă',
    'gallery.title': 'Momente de liniște, eleganță și lumină de coastă.',
    'gallery.text': 'Fiecare cadru surprinde atmosfera unui sejur care pare calm, luxos și profund personal.',
    'gallery.caption.one': 'Terasă la malul mării la răsărit',
    'gallery.caption.two': 'Lounge rafinat cu vedere la mare',
    'gallery.caption.three': 'Balcon privat cu vedere panoramică',
    'gallery.close': 'Închide previzualizarea',
    'reviews.eyebrow': 'Recenzii',
    'reviews.title': 'Încrezători pentru călătorii care caută lux liniștit.',
    'reviews.text': 'Experiența este lăudată constant pentru confort, design și servicii atent gândite.',
    'reviews.one.text': '„Atmosfera a fost liniștit luxoasă de la primul moment. Totul a fost perfect.”',
    'reviews.two.text': '„O combinație rară de eleganță, confort și servicii incredibil de attentive.”',
    'reviews.three.text': '„Spa-ul, priveliștea și designul camerei au fost excepționale. Cu adevărat memorabil.”',
    'faq.eyebrow': 'Întrebări frecvente',
    'faq.title': 'Răspunsuri utile înainte de sosire.',
    'faq.one.q': 'Mic dejun este inclus?',
    'faq.one.a': 'Mic dejun este inclus în toate categoriile de camere și este servit în sala noastră de dining din grădină.',
    'faq.two.q': 'Oferiți transferuri de la aeroport?',
    'faq.two.a': 'Da, transferuri private pot fi organizate în avans pentru o sosire și plecare fără probleme.',
    'faq.three.q': 'Pot organiza o sărbătoare specială?',
    'faq.three.a': 'Desigur. Echipa noastră de concierge poate organiza dining romantic, detalii pentru aniversare și evenimente private.',
    'contact.eyebrow': 'Contact premium',
    'contact.title': 'Rezervați sejurul cu încredere.',
    'contact.text': 'Echipa noastră este pregătită să vă ajute cu rezervări, cereri speciale și planificarea sosirii.',
    'contact.address.title': 'Adresă',
    'contact.address.text': 'Strada Plajei 12, Eforie Nord',
    'contact.phone.title': 'Telefon',
    'contact.email.title': 'Email',
    'contact.form.name': 'Nume',
    'contact.form.email': 'Email',
    'contact.form.message': 'Mesaj',
    'contact.form.submit': 'Trimite cererea',
    'footer.text': '© 2026 Hotel Iaki • Eleganță, confort și ospitalitate la mare',
    'footer.privacy': 'Politică de confidențialitate',
    'footer.gdpr': 'GDPR',
    'footer.cookies': 'Politică cookie',
    'footer.terms': 'Termeni și condiții',
    'footer.booking': 'Rezervări',
    'footer.gallery': 'Galerie',
    'footer.awards': 'Premii',
    'footer.contact': 'Contact',
    'form.contact.success': 'Mulțumim — echipa noastră vă va contacta în scurt timp.',
    'form.booking.success': 'Cererea dumneavoastră a fost înregistrată. Un specialist concierge vă va răspunde în scurt timp.',
    'booking.skip': 'Sari la formularul de rezervare',
    'booking.loading': 'Pregătim experiența ta de rezervare',
    'booking.nav.home': 'Acasă',
    'booking.nav.about': 'Despre',
    'booking.nav.rooms': 'Camere',
    'booking.nav.gallery': 'Galerie',
    'booking.nav.booking': 'Rezervări',
    'booking.nav.reserve': 'Rezervă acum',
    'booking.hero.badge': 'Experiență de rezervare',
    'booking.hero.title': 'Rezervați-vă escape-ul privat la malul mării.',
    'booking.hero.text': 'De la transferuri private la ritualuri spa și dining elegant, echipa noastră de concierge va planifica fiecare detaliu în jurul sejurului dumneavoastră cu discreție.',
    'booking.hero.cta.primary': 'Începe rezervarea',
    'booking.hero.cta.secondary': 'Întoarce-te acasă',
    'booking.meta.support': 'Asistență concierge',
    'booking.meta.support.text': 'Asistență 24/7 pentru transferuri, dining și cereri speciale',
    'booking.meta.arrival': 'Sosire flexibilă',
    'booking.meta.arrival.text': 'Check-in timpuriu disponibil la cerere',
    'booking.meta.guests': 'Oaspeți preferați',
    'booking.meta.guests.text': 'Planificare privată pentru aniversări, nunți și retreat-uri',
    'booking.section.badge': 'Sejur signature',
    'booking.section.title': 'Totul, de la sosire până la plecare, este organizat cu precizie liniștită.',
    'booking.section.text': 'Alegeți camera dorită, intervalul de sosire și serviciile cerute și echipa noastră se va ocupa de restul.',
    'booking.stats.one.title': 'Suite ocean',
    'booking.stats.one.text': '12 suite frumos amenajate, cu vedere la mare și terase private.',
    'booking.stats.two.title': 'Ritualuri de wellness',
    'booking.stats.two.text': 'Tratamente spa personalizate, yoga la răsărit și spații private de recuperare.',
    'booking.stats.three.title': 'Concierge dining',
    'booking.stats.three.text': 'Mic dejun în cameră, cine la chef și meniuri intime pentru sărbători.',
    'booking.form.fullname': 'Nume complet',
    'booking.form.email': 'Email',
    'booking.form.arrival': 'Data sosirii',
    'booking.form.departure': 'Data plecării',
    'booking.form.guests': 'Oaspeți',
    'booking.form.room': 'Tip cameră',
    'booking.form.request': 'Cereri speciale',
    'booking.form.submit': 'Solicită disponibilitate',
    'booking.form.placeholder.name': 'Alexandra Popescu',
    'booking.form.placeholder.email': 'alexandra@email.com',
    'booking.form.placeholder.request': 'Spuneți-ne despre experiența dorită, sărbătoririle sau nevoile de accesibilitate.',
    'booking.form.guest.option.one': '2 Oaspeți',
    'booking.form.guest.option.two': '3 Oaspeți',
    'booking.form.guest.option.three': '4 Oaspeți',
    'booking.form.guest.option.four': '5+ Oaspeți',
    'booking.form.room.option.one': 'Ocean View Room',
    'booking.form.room.option.two': 'Deluxe Suite',
    'booking.form.room.option.three': 'Presidential Suite',
    'booking.highlight': 'Un specialist în rezervări vă va răspunde în scurt timp cu disponibilitatea camerei, opțiuni de pachet și următorii pași.',
    'legal.nav.home': 'Acasă',
    'legal.nav.privacy': 'Politică de confidențialitate',
    'legal.nav.gdpr': 'GDPR',
    'legal.nav.cookies': 'Cookie-uri',
    'legal.nav.terms': 'Termeni',
    'legal.nav.contact': 'Contact',
    'privacy.page.badge': 'Politică de confidențialitate',
    'privacy.page.title': 'Politică de confidențialitate',
    'privacy.page.text': 'La Hotel Iaki, tratăm confidențialitatea fiecărui oaspete cu aceeași grijă și discreție pe care o oferim fiecărui detaliu al sejurului. Această politică explică modul în care colectăm, folosim, protejăm și partajăm informațiile personale atunci când ne contactați, faceți o rezervare sau vizitați site-ul nostru.',
    'privacy.page.cta.primary': 'Contactați hotelul',
    'privacy.page.cta.secondary': 'Înapoi acasă',
    'privacy.page.meta.date': 'Data intrării în vigoare',
    'privacy.page.meta.date.value': 'Mai 2026',
    'privacy.page.meta.reviewed': 'Ultima revizuire',
    'privacy.page.meta.reviewed.value': 'Aprilie 2026',
    'privacy.page.meta.contact': 'Contact',
    'privacy.page.toc.title': 'Pe această pagină',
    'privacy.page.toc.overview': 'Prezentare generală',
    'privacy.page.toc.collect': 'Ce colectăm',
    'privacy.page.toc.use': 'Cum o folosim',
    'privacy.page.toc.protect': 'Cum o protejăm',
    'privacy.page.section.overview.title': 'Prezentare generală',
    'privacy.page.section.overview.text': 'Respectăm confidențialitatea fiecărei interacțiuni cu oaspeții. De la momentul în care se face o rezervare până la check-out-ul final, tratăm informațiile personale cu grijă și le limităm la ceea ce este necesar pentru a oferi o experiență rafinată.',
    'privacy.page.section.collect.title': 'Ce informații colectăm',
    'privacy.page.section.collect.text': 'Putem colecta informații precum numele dumneavoastră, adresa de email, numărul de telefon, datele preferate de călătorie, preferințele de sosire și orice cereri speciale pe care ni le împărtășiți. Colectăm și informații tehnice prin site-ul nostru, inclusiv adresa IP, detalii despre browser și date de interacțiune.',
    'privacy.page.section.collect.item.one': 'Detalii de rezervare și comunicare cu oaspeții.',
    'privacy.page.section.collect.item.two': 'Preferințe și cereri speciale pentru sejur.',
    'privacy.page.section.collect.item.three': 'Utilizarea site-ului și informații despre interacțiunea cu suportul.',
    'privacy.page.section.use.title': 'Cum folosim informațiile dumneavoastră',
    'privacy.page.section.use.text': 'Informațiile dumneavoastră ne permit să gestionăm rezervările, să confirmăm rezervările, să oferim servicii pentru oaspeți, să răspundem la solicitări și să îmbunătățim calitatea ospitalității noastre. Nu vindem sau închiriem date personale terților în scopuri de marketing.',
    'privacy.page.section.use.card.one.title': 'Gestionarea rezervărilor',
    'privacy.page.section.use.card.one.text': 'Vă folosim detaliile pentru a confirma disponibilitatea, a pregăti sejurul și a coordona servicii precum transferurile de la aeroport sau cererile de dining.',
    'privacy.page.section.use.card.two.title': 'Experiența oaspeților',
    'privacy.page.section.use.card.two.text': 'Vă folosim preferințele pentru a adapta pregătirea camerei, amenajările de bun venit și aranjamentele de serviciu la așteptările dumneavoastră.',
    'privacy.page.section.protect.title': 'Cum vă protejăm datele',
    'privacy.page.section.protect.text': 'Folosim sisteme securizate și proceduri de acces restricționat pentru a proteja informațiile personale de accesul neautorizat, utilizarea greșită sau divulgarea. Numai membri autorizați ai echipei care au nevoie de informații pentru a-și îndeplini atribuțiile pot avea acces la acestea.',
    'privacy.page.quote': 'Încrederea dumneavoastră este centrală pentru filozofia noastră de serviciu și tratăm fiecare cerere de date cu aceeași discreție ca pe o cerere privată de concierge.',
    'cookies.page.badge': 'Politică cookie',
    'cookies.page.title': 'Politică cookie',
    'cookies.page.text': 'Site-ul nostru folosește cookie-uri pentru a asigura o navigare fluidă, a-și aminti preferințele dumneavoastră și a ne ajuta să înțelegem cum interacționează vizitatorii cu conținutul nostru. Folosim aceste informații pentru a menține calitatea experienței dumneavoastră și pentru a rafina prezentarea serviciilor noastre.',
    'cookies.page.cta.primary': 'Întoarce-te la experiență',
    'cookies.page.cta.secondary': 'Vorbește cu echipa noastră',
    'cookies.page.meta.preference': 'Gestionarea preferințelor',
    'cookies.page.meta.preference.value': 'Selectarea limbii și a regiunii',
    'cookies.page.meta.analytics': 'Analize',
    'cookies.page.meta.analytics.value': 'Perspective opționale bazate pe browser',
    'cookies.page.meta.control': 'Control',
    'cookies.page.meta.control.value': 'Le puteți dezactiva oricând',
    'cookies.page.toc.title': 'Pe această pagină',
    'cookies.page.toc.types': 'Tipuri de cookie-uri',
    'cookies.page.toc.manage': 'Gestionarea cookie-urilor',
    'cookies.page.section.types.title': 'Ce cookie-uri folosim',
    'cookies.page.section.types.text': 'Cookie-urile ne permit să menținem site-ul funcțional și să îmbunătățim performanța. Putem folosi cookie-uri esențiale pentru navigare și stabilitatea sesiunii, precum și cookie-uri opționale de analiză pentru a înțelege mai bine comportamentul vizitatorilor.',
    'cookies.page.section.types.item.one': 'Cookie-uri esențiale necesare pentru funcționarea corectă a site-ului.',
    'cookies.page.section.types.item.two': 'Cookie-uri de preferințe care își amintesc limba și alegerile regionale.',
    'cookies.page.section.types.item.three': 'Cookie-uri de analiză folosite pentru a înțelege performanța paginilor și pentru a îmbunătăți experiența utilizatorului.',
    'cookies.page.section.manage.title': 'Gestionarea cookie-urilor',
    'cookies.page.section.manage.text': 'Puteți gestiona sau dezactiva cookie-urile prin setările browserului. Vă rugăm să rețineți că dezactivarea anumitor cookie-uri poate afecta funcționalitatea site-ului, inclusiv a anumitor formulare sau preferințe de conținut.',
    'cookies.page.quote': 'Păstrăm experiența intuitivă, dar alegerea rămâne a dumneavoastră.',
    'terms.page.badge': 'Termeni și condiții',
    'terms.page.title': 'Termeni și condiții',
    'terms.page.text': 'Acești termeni guvernează utilizarea site-ului Hotel Iaki și orice solicitări de rezervare trimise prin canalele noastre online. Prin utilizarea site-ului nostru sau prin efectuarea unei rezervări, sunteți de acord cu acești termeni și recunoașteți standardele noastre de serviciu și conduită.',
    'terms.page.cta.primary': 'Planificați-vă sejurul',
    'terms.page.cta.secondary': 'Înapoi acasă',
    'terms.page.meta.booking': 'Politica de rezervare',
    'terms.page.meta.booking.value': 'Subiect la disponibilitate și confirmare',
    'terms.page.meta.rates': 'Tarife',
    'terms.page.meta.rates.value': 'Cotate la momentul rezervării',
    'terms.page.meta.guest': 'Standardele oaspeților',
    'terms.page.meta.guest.value': 'Se așteaptă o conduită respectuoasă',
    'terms.page.toc.title': 'Pe această pagină',
    'terms.page.toc.reservations': 'Rezervări',
    'terms.page.toc.conduct': 'Conduita oaspeților',
    'terms.page.section.reservations.title': 'Rezervări și plăți',
    'terms.page.section.reservations.text': 'Rezervările sunt supuse disponibilității și confirmării de către Hotel Iaki. Tarifele sunt cotate în moneda menționată la data rezervării și pot fi supuse taxelor locale sau taxelor de serviciu, după caz.',
    'terms.page.section.reservations.item.one': 'Rezervările sunt confirmate la primirea unei solicitări valabile de rezervare și a acceptării de către hotel.',
    'terms.page.section.reservations.item.two': 'Politicile de anulare și modificare variază în funcție de tipul de tarif și sunt comunicate la rezervare.',
    'terms.page.section.reservations.item.three': 'Oaspeții sunt responsabili pentru orice taxe suplimentare suportate în timpul sejurului.',
    'terms.page.section.conduct.title': 'Conduita oaspeților și regulile proprietății',
    'terms.page.section.conduct.text': 'Vă solicităm să respectați confidențialitatea, confortul și bunăstarea celorlalți în timpul sejurului. Hotelul își rezervă dreptul de a refuza serviciul sau de a elimina oaspeții care perturbă atmosfera sau încalcă standardele proprietății.',
    'terms.page.quote': 'O atmosferă liniștită și politicoasă face parte din experiența pe care o oferim.'
  },
  en: {
    logo: 'Hotel Iaki',
    langButton: 'EN',
    loading: 'Preparing your luxury escape',
    'skip.content': 'Skip to content',
    'nav.language': 'Switch language',
    'nav.toggle': 'Open navigation',
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.rooms': 'Rooms',
    'nav.facilities': 'Facilities',
    'nav.gallery': 'Gallery',
    'nav.reviews': 'Reviews',
    'nav.contact': 'Contact',
    'nav.book': 'Book now',
    'hero.eyebrow': 'HOTEL IAKI ★★★★★',
    'hero.title': 'Discover luxury on the Romanian coast',
    'hero.text': 'Premium rooms, spectacular sea views, five-star service and a memorable experience in every moment.',
    'hero.tag.sea': '🌊 Sea view',
    'hero.tag.breakfast': '🍽 Breakfast',
    'hero.tag.beach': '🏖 Private beach',
    'hero.tag.suites': '💎 Luxury suites',
    'hero.cta.book': 'Book now',
    'hero.cta.explore': 'Explore rooms',
    'hero.metric.satisfaction': 'guest satisfaction',
    'hero.metric.service': 'concierge service',
    'hero.metric.luxury': 'signature luxury',
    'hero.panel.pill': 'Private concierge',
    'hero.panel.text': 'Arrival, wellness and dining are arranged seamlessly around your stay.',
    'hero.panel.checkin': 'Check-in',
    'hero.panel.transfers': 'Transfers',
    'hero.panel.airport': 'Airport & marina',
    'hero.panel.dining': 'Dining',
    'hero.panel.table': "Chef's table",
    'about.eyebrow': 'About the retreat',
    'about.title': 'A calm, design-led stay shaped around the rhythm of the sea.',
    'about.text': 'From panoramic suites to candlelit dining, every detail is curated to feel effortless and deeply restorative.',
    'about.card.suites': 'Signature suites',
    'about.card.suites.text': 'Spacious interiors, private terraces and panoramic coastal views.',
    'about.card.wellness': 'Wellness rituals',
    'about.card.wellness.text': 'Ocean-inspired therapies, restorative treatments and sunrise yoga.',
    'about.card.concierge': 'Concierge-led stays',
    'about.card.concierge.text': 'Tailored excursions, private dining and thoughtful local guidance.',
    'rooms.eyebrow': 'Signature rooms',
    'rooms.title': 'Suites, sea views and unforgettable evenings.',
    'rooms.ocean.title': 'Ocean View Room',
    'rooms.ocean.text': 'Designed for two with a private balcony, refined textiles and uninterrupted sea views.',
    'rooms.ocean.link': 'Book room',
    'rooms.garden.title': 'Garden camera',
    'rooms.garden.text': 'Private courtyard, outdoor lounge and direct access to the wellness pavilion.',
    'rooms.garden.link': 'Book room',
    'rooms.sky.title': 'Sky Balcony',
    'rooms.sky.text': 'Panoramic living space with sunrise breakfast service and a wraparound balcony.',
    'rooms.sky.link': 'Book room',
    'facilities.eyebrow': 'Facilities',
    'facilities.title': 'Everything you desire, thoughtfully arranged.',
    'facilities.spa.title': 'Ocean spa',
    'facilities.spa.text': 'Private treatment rooms, thermal comfort and sea-inspired rituals designed around calm.',
    'facilities.rooftop.title': 'Rooftop lounge',
    'facilities.rooftop.text': 'Signature cocktails, sunset views and a softly lit social scene above the coastline.',
    'facilities.dining.title': 'Fine dining',
    'facilities.dining.text': 'Seasonal menus, local ingredients and a polished culinary experience for every occasion.',
    'awards.eyebrow': 'Awards & certs',
    'awards.title': 'Recognised for excellence in hospitality and sustainability.',
    'awards.text': 'We are proud to uphold the standards that matter most to modern travellers and responsible hosts.',
    'awards.forbes.title': 'Forbes Travel Guide',
    'awards.forbes.text': 'Luxury property recognition for extraordinary service and design.',
    'awards.tourism.title': 'Tourism Excellence',
    'awards.tourism.text': 'National tourism certification for premium guest experience and operational quality.',
    'awards.eco.title': 'Eco Certification',
    'awards.eco.text': 'Responsible resource management, waste reduction and sustainable guest operations.',
    'awards.quality.title': 'Quality Standards',
    'awards.quality.text': 'Service, cleanliness and comfort benchmarks verified for consistent excellence.',
    'privacy.eyebrow': 'Privacy & GDPR',
    'privacy.title': 'Your privacy is protected with care and transparency.',
    'privacy.text': 'We process guest information responsibly, clearly and in accordance with European data protection standards.',
    'privacy.data.title': 'Data protection',
    'privacy.data.text': 'Personal information is stored securely and used only for booking, guest communication and service quality improvements.',
    'privacy.cookies.title': 'Cookies & analytics',
    'privacy.cookies.text': 'We use essential cookies for site performance and optional analytics to improve your browsing experience.',
    'privacy.rights.title': 'Guest rights',
    'privacy.rights.text': 'You may access, correct, delete or limit the use of your data at any time by contacting our privacy team.',
    'policies.eyebrow': 'Hotel policies',
    'policies.title': 'Clear information for a smooth arrival and stay.',
    'policies.checkin.title': 'Check-in',
    'policies.checkin.text': 'From 3:00 PM, with early arrivals arranged upon request.',
    'policies.checkout.title': 'Check-out',
    'policies.checkout.text': 'Until 12:00 PM, with late departures available subject to availability.',
    'policies.cancel.title': 'Cancellation',
    'policies.cancel.text': 'Free cancellation up to 72 hours before arrival for most reservations.',
    'policies.children.title': 'Children',
    'policies.children.text': 'Children aged 12 and under stay free when sharing existing bedding.',
    'policies.pets.title': 'Pets',
    'policies.pets.text': 'Well-behaved pets are welcome in select rooms with a small surcharge.',
    'policies.smoking.title': 'Smoking',
    'policies.smoking.text': 'Smoking is permitted only in designated outdoor areas.',
    'policies.parking.title': 'Parking',
    'policies.parking.text': 'Secure underground parking is available for all guests.',
    'policies.accessibility.title': 'Accessibility',
    'policies.accessibility.text': 'Accessible rooms, lifts and adapted facilities are available upon request.',
    'gallery.eyebrow': 'Interactive gallery',
    'gallery.title': 'Moments of serenity, elegance and coastal light.',
    'gallery.text': 'Each frame captures the atmosphere of a stay that feels calm, luxurious and deeply personal.',
    'gallery.caption.one': 'Oceanfront terrace at sunrise',
    'gallery.caption.two': 'Refined lounge overlooking the sea',
    'gallery.caption.three': 'Private balcony with panoramic views',
    'gallery.close': 'Close preview',
    'reviews.eyebrow': 'Reviews',
    'reviews.title': 'Trusted by travellers seeking quiet luxury.',
    'reviews.text': 'The experience is consistently praised for comfort, design and thoughtful service.',
    'reviews.one.text': '“The atmosphere felt quietly luxurious from the moment we arrived. Everything was seamless.”',
    'reviews.two.text': '“A rare combination of elegance, comfort and incredibly attentive service.”',
    'reviews.three.text': '“The spa, the views and the room design were all exceptional. Truly memorable.”',
    'faq.eyebrow': 'Frequently asked questions',
    'faq.title': 'Helpful answers before your arrival.',
    'faq.one.q': 'Is breakfast included?',
    'faq.one.a': 'Breakfast is included in all room categories and served in our garden dining room.',
    'faq.two.q': 'Do you offer airport transfers?',
    'faq.two.a': 'Yes, private transfers can be arranged in advance for a smooth arrival and departure.',
    'faq.three.q': 'Can I organise a special celebration?',
    'faq.three.a': 'Absolutely. Our concierge team can arrange romantic dining, anniversary touches and private events.',
    'contact.eyebrow': 'Premium contact',
    'contact.title': 'Reserve your stay with confidence.',
    'contact.text': 'Our team is ready to help with bookings, special requests and arrival planning.',
    'contact.address.title': 'Address',
    'contact.address.text': 'Strada Plajei 12, Eforie Nord',
    'contact.phone.title': 'Phone',
    'contact.email.title': 'Email',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send request',
    'footer.text': '© 2026 Hotel Iaki • Elegance, comfort and hospitality by the sea',
    'footer.privacy': 'Privacy Policy',
    'footer.gdpr': 'GDPR',
    'footer.cookies': 'Cookie Policy',
    'footer.terms': 'Terms & Conditions',
    'footer.booking': 'Booking',
    'footer.gallery': 'Gallery',
    'footer.awards': 'Awards',
    'footer.contact': 'Contact',
    'form.contact.success': 'Thank you — our team will contact you shortly.',
    'form.booking.success': 'Your request has been received. A concierge specialist will reply shortly.',
    'booking.skip': 'Skip to booking form',
    'booking.loading': 'Preparing your booking experience',
    'booking.nav.home': 'Home',
    'booking.nav.about': 'About',
    'booking.nav.rooms': 'Rooms',
    'booking.nav.gallery': 'Gallery',
    'booking.nav.booking': 'Booking',
    'booking.nav.reserve': 'Reserve now',
    'booking.hero.badge': 'Booking experience',
    'booking.hero.title': 'Reserve your private coastal escape.',
    'booking.hero.text': 'From private transfers to spa rituals and fine dining, our concierge team will plan every detail around your stay with effortless discretion.',
    'booking.hero.cta.primary': 'Start reservation',
    'booking.hero.cta.secondary': 'Return home',
    'booking.meta.support': 'Concierge support',
    'booking.meta.support.text': '24/7 assistance for transfers, dining and special requests',
    'booking.meta.arrival': 'Flexible arrival',
    'booking.meta.arrival.text': 'Early check-in available upon request',
    'booking.meta.guests': 'Preferred guests',
    'booking.meta.guests.text': 'Private planning for anniversaries, weddings and retreats',
    'booking.section.badge': 'Signature stay',
    'booking.section.title': 'Everything from arrival to departure is arranged with quiet precision.',
    'booking.section.text': 'Choose your preferred room, arrival window and requested services and our team will take care of the rest.',
    'booking.stats.one.title': 'Ocean suites',
    'booking.stats.one.text': '12 beautifully appointed suites with sea views and private terraces.',
    'booking.stats.two.title': 'Wellness rituals',
    'booking.stats.two.text': 'Personalised spa treatments, sunrise yoga and private recovery spaces.',
    'booking.stats.three.title': 'Dining concierge',
    'booking.stats.three.text': 'In-suite breakfasts, chef-led dinners and intimate celebration menus.',
    'booking.form.fullname': 'Full name',
    'booking.form.email': 'Email',
    'booking.form.arrival': 'Arrival date',
    'booking.form.departure': 'Departure date',
    'booking.form.guests': 'Guests',
    'booking.form.room': 'Room type',
    'booking.form.request': 'Special requests',
    'booking.form.submit': 'Request availability',
    'booking.form.placeholder.name': 'Alexandra Popescu',
    'booking.form.placeholder.email': 'alexandra@email.com',
    'booking.form.placeholder.request': 'Tell us about your preferred experience, celebrations or accessibility needs.',
    'booking.form.guest.option.one': '2 Guests',
    'booking.form.guest.option.two': '3 Guests',
    'booking.form.guest.option.three': '4 Guests',
    'booking.form.guest.option.four': '5+ Guests',
    'booking.form.room.option.one': 'Ocean View Room',
    'booking.form.room.option.two': 'Deluxe Suite',
    'booking.form.room.option.three': 'Presidential Suite',
    'booking.highlight': 'A reservation specialist will reply shortly with room availability, package options and next steps.',
    'legal.nav.home': 'Home',
    'legal.nav.privacy': 'Privacy Policy',
    'legal.nav.gdpr': 'GDPR',
    'legal.nav.cookies': 'Cookies',
    'legal.nav.terms': 'Terms',
    'legal.nav.contact': 'Contact',
    'privacy.page.badge': 'Privacy Policy',
    'privacy.page.title': 'Privacy Policy',
    'privacy.page.text': 'At Hotel Iaki, we treat the privacy of every guest with the same care and discretion we extend to every detail of their stay. This policy explains how we collect, use, protect and share personal information when you contact us, make a reservation or visit our website.',
    'privacy.page.cta.primary': 'Contact the hotel',
    'privacy.page.cta.secondary': 'Back to home',
    'privacy.page.meta.date': 'Effective date',
    'privacy.page.meta.date.value': 'May 2026',
    'privacy.page.meta.reviewed': 'Last reviewed',
    'privacy.page.meta.reviewed.value': 'April 2026',
    'privacy.page.meta.contact': 'Contact',
    'privacy.page.toc.title': 'On this page',
    'privacy.page.toc.overview': 'Overview',
    'privacy.page.toc.collect': 'What we collect',
    'privacy.page.toc.use': 'How we use it',
    'privacy.page.toc.protect': 'How we protect it',
    'privacy.page.section.overview.title': 'Overview',
    'privacy.page.section.overview.text': 'We respect the confidentiality of every guest interaction. From the moment a reservation is made to the final check-out, we handle personal information with care and limit it to what is necessary to deliver a refined experience.',
    'privacy.page.section.collect.title': 'What information we collect',
    'privacy.page.section.collect.text': 'We may collect information such as your name, email address, phone number, preferred dates of travel, arrival preferences and any special requests you share with us. We also collect technical information through our website, including your IP address, browser details and interaction data.',
    'privacy.page.section.collect.item.one': 'Reservation and guest communication details.',
    'privacy.page.section.collect.item.two': 'Preferences and special requests for your stay.',
    'privacy.page.section.collect.item.three': 'Website usage and support interaction information.',
    'privacy.page.section.use.title': 'How we use your information',
    'privacy.page.section.use.text': 'Your information allows us to manage reservations, confirm bookings, provide guest services, respond to inquiries and improve the quality of our hospitality. We do not sell or rent personal data to third parties for marketing purposes.',
    'privacy.page.section.use.card.one.title': 'Reservation management',
    'privacy.page.section.use.card.one.text': 'We use your details to confirm availability, prepare your stay and coordinate services such as airport transfers or dining requests.',
    'privacy.page.section.use.card.two.title': 'Guest experience',
    'privacy.page.section.use.card.two.text': 'We use your preferences to tailor room preparation, welcome amenities and service arrangements to your expectations.',
    'privacy.page.section.protect.title': 'How we protect your data',
    'privacy.page.section.protect.text': 'We use secure systems and restricted access procedures to protect personal information from unauthorised access, misuse or disclosure. Only authorised team members who need the information to perform their duties can access it.',
    'privacy.page.quote': 'Your trust is central to our service philosophy, and we treat every data request with the same discretion as a private concierge request.',
    'cookies.page.badge': 'Cookie Policy',
    'cookies.page.title': 'Cookie Policy',
    'cookies.page.text': 'Our website uses cookies to ensure smooth browsing, remember your preferences and help us understand how visitors interact with our content. We use this information to maintain the quality of your experience and to refine the presentation of our services.',
    'cookies.page.cta.primary': 'Return to experience',
    'cookies.page.cta.secondary': 'Speak with our team',
    'cookies.page.meta.preference': 'Preference handling',
    'cookies.page.meta.preference.value': 'Language and region selection',
    'cookies.page.meta.analytics': 'Analytics',
    'cookies.page.meta.analytics.value': 'Optional browser-based insights',
    'cookies.page.meta.control': 'Control',
    'cookies.page.meta.control.value': 'You can disable them anytime',
    'cookies.page.toc.title': 'On this page',
    'cookies.page.toc.types': 'Types of cookies',
    'cookies.page.toc.manage': 'Managing cookies',
    'cookies.page.section.types.title': 'What cookies we use',
    'cookies.page.section.types.text': 'Cookies allow us to keep the website functional and improve performance. We may use essential cookies for navigation and session stability, as well as optional analytics cookies to better understand visitor behaviour.',
    'cookies.page.section.types.item.one': 'Essential cookies required for the website to function correctly.',
    'cookies.page.section.types.item.two': 'Preference cookies that remember your language and region choices.',
    'cookies.page.section.types.item.three': 'Analytics cookies used to understand page performance and improve the user experience.',
    'cookies.page.section.manage.title': 'Managing cookies',
    'cookies.page.section.manage.text': 'You can manage or disable cookies through your browser settings. Please note that disabling some cookies may affect the functionality of the website, including certain forms or content preferences.',
    'cookies.page.quote': 'We keep the experience intuitive, but the choice remains yours.',
    'terms.page.badge': 'Terms & Conditions',
    'terms.page.title': 'Terms & Conditions',
    'terms.page.text': 'These terms govern your use of the Hotel Iaki website and any booking requests submitted through our online channels. By using our website or making a reservation, you agree to these terms and acknowledge our standards of service and conduct.',
    'terms.page.cta.primary': 'Plan your stay',
    'terms.page.cta.secondary': 'Back to home',
    'terms.page.meta.booking': 'Booking policy',
    'terms.page.meta.booking.value': 'Subject to availability and confirmation',
    'terms.page.meta.rates': 'Rates',
    'terms.page.meta.rates.value': 'Quoted at time of reservation',
    'terms.page.meta.guest': 'Guest standards',
    'terms.page.meta.guest.value': 'Respectful conduct expected',
    'terms.page.toc.title': 'On this page',
    'terms.page.toc.reservations': 'Reservations',
    'terms.page.toc.conduct': 'Guest conduct',
    'terms.page.section.reservations.title': 'Reservations and payments',
    'terms.page.section.reservations.text': 'Reservations are subject to availability and confirmation by Hotel Iaki. Rates are quoted in the currency stated at the time of booking and may be subject to local taxes or service charges as applicable.',
    'terms.page.section.reservations.item.one': 'Bookings are confirmed upon receipt of a valid reservation request and acceptance by the hotel.',
    'terms.page.section.reservations.item.two': 'Cancellation and modification policies vary by rate type and are communicated at booking.',
    'terms.page.section.reservations.item.three': 'Guests are responsible for any additional charges incurred during their stay.',
    'terms.page.section.conduct.title': 'Guest conduct and property rules',
    'terms.page.section.conduct.text': 'We request that guests respect the privacy, comfort and wellbeing of others during their stay. The hotel reserves the right to refuse service or remove guests who disrupt the atmosphere or violate property standards.',
    'terms.page.quote': 'A calm and courteous atmosphere is part of the experience we provide.'
  }
};

function updateActiveLink(targetId) {
  navLinks.forEach((link) => {
    link.classList.toggle('active', link.dataset.target === targetId);
  });
}

function scrollToSection(targetId) {
  const target = document.getElementById(targetId);
  if (!target) return;
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  updateActiveLink(targetId);
}

function navigateLink(link) {
  const href = link.getAttribute('href') || '';
  if (!href) return;

  if (href.startsWith('#')) {
    const targetId = href.slice(1);
    scrollToSection(targetId);
    return;
  }

  const [page, hash] = href.split('#');
  if (page && page !== window.location.pathname.split('/').pop()) {
    window.location.href = href;
    return;
  }

  if (hash) {
    scrollToSection(hash);
  }
}

navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    if (link.getAttribute('href')?.startsWith('#')) {
      event.preventDefault();
      navigateLink(link);
    }
    if (siteNav && window.innerWidth <= 840) {
      siteNav.classList.remove('open');
      if (navToggle) {
        navToggle.setAttribute('aria-expanded', 'false');
      }
    }
  });
});

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

function setLanguage(lang) {
  currentLanguage = lang;
  if (langButton) {
    langButton.textContent = lang.toUpperCase();
  }
  translatable.forEach((el) => {
    const key = el.dataset.i18n;
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  ariaLabelTargets.forEach((el) => {
    const key = el.dataset.i18nAriaLabel;
    if (translations[lang] && translations[lang][key]) {
      el.setAttribute('aria-label', translations[lang][key]);
    }
  });
  placeholderTargets.forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    if (translations[lang] && translations[lang][key]) {
      el.setAttribute('placeholder', translations[lang][key]);
    }
  });
  if (langMenu) {
    langMenu.classList.remove('open');
  }
  document.documentElement.lang = lang;
}

if (langButton) {
  langButton.addEventListener('click', () => {
    if (langMenu) {
      langMenu.classList.toggle('open');
    }
  });
}

langOptions.forEach((button) => {
  button.addEventListener('click', () => {
    const lang = button.dataset.lang;
    setLanguage(lang);
    localStorage.setItem('hotelIakiLang', lang);
  });
});

window.addEventListener('click', (event) => {
  if (!event.target.closest('.lang-switcher') && langMenu) {
    langMenu.classList.remove('open');
  }
});

if (window.gsap && window.ScrollTrigger) {
  window.gsap.registerPlugin(window.ScrollTrigger);
  const revealItems = document.querySelectorAll('.reveal');
  revealItems.forEach((item) => {
    window.gsap.fromTo(
      item,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 88%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  });

  window.gsap.from('.hero-copy > *', {
    y: 36,
    opacity: 0,
    duration: 0.95,
    stagger: 0.12,
    ease: 'power3.out'
  });

  window.gsap.from('.hero-image-card', {
    y: 46,
    opacity: 0,
    duration: 1.05,
    stagger: 0.15,
    ease: 'power3.out',
    delay: 0.12
  });
}

const counters = document.querySelectorAll('.count-up');
const counterObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const counter = entry.target;
    const target = Number(counter.dataset.count || 0);
    const suffix = counter.dataset.suffix || '';
    let current = 0;
    const duration = 1200;
    const startTime = performance.now();

    const animate = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      current = Math.round(target * eased);
      counter.textContent = `${current}${suffix}`;
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
    observer.disconnect();
  });
}, { threshold: 0.8 });

counters.forEach((counter) => counterObserver.observe(counter));

function updateScrollProgress() {
  if (!progressBar) return;
  const scrollTop = window.scrollY;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const percent = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
  progressBar.style.transform = `scaleX(${percent / 100})`;
}

window.addEventListener('scroll', updateScrollProgress, { passive: true });
updateScrollProgress();
window.addEventListener('scroll', () => {
  if (topbar) {
    topbar.classList.toggle('scrolled', window.scrollY > 20);
  }
});

window.addEventListener('load', () => {
  document.body.classList.add('loaded');
  if (loadingScreen) {
    setTimeout(() => {
      loadingScreen.style.display = 'none';
    }, 420);
  }
});

const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });
revealElements.forEach((element) => revealObserver.observe(element));

const heroVisual = document.querySelector('.hero-visual');
if (heroVisual) {
  const heroElements = heroVisual.querySelectorAll('.hero-image-card, .hero-panel');
  heroVisual.addEventListener('pointermove', (event) => {
    const rect = heroVisual.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    heroElements.forEach((element, index) => {
      const depth = index === heroElements.length - 1 ? 0.65 : 1;
      const rotateY = x * 6 * depth;
      const rotateX = y * -5 * depth;
      const translateX = x * 10 * depth;
      const translateY = y * 8 * depth;
      element.style.transform = `perspective(1200px) rotateY(${rotateY}deg) rotateX(${rotateX}deg) translate3d(${translateX}px, ${translateY}px, 0)`;
    });
  });

  heroVisual.addEventListener('pointerleave', () => {
    heroElements.forEach((element) => {
      element.style.transform = '';
    });
  });
}

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      updateActiveLink(entry.target.id);
    }
  });
}, { threshold: 0.55 });
sections.forEach((section) => sectionObserver.observe(section));

const legalProgress = document.querySelector('.legal-progress');
function updateLegalProgress() {
  if (!legalProgress) return;
  const scrollTop = window.scrollY;
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollHeight > 0 ? Math.min(scrollTop / scrollHeight, 1) : 0;
  legalProgress.style.transform = `scaleX(${progress})`;
}
window.addEventListener('scroll', updateLegalProgress, { passive: true });
window.addEventListener('resize', updateLegalProgress);
updateLegalProgress();

const tocLinks = document.querySelectorAll('.legal-toc a');
const legalSections = document.querySelectorAll('.legal-card[id]');
if (tocLinks.length && legalSections.length) {
  const tocObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        tocLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
      }
    });
  }, { threshold: 0.35 });
  legalSections.forEach((section) => tocObserver.observe(section));
}

document.querySelectorAll('.magnetic').forEach((button) => {
  button.addEventListener('mousemove', (event) => {
    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const offsetX = (x - rect.width / 2) / 16;
    const offsetY = (y - rect.height / 2) / 16;
    if (window.gsap) {
      window.gsap.to(button, { x: offsetX, y: offsetY, scale: 1.02, duration: 0.25, ease: 'power2.out' });
    }
  });

  button.addEventListener('mouseleave', () => {
    if (window.gsap) {
      window.gsap.to(button, { x: 0, y: 0, scale: 1, duration: 0.3, ease: 'power2.out' });
    }
  });
});

galleryItems.forEach((item) => {
  item.addEventListener('click', () => {
    const image = item.querySelector('img');
    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;
    lightboxCaption.textContent = item.dataset.caption || '';
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  });
});

function closeLightbox() {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

const lightboxClose = document.querySelector('.lightbox-close');
if (lightboxClose) {
  lightboxClose.addEventListener('click', closeLightbox);
}
if (lightbox) {
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeLightbox();
  }
});

if (typeof Lenis !== 'undefined') {
  const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
}

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (formStatus) {
      formStatus.textContent = translations[currentLanguage]['form.contact.success'];
      form.reset();
    }
  });
}

if (bookingForm) {
  bookingForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const status = bookingForm.querySelector('.form-status');
    if (status) {
      status.textContent = translations[currentLanguage]['form.booking.success'];
      bookingForm.reset();
    }
  });
}

const savedLanguage = localStorage.getItem('hotelIakiLang') || 'ro';
setLanguage(savedLanguage);

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    siteNav.classList.toggle('open');
    navToggle.classList.toggle('active');
  });
}