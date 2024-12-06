import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from './config/config.module';
import { RolesModule } from './modules/roles/roles.module';
import { TicketsModule } from './modules/tickets/tickets.module';
import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { MaterialesModule } from './modules/materiales/materiales.module';
import { AsignacionMaterialModule } from './modules/asignacion-material/asignacion-material.module';
import { EquiposModule } from './modules/equipos/equipos.module';
import { InformeServicioModule } from './modules/informe-servicio/informe-servicio.module';
import { EquiposController } from './modules/equipos/equipos.controller';
import { AsignacionesModule } from './modules/asignaciones/asignaciones.module';



@Module({
  imports: [ DatabaseModule, ConfigModule, RolesModule, UsuariosModule, MaterialesModule, AsignacionMaterialModule, EquiposModule, InformeServicioModule, AsignacionesModule, TicketsModule],
  controllers: [AppController, EquiposController],
  providers: [AppService],
})
export class AppModule {}
