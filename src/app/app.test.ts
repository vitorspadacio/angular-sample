import { render } from '@testing-library/angular'
import { AppComponent } from './app.component'

test('True must be true', () => {
  expect(true).toBeTruthy()
})

test('Variável Caio deve retornar pizzinha', () => {
  const caio = () => 'pizzinha'
  expect(caio()).toBe('pizzinha')
})

describe('App', () => {
  test('deve renderizar com texto Welcome to angular-sample!', async () => {
    const { getByText } = await render(AppComponent)

    expect(getByText('Welcome to angular-sample!'))
  })
})

