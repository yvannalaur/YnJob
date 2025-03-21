import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import { FontAwesome5 } from '@expo/vector-icons';

export const name = "Modèle Moderne 1 FR - Esthétique";

export const template = (userData) => {
  const personalInfo = userData || {};
  const languages = userData.languages || [];
  const abilities = userData.skills || [];
  const education = userData.educations || [];
  const experience = userData.experiences || [];
  const certifications = userData.certifications || [];
  const interests = userData.hobbies || [];
  const references = userData.references || [];

  const primaryColor = '#007bff'; // Example primary color
  const secondaryColor = '#6c757d'; // Example secondary color
  const textColor = '#343a40'; // Dark text color
  const lightTextColor = '#6c757d'; // Lighter text color
  const backgroundColor = '#f8f9fa'; // Light background color
  const cardBackgroundColor = '#ffffff'; // White card background

  return `
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=0.25">
        <title>CV Moderne 1 (Français) - Esthétique</title>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
        <style>
          @page {
            margin: 15mm;
          }
          body {
            font-family: 'Poppins', sans-serif;
            margin: 0;
            padding: 0;
            color: ${textColor};
            line-height: 1.6;
            font-size: 10pt;
            background-color: ${backgroundColor};
          }
          .container {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 30px;
            display: grid;
            grid-template-columns: 320px 1fr; /* Two main columns, sidebar and content */
            gap: 25px;
            background: ${cardBackgroundColor};
            box-shadow: 0 5px 20px rgba(0,0,0,0.1);
            border-radius: 12px;
            position: relative;
          }
          .sidebar {
            padding: 25px;
            border-radius: 10px;
            background: ${backgroundColor}; /* Light background for sidebar */
            color: ${lightTextColor};
          }
          .main-content {
            padding: 25px;
          }
          .header {
            margin-bottom: 25px;
            border-bottom: 2px solid ${primaryColor};
            padding-bottom: 15px;
          }
          .header h1 {
            font-size: 2.8em;
            color: ${textColor};
            margin: 0 0 10px 0;
            font-weight: 700;
            letter-spacing: -1px;
          }
          .header h2 {
            font-size: 1.5em;
            color: ${primaryColor};
            margin: 0;
            font-weight: 500;
          }
          .profile-photo {
            width: 180px;
            height: 180px;
            border-radius: 50%;
            object-fit: cover;
            margin-bottom: 20px;
            border: 5px solid ${backgroundColor};
            display: block;
            margin-left: auto;
            margin-right: auto;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
          }
          .contact-info {
            margin-top: 20px;
          }
          .contact-item {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
            font-size: 0.95em;
            color: ${lightTextColor};
          }
          .contact-item i {
            color: ${primaryColor};
            font-size: 1.2em;
          }
          .section {
            margin-bottom: 25px;
          }
          .section-title {
            font-size: 1.3em;
            color: ${textColor};
            margin-bottom: 15px;
            font-weight: 600;
            position: relative;
            padding-bottom: 8px;
            border-bottom: 2px solid ${secondaryColor};
          }
          .section-title i {
            margin-right: 8px;
            color: ${secondaryColor};
          }
          .objective {
            font-size: 1em;
            line-height: 1.7;
            color: ${textColor};
            margin-bottom: 15px;
            padding: 15px;
            border-radius: 8px;
            background: ${backgroundColor};
            border: 1px solid #e0e0e0;
          }
          .experience-item, .education-item {
            margin-bottom: 20px;
            padding-bottom: 20px;
            border-bottom: 1px dashed #ddd;
          }
          .experience-item:last-child, .education-item:last-child {
            border-bottom: none;
            margin-bottom: 0;
            padding-bottom: 0;
          }
          .experience-title, .education-title {
            font-size: 1.2em;
            font-weight: 600;
            color: ${textColor};
            margin-bottom: 8px;
          }
          .experience-company, .education-school {
            color: ${primaryColor};
            font-size: 1.1em;
            margin-bottom: 8px;
            font-weight: 500;
          }
          .experience-date, .education-date {
            color: ${lightTextColor};
            font-size: 0.9em;
            margin-bottom: 12px;
            font-style: italic;
            display: block;
          }
          .experience-description, .education-description {
            color: ${textColor};
            font-size: 1em;
            line-height: 1.6;
            white-space: pre-line; /* Keep descriptions as pre-line */
          }
          .skills-list, .languages-list {
            list-style: none;
            padding: 0;
            margin: 0;
          }
          .skill-item, .language-item {
            margin-bottom: 10px;
          }
          .skill-name, .language-name {
            font-size: 1em;
            font-weight: 500;
            color: ${textColor};
            margin-bottom: 5px;
          }
          .skill-level-bar, .language-level-bar {
            background: #e0e0e0;
            height: 8px;
            border-radius: 5px;
            overflow: hidden;
          }
          .skill-level-fill, .language-level-fill {
            background: ${primaryColor};
            height: 100%;
            border-radius: 5px;
            width: 0%; /* Set dynamically with skill/language level */
            transition: width 0.4s ease-in-out;
          }
          .certification-item {
            margin-bottom: 15px;
            padding-bottom: 15px;
            border-bottom: 1px solid #eee;
          }
          .certification-item:last-child {
            border-bottom: none;
            margin-bottom: 0;
            padding-bottom: 0;
          }
          .certification-name {
            font-weight: bold;
            color: ${textColor};
            margin-bottom: 5px;
          }
          .certification-date {
            color: ${lightTextColor};
            font-size: 0.9em;
            margin-bottom: 8px;
            font-style: italic;
          }
          .certification-description {
            color: ${textColor};
            font-size: 1em;
            line-height: 1.6;
          }
          .interests-list {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
          }
          .interest-item {
            background: ${backgroundColor};
            color: ${textColor};
            padding: 8px 15px;
            border-radius: 20px;
            font-size: 0.95em;
            border: 1px solid #e0e0e0;
          }
          .references-section {
            margin-top: 30px;
            text-align: center;
            color: ${lightTextColor};
            font-size: 0.9em;
          }
          @media print {
            @page {
              size: A4;
              margin: 15mm;
            }
            body {
              background-color: #fff;
            }
            .container {
              width: 210mm;
              max-width: none;
              padding: 0;
              margin: 0;
              box-shadow: none;
              grid-template-columns: 320px 1fr;
            }
            .sidebar, .main-content {
              padding: 15px;
            }
            .experience-description, .education-description, .certification-description, .objective {
              white-space: pre-line; /* Keep descriptions as pre-line in print */
            }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <aside class="sidebar">
            ${personalInfo.photo ? `<img src="${personalInfo.photo}" alt="Photo de profil" class="profile-photo">` : ''}
            <div class="contact-info">
              ${personalInfo.email ? `<div class="contact-item"><i class="fas fa-envelope"></i> ${personalInfo.email}</div>` : ''}
              ${personalInfo.phone ? `<div class="contact-item"><i class="fas fa-phone"></i> ${personalInfo.phone}</div>` : ''}
              ${personalInfo.address ? `<div class="contact-item"><i class="fas fa-map-marker-alt"></i> ${personalInfo.address}</div>` : ''}
              ${personalInfo.linkedin ? `<div class="contact-item"><i class="fab fa-linkedin"></i> ${personalInfo.linkedin}</div>` : ''}
              ${personalInfo.portfolio ? `<div class="contact-item"><i class="fas fa-globe"></i> ${personalInfo.portfolio}</div>` : ''}
            </div>

            ${abilities.length > 0 ? `
              <div class="section">
                <h2 class="section-title"><i class="fas fa-tools"></i> Compétences</h2>
                <ul class="skills-list">
                  ${abilities.map(skill => `
                    <li class="skill-item">
                      <div class="skill-name">${skill.name || ''}</div>
                      <div class="skill-level-bar">
                        <div class="skill-level-fill" style="width: ${skill.level || 0}%"></div>
                      </div>
                    </li>
                  `).join('')}
                </ul>
              </div>
            ` : ''}

            ${languages.length > 0 ? `
              <div class="section">
                <h2 class="section-title"><i class="fas fa-language"></i> Langues</h2>
                <ul class="languages-list">
                  ${languages.map(lang => `
                    <li class="language-item">
                      <div class="language-name">${lang.name || ''}</div>
                      <div class="language-level-bar">
                        <div class="language-level-fill" style="width: ${lang.level || 0}%"></div>
                      </div>
                    </li>
                  `).join('')}
                </ul>
              </div>
            ` : ''}

            ${interests && interests.length > 0 ? `
              <div class="section">
                <h2 class="section-title"><i class="fas fa-heart"></i> Centres d'Intérêt</h2>
                <ul class="interests-list">
                  ${interests.map(hobby => `
                    <li class="interest-item">${hobby}</li>
                  `).join('')}
                </ul>
              </div>
            ` : ''}
          </aside>

          <main class="main-content">
            <header class="header">
              <h1>${personalInfo.firstName || ''} ${personalInfo.lastName || ''}</h1>
              <h2>${personalInfo.title || ''}</h2>
            </header>

            ${personalInfo.profile ? `
              <div class="section">
                <h2 class="section-title"><i class="fas fa-user-tie"></i> Profil Professionnel</h2>
                <div class="objective">${personalInfo.profile}</div>
              </div>
            ` : ''}

            ${experience.length > 0 ? `
              <div class="section">
                <h2 class="section-title"><i class="fas fa-briefcase"></i> Expérience Professionnelle</h2>
                ${experience.map(exp => `
                  <div class="experience-item">
                    <div class="experience-title">${exp.position || ''}</div>
                    <div class="experience-company">${exp.company || ''}</div>
                    <div class="experience-date">${exp.startDate || ''} - ${exp.endDate || 'Présent'}</div>
                    <div class="experience-description">${(exp.tasks || '').replace(/\n/g, '\\n')}</div>
                  </div>
                `).join('')}
              </div>
            ` : ''}

            ${education.length > 0 ? `
              <div class="section">
                <h2 class="section-title"><i class="fas fa-graduation-cap"></i> Formation</h2>
                ${education.map(edu => `
                  <div class="education-item">
                    <div class="education-title">${edu.degree || ''}</div>
                    <div class="education-school">${edu.institution || ''}</div>
                    <div class="education-date">${edu.startDate || ''} - ${edu.endDate || ''}</div>
                    <div class="education-description">${edu.description || ''}</div>
                  </div>
                `).join('')}
              </div>
            ` : ''}

            ${certifications.length > 0 ? `
              <div class="section">
                <h2 class="section-title"><i class="fas fa-certificate"></i> Certifications</h2>
                ${certifications.map(cert => `
                  <div class="certification-item">
                    <div class="certification-name">${cert.name || ''}</div>
                    <div class="certification-date">${cert.date || ''}</div>
                    <div class="certification-description">${cert.description || ''}</div>
                  </div>
                `).join('')}
              </div>
            ` : ''}

            ${references && references.length > 0 ? `
              <div class="references-section">
                ${references.length > 0 ? 'Références disponibles sur demande' : ''}
              </div>
            ` : ''}
          </main>
        </div>
      </body>
    </html>
  `;
};
