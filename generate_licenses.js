const crypto = require('crypto');
const readline = require('readline');

const SECRET_KEY = "MY_SECRET_KEY";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const generateLicenses = (codeID, secretKey) => {
  const licenses = [];
  for (let i = 1; i <= 100; i++) {
    const data = codeID + i + secretKey;
    const hash = crypto.createHash('md5').update(data).digest('hex');
    const license = hash.substring(0, 10);
    licenses.push(license);
  }
  return licenses;
};

rl.question('Veuillez entrer le Code ID : ', (codeID) => {
  if (!codeID.trim()) {
    console.log('Erreur : Le Code ID ne peut pas être vide.');
    rl.close();
    return;
  }

  console.log('\nGénération des licences pour le Code ID :', codeID);
  console.log('----------------------------------------');

  const licenses = generateLicenses(codeID, SECRET_KEY);

  console.log('\nLicences générées :');
  licenses.forEach((license, index) => {
    console.log(`${(index + 1).toString().padStart(3, '0')}: ${license}`);
  });

  rl.close();
});
