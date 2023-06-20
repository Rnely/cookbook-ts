##### ❗ **Eksāmena projekts** ❗
# Virtuālās pavārgrāmatas tīmekļa vietne

### *Apraksts* 📜
---
Priekš sava gala eksāmena projekta esmu izlēmis izveidot virtuālās pavārgrāmatas tīmekļa vietne. Tiek veidota detalizēta dokumentācija un, skatoties uz to ka tā ir pavārgŗamata, arī datubāze. Jaunākās versijas visiem failiem ir pieejamas šajā GitHub repozitorijā.

<br>

### *Izmantotās tehnoloģijas* 💻
---
##### Sistēma
- TypeScript - React un Node.js
- HTML
- CSS - Lielākoties izmantots ar MUI styled()
- Git & GitHub
- Visual Studio Code

##### Datubāze
- MongoDB

##### Dokumentācija
- Word 2016

<br>

### *Kā lokāli palaist projektu* ❓
---
1. Lejupielādēt Node.js 18 LTS (citas versijas nav pārbaudītas) no [<img src="https://brandslogos.com/wp-content/uploads/thumbs/nodejs-logo-vector.svg" alt="Node.js Ikona" width="80">](https://nodejs.org "Node.js")
2. Lejupielādēt MongoDB no [<img src="[https://brandslogos.com/wp-content/uploads/thumbs/nodejs-logo-vector.svg](https://brandslogos.com/wp-content/uploads/thumbs/mongodb-logo-vector.svg)" alt="Node.js Ikona" width="80">]("https://www.mongodb.com/try/download/shell"). Ja ir vēlme apskatīt vizuāli datubāzi, var arī nolādēt MongoDB compass
4. Lejupielādēt "master" mapi no GitHub
5. Aiziet uz "*server/.env*" failu un definēt 'TOKEN_SECRET' vērtību
6. Divas reizes atvērt lejupielādēto mapi sevis izvēlētā komandrindas rīkā
7. Secībā izpildīt sekojošās komandas:
    - Vienā logā veikt sekojošo:
        - Izpildīt komandu `cd server`, lai ieietu sistēmas servera puses mapē
        - Izpildīt komandu `npm i`, lai instalētu vajadzīgās pakotnes
        - Izpildīt komandu `npm run watch`, lai palaistu sistēmas servera pusi **(neaizvērt logu)**
    - Otrā logā veikt sekojošo:
        - Izpildīt komandu `cd client`, lai ieietu sistēmas mājaslapas puses mapē
        - Izpildīt komandu `npm i`, lai instalētu vajadzīgās pakotnes
        - Izpildīt komandu `cd ..`, lai izietu no mapes
        - Izpildīt komandu `cd server`, lai ieietu sistēmas servera puses mapē
        - Izpildīt komandu `npm run dev`, lai palaistu programmas mājaslapas pusi **(neaizvērt logu)**
8. Pēc pēdējās kommandas veikšanas atvērt uzrādīto saiti

<br>

