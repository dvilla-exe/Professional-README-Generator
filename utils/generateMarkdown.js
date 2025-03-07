// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') return '';
  return `![License](https://img.shields.io/badge/License-${license.replace(' ', '%20')}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') return '';
  return `[License](https://choosealicense.com/licenses/${license.toLowerCase()}/)`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') return '';
  return `## License\nThis project is licensed under the ${license} license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}\n\n${renderLicenseBadge(data.license)}\n\n## Description\n${data.description}\n\n## Installation\n${data.installation}\n\n## Usage\n${data.usage}\n\n## Contributing\n${data.contributing}\n\n## Tests\n${data.tests}\n\n${renderLicenseSection(data.license)}\n\n## Questions\nFor questions, please contact me via:\n- GitHub: [${data.github}](https://github.com/${data.github})\n- Email: ${data.email}\n`;
}

export default generateMarkdown;
