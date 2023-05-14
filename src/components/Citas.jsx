import React from "react";
import Cartilla from "./Cartilla";

const Citas = () => {
  return (
    <div className="flex flex-col h-4/6 w-full overflow-y-auto items-center lg:h-full lg:w-5/6 lg:right-0 fixed">
      <br />
      <h3 style={{ color: "#004B87", fontWeight: "600" }}>Citas Próximas</h3>
      <Cartilla
        citaMedica="CM10123"
        especialidad="Cardiología"
        fecha="10 de mayo de 2023"
        medico="Dr. Juan Pérez"
      />
      <Cartilla
        citaMedica="CM465645"
        especialidad="Dermatología"
        fecha="15 de mayo de 2023"
        medico="Dra. Ana Gómez"
      />

      <Cartilla
        citaMedica="CM465646"
        especialidad="Pediatría"
        fecha="17 de mayo de 2023"
        medico="Dr. Luis García"
      />

      <Cartilla
        citaMedica="CM465647"
        especialidad="Oftalmología"
        fecha="20 de mayo de 2023"
        medico="Dra. María Rodríguez"
      />

      <Cartilla
        citaMedica="CM465648"
        especialidad="Ginecología"
        fecha="22 de mayo de 2023"
        medico="Dr. Carlos Sánchez"
      />

      <Cartilla
        citaMedica="CM465649"
        especialidad="Odontología"
        fecha="25 de mayo de 2023"
        medico="Dra. Laura Martínez"
      />

      <Cartilla
        citaMedica="CM465650"
        especialidad="Neurología"
        fecha="28 de mayo de 2023"
        medico="Dr. Juan Romero"
      />
      {/* <ul>

        <li>
          <h3>Cita médica 3</h3>
          <p>Fecha: 20 de mayo de 2023</p>
          <p>Médico: Dr. Carlos López</p>
          <p>Departamento: Oftalmología</p>
        </li>
        <li>
          <h3>Cita médica 4</h3>
          <p>Fecha: 25 de mayo de 2023</p>
          <p>Médico: Dra. Laura Torres</p>
          <p>Departamento: Pediatría</p>
        </li>
        <li>
          <h3>Cita médica 5</h3>
          <p>Fecha: 30 de mayo de 2023</p>
          <p>Médico: Dr. Alejandro Ramírez</p>
          <p>Departamento: Medicina Interna</p>
        </li>
        <li>
          <h3>Cita médica 6</h3>
          <p>Fecha: 5 de junio de 2023</p>
          <p>Médico: Dra. Carolina Martínez</p>
          <p>Departamento: Ginecología</p>
        </li>
        <li>
          <h3>Cita médica 7</h3>
          <p>Fecha: 10 de junio de 2023</p>
          <p>Médico: Dr. Pedro Sánchez</p>
          <p>Departamento: Traumatología</p>
        </li>
        <li>
          <h3>Cita médica 8</h3>
          <p>Fecha: 15 de junio de 2023</p>
          <p>Médico: Dra. María Torres</p>
          <p>Departamento: Odontología</p>
        </li>
        <li>
          <h3>Cita médica 9</h3>
          <p>Fecha: 20 de junio de 2023</p>
          <p>Médico: Dr. Luis Gutiérrez</p>
          <p>Departamento: Psicología</p>
        </li>
        <li>
          <h3>Cita médica 10</h3>
          <p>Fecha: 25 de junio de 2023</p>
          <p>Médico: Dra. Laura Pérez</p>
          <p>Departamento: Neurología</p>
        </li>
      </ul> */}
    </div>
  );
};

export default Citas;
