import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(LanguageDetector).init({
    resources: {
        en: {
            translations: {
                "My Twitter": "My Twitter",
                "My GitHub" : "My Github",
                "My Dear LinkedIn": "My Dear LinkedIn",
                "My Instagram" : "My Instagram"
            }
        },
        pl: {
            translations: {
                "My Twitter": "Mój Twitter",
                "My GitHub" : "Mój Github",
                "My Dear LinkedIn": "Mój LinkedIn",
                "My Instagram" : "Mój Instagram",
                "welcomeMessage" : "Cześć, Jestem Dominik",
                "introductionMessage": "Jeśli szukasz doświadczonego, kreatywnego a przy tym szybko działającego programisty <1/> <3>Dobra wiadomość</3> Możesz już zakończyć poszukiwania. <5/> Napisz do mnie a wspólnie stworzymy coś świetnego!",
                "talkNow" : "Pogadajmy!"
            }
        }
    },
    fallbackLng: "en",
    debug: true,

    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
        escapeValue: false,
        formatSeparator: ","
    },

    react: {
        wait: true
    }
});

export default i18n;
