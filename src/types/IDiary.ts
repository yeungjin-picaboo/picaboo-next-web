export default interface IDiary {
  diary_id?: string;
  title: string;
  content: string;
  emotion: string;
  weather: string;
  source?: string;
  date: string;
}
