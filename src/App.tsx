import { CarProvider } from './contexts/CarContext';
import { FilterProvider } from './contexts/FilterContext';
import { GlobalStyle } from './global';
import { SearchCars } from './pages/SearchCars';
import Router from './routes'

function App() {

  return (
    <CarProvider>
      <FilterProvider>
        <GlobalStyle />
        <SearchCars />
      </FilterProvider>
    </CarProvider>
  )
}

export default App
