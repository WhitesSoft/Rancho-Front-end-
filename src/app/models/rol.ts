import { RolNombre } from "../enums/rol-nombre";

export class Rol {
    rolRombre: RolNombre;

    public getRolNombre(): RolNombre {
        return this.rolRombre;
    }

    public setRolNombre(rolNombre: RolNombre) {
        this.rolRombre = rolNombre;
    }
}
