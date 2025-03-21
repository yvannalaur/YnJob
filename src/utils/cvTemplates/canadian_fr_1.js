import { FontAwesome5 } from '@expo/vector-icons';

export const name = "Modèle Canadien 1 FR";

export const template = (userData) => `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>CV Canadien 1 FR</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <style>
        /* Style global */
        body {
            font-family: 'Roboto', sans-serif;
            margin: 0;
            padding: 0;
            background: #ffffff;
            color: #2c3e50;
            line-height: 1.6;
            width: 210mm; /* Format A4 */
            height: 297mm;
            margin: 0 auto;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .container {
            width: 100%;
            height: 100%;
            padding: 20mm; /* Marges intérieures */
            background: #ffffff;
        }
        /* En-tête */
        .header {
            background: linear-gradient(135deg, #2c3e50, #34495e);
            color: white;
            padding: 20px;
            text-align: center;
            border-radius: 8px;
            margin-bottom: 20px;
        }
        .header h1 {
            font-size: 28pt;
            margin: 0;
            font-weight: 700;
            letter-spacing: -0.5px;
        }
        .header h2 {
            font-size: 16pt;
            margin-top: 10px;
            font-weight: 500;
            color: rgba(255, 255, 255, 0.9);
        }
        .contact-info {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-top: 15px;
            font-size: 10pt;
        }
        .contact-info p {
            margin: 0;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .contact-info i {
            color: #3498db;
        }
        /* Sections */
        .section {
            margin-bottom: 20px;
            page-break-inside: avoid; /* Évite la coupure des sections lors de l'impression */
        }
        .section-title {
            font-size: 18pt;
            color: #34495e;
            margin-bottom: 10px;
            border-bottom: 2px solid #3498db;
            padding-bottom: 5px;
            display: flex;
            align-items: center;
            gap: 5px; /* Espacement réduit entre l'icône et le titre */
        }
        .section-title i {
            color: #3498db;
            font-size: 16pt;
        }
        .profile-description {
            font-size: 11pt;
            line-height: 1.6;
            color: #555;
        }
        /* Grille d'informations */
        .info-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
        }
        .info-item {
            display: flex;
            align-items: flex-start;
            gap: 10px;
        }
        .info-item i {
            color: #3498db;
            font-size: 12pt;
            margin-top: 4px;
        }
        .info-item h4 {
            margin: 0;
            font-size: 12pt;
            color: #2c3e50;
        }
        .info-item p {
            margin: 5px 0 0;
            font-size: 11pt;
            color: #555;
        }
        /* Compétences et langues */
        .skills-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 15px;
        }
        .skill-item {
            background: #f8f9fa;
            padding: 10px;
            border-radius: 6px;
            text-align: center;
        }
        .skill-name {
            font-weight: 600;
            color: #34495e;
            margin-bottom: 8px;
            font-size: 11pt;
        }
        .skill-level {
            height: 6px;
            background: #e0e0e0;
            border-radius: 3px;
            overflow: hidden;
        }
        .skill-progress {
            height: 100%;
            background: linear-gradient(90deg, #3498db, #2980b9);
            border-radius: 3px;
        }
        /* Références */
        .reference-item {
            background: #f8f9fa;
            padding: 10px;
            border-radius: 6px;
            margin-bottom: 10px;
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
        /* Centres d'intérêt */
        .interests-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 15px;
        }
        .interest-item {
            background: #f8f9fa;
            padding: 10px;
            border-radius: 6px;
            text-align: center;
            font-size: 11pt;
            color: #2c3e50;
        }
        /* Certifications */
        .certification-item {
            background: #f8f9fa;
            padding: 10px;
            border-radius: 6px;
            margin-bottom: 10px;
        }
        .certification-item h4 {
            margin: 0;
            font-size: 12pt;
            color: #2c3e50;
        }
        .certification-item p {
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
            .header {
                background: #2c3e50;
                color: white;
            }
            .section {
                border-bottom: none;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- En-tête -->
        <div class="header">
            <h1>${userData.lastName || ''} ${userData.firstName || ''}</h1>
            ${userData.title ? `<h2>${userData.title}</h2>` : ''}
            <div class="contact-info">
                ${userData.email ? `<p><i class="fas fa-envelope"></i> ${userData.email}</p>` : ''}
                ${userData.phone ? `<p><i class="fas fa-phone"></i> ${userData.phone}</p>` : ''}
                ${userData.address ? `<p><i class="fas fa-map-marker-alt"></i> ${userData.address}</p>` : ''}
            </div>
        </div>

        <!-- Profil -->
        ${userData.profile ? `
            <div class="section">
                <div class="section-title">
                    <i class="fas fa-user"></i>
                    <h3>Profil</h3>
                </div>
                <p class="profile-description">${userData.profile}</p>
            </div>
        ` : ''}

        <!-- Formation -->
        ${userData.educations?.length > 0 ? `
            <div class="section">
                <div class="section-title">
                    <i class="fas fa-graduation-cap"></i>
                    <h3>Formation</h3>
                </div>
                <div class="info-grid">
                    ${userData.educations.map(edu => `
                        <div class="info-item">
                            <i class="fas fa-university"></i>
                            <div>
                                <h4>${edu.institution || 'Établissement non renseigné'}</h4>
                                ${edu.degree ? `<p>${edu.degree}</p>` : ''}
                                ${edu.startDate || edu.endDate ? `<p>${edu.startDate || ''} ${edu.endDate ? `à ${edu.endDate}` : ''}</p>` : ''}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        ` : ''}

        <!-- Expérience -->
        ${userData.experiences?.length > 0 ? `
            <div class="section">
                <div class="section-title">
                    <i class="fas fa-briefcase"></i>
                    <h3>Expérience Professionnelle</h3>
                </div>
                <div class="info-grid">
                    ${userData.experiences.map(exp => `
                        <div class="info-item">
                            <i class="fas fa-building"></i>
                            <div>
                                <h4>${exp.company || 'Entreprise non renseignée'}</h4>
                                ${exp.position ? `<p>${exp.position}</p>` : ''}
                                 ${exp.startDate || exp.endDate ? `<p>${exp.startDate || ''} ${exp.endDate ? `à ${exp.endDate}` : 'à Présent'}</p>` : ''}
                                 ${exp.tasks ? `<div class="item-description">${(exp.tasks || '').replace(/\\n/g, '<br>')}</div>` : ''}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        ` : ''}

        <!-- Compétences -->
        ${userData.skills?.length > 0 ? `
            <div class="section">
                <div class="section-title">
                    <i class="fas fa-tools"></i>
                    <h3>Compétences</h3>
                </div>
                <div class="skills-grid">
                    ${userData.skills.map(skill => `
                        <div class="skill-item">
                            <div class="skill-name">${skill.name || 'Compétence non renseignée'}</div>
                            <div class="skill-level">
                                <div class="skill-progress" style="width: ${skill.level || 0}%"></div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        ` : ''}

        <!-- Langues -->
        ${userData.languages?.length > 0 ? `
            <div class="section">
                <div class="section-title">
                    <i class="fas fa-language"></i>
                    <h3>Langues</h3>
                </div>
                <div class="skills-grid">
                    ${userData.languages.map(lang => `
                        <div class="skill-item">
                            <div class="skill-name">${lang.name || 'Langue non renseignée'}</div>
                            <div class="skill-level">
                                <div class="skill-progress" style="width: ${lang.level || 0}%"></div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        ` : ''}

        <!-- Certifications -->
        ${userData.certifications?.length > 0 ? `
            <div class="section">
                <div class="section-title">
                    <i class="fas fa-certificate"></i>
                    <h3>Certifications</h3>
                </div>
                <div class="info-grid">
                    ${userData.certifications.map(cert => `
                        <div class="certification-item">
                            <h4>${cert.name || 'Certification non renseignée'}</h4>
                            ${cert.institution ? `<p>${cert.institution}</p>` : ''}
                            ${cert.date ? `<p>${cert.date}</p>` : ''}
                            ${cert.description ? `<p>${cert.description}</p>` : ''}
                        </div>
                    `).join('')}
                </div>
            </div>
        ` : ''}

        <!-- Centres d'intérêt -->
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
</body>
</html>
`;
