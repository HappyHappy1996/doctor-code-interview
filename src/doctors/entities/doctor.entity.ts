interface AvailableDate {
  from: number;
  to: number;
}

export class Doctor {
  name: string;
  specialties: string[];
  availableDates: AvailableDate[];
  score: number;
}
