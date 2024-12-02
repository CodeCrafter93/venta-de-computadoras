// src/Actividades.js
import React from 'react';

const Actividades = () => {
  // Array de actividades con enlaces a los documentos
  const actividades = [
    {
      nombre: 'Actividad 1.2',
      enlace: '/documents/Actividad 2. El product backlog.docx',
    },
    {
      nombre: 'Actividad integradora 1',
      enlace: '/documents/Actividad integradora. Sprint, el corazón de SCRUM.docx',
    },
	{
      nombre: 'Actividad 2.1',
      enlace: '/documents/Actividad 1. Aplicación de SCRUM.docx',
    },
	{
      nombre: 'Actividad 2.2',
      enlace: '/documents/Actividad 2. El sprint Shedule.docx',
    },
	{
      nombre: 'Actividad integradora 2',
      enlace: '/documents/Actividad integradora 2. El backlog y el spring Schedule del proyecto.docx',
    },
	{
      nombre: 'Actividad integradora 2',
      enlace: '/documents/Actividad integradora 2. El backlog y el spring Schedule del proyecto.docx',
    },
	{
      nombre: 'Actividad 3.1',
      enlace: '/documents/Actividad 1. Primera fase de desarrollo, revisión y ajuste de los Sprints.docx',
    },
	{
      nombre: 'Actividad 3.2',
      enlace: '/documents/Actividad 2. Segunda fase de desarrollo, revisión y ajuste de los Sprints y el backlog.docx',
    },
	{
      nombre: 'Actividad 3.3',
      enlace: '/documents/Actividad 3. Tercera fase de desarrollo, revisión y ajuste de los Sprints y el backlog.docx',
    },
	{
      nombre: 'Actividad integradora 3',
      enlace: '/documents/Actividad integradora. Producto final U3.docx',
    },
	{
      nombre: 'Actividad 4.1',
      enlace: '/documents/Actividad 1. Reunión de revisión inicial.docx',
    },
	{
      nombre: 'Actividad 4.2',
      enlace: '/documents/Actividad 2. Reunión para revisión de modificaciones.docx',
    },
	
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Actividades realizadas en el curso</h2>
      <ul style={styles.activityList}>
        {actividades.map((actividad, index) => (
          <li key={index} style={styles.activityItem}>
            <span>{actividad.nombre}</span>
            {/* Botón para ver o descargar el documento */}
            <a href={actividad.enlace} target="_blank" style={styles.link}>
              Descargar o ver documento
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Estilos para el componente
const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  activityList: {
    listStyleType: 'none',
    padding: '0',
  },
  activityItem: {
    marginBottom: '15px',
    fontSize: '18px',
  },
  link: {
    color: '#61dafb',
    textDecoration: 'none',
    marginLeft: '10px',
    fontSize: '16px',
  },
};

export default Actividades;