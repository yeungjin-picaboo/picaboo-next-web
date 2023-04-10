import { Cloud, CloudRain, CloudSnow, SunHigh, Wind } from 'tabler-icons-react';

const weather = [
  { name: 'sunny', icon: <SunHigh strokeWidth={1} /> },
  { name: 'rainy', icon: <CloudRain strokeWidth={1} /> },
  { name: 'snowy', icon: <CloudSnow strokeWidth={1} /> },
  { name: 'cloudy', icon: <Cloud strokeWidth={1} /> },
  { name: 'windy', icon: <Wind strokeWidth={1} /> },
];

export default weather;
