export class CreateTicketDto {
  descripcion: string;
  prioridad: string;
  usuarioId: number;
  fecha_creacion: Date;  // Cambiar para que coincida con la entidad

  estado?: string;
}
