import i18n from '@/utils/i18n.js'
import '@testing-library/jest-dom'
import { render, screen, fireEvent, waitFor  } from '@testing-library/react';
import MainPage from './page';  // page
import PokemonSearch from '@/components/PokemonSearch'
import PokeApiService from '@/components/PokeApiService';  // searchcomponent

jest.mock('../components/PokeApiService')

// Mock de la respuesta simulada de la API
const mockResponse = {
  dex: { name: 'pikachu', sprites: { other: { "official-artwork": { front_default: "imagen_url" } } } },
  card: { data: { id: 1, images: { large: "imagen_url" }, name: "carta1" } },
};


describe("mainPage", () => {
    test('MainComponent renders correctly', () => {
      render(<MainPage />);
      // Renders
      //Title
      expect(screen.getByText(`${i18n.t('appTitle')}`)).toBeInTheDocument();  // Ajusta el texto según tu aplicación
      // Form button 
      // const formInput = screen.getByPlaceholderText(`${i18n.t('searchPokemonLabel')}`);
      // const searchButton = screen.getByLabelText(`${i18n.t('searchPokemon')}`);
      // expect(formInput).toBeInTheDocument();
      // expect(searchButton).toBeInTheDocument();
      // DetailsLink
      expect(screen.queryByText(`${i18n.t('details')}`)).not.toBeInTheDocument();
    })
    test('solicitar API y cambiar estado', async () => {
      PokeApiService.searchPokemon.mockResolvedValueOnce({
        dex: { name: 'pikachu', sprites: { other: { "official-artwork": { front_default: "imagen_url" } } } },
        card: { data: [{ id: 1, images: { large: "imagen_url" }, name: "carta1" }] },
      });
  
      render(<PokemonSearch onPokemonDataChange={jest.fn()} />);
      
      const input = screen.getByPlaceholderText(`${i18n.t('searchPokemonLabel')}`);
      const button = screen.getByLabelText(`${i18n.t('searchPokemon')}`);
  
      fireEvent.change(input, { target: { value: 'pikachu' } });
      fireEvent.click(button);
  
      await waitFor(() => {
        console.log('fetch complete v1')
      });
  
      expect(PokeApiService.searchPokemon).toHaveBeenCalledWith('pikachu');
    });
})