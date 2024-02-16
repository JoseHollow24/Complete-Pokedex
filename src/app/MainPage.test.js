import i18n from '@/utils/i18n.js'
import '@testing-library/jest-dom'
import { render, screen, fireEvent, waitFor  } from '@testing-library/react';
import MainPage from './page';  // page
import PokemonSearch from '@/components/PokemonSearch';
import { PokeApiService } from '../components/PokeApiService';

// Mockear el fetch del Api
jest.mock('../components/PokeApiService', () => {
  // Importamos el módulo original de 'DataService' para no perder su funcionalidad original
const originalModule = jest.requireActual('../components/PokeApiService');
return {
  ...originalModule, // Agregamos todas las propiedades y funciones del módulo original
  PokeApiService: jest.fn(), // Mockeamos la función 'getData' para poder controlar su comportamiento en las pruebas
};
});


describe("mainPage", () => {
    test('MainComponent renders correctly', () => {
      render(<MainPage />);
      // Renders
      //Title
      expect(screen.getByText(`${i18n.t('appTitle')}`)).toBeInTheDocument();  // Ajusta el texto según tu aplicación
      // Form button 
      const formInput = screen.getByPlaceholderText(`${i18n.t('searchPokemonLabel')}`);
      const searchButton = screen.getByLabelText(`${i18n.t('searchPokemon')}`);
      expect(formInput).toBeInTheDocument();
      expect(searchButton).toBeInTheDocument();
      // DetailsLink
      expect(screen.queryByText(`${i18n.t('details')}`)).not.toBeInTheDocument();
    })
    test('solicitar API y cambiar estado', async () => {
      const mockData = {
        dex: { name: 'pikachu', sprites: { other: { "official-artwork": { front_default: "imagen_url" } } } },
        card: { data: [{ id: 1, images: { large: "imagen_url" }, name: "carta1" }] },
      }
      // Mockeamos la función 'PokeApiService' para que retorne un objeto combinado con los resultados simulados de ambas APIs
      PokeApiService.mockResolvedValueOnce(mockData);

      // Función de cambio de datos (puedes usar jest.fn() para espiar si se llama correctamente)
      const onPokemonDataChangeMock = jest.fn();
      
      // Renderiza el componente PokemonSearch y extrae las funciones necesarias para buscar elementos en la pantalla
      const { getByLabelText, getByText } = render(
        <PokemonSearch onPokemonDataChange={onPokemonDataChangeMock} />
      );

      // Encuentra los elementos del formulario
      const inputElement = screen.getByPlaceholderText(`${i18n.t('searchPokemonLabel')}`);
      const buttonElement = screen.getByLabelText(`${i18n.t('searchPokemon')}`);

      // Simula la interacción del usuario (rellena el campo y hace clic en el botón)
      fireEvent.change(inputElement, { target: { value: 'pikachu' } });
      fireEvent.click(buttonElement);

      await waitFor(async () => {
        // Llamamos a la función que queremos probar
        const result = await PokeApiService();
        // Verificamos que PokeApiService fue llamada una vez
        expect(PokeApiService).toHaveBeenCalledTimes(1);
        // Verificamos que el resultado sea el esperado
        expect(result).toEqual(mockData);
      });
    });
})