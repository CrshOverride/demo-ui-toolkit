import './counter.css';

export interface CounterProps {
  color?: string;
  backgroundColor?: string;
}

export const createCounter = ({
  color,
  backgroundColor,
}: CounterProps) => {
  console.log('setting to', backgroundColor);
  const counter = document.createElement('my-counter');
  counter.setAttribute('color', color);
  counter.setAttribute('backgroundColor', backgroundColor);

  return counter;
};