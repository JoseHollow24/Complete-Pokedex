import PokeApiService from '@/components/PokeApiService';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import i18n from '@/utils/i18n';

jest.mock('../components/PokeApiService')

// Mock de la respuesta simulada de la API
const mockResponse = {
  dex: { name: 'pikachu', sprites: { other: { "official-artwork": { front_default: "imagen_url" } } } },
  card: { data: { id: 1, images: { large: "imagen_url" }, name: "carta1" } },
};

test('solicitar API y cambiar estado', async () => {
  PokeApiService.mockReturnValueOnce({mockResponse})

  const solicitudApi = await PokeApiService()
  console.log(solicitudApi)
});
