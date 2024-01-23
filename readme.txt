Pokretanje: npm i; npm run dev;
Build: npm i; npm run build;

Funkcionalnosti:
  * interpolation/one-way binding
  * two-way binding - Da, PageOne.vue, :5
  * methods - Da, PageOne.vue, :15
  * computed properties - Da, PageOne.vue, :23
  * barem jedan scoped style - Da, Navbar.vue
  * koristiti barem jedan lifecycle hook
  * routing (više stranica) - Da, main.js
  * aplikacija mora biti bookmarkable, tako da rade linkovi 
    (ne samo na root, već i moj-web.com/stranica1, moj-web.com/stranica2) - Da
  * dinamičko usmjeravanje s 404 stranicom ("catch all") - Da, NotFound.vue
  * (barem) dvije komponente - Da
    * komponenta bez stanja, koristiti properties - PageTwo.vue
    * komponenta sa stanjem - PageOne.vue
  * barem jedna komponenta mora emitirati barem jedan event - Da, PageTwo.vue, :5
  * store (Pinia) - Da, stores/index.js
  * asinkroni dohvat podataka s backenda, možete