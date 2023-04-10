import {
  MoodAngry,
  MoodConfuzed,
  MoodCry,
  MoodEmpty,
  MoodSad,
  MoodSick,
  MoodSmile,
  MoodSmileBeam,
  MoodWrrr,
} from 'tabler-icons-react';

const moods = [
  { name: 'happy', icon: <MoodSmileBeam strokeWidth={1} /> },
  { name: 'good', icon: <MoodSmile strokeWidth={1} /> },
  { name: 'neutral', icon: <MoodEmpty strokeWidth={1} /> },
  { name: 'bad', icon: <MoodSad strokeWidth={1} /> },
  { name: 'confused', icon: <MoodConfuzed strokeWidth={1} /> },
  { name: 'angry', icon: <MoodAngry strokeWidth={1} /> },
  { name: 'nervous', icon: <MoodWrrr strokeWidth={1} /> },
  { name: 'sad', icon: <MoodCry strokeWidth={1} /> },
  { name: 'sick', icon: <MoodSick strokeWidth={1} /> },
];

export default moods;
