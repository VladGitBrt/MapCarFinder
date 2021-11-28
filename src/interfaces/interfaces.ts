export interface Object {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  animation: 'DROP' | 'BOUNCE';
  clicked: boolean;
}
