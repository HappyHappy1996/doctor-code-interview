export class GetRelevantDoctorDto {
  specialty: string;
  date: number;
  minScore: number;
}

export class CreateAppointmentDto {
  name: string;
  date: number;
}
