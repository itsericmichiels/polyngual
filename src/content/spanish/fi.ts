import type { SpanishPageContent } from './types';

// Finnish (Eric, 2026-11-17). Finns call the Costa del Sol "Aurinkorannikko"; Fuengirola has the largest Finnish
// community on the coast.
export const fi: SpanishPageContent = {
  lang: 'fi',
  htmlLang: 'fi',
  meta: {
    title: 'Polyngual espanja | Puhu espanjaa arjessasi Aurinkorannikolla',
    description:
      'Espanjan espanjaa Aurinkorannikolla asuville: kurssi, joka rakentuu torin, lääkärin ja kaupungintalon ympärille, tekoälypuhetuutori ja oman kaupunkisi uutiset joka aamu. 7 päivää ilmaiseksi.',
  },
  nav: { cta: 'Aloita ilmaiseksi', languages: 'Kieli' },
  hero: {
    eyebrow: 'Espanjan espanjaa, tehty Aurinkorannikolle',
    title: 'Asut Espanjassa. Elä nyt espanjaksi.',
    sub: 'Kurssi, joka rakentuu todellisen arkesi ympärille, puhetuutori, jonka kanssa voit jutella milloin tahansa, ja oman kaupunkisi uutiset joka aamu omalla tasollasi.',
    cta: 'Aloita ilmainen viikko',
    note: '7 päivää ilmaiseksi. Korttia ei tarvita.',
  },
  year: {
    eyebrow: 'Miksi nyt',
    title: 'Tee vuodesta 2027 vuosi, jona vihdoin puhut espanjaa.',
    body: 'Aurinko, kaupunki ja naapurit ovat jo täällä. Vain kieli puuttuu. Aloita tänä talvena, niin keväällä tilaat, kysyt ja juttelet itsevarmasti.',
    points: [
      {
        title: 'Uudenvuodenlupaus, joka kestää',
        body: 'Lupaukset kariutuvat, kun järjestelmä puuttuu. Polyngual antaa sinulle 10–20 minuuttia päivässä, putken, joka antaa anteeksi väliin jääneen päivän, ja suunnitelman, joka tietää, missä kompastut.',
      },
      {
        title: '90 päivässä arkiespanjaan',
        body: 'Aloita tammikuussa, niin huhtikuussa pärjäät torilla, lääkärissä ja naapureiden kanssa. Jos et läpäise testiämme 90 päivän jälkeen, seuraavat 90 päivää ovat ilmaisia.',
      },
      {
        title: 'Kaikki on helpompaa espanjaksi',
        body: 'Kaupungintalo, remonttimies, apteekki, naapurit. Elämä rannikolla avautuu, kun osaat puhua sen kieltä.',
      },
    ],
  },
  features: {
    eyebrow: 'Mitä saat',
    title: 'Kaikki, mitä puhumiseen tarvitset, ei mitään turhaa.',
    intro: 'Ei oppikirjan lukuja lentokentistä, joilla et koskaan käy. Jokainen oppitunti kertoo elämästä, jota jo elät täällä.',
    items: [
      {
        title: 'Kurssi elämään täällä',
        body: '12 moduulia siitä, mitä Espanjassa oikeasti teet: asunto, tori, apteekki, lääkäri, viikonloppusuunnitelmat ja paperiasiat kaupungintalolla.',
      },
      {
        title: 'Puhetuutori, joka vastaa',
        body: 'Puhu ääneen naapurisi Lucían, tarjoilija Pacon tai tohtori Ruizin kanssa. He vastaavat, ja kun jäät jumiin, saat vihjeen.',
      },
      {
        title: 'Kaupunkisi uutiset joka aamu',
        body: 'Paikallisuutiset Esteponasta, Marbellasta, Fuengirolasta, Torremolinosista, Málagasta ja Nerjasta, kirjoitettuina sinun tasollesi.',
      },
      {
        title: 'Ääneen luetut tarinat',
        body: 'Lyhyitä tarinoita omalla tasollasi espanjalaisen äänen lukemina, jotta korvasi tottuu siihen, miten täällä oikeasti puhutaan.',
      },
      {
        title: 'Sanat, jotka jäävät mieleen',
        body: 'Sanastoa Espanjan espanjan ääntämyksellä. Sanat palaavat juuri siellä, missä kompastut, kunnes ne jäävät mieleen.',
      },
      {
        title: 'Näe edistymisesi',
        body: 'Selkeä kartta siitä, mitä osaat ja mitä sinulta vielä puuttuu, päivittyy jokaisen harjoituksen jälkeen.',
      },
    ],
  },
  news: {
    title: 'Kaupunkisi uutiset omalla tasollasi.',
    body: 'Joka aamu Polyngual kertoo, mitä rannikolla tapahtuu, ja korostaa sanat, jotka jo osaat, sekä uudet opittavat sanat. Luet omasta kadustasi etkä oppikirjan vieraista ihmisistä.',
    label: 'Esimerkki',
    headline: 'El mercadillo de Fuengirola abre este martes con nuevos puestos de fruta y verdura.',
    known: 'mercadillo',
    fresh: 'puestos',
    knownLabel: 'Osaat tämän',
    freshLabel: 'Uusi sana',
  },
  steps: {
    title: 'Näin se toimii',
    items: [
      { title: 'Kerro tilanteestasi', body: 'Asut täällä, olet täällä osan vuotta tai muutat pian. Suunnitelmasi lähtee siitä.' },
      { title: 'Sano ensimmäinen lauseesi', body: 'Lue yksi lause ääneen ja saat ensimmäiset puhepisteesi alle minuutissa.' },
      { title: 'Harjoittele vähän joka päivä', body: 'Kymmenen minuuttia riittää. Polyngual tuo takaisin sen, missä erehdyit, kunnes osaat sen.' },
    ],
  },
  pricing: {
    eyebrow: 'Hinnat',
    title: 'Valitse, kuinka nopeasti haluat edetä.',
    intro: 'Jokainen tilaus alkaa ilmaisella viikolla. Maksa kuukausittain tai säästä valitsemalla pidempi jakso.',
    recommended: 'Suositeltu',
    perMonth: 'kuukaudessa',
    durations: { 1: 'Kuukausi', 3: '3 kuukautta', 6: '6 kuukautta' },
    billed: (total, months) => `${total} ${months} kuukauden välein`,
    save: (percent) => `säästä ${percent} %`,
    tiers: {
      essential: {
        name: 'Essential',
        tagline: 'Koko kurssi, puhetuutori ja paikallisuutiset.',
        perks: ['Koko espanjan kurssi', 'Äänituutori: jopa 15 minuuttia päivässä', 'Kaupunkisi uutiset joka aamu', 'Tarinat, sanasto ja edistymiskarttasi'],
      },
      intensive: {
        name: 'Tutor Intensive',
        tagline: 'Niille, jotka haluavat puhua espanjaa nopeasti.',
        perks: ['Kaikki Essentialin sisältö', 'Ääni- tai videotuutori: jopa 30 minuuttia päivässä', 'Henkilökohtainen opiskelusuunnitelma ja valmentajan säännöllinen seuranta', 'Ensisijainen tuki: vastaus samana päivänä'],
      },
      couple: {
        name: 'Pariskunta',
        tagline: 'Essential kahdelle yhdellä maksulla.',
        perks: ['Kaksi oppijaa, kummallakin oma kurssi ja edistyminen', 'Opiskelkaa yhdessä, harjoitelkaa yhdessä'],
      },
    },
    cta: 'Aloita ilmainen viikko',
    trialNote: 'Valitse tilauksesi sovelluksessa ilmaisen viikon jälkeen.',
    vat: 'Hinnat euroina, sisältävät arvonlisäveron. Voit perua milloin tahansa.',
  },
  guarantee: {
    title: '90 päivän takuumme',
    body: '90 päivässä pärjäät espanjaksi torilla, lääkärissä ja naapureiden kanssa. Kun olet ollut maksullisella tilauksella 90 päivää, tee testimme: jos et läpäise sitä, seuraavat 90 päivää ovat ilmaisia.',
  },
  faq: {
    title: 'Kysymyksiä',
    items: [
      { q: 'Olen täysi aloittelija. Sopiiko tämä minulle?', a: 'Sopii. Kurssi alkaa aivan ensimmäisistä sanoistasi. Jos osaat jo perusteet, lyhyt tasotesti sijoittaa sinut pidemmälle.' },
      { q: 'Onko se Espanjan vai Latinalaisen Amerikan espanjaa?', a: 'Espanjan, andalusialaisella vivahteella: sitä espanjaa, jota kuulet joka päivä Aurinkorannikolla.' },
      { q: 'Onko mukana oikea opettaja?', a: 'Puhetuutori on tekoäly, ja se on käytettävissäsi aina, kun sinulle sopii. Tutor Intensive -tilauksessa saat lisäksi henkilökohtaisen opiskelusuunnitelman ja valmentajasi säännöllisen seurannan.' },
      { q: 'Miten ilmainen viikko toimii?', a: 'Saat kaiken käyttöösi 7 päiväksi ilman korttia. Valitse tilaus vain, jos haluat jatkaa.' },
      { q: 'Voinko perua?', a: 'Voit, milloin tahansa tilaussivultasi. Käyttöoikeus säilyy maksamasi jakson loppuun, ja voit perua 14 päivän kuluessa ensimmäisestä maksustasi ja saada koko summan takaisin.' },
      { q: 'Voimmeko opiskella yhdessä kumppanini kanssa?', a: 'Voitte. Pariskuntatilaus antaa kaksi oppijaa yhdellä maksulla, kummallekin oma kurssi ja edistyminen.' },
      { q: 'Tarvitseeko minun asentaa jotain?', a: 'Ei. Polyngual toimii selaimessa puhelimella, tabletilla tai tietokoneella.' },
    ],
  },
  final: {
    title: 'Naapurisi odottavat jo, että juttelet heidän kanssaan.',
    sub: 'Aloita tänään, 7 päivää ilmaiseksi.',
    cta: 'Aloita ilmainen viikko',
  },
  footer: { privacy: 'Tietosuoja', terms: 'Käyttöehdot', rights: 'Polyngual. Kaikki oikeudet pidätetään.' },
};
