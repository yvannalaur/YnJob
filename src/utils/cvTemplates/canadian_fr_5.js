import { FontAwesome5 } from '@expo/vector-icons';

export const name = "Modèle Canadien 5 FR";

export const template = (userData) => `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>CV Canadien 5 FR</title>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&family=Merriweather:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <style>
        /* Style global */
        body {
            font-family: 'Open Sans', sans-serif;
            margin: 0;
            padding: 0;
            background: #ffffff;
            color: #333;
            line-height: 1.6;
            width: 210mm; /* Format A4 */
            height: 297mm;
            margin: 0 auto;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .container {
            display: grid;
            grid-template-columns: 1fr 1.5fr 1fr;
            gap: 20px;
            padding: 20mm;
            background: #ffffff;
        }
        /* Colonne de gauche (Informations personnelles) */
        .left-column {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        .left-column h1 {
            font-family: 'Merriweather', serif;
            font-size: 24pt;
            margin: 0 0 10px 0;
            color: #2c3e50;
        }
        .left-column h2 {
            font-size: 14pt;
            margin: 0 0 20px 0;
            color: #555;
            font-weight: 400;
        }
        .contact-info, .languages, .skills {
            margin-bottom: 20px;
        }
        .contact-info p, .languages p, .skills p {
            margin: 0;
            font-size: 10pt;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .contact-info i, .languages i, .skills i {
            color: #2c3e50;
            font-size: 12pt;
        }
        .languages h3, .skills h3 {
            font-size: 12pt;
            margin-bottom: 10px;
            color: #2c3e50;
            border-bottom: 2px solid #2c3e50;
            padding-bottom: 5px;
        }
        .language-item, .skill-item {
            margin-bottom: 10px;
        }
        .language-name, .skill-name {
            font-size: 11pt;
            font-weight: 500;
        }
        .language-level, .skill-level {
            height: 6px;
            background: #e0e0e0;
            border-radius: 3px;
            overflow: hidden;
            margin-top: 5px;
        }
        .language-progress, .skill-progress {
            height: 100%;
            background: #2c3e50;
            border-radius: 3px;
        }
        /* Colonne centrale (Contenu principal) */
        .middle-column {
            padding: 20px;
        }
        .section {
            margin-bottom: 20px;
            page-break-inside: avoid;
        }
        .section-title {
            font-family: 'Merriweather', serif;
            font-size: 18pt;
            color: #2c3e50;
            margin-bottom: 10px;
            border-bottom: 2px solid #2c3e50;
            padding-bottom: 5px;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .section-title i {
            color: #2c3e50;
            font-size: 16pt;
        }
        .profile-description {
            font-size: 11pt;
            line-height: 1.6;
            color: #555;
        }
        .experience-item, .education-item, .certification-item {
            margin-bottom: 15px;
        }
        .experience-item h4, .education-item h4, .certification-item h4 {
            font-size: 12pt;
            margin: 0;
            color: #2c3e50;
        }
        .experience-item p, .education-item p, .certification-item p {
            font-size: 11pt;
            margin: 5px 0 0;
            color: #555;
        }
        /* Colonne de droite (Informations supplémentaires) */
        .right-column {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        .interests-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
            gap: 10px;
        }
        .interest-item {
            background: #ffffff;
            padding: 10px;
            border-radius: 6px;
            text-align: center;
            font-size: 11pt;
            color: #2c3e50;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        .reference-item {
            background: #ffffff;
            padding: 10px;
            border-radius: 6px;
            margin-bottom: 10px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        .reference-item h4 {
            margin: 0;
            font-size: 12pt;
            color: #2c3e50;
        }
        .reference-item p {
            margin: 5px 0 0;
            font-size: 11pt;
            color: #555;
        }
        /* Règles d'impression */
        @media print {
            body {
                width: 210mm;
                height: 297mm;
                margin: 0;
                padding: 0;
                box-shadow: none;
            }
            .container {
                padding: 20mm;
                box-shadow: none;
            }
            .left-column, .right-column {
                background: #f8f9fa;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Colonne de gauche (Informations personnelles) -->
        <div class="left-column">
            <h1>${userData.lastName || ''} ${userData.firstName || ''}</h1>
            ${userData.title ? `<h2>${userData.title}</h2>` : ''}
            <div class="contact-info">
                ${userData.email ? `<p><i class="fas fa-envelope"></i> ${userData.email}</p>` : ''}
                ${userData.phone ? `<p><i class="fas fa-phone"></i> ${userData.phone}</p>` : ''}
                ${userData.address ? `<p><i class="fas fa-map-marker-alt"></i> ${userData.address}</p>` : ''}
            </div>
            ${userData.languages?.length > 0 ? `
                <div class="languages">
                    <h3>Langues</h3>
                    ${userData.languages.map(lang => `
                        <div class="language-item">
                            <div class="language-name">${lang.name || 'Langue non renseignée'}</div>
                            <div class="language-level">
                                <div class="language-progress" style="width: ${lang.level || 0}%"></div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            ` : ''}
            ${userData.skills?.length > 0 ? `
                <div class="skills">
                    <h3>Compétences</h3>
                    ${userData.skills.map(skill => `
                        <div class="skill-item">
                            <div class="skill-name">${skill.name || 'Compétence non renseignée'}</div>
                            <div class="skill-level">
                                <div class="skill-progress" style="width: ${skill.level || 0}%"></div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            ` : ''}
        </div>

        <!-- Colonne centrale (Contenu principal) -->
        <div class="middle-column">
            ${userData.profile ? `
                <div class="section">
                    <div class="section-title">
                        <i class="fas fa-user"></i>
                        <h3>Profil</h3>
                    </div>
                    <p class="profile-description">${userData.profile}</p>
                </div>
            ` : ''}

            ${userData.educations?.length > 0 ? `
                <div class="section">
                    <div class="section-title">
                        <i class="fas fa-graduation-cap"></i>
                        <h3>Formation</h3>
                    </div>
                    ${userData.educations.map(edu => `
                        <div class="education-item">
                            <h4>${edu.institution || 'Établissement non renseigné'}</h4>
                            ${edu.degree ? `<p>${edu.degree}</p>` : ''}
                            ${edu.startDate || edu.endDate ? `<p>${edu.startDate || ''} ${edu.endDate ? `à ${edu.endDate}` : ''}</p>` : ''}
                        </div>
                    `).join('')}
                </div>
            ` : ''}

            ${userData.experiences?.length > 0 ? `
                <div class="section">
                    <div class="section-title">
                        <i class="fas fa-briefcase"></i>
                        <h3>Expérience Professionnelle</h3>
                    </div>
                    ${userData.experiences.map(exp => `
                        <div class="experience-item">
                            <h4>${exp.company || 'Entreprise non renseignée'}</h4>
                            ${exp.position ? `<p>${exp.position}</p>` : ''}
                            ${exp.startDate || exp.endDate ? `<p>${exp.startDate || ''} ${exp.endDate ? `à ${exp.endDate}` : 'à Présent'}</p>` : ''}
                                ${exp.tasks ? `<p class="experience-description">${(exp.tasks || '').replace(/\n/g, '<br>')}</p>` : ''}
                        </div>
                    `).join('')}
                </div>
            ` : ''}
        </div>

        <!-- Colonne de droite (Informations supplémentaires) -->
        <div class="right-column">
            ${userData.certifications?.length > 0 ? `
                <div class="section">
                    <div class="section-title">
                        <i class="fas fa-certificate"></i>
                        <h3>Certifications</h3>
                    </div>
                    ${userData.certifications.map(cert => `
                        <div class="certification-item">
                            <h4>${cert.name || 'Certification non renseignée'}</h4>
                            ${cert.institution ? `<p>${cert.institution}</p>` : ''}
                            ${cert.date ? `<p>${cert.date}</p>` : ''}
                            ${cert.description ? `<p>${cert.description}</p>` : ''}
                        </div>
                    `).join('')}
                </div>
            ` : ''}

            ${userData.hobbies?.length > 0 ? `
                <div class="section">
                    <div class="section-title">
                        <i class="fas fa-heart"></i>
                        <h3>Centres d'intérêt</h3>
                    </div>
                    <div class="interests-grid">
                        ${userData.hobbies.map(hobby => `
                            <div class="interest-item">${hobby || 'Centre d\'intérêt non renseigné'}</div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}

            <!-- Références -->
            <div class="section">
                <div class="section-title">
                    <i class="fas fa-user-check"></i>
                    <h3>Références</h3>
                </div>
                ${userData.references?.length > 0 ? `
                    <div class="info-grid">
                        ${userData.references.map(ref => `
                            <div class="reference-item">
                                <h4>${ref.name || 'Nom non renseigné'}</h4>
                                ${ref.title ? `<p>${ref.title}</p>` : ''}
                                ${ref.company ? `<p>${ref.company}</p>` : ''}
                                ${ref.contact ? `<p>${ref.contact}</p>` : ''}
                            </div>
                        `).join('')}
                    </div>
                ` : '<p>Références sur demande</p>'}
            </div>
        </div>
    </div>
</body>
</html>
`;
