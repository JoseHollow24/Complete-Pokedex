import i18next from 'i18next';

i18next.init({
  lng: 'en', // if you're using a language detector, do not define the lng option
  debug: true,
  resources: {
    en: {
        translation: {
          appTitle: 'Pokedex App',
          pokemondex: 'Pokemon Pokedex',
          cardsdex: 'Cards Pokedex',
          about: 'About',
          // ... otras traducciones en inglés
        },
      },
      es: {
        translation: {
          appTitle: 'Aplicación Pokedex',
          pokemondex: 'Pokedex de Pokémon',
          cardsdex: 'Pokedex de Cartas',
          about: 'Acerca de',
          // ... otras traducciones en español
        },
      },
  }
});
// initialized and ready to go!
// i18next is already initialized, because the translation resources where passed via init function
export default i18next;