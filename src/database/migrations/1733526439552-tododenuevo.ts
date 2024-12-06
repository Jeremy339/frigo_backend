import { MigrationInterface, QueryRunner } from "typeorm";

export class Tododenuevo1733526439552 implements MigrationInterface {
    name = 'Tododenuevo1733526439552'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "roles" ("rol_id" SERIAL NOT NULL, "nombre" character varying NOT NULL, "descripcion" character varying NOT NULL, CONSTRAINT "PK_3c527fdab46502238021eab2e22" PRIMARY KEY ("rol_id"))`);
        await queryRunner.query(`CREATE TABLE "materiales" ("material_id" SERIAL NOT NULL, "nombre_material" character varying NOT NULL, "disponible" boolean NOT NULL DEFAULT true, "descripcion" character varying NOT NULL, CONSTRAINT "PK_9c72ae297b591921b61b5b07d16" PRIMARY KEY ("material_id"))`);
        await queryRunner.query(`CREATE TABLE "asignacion_material" ("asignacion_material_id" SERIAL NOT NULL, "cantidad_usada" integer NOT NULL, "materialMaterialId" integer, CONSTRAINT "PK_5a8b1d41799e0ef504d016006c5" PRIMARY KEY ("asignacion_material_id"))`);
        await queryRunner.query(`CREATE TABLE "asignaciones" ("asignacion_id" SERIAL NOT NULL, "fecha_asignacion" TIMESTAMP NOT NULL, "estado" character varying NOT NULL, "informeServicioInformeServicioId" integer, CONSTRAINT "PK_d6b20a215021140b360e977e2f0" PRIMARY KEY ("asignacion_id"))`);
        await queryRunner.query(`CREATE TABLE "equipos" ("equipo_id" SERIAL NOT NULL, "area" character varying NOT NULL, "descripcion" character varying NOT NULL, "marca" character varying NOT NULL, "modelo" character varying NOT NULL, "serie" character varying NOT NULL, "tipo" character varying NOT NULL, "capacidad" character varying NOT NULL, "refrigeracion" character varying NOT NULL, "psi" character varying NOT NULL, "volts" character varying NOT NULL, "amp" character varying NOT NULL, CONSTRAINT "PK_c98057a78df40130f1d895a5b12" PRIMARY KEY ("equipo_id"))`);
        await queryRunner.query(`CREATE TABLE "informe_servicio" ("informe_servicio_id" SERIAL NOT NULL, "fecha" TIMESTAMP NOT NULL, "hora_ingreso" character varying NOT NULL, "hora_salida" character varying NOT NULL, "descripcion_trabajo" character varying NOT NULL, "usuarioUsuarioId" integer, "equipoEquipoId" integer, "asignacionMaterialAsignacionMaterialId" integer, CONSTRAINT "PK_e6aa4b791141f5af1da4c59dd48" PRIMARY KEY ("informe_servicio_id"))`);
        await queryRunner.query(`CREATE TABLE "usuarios" ("usuario_id" integer NOT NULL, "nombre" character varying NOT NULL, "correo" character varying NOT NULL, "password" character varying NOT NULL, "direccion" character varying NOT NULL, "telefono" character varying NOT NULL, "rolRolId" integer, CONSTRAINT "PK_14bb5fbbada99a453c18106d039" PRIMARY KEY ("usuario_id"))`);
        await queryRunner.query(`CREATE TABLE "tickets" ("ticket_id" SERIAL NOT NULL, "descripcion" character varying NOT NULL, "estado" character varying NOT NULL DEFAULT 'Abierto', "prioridad" character varying NOT NULL DEFAULT 'Media', "fecha_creacion" date NOT NULL DEFAULT ('now'::text)::date, "usuarioUsuarioId" integer, CONSTRAINT "PK_8de0cebd669ff84059e9976e17d" PRIMARY KEY ("ticket_id"))`);
        await queryRunner.query(`ALTER TABLE "asignacion_material" ADD CONSTRAINT "FK_5d45bb1c44689ad37cfef8ac692" FOREIGN KEY ("materialMaterialId") REFERENCES "materiales"("material_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "asignaciones" ADD CONSTRAINT "FK_0ecb589b4da31caae44b07e0bc7" FOREIGN KEY ("informeServicioInformeServicioId") REFERENCES "informe_servicio"("informe_servicio_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "informe_servicio" ADD CONSTRAINT "FK_67f777171e9f7d96368f73d50c2" FOREIGN KEY ("usuarioUsuarioId") REFERENCES "usuarios"("usuario_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "informe_servicio" ADD CONSTRAINT "FK_77c3b92cf2ec7aeffc11ed05701" FOREIGN KEY ("equipoEquipoId") REFERENCES "equipos"("equipo_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "informe_servicio" ADD CONSTRAINT "FK_bc2fb608995f562a5848297a22f" FOREIGN KEY ("asignacionMaterialAsignacionMaterialId") REFERENCES "asignacion_material"("asignacion_material_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "usuarios" ADD CONSTRAINT "FK_a8887155351f61b673e2e1a814d" FOREIGN KEY ("rolRolId") REFERENCES "roles"("rol_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tickets" ADD CONSTRAINT "FK_ba03335be3f7d235139a5ed0916" FOREIGN KEY ("usuarioUsuarioId") REFERENCES "usuarios"("usuario_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tickets" DROP CONSTRAINT "FK_ba03335be3f7d235139a5ed0916"`);
        await queryRunner.query(`ALTER TABLE "usuarios" DROP CONSTRAINT "FK_a8887155351f61b673e2e1a814d"`);
        await queryRunner.query(`ALTER TABLE "informe_servicio" DROP CONSTRAINT "FK_bc2fb608995f562a5848297a22f"`);
        await queryRunner.query(`ALTER TABLE "informe_servicio" DROP CONSTRAINT "FK_77c3b92cf2ec7aeffc11ed05701"`);
        await queryRunner.query(`ALTER TABLE "informe_servicio" DROP CONSTRAINT "FK_67f777171e9f7d96368f73d50c2"`);
        await queryRunner.query(`ALTER TABLE "asignaciones" DROP CONSTRAINT "FK_0ecb589b4da31caae44b07e0bc7"`);
        await queryRunner.query(`ALTER TABLE "asignacion_material" DROP CONSTRAINT "FK_5d45bb1c44689ad37cfef8ac692"`);
        await queryRunner.query(`DROP TABLE "tickets"`);
        await queryRunner.query(`DROP TABLE "usuarios"`);
        await queryRunner.query(`DROP TABLE "informe_servicio"`);
        await queryRunner.query(`DROP TABLE "equipos"`);
        await queryRunner.query(`DROP TABLE "asignaciones"`);
        await queryRunner.query(`DROP TABLE "asignacion_material"`);
        await queryRunner.query(`DROP TABLE "materiales"`);
        await queryRunner.query(`DROP TABLE "roles"`);
    }

}
