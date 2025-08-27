// Aquí en Jurisprudencias.jsx guardaré solo los casos de descripción de jurisprudencias
import React from 'react';
import jurisprudenciasData from './Jurisprudencias.json';

// Caso 1 - Resumido
export function Caso1() {
    return (
        <section>
            <h2 className="tdb-title-text">
                Municipalidad de San Javier debe pagar indemnización por despido injustificado a funcionaria a honorarios.
            </h2>
            <div className="dc-extracto">
                La Corte Suprema confirmó que la relación era laboral, no solo de honorarios, al existir subordinación y dependencia.
            </div>
            <div className="tdb-block-inner td-fix-index">
                <p>
                    Una terapeuta ocupacional trabajó entre 2018 y 2021 en el municipio, cumpliendo horario, rindiendo cuentas y siguiendo instrucciones. 
                </p>
                <p>
                    El tribunal determinó que estas condiciones acreditan una relación laboral, ordenando pagar más de $6 millones en indemnizaciones. 
                </p>
                <p>
                    La Corte Suprema rechazó el recurso de la municipalidad y reafirmó que, si se cumplen elementos del artículo 7 del Código del Trabajo, prevalece el vínculo laboral.
                </p>
                <p>
                    Ver sentencia completa:{" "}
                    <a href="https://www.diarioconstitucional.cl/wp-content/uploads/2023/06/1.1.-CS-ROL-No21.499-2022.pdf" target="_blank" rel="noopener noreferrer">
                        Rol Nº21.499-2022
                    </a>
                </p>
            </div>
        </section>
    );
}
