
import { render,test,expect } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../reducers';
import BarChartComponent from '../components/barChart/BarChartComponent';
import jest from 'jest-mock';

// Mock chart.js to prevent errors during rendering
jest.mock('chart.js/auto', () => ({
  Chart: () => null,
}));

const store = createStore(rootReducer);

test('renders BarChartComponent with title', () => {
  const { getByText } = render(
    <Provider store={store}>
      <BarChartComponent data={[]} />
    </Provider>
  );
  expect(getByText('Oscar Statistics Overview')).toBeInTheDocument();
});

test('renders BarChartComponent with Line Chart title', () => {
  const { getByText } = render(
    <Provider store={store}>
      <BarChartComponent data={[]} />
    </Provider>
  );
  expect(getByText('Line Chart: Nominations and Wins Over Time')).toBeInTheDocument();
});

test('renders BarChartComponent with Bar Chart title', () => {
  const { getByText } = render(
    <Provider store={store}>
      <BarChartComponent data={[]} />
    </Provider>
  );
  expect(getByText('Bar Chart: Win Percentage by Year')).toBeInTheDocument();
});