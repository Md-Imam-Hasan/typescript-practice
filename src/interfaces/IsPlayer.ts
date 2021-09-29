export interface IsPlayer {
  name: string;
  country: string;

  play(): void;
  // for accessing private property of the class
  getProperty(): number;
}
