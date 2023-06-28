import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';
import mock from './mock';
import StarWarContext from '../context/StarWarContext';

describe('Testanando a página',() => {
  function renderWithProvider(app) {
    return (
      <StarWarContext.Provider>
        {app}
      </StarWarContext.Provider>
    )
  }
  
  beforeEach(() => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValue(mock)
    });
    render(renderWithProvider(<App />));
  })

  afterEach(() => {
    jest.resetAllMocks();
  })

  it('testa tabela', async () => {
    let tablePlanet = await screen.findAllByTestId('planet-name');
    expect(tablePlanet).toHaveLength(10);

    const search = await screen.findByTestId('name-filter');
    userEvent.type(search, 'Al');
    const result = await screen.findAllByTestId('planet-name');
    expect(result).toHaveLength(1);

  });

  it('testa filtros', async () => {
    let filterColumn = await screen.findByTestId('column-filter');
    expect(filterColumn).toHaveLength(5);

    const valueNumber = screen.getByTestId('value-filter');
    const comparison = await screen.findByTestId('comparison-filter');
    userEvent.selectOptions(filterColumn, 'surface_water');
    userEvent.selectOptions(comparison, 'menor que');
    userEvent.type(valueNumber, '40');
    let btn = screen.getByTestId('button-filter');
    userEvent.click(btn);
    let tablePlanet2 = await screen.findAllByTestId('planet-name');
    expect(tablePlanet2).toHaveLength(6);

    const xButton = screen.getByTestId('surface_water');
    userEvent.click(xButton);
    expect(xButton).not.toBeInTheDocument();

    userEvent.selectOptions(filterColumn, 'population');
    userEvent.selectOptions(comparison, 'igual a');
    userEvent.type(valueNumber, '1000');
    btn = screen.getByTestId('button-filter');
    userEvent.click(btn);
    tablePlanet2 = await screen.findAllByTestId('planet-name');
    expect(tablePlanet2).toHaveLength(1);
  });
});